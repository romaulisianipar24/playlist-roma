import React, { useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Search = ({ onSuccess }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="form-search" onSubmit={onSubmit}>
      <TextField
        id="outlined-search"
        label="Search here"
        type="search"
        required
        className="form-search-input"
        onChange={handleInput}
      />
      <Button
        variant="contained"
        color="success"
        type="submit"
        className="btn-search"
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
