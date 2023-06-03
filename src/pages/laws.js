import "./styles.css";
import Laws from "./lawspage";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

export default function Lawpage() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        
        <Laws/>
      </div>
    </XyzTransition>
  );
}
