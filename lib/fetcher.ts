export const WP_API: any = process.env.WP_URL;

export const fetcher = async (query: any, { variables }: any = {}) => {
  const res = await fetch(WP_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  return json;
};
