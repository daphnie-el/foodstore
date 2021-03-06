import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./storestyle"

const Search = ({ onSearchChange }) => {
  return (
    <div>
      <Input placeholder="wanna eat?" onChange={onSearchChange} />
      <FontAwesomeIcon className="fa" id="search" icon={faSearch} />
    </div>
  );
};

export default Search;
