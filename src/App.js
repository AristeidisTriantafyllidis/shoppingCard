import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './components/Data';
import NavBar from './components/NavBar';
function App() {

  const Elements=Data.map(i=>{
    return(
      <Card/>
    )
  })

    return (
    <div className="App">
      <NavBar/>
     {Elements}
  
    </div>
  );
}

export default App;
