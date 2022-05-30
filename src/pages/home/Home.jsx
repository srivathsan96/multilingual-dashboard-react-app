import React, { useState } from "react";
import { componentList } from "./componentList";

import InfiniteScroll from "react-infinite-scroll-component";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import ListContainer from "../../components/listContainer/ListContainer";
import ProductItem from "../../components/productItem/ProductItem";
import MyInboxNavbar from "../../components/myInboxNavbar/MyInboxNavbar";

// i18n
import { useTranslation } from "react-i18next";


import classes from "./Home.module.css";

// Dashboard

const Home = () => {

  const { t } = useTranslation();

  // const navbarTitle = "Dashboard";
  const navbarTitle = <>{t('dashboard')}</>;


  // Search Functionality

  const [queryData, setQueryData] = useState("");

  const keys = [
    "category",
    "brand",
    "productName",
    "packSize",
    "componentType",
  ];

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
  const [state, setState] = useState(componentList.slice(n, n + 5));
  const [hasMoreState, setHasMoreState] = useState(true);

  let fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState((prevState) => {
        return [
          ...prevState,
          ...componentList.slice(prevState.length, prevState.length + 5),
        ];
      });
    }, 1500);
    // console.log(state.length);

    if (state.length >= componentList.length) {
      setHasMoreState(false);
    }
  };

  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.homeContainer}>
        <Navbar navbarTitle={navbarTitle} />
        <div className={classes.widgets}>
          <Widget type="myInbox" />
          <Widget type="initiatedProjects" />
          <Widget type="allProjects" />
        </div>
        <div className={classes.listContainer}>
          <MyInboxNavbar
            title={<>{t('my_inbox_artwork_approval_process')}</>}
            onSearchQueryData={searchQueryDataHandler}
          />
          <ListContainer>
            <ul className={classes.components}>
              <div className={classes.scrollableDiv} id="scrollableDiv">
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
                        <ProductItem product={i} navbarTitle={navbarTitle} />
                      </li>
                    ))}
                  </InfiniteScroll>
                ) : (
                  search(componentList).map((item) => {
                    return (
                      <li key={Math.random()}>
                        <ProductItem product={item} navbarTitle={navbarTitle} />
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

export default Home;
