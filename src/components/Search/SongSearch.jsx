import React from 'react';
import { SearchBar } from './SearchBar';

const SongSearch = ({page}) => {
  return (
    <React.Fragment>
      {page === "songSearch" &&
        <SearchBar />
      }
    </React.Fragment>
  )
}

export {SongSearch}