import React from 'react';
import { SearchBar } from './SearchBar';

const FriendsSearch = ({page}) => {
  return (
    <React.Fragment>
      {page === "friendsSearch" &&
        <SearchBar />
      }
    </React.Fragment>
  )
}

export {FriendsSearch}