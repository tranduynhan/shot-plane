import { useState } from "react";
import CellOther from "../cell/CellOther";
const GridOther = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <table>
        <thead>
          <tr>
            <td></td>
            {list.map((it) => {
              return <td>{it}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((it) => {
            return (
              <tr>
                <td>{it}</td>
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
                <CellOther />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default GridOther;
