import React from "react";

export default function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, marginRight: 50 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
