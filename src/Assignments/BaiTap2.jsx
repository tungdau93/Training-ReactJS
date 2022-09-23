import React from "react";
import "../style/_bai-tap-2.scss";
import { useEffect, useState } from "react";

const BaiTap2 = () => {
  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState([]);
  const [citiesTag, setCitiesTag] = useState([]);


  const handleSwitch = (code) => {
    // step 1: get value of item
    const citySelected = citySearch.find((city) => city.code === code);
    const newCityMatch = citySearch.filter((city) => city.code !== code);
    // console.log(newCityMatch)
    setCitySearch([...newCityMatch]);

    const newCitiesTag = [...citiesTag];
    // console.log(newCitiesTag)
    newCitiesTag.push(citySelected);
    setCitiesTag([...newCitiesTag]);
    console.log(newCitiesTag);
  };

  // step 2: delete item from cities list

  // step 3: add item into suggestion list

  useEffect(() => {
    const url = "https://provinces.open-api.vn/api/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  const searchCities = (text) => {
    let matches = cities.filter((city) => {
      const regex = new RegExp(`${text}`, "gi");
      return city.name.match(regex);
    });
    setCitySearch(matches);
    // console.log(citySearch)
  };

  return (
    <div>
      <div className="app">
        <span id="title">入力欄 </span>
        <div className="app__container">
          <div className="app__container--heading">
            <div className="app__container--heading-name">
              <p className="app__container--heading-name--japanese">入力欄</p>

              <p className="app__container--heading-name--english">
                Input Field
              </p>
            </div>
          </div>
          <div className="app__container--input-wrapper">
            {citiesTag &&
              citiesTag.map((cityTag) => {
                return (
                  <>
                    <div
                      key={cityTag.code}
                      className="app__container--input-wrapper--show--cities"
                    >
                      <img src={require("../asserts/images/X.png")} 
                        alt=""
                        className="close-button"
                        onClick={}
                        >
                      </img>
                      {cityTag.name}
                    </div>
                  </>
                );
              })}
            <img
              className="finding-icon"
              src={require("../asserts/images/search.png")}
              alt=""
            />
            <input
              // value=""

              onChange={(e) => searchCities(e.target.value)}
              type="text"
              placeholder="Nhập tên thành phố để tìm kiếm..."
              className="app__container--input-wrapper--input"
            ></input>
            <div
              style={{ overflow: "auto" }}
              className="app__container--input-wrapper--dropdown-list--item1"
            >
              
              {citySearch &&
                citySearch.map((city) => {
                  return (
                    <>
                      <div
                        onClick={() => handleSwitch(city.code)}
                        className="suggestion"
                        key={city.code}
                      >
                        {city.name}
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTap2;
