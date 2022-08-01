import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header showSearch="false" />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
