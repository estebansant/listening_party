import React from 'react';
import { useInitialState } from './useInitialState.js';
import { Layout } from './container/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ButtonChoose } from './components/ButtonChoose';
import { SongSearch } from './components/Search/SongSearch';
import { AlbumSearch } from './components/Search/AlbumSearch';
import { ArtistSearch } from './components/Search/ArtistSearch';
import { FriendsSearch } from './components/Search/FriendsSearch';
import { Search } from './pages/Search';


function App() {

  const {
    page,
    setPage,
  } = useInitialState();

  return (
    <React.Fragment>
      <Layout>
        <Header
          page={page}
          setPage={setPage}
        />
        <Home page={page} setPage={setPage}>
          <ButtonChoose setPage={setPage}/>
        </Home>
        <Search page={page}>
          <SongSearch page={page}/>
          <AlbumSearch page={page}/>
          <ArtistSearch page={page}/>
          <FriendsSearch page={page}/>
        </Search>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default App
