import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { searchTrack } from "../../lib/fetchApi";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TRootState } from "../../store";

interface IProps {
  onSuccess: (tracks: any[], text: string) => void;

}

const Search: React.FC<IProps> = ({ onSuccess }) => {
  const accessToken: string = useSelector((state: TRootState) => state.auth.accessToken);

  const [text, setText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks, text);
    } catch (e) {
      alert(e);
    }
  };


  return (
    <form className="form-search" onSubmit={onSubmit} data-testid="searchBarForm">
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
