import React from "react";
import "./style.css"

export default function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: 10 ,marginRight: 20} }className="btn dialog-confirm-btn ">
      {props.children}
    </button>
  );
}
