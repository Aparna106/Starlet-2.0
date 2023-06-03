
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Query from "./Querypage";

export default function QueryPageS() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        
        <Query/>
      </div>
    </XyzTransition>
  );
}
