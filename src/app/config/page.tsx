import { nextauthOptions } from "@/lib/nextauthOptions";
import { getServerSession } from "next-auth/next";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { CardInfoForm } from "@/components/Forms/cardInfoForm";

export default async function RestrictedPage() {
  // get the session
  const session = await getServerSession(nextauthOptions);

  // redirect to signin if there is no session.
  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/config");
  }

  // display the form
  return (
    <CardInfoForm />
  );
}
