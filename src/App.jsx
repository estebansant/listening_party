import React from 'react';
import { useInitialState } from './useInitialState';
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
    setPage
  } = useInitialState();

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Home page={page}>
          <ButtonChoose setPage={setPage}/>
        </Home>
        <Search>
          <SongSearch />
          <AlbumSearch />
          <ArtistSearch />
          <FriendsSearch />
        </Search>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default App
