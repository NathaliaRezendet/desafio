import './App.css';
import Main from './components/main/main.js'
import Header from './components/header/header.js'
import Carousel from './components/carousel/carousel.js'
import Products from './components/products/products.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Products />
      <Main />
      
    </div>
  );
}

export default App;
