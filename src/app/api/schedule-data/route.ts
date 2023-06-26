import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { nextauthOptions } from "@/lib/nextauthOptions";

export async function GET() {
  const client = await clientPromise;
  const items = client.db(process.env.DB_NAME).collection("scheduleitems");
  return new NextResponse(
    JSON.stringify(await items.find().toArray()),
    { status: 200, statusText: "OK" }
  );
}

export async function POST(req: Request) {
  const client = await clientPromise;
  const session = await getServerSession(nextauthOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, statusText: "Unauthorized" }
    );
  }

  const body = await req.json();
  const _client = client.db(process.env.DB_NAME);
  _client.collection("scheduleitems").drop();
  await _client.collection("scheduleitems").insertMany(body.scheduleitems, { forceServerObjectId: true });

  return new NextResponse(
    JSON.stringify({ message: "Schedule items saved", scheduleitems: body.scheduleitems }),
    { status: 200, statusText: "OK" }
  );
}
