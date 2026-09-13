const API_BASE_URL = import.meta.env.VITE_CMS_API_URL ?? "";

export class ApiError extends Error {
  constructor(message, { status = 0, details = null } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

export async function apiRequest(
  path,
  { locale = "en", signal, ...options } = {},
) {
  if (!API_BASE_URL) {
    throw new ApiError("VITE_CMS_API_URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    signal,
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
      ...options.headers,
    },
  });

  if (!response.ok) {
    let details = null;
    try {
      details = await response.json();
    } catch {
      details = null;
    }
    throw new ApiError(`CMS request failed with status ${response.status}.`, {
      status: response.status,
      details,
    });
  }

  return response.status === 204 ? null : response.json();
}
