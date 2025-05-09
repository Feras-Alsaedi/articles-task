"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface IProps {
  showButton?: boolean;
  onSearchChange: (val: string) => void;
}
const SearchInput = ({ showButton, onSearchChange }: IProps) => {
  return (
    <div className="relative w-1/2">
      <div className="absolute start-2.5 top-4.5">
        <FaSearch />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 ps-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search, Articles..."
        required
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
      {showButton && (
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      )}
    </div>
  );
};

export default SearchInput;
