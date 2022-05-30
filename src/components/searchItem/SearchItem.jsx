import React from 'react'

import classes from "./SearchItem.module.css";

import artworkDesign from "../../resources/images/artworkDesign.png";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Project/Component Item

const SearchItem = (props) => {

    let project = props.project;

    return (
        <div className={classes.container}>
            <div className={`${classes.item} ${classes.top}`}>
                <img src={artworkDesign} alt="ArtworkDesign" />
            </div>
            <div className={`${classes.item} ${classes.bottom}`}>
                <div className={classes.left}>
                    <div className={classes.version}>{project.version}</div>
                </div>
                <div className={classes.center}>
                    <div>{project.label}</div>
                    <div>{project.requestNumber}</div>
                </div>
                <div className={classes.right}>
                    <div className={classes.menuIcon}>
                        <MenuOutlinedIcon className={classes.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItem