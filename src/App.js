import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <section>
    <div className="App">
      <Header></Header>
    </div>
    <div>
           <About></About>
      <footer className='footer'>
          <Footer></Footer>
      </footer>
      </div>
      </section>
  );
}

export default App;
