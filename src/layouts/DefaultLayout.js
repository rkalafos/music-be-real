import React from "react";
import { Header } from "../components/Header";
import { Blur } from "../components/Blur";

export const DefaultLayout = ({ children }) => {
  return (
    <>
        <Header />
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </>
  );
};

