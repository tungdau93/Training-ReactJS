import React, { useRef } from "react";
import "../style/_bai-tap-2.scss";
import { useEffect, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const BaiTap2 = () => {
  const searchRef = useRef();
  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState([]);
  const [citiesTag, setCitiesTag] = useState([]);
  const [isShowCitiesSearch, setIsShowCitiesSearch] = useState(false);

  useClickOutside(searchRef, () => setIsShowCitiesSearch(false));

  const handleSwitch = (code) => {
    // step 1: get value of item
    const citySelected = citySearch.find((city) => city.code === code);
    const newCityMatch = citySearch.filter((city) => city.code !== code);
    setCitySearch([...newCityMatch]);

    const newCitiesTag = [...citiesTag];
    if (citiesTag.length < 2) {
      newCitiesTag.push(citySelected);
      setCitiesTag([...newCitiesTag]);
    } else alert("No more than 2 cities selected");
  };

  const closeTag = (code) => {
    const citySelectedTag = citiesTag.filter((city) => city.code === code);
    const newCitiesTag = [...citiesTag];
    newCitiesTag.pop(citySelectedTag);
    setCitiesTag([...newCitiesTag]);
  };

  const handleShowCitiesSearch = () => {
    setIsShowCitiesSearch(true);
  };

  const searchCities = (text) => {
    if (!isShowCitiesSearch) {
      handleShowCitiesSearch();
    }

    const resultSearch = filterCity(text);
    setCitySearch(resultSearch);
  };

  const filterCity = (text) => {
    const regex = new RegExp(`${text}`, "gi");
    return cities.filter((city) => city.name.match(regex));
  };

  const handleFocusInputSearch = () => {
    handleShowCitiesSearch();
    setCitySearch([...cities]);
  };

  useEffect(() => {
    const url = "https://provinces.open-api.vn/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  return (
    <div className="app">
      <span id="title">入力欄</span>
      <div className="app__container">
        <div className="app__container--heading">
          <div className="app__container--heading-name">
            <p className="app__container--heading-name--japanese">入力欄</p>

            <p className="app__container--heading-name--english">Input Field</p>
          </div>
        </div>
        <div className="app__container--input-wrapper" ref={searchRef}>
          <div className="app__container--input-wrapper--show--cities">
            {citiesTag &&
              citiesTag.map((cityTag) => {
                return (
                  <div
                    key={cityTag.code}
                    className="app__container--input-wrapper--show--cities-item"
                  >
                    <span>{cityTag.name}</span>
                    <img
                      src={require("../assets/images/X.png")}
                      alt=""
                      className="close-button"
                      onClick={() => closeTag(cityTag.code)}
                      width={14}
                      height={14}
                    ></img>
                  </div>
                );
              })}
          </div>

          <img
            className="finding-icon"
            src={require("../assets/images/search.png")}
            alt=""
          />

          <input
            onChange={(e) => searchCities(e.target.value)}
            type="text"
            placeholder="Nhập ..."
            className="app__container--input-wrapper--input"
            onFocus={handleFocusInputSearch}
            disabled={citiesTag.length > 0}
          />

          {isShowCitiesSearch && (
            <div
              style={{ overflow: "auto" }}
              className="app__container--input-wrapper--dropdown-list--item-search"
            >
              {citySearch.length > 0 ? (
                citySearch.map((city) => {
                  return (
                    <div
                      onClick={() => handleSwitch(city.code)}
                      className="suggestion"
                      key={city.code}
                    >
                      {city.name}
                    </div>
                  );
                })
              ) : (
                <div>Data empty</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
