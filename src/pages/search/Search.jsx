import React, { useState } from 'react'

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyInboxNavbar from "../../components/myInboxNavbar/MyInboxNavbar";
import ListContainer from "../../components/listContainer/ListContainer";
import SearchItem from '../../components/searchItem/SearchItem';

import { searchArray } from "./searchArray";

// i18n
import { useTranslation } from "react-i18next";

import classes from "./Search.module.css";

// Search Page

const Search = () => {

  const { t } = useTranslation();

  const navbarTitle = <>{t('search')}</>;


  // Search Functionality
  const [queryData, setQueryData] = useState("");
  const keys = ["label", "version", "requestNumber"];

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

  return (
    <div className={classes.search}>
      <Sidebar />
      <div className={classes.searchContainer}>
        <Navbar navbarTitle={navbarTitle} />
        <div className={classes.listContainer}>
          <MyInboxNavbar title="" onSearchQueryData={searchQueryDataHandler} />
          <ListContainer page={navbarTitle}>
            <ul className={classes.searches}>
              <div className={classes.box}>
                {
                  search(searchArray).map((item) => {
                    return (
                      <li key={Math.random()}>
                        <SearchItem project={item} />
                      </li>
                    );
                  })
                }
              </div>
            </ul>
          </ListContainer>
        </div>
      </div>
    </div>
  )
}

export default Search