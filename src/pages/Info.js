import "./styles.css";
import Body from "./Body";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

export default function Info() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        
        <Body/>
      </div>
    </XyzTransition>
  );
}
