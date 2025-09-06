const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type FetchOptions<TBody> = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: TBody;
  credentials?: RequestCredentials;
  signal?: AbortSignal;
  cache?: RequestCache;
};

export async function fetchApi<TResponse = unknown, TBody = unknown>(
  endpoint: string,
  options: FetchOptions<TBody> = {},
): Promise<TResponse> {
  const { method, body, credentials = "include", signal, cache } = options;

  const isFormData = body instanceof FormData;

  const headers: HeadersInit =
    isFormData || options.headers
      ? (options.headers ?? {})
      : { "Content-Type": "application/json" };

  const response = await fetch(`${BASE_API_URL}${endpoint}`, {
    cache,
    method,
    headers,
    credentials,
    signal,
    body: isFormData ? (body as FormData) : body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Request failed");
  }

  return await response.json();
}
