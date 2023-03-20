import React from 'react';
import { Layout } from './container/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <Home />
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default App
