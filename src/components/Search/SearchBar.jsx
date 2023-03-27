import React from 'react';

const SearchBar = () => {
  const [query, setQuery] = React.useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(query);
  }

  return (
    <form
      className=""
      onSubmit={handleSubmit}
    >
      <input className="" 
        type="text"
        value={query}
        onChange={handleQueryChange} />
      <button 
        className="" 
        type="submit">Search</button>
    </form>
  );
}

export {SearchBar}