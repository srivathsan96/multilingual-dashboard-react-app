import React from "react";

import classes from "./ReportStatusSection.module.css";

import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

// i18n
import { useTranslation } from "react-i18next";

// Dummy Data

// const filesInLibraryTitle = <>{t('files_in_library')}</>;
const filesInLibraryTotalCount = 412;
// const firstTimeRightTitle = <>{t('first_time_right')}</>;
const firstTimeRightTotalCount = 25;

// Report Status Section (Top)

const ReportStatusSection = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.statusInfo}>
      <div className={classes.box1}>
        <div>
          <FolderOpenOutlinedIcon
            sx={{ fontSize: 50 }}
            className={classes.icon}
          />
        </div>
        <div className={classes.item}>
          <div className={classes.title}>{t('files_in_library')}</div>
          <div className={classes.totalCount}>{filesInLibraryTotalCount}</div>
        </div>
      </div>
      <div className={classes.box2}>
        <div>
          <CheckBoxOutlinedIcon
            sx={{ fontSize: 50 }}
            className={classes.icon}
          />
        </div>
        <div className={classes.item}>
          <div className={classes.title}>{t('first_time_right')}</div>
          <div className={classes.totalCount}>{firstTimeRightTotalCount}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportStatusSection;
