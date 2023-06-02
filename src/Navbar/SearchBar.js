import { useState } from "react";
import { axiosInstance } from "../axios.util";
import { useCallback } from "react";
import React from "react";
import { useHistory } from "react-router-dom";


function SearchBar() {

  const [search, setSearch] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const history = useHistory();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    }
  }

  const searchTextChange = async (event) => {
    const { value } = event.target;
    if (!value) {
      setSearch([]);
      return;
    }
    const { data } = await axiosInstance.get(`/restaurant/search?name=${value}`);
    setSearch(data.rows);
  }

  const optimisedVersiyon = useCallback(debounce(searchTextChange), [])

  const handleClick = (id) => {
    history.push(`/RestaurantView/${id}`)
  }



  return (
    <div className="SearchbarDiv">
      <input type="text" autoComplete="off" name="search" placeholder="Search..." onChange={optimisedVersiyon} />
      {
        search?.length > 0 &&
        <div className="autoComplete">
          {
            search?.map((el, i) => (
              <div key={i} className="autoCompleteItems">
                <button className="SearchItemButton" onClick={() => handleClick(el.id)}>
                  <div className="SearchItemImage"> <img src={el.img} alt="Img" /></div>
                  <div className="SearchItemName">{el.name}</div>
                </button>
              </div>
            ))
          }
        </div>
      }
    </div>

  );
}

export default SearchBar;