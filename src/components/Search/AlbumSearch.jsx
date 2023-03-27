import React from 'react';
import { SearchBar } from './SearchBar';

const AlbumSearch = ({page}) => {
  return (
    <React.Fragment>
      {page === "albumSearch" &&
        <SearchBar />
      }
    </React.Fragment>
  )
}

export {AlbumSearch}