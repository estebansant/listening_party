import React from 'react';
import { useInitialState } from './useInitialState';
import { Layout } from './container/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ButtonChoose } from './components/ButtonChoose';

function App() {

  const {
    page,
    setPage
  } = useInitialState();

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Home page={page} setPage={setPage}>
          <ButtonChoose setPage={setPage}/>
        </Home>
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default App
