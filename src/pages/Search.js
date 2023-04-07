import React from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Button } from '@mui/material';

function Search() {
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="searchicon" />
                <input />
                <MicIcon className="micIcon"/>
                <ImageSearchIcon />
            </div>
            <div className="search__buttons">
                <Button type="submit" variant="outlined">Google Search</Button>
                <Button type="submit" variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>

        
    );
}

export default Search;