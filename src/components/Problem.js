import React, { Fragment } from "react";
import "../components/Components.css";

import Rat from "./Rat";
import WhiteDiv from "./WhiteDiv";
import RedDiv from "./RedDiv";
import Destination from "./Destination";
import GreenDiv from "./GreenDiv";

export default function Problem({ arr, size }) {
  const newArr = arr.map((row, i) => {
    return (
      <Fragment key={i}>{
        row.map((ele, j) => {
          if (i === 0 && j === 0) {
            return <Rat key={`${i},${j}`} />;
          }

          if (i === size - 1 && j === size - 1) {
            return <Destination key={`${i},${j}`} />;
          }

          if (ele === 0) {
            return <RedDiv key={`${i},${j}`} />;
          }

          if (ele === 1) {
            return <WhiteDiv key={`${i},${j}`} />;
          }

          if (ele === 2) {
            return <GreenDiv />;
          } 
          else return <h1>Hello</h1>;
        })}
      </Fragment>
    );
  });

  return <div className="problem-setup">{newArr}</div>;
}
