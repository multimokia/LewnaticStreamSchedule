import { nextauthOptions } from "@/lib/nextauthOptions";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";

export default async function RestrictedPage() {
  // get the session
  const session = await getServerSession(nextauthOptions);

  // redirect to signin if there is no session.
  if (!session?.user) {
    const url = new URL("/api/auth/signin", window.location.origin);
    url.searchParams.append("callbackUrl", "/config");
    redirect(url.toString());
  }

  // display the page
  return (
    <div>
      <h1>Welcome to the Restricted Page, {session?.user?.name}</h1>
    </div>
  );
}
