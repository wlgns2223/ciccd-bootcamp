export async function GET() {
  const headers = {
    "Content-Type": "application/json",
    "API-Key": process.env.DATA_API_KEY,
  } as any;
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers,
  });
  const data = await res.json();

  return Response.json({ data });
}
