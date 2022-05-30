import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import classes from "./NewProject.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyInboxNavbar from "../../components/myInboxNavbar/MyInboxNavbar";
import ListContainer from "../../components/listContainer/ListContainer";
import ProjectItem from "../../components/projectItem/ProjectItem";

import { projectsListArray } from "../projects/projectsArray";

// i18n
import { useTranslation } from "react-i18next";

// Start a new project page

const NewProject = () => {

  const { t } = useTranslation();

  const navbarTitle = <>{t('start_new_project')}</>;
  const page = 89;


  // Search Functionality

  const [queryData, setQueryData] = useState("");
  const keys = ["requestNumber", "initiatedBy", "product", "componentType"];

  const searchQueryDataHandler = (enteredData) => {
    let inputString = enteredData.trim().toLowerCase();
    setQueryData(() => {
      return inputString;
    });
  };
  // console.log(queryData);

  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => {
        return item[key].trim().toLowerCase().includes(queryData);
      });
    });
  };

  // Infinite Scroll Functionality

  let n = 0;
  const [state, setState] = useState(projectsListArray.slice(n, n + 8));
  const [hasMoreState, setHasMoreState] = useState(true);

  let fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState((prevState) => {
        return [
          ...prevState,
          ...projectsListArray.slice(prevState.length, prevState.length + 5),
        ];
      });
    }, 1500);
    // console.log(state.length);

    if (state.length >= projectsListArray.length) {
      setHasMoreState(false);
    }
  };
  return (
    <div className={classes.projectsList}>
      <Sidebar />
      <div className={classes.projectsListContainer}>
        <Navbar navbarTitle={navbarTitle} />
        <div className={classes.listContainer}>
          <MyInboxNavbar title="" onSearchQueryData={searchQueryDataHandler} />
          <ListContainer page={page}>
            <ul className={classes.projects}>
              <div
                id="scrollableDiv"
                style={{
                  height: "89vh",
                  overflow: "auto",
                  padding: 10,
                }}
              >
                {queryData.length === 0 ? (
                  <InfiniteScroll
                    dataLength={state.length}
                    next={fetchMoreData}
                    hasMore={hasMoreState}
                    loader={<h4 style={{ textAlign: "center" }}>{t('loading')}...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>{t('end_of_results')}</b>
                      </p>
                    }
                  >
                    {state.map((i) => (
                      <li key={Math.random()}>
                        <ProjectItem project={i} page={'newProject'} />
                      </li>
                    ))}
                  </InfiniteScroll>
                ) : (
                  search(projectsListArray).map((item) => {
                    return (
                      <li key={Math.random()}>
                        <ProjectItem project={item} page={'newProject'} />
                      </li>
                    );
                  })
                )}
              </div>
            </ul>
          </ListContainer>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
