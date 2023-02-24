import React, { useState } from "react";
import style from "./SearchBar.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function SearchBar(props) {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  const CustomPaper = (props) => {
    return (
      <Paper
        {...props}
        sx={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          border: "2px solid #F27919",
          padding: "10px",
        }}
      />
    );
  };
  return (
    <div className={style.searchbar}>
      <Autocomplete
        freeSolo
        className={style.inputSearch}
        size="small"
        disableClearable
        options={top100Films}
        PaperComponent={CustomPaper}
        renderOption={(props, option) => (
          <div className={style.searchAppend}>
            <b>{option.title}</b>
          </div>
        )}
        renderInput={(params) => (
          <TextField
            className={style.searchField}
            sx={{
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#f27919",
                  borderBottomWidth: 0,
                  padding: "10px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
              },
            }}
            placeholder="Search an item, category or brand"
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon fontSize="medium" sx={{ color: "#F27919" }} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
