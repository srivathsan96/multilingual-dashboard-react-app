import React from "react";

import classes from "./ListContainer.module.css";

// List Container

const ListContainer = (props) => {

  // Setting container height based on the page.

  let heightValue;

  if (props.page === 73) {
    heightValue = "73vh";
  } else if (props.page === 89) {
    heightValue = "89vh";
  } else if (props.page === 85) {
    heightValue = "85vh";
  } else if (props.page === 80) {
    heightValue = "80vh";
  }

  return (
    <div className={classes.listContainer} style={{ height: heightValue }}>
      {props.children}
    </div>
  );
};

export default ListContainer;