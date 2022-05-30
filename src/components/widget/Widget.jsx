import React from "react";

import classes from "./Widget.module.css";

import { useTranslation } from "react-i18next";


// Widget

const Widget = (props) => {

  const { t } = useTranslation();

  let widgetData;

  // Choosing dummy data based on the widget type

  const myInbox = <>{t('my_inbox')}</>;
  const initiatedProjects = <>{t('initiated_projects')}</>;
  const all_projects = <>{t('all_projects')}</>;

  switch (props.type) {
    case "myInbox":
      widgetData = {
        title: myInbox,
        appTotalCount: 17,
        aapOnTimeCount: 0,
        appDelayedCount: 17,
        pipTotalCount: 3,
        pipOnTimeCount: 1,
        pipDelayedCount: 2,
      };
      break;
    case "initiatedProjects":
      widgetData = {
        title: initiatedProjects,
        appTotalCount: 38,
        aapOnTimeCount: 8,
        appDelayedCount: 30,
        pipTotalCount: 31,
        pipOnTimeCount: 26,
        pipDelayedCount: 5,
      };
      break;
    case "allProjects":
      widgetData = {
        title: all_projects,
        appTotalCount: 38,
        aapOnTimeCount: 8,
        appDelayedCount: 30,
        pipTotalCount: 38,
        pipOnTimeCount: 28,
        pipDelayedCount: 10,
      };
      break;
    default:
      break;
  }

  return (
    <div className={classes.widget}>
      <div className={classes.top}>
        <span className={classes.title}>{widgetData.title}</span>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <span className={classes.title}>{t('artwork_approval_process')}</span>
        </div>
        <div className={classes.right}>
          <div className={classes.data}>
            <span className={classes.count}>{widgetData.appTotalCount}</span>
            <div className={classes.timeData}>
              <div className={classes.top}>
                <span className={classes.title}>{t('on_time')}</span>
                <span className={classes.item}>
                  {widgetData.aapOnTimeCount}
                </span>
              </div>
              <div className={classes.bottom}>
                <span className={classes.title}>{t('delayed')}</span>
                <span className={classes.item}>
                  {widgetData.appDelayedCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.bottom}>
        <div className={classes.left}>
          <span className={classes.title}>{t('project_initiation_process')}</span>
        </div>
        <div className={classes.right}>
          <div className={classes.data}>
            <span className={classes.count}>{widgetData.pipTotalCount}</span>
            <div className={classes.timeData}>
              <div className={classes.top}>
                <span className={classes.title}>{t('on_time')}</span>
                <span className={classes.item}>
                  {widgetData.pipOnTimeCount}
                </span>
              </div>
              <div className={classes.bottom}>
                <span className={classes.title}>{t('delayed')}</span>
                <span className={classes.item}>
                  {widgetData.pipDelayedCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
