import React from 'react';
import { SearchBar } from './SearchBar';

const SongSearch = ({page, setPage}) => {
  return (
    <React.Fragment>
      {page === "songSearch" &&
        <SearchBar/>
      }
    </React.Fragment>
  )
}

export {SongSearch}