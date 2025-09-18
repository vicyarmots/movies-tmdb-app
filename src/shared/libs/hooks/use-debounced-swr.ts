import { useRef } from "react";
import useSWR from "swr";
import { useDebounce } from "./use-debaunce";

interface UseDebouncedSWROptions<Data> {
  key: string | null;
  fetcher: (signal: AbortSignal) => Promise<Data>;
  delay?: number;
  swrOptions?: Parameters<typeof useSWR>;
}

export function useDebouncedSWR<Data>({
  key,
  fetcher,
  delay = 500,
  swrOptions,
}: UseDebouncedSWROptions<Data>) {
  const debouncedKey = useDebounce(key, delay);
  const controllerRef = useRef<AbortController | null>(null);

  const { data, error, isLoading } = useSWR(
    debouncedKey ? [debouncedKey] : null,
    async () => {
      controllerRef.current?.abort();

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        return await fetcher(controller.signal);
      } finally {
        controllerRef.current = null;
      }
    },
    { revalidateOnFocus: false, ...swrOptions },
  );

  return {
    data,
    isLoading,
    isError: !!error,
  };
}
