import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

import { projectsListArray } from "../../pages/projects/projectsArray";

// Icons from Material UI

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

// Snackbar from Material UI

import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// i18n

import { useTranslation } from "react-i18next";


// Dummy Data

const brandLogo = "BrandArtworks";
const inboxCount = Math.floor(Math.random() * 6);
const myProjectsCount = 16;
const allProjectsCount = projectsListArray.length;

// Sidebar Navigation

const Sidebar = () => {

  const { t } = useTranslation();

  const thisPageIsNotAvailable = <>{t('this_page_is_not_available')}!</>

  // Snackbar State
  const [open, setOpen] = React.useState(false);

  // Open Snackbar
  const handleClick = () => {
    setOpen(true);
  };

  // Close Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // Snackbar Action
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={classes.logo}>{brandLogo}</span>
        </Link>
      </div>
      <div className={classes.center}>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlinedIcon className={classes.icon} />
              <span>{t('dashboard')}</span>
            </li>
          </Link>
          <Link to="/newProject" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutlineOutlinedIcon className={classes.icon} />
              <span>{t('start_a_new_project')}</span>
            </li>
          </Link>
          <p className={classes.title}>{t('workflows')}</p>
          <li onClick={handleClick}>
            <MailOutlinedIcon className={classes.icon} />
            <span>
              {t('inbox')} ({inboxCount})
            </span>
          </li>
          <li onClick={handleClick}>
            <FolderSharedOutlinedIcon className={classes.icon} />
            <span>
              {t('my_projects')} ({myProjectsCount})
            </span>
          </li>
          <Link to="/allProjects" style={{ textDecoration: "none" }}>
            <li>
              <FolderOutlinedIcon className={classes.icon} />
              <span>
                {t('all_projects')} ({allProjectsCount})
              </span>
            </li>
          </Link>
          <p className={classes.title}>{t('asset_library')}</p>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <li>
              <SearchOutlinedIcon className={classes.icon} />
              <span>{t('search')}</span>
            </li>
          </Link>
          <li onClick={handleClick}>
            <ScreenSearchDesktopOutlinedIcon className={classes.icon} />
            <span>{t('browse')}</span>
          </li>
          <p className={classes.title}>{t('reports')}</p>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <PieChartOutlineOutlinedIcon className={classes.icon} />
              <span>{t('report')}</span>
            </li>
          </Link>
        </ul>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={thisPageIsNotAvailable}
        action={action}
      />
    </div>
  );
};

export default Sidebar;
