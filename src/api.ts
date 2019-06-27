import fetch, { HeadersInit } from "node-fetch";

const API_BASE = "https://api.monobank.ua";

export async function fetchCurrencyInfo(): Promise<object[]> {
  const response = await fetch(`${API_BASE}/bank/currency`);
  return response.json();
}

export async function fetchUserInfo(headers: HeadersInit): Promise<object> {
  const result = await fetch(`${API_BASE}/personal/client-info`, { headers });
  return result.json();
}

