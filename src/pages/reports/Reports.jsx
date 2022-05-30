import React from "react";

import classes from "./Reports.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListContainer from "../../components/listContainer/ListContainer";
import Charts from "../../components/charts/Charts";
import ReportStatusSection from "../../components/reportStatusSection/ReportStatusSection";

// i18n
import { useTranslation } from "react-i18next";


// Report Section

const Reports = () => {

  const { t } = useTranslation();

  const navbarTitle = <>{t('reports')}</>;
  const page = 80;

  return (
    <div className={classes.reports}>
      <Sidebar />
      <div className={classes.reportsContainer}>
        <Navbar navbarTitle={navbarTitle} />
        <div className={classes.listContainer}>
          <ListContainer page={page}>
            <ReportStatusSection />
            <Charts />
          </ListContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
