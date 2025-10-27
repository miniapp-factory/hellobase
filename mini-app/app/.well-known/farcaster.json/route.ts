import farcasterConfig from "./farcaster.json";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(farcasterConfig);
}
