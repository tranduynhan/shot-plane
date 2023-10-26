import { useState } from "react";
import Cell from "../cell/Cell";
const Grid = () => {
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
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Grid;
