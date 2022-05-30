import React, { Suspense } from "react";

import classes from "./Navbar.module.css";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Tooltip from '@mui/material/Tooltip';

// 
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const loadingMarkup = (
  <div className="text-center">
    <h2>Loading...</h2>
  </div>
);

// Main Navbar

const Navbar = (props) => {

  const { t } = useTranslation();

  const help = <>{t('help')}</>;

  return (
    <Suspense fallback={loadingMarkup}>
      <div className={classes.navbar}>
        <div className={classes.wrapper}>
          <div className={classes.pageTitle}>
            <h1>{props.navbarTitle}</h1>
          </div>
          <div className={classes.items}>
            <div className={classes.item} onClick={() => { i18next.changeLanguage('en') }}>
              <div className={classes.lang}>en</div>
            </div>
            <div className={classes.item} onClick={() => { i18next.changeLanguage('fr') }}>
              <div className={classes.lang}>fr</div>
            </div>
            <div className={classes.item} onClick={() => { i18next.changeLanguage('de') }}>
              <div className={classes.lang}>de</div>
            </div>
            <Tooltip title={help}>
              <div className={classes.item}>
                <HelpOutlineOutlinedIcon className={classes.icon} />
              </div>
            </Tooltip>
            <Tooltip title="Srivathsan Angiya">
              <div className={classes.item}>
                <img
                  src="https://angiya.in/resources/images/Homepage/BlacknWhite-min.jpeg"
                  alt="profile"
                  className={classes.avatar}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Navbar;
