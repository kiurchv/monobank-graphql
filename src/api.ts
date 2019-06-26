import fetch from "node-fetch";

const API_BASE = "https://api.monobank.ua";

export async function fetchCurrencyInfo(): Promise<object[]> {
  const response = await fetch(`${API_BASE}/bank/currency`);
  return response.json();
}
