"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const KnowMore = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/prevIncubator")}>Know More</Button>
  );
};

export default KnowMore;
