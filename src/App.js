import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <ProjectContainer></ProjectContainer>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App;
