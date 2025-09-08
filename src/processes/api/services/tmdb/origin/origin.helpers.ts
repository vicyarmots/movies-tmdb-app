export function toQueryString(params: Record<string, string>) {
  return new URLSearchParams(params).toString();
}

export function buildQueryParams(
  params: Record<string, string | number | boolean | Array<string | number> | undefined | null>,
) {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      if (value.length) search.set(key, value.join(","));
    } else if (typeof value === "boolean") {
      search.set(key, value ? "true" : "false");
    } else {
      search.set(key, String(value));
    }
  });

  return search.toString();
}
