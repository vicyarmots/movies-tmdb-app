const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export type FetchOptions<TBody> = {
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
  const { method, body, credentials, signal, cache } = options;

  const isFormData = body instanceof FormData;

  const headers: HeadersInit =
    isFormData || options.headers
      ? (options.headers ?? {})
      : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS}`,
        };

  try {
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
  } catch (error) {
    console.error("fetchApi error:", error);
    throw error;
  }
}
