import React from "react";
import "./style.css"

export default function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", margin: 10, marginRight: 40} }className="btn dialog-confirm-btn ">
      {props.children}
    </button>
  );
}
