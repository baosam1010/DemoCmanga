import './../src/assets/css/grid.css';
import './App.css';
import Header from './../src/components/Header';
import Content from './../src/components/Content';
import Footer from './../src/components/Footer';



function App() {
  return (
    <div className="grid">
      <Header />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
