import React, { useContext, useEffect } from "react";
import Nav from "./nav";
import { useRouter } from "next/router";
import { DataContext } from "@/store/GlobalState";
import { ACTIONS } from "@/store/Actions";

interface Props {
  children: any;
}

const Layout = (props: Props) => {

  //
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
