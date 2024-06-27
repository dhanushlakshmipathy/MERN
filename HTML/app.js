import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
        <Header name="raj" />
        <Nav team="VIT"/>
        <Footer />
    </div>
  );
}


export default App;
