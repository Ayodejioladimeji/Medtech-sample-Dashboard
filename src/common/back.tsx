import { useRouter } from "next/router";
import React from "react";

interface Props {}

const Back = (props: Props) => {
  const router = useRouter();

  //
  return (
    <span onClick={() => router.back()} >
      <i className="bi bi-arrow-left"></i>
    </span>
  );
};

export default Back;
