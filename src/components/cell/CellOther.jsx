import { useState, useContext } from "react";
import { RootContext } from "../../App";

const CELL_STATUS = {
  UNSET: "unset",
  NONE: "none",
  HURT: "hurt",
  DIE: "die",
};
const CellOther = () => {
  const [cellStatus, setCellStatus] = useState(CELL_STATUS.UNSET);
  const [backgroundColor, setBackgroundColor] = useState(CELL_STATUS.UNSET);
  const { color } = useContext(RootContext);
  const cellOnClick = () => {
    if (cellStatus === CELL_STATUS.UNSET) {
      setCellStatus(CELL_STATUS.NONE);
      setBackgroundColor("unset");
    } else if (cellStatus === CELL_STATUS.NONE) {
      setCellStatus(CELL_STATUS.HURT);
      setBackgroundColor(color);
    } else if (cellStatus === CELL_STATUS.HURT) {
      setCellStatus(CELL_STATUS.DIE);
      setBackgroundColor(color);
    } else {
      setCellStatus(CELL_STATUS.UNSET);
      setBackgroundColor("unset");
    }
  };
  const renderContent = () => {
    switch (cellStatus) {
      case CELL_STATUS.NONE:
        return "o";
      case CELL_STATUS.HURT:
        return "x";
      case CELL_STATUS.DIE:
        return "X";
      default:
        return "";
    }
  };
  return (
    <td
      style={{
        background: backgroundColor,
      }}
      onClick={(e) => cellOnClick()}
    >
      {renderContent()}
    </td>
  );
};
export default CellOther;
