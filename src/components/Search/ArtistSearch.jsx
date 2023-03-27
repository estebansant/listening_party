import React from 'react';
import { SearchBar } from './SearchBar';

const ArtistSearch = ({page}) => {
  return (
    <React.Fragment>
      {page === "artistSearch" &&
        <SearchBar />
      }
    </React.Fragment>
  )
}

export {ArtistSearch}