import { useContext, useState } from "react";
import { RootContext, STATUS_VARIABLES } from "../../App";
const Cell = () => {
  const [backgroundColor, setBackgroundColor] = useState("unset");
  const [content, setContent] = useState("");
  const { color, status } = useContext(RootContext);
  const cellOnClick = () => {
    if (status === STATUS_VARIABLES.PREPARE) {
      if (backgroundColor === "unset") {
        setBackgroundColor(color);
      } else {
        setBackgroundColor("unset");
      }
    } else if (status === STATUS_VARIABLES.READY) {
      if (content === "") {
        setContent("x");
      } else {
        setContent("");
      }
    }
  };
  return (
    <td
      style={{
        background: backgroundColor,
        border:
          backgroundColor !== "unset" ? "1px solid white" : "1px solid white",
      }}
      onClick={(e) => cellOnClick()}
    >
      {content}
    </td>
  );
};
export default Cell;
