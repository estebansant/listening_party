import React from 'react';
import { Layout } from './container/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  return (
    <React.Fragment>
      <Layout>
        <Header />
        
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default App
