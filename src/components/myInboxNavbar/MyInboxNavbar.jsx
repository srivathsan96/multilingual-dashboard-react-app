import React, { useState } from "react";

import classes from "./MyInboxNavbar.module.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";


const MyInboxNavbar = (props) => {

  // Get search keyword/string

  const [query, setQuery] = useState("");

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
    props.onSearchQueryData(query);
  };

  // console.log(query);

  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.items}>
          <div className={classes.search}>
            <SearchOutlinedIcon className={classes.icon} />
            <input
              type="text"
              placeholder="Filter items..."
              className="search"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.item}>
            <div className={classes.listIcon}>
              <ListAltOutlinedIcon className={classes.icon} />
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.multiIcon}>
              <AppsOutlinedIcon className={classes.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInboxNavbar;
