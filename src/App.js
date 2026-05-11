import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './components/Data';
import NavBar from './components/NavBar';
import React from 'react';

function App() {
  
   const [totalProducts, setTotalProducts] = React.useState(0)
 const[allProducts,setAllProducts]=React.useState(Data)
  
function deleteProduct(id){
  const updateProducts= allProducts.filter((prod)=>prod.id !==id)
  setAllProducts(updateProducts)
}
   function recycleBtn(){
    setTotalProducts(0)
    setAllProducts(Data)
   }
  const Elements = allProducts.map(mockPro=> {
    return (
      <Card 
      key={mockPro.id}
      id={mockPro.id}
  
    deleteProduct={deleteProduct}
      totalProducts={totalProducts}
      setTotalProducts={setTotalProducts}
      />
    )
  })

  return (
    <div className="App">

      <NavBar 
      totalProducts={totalProducts} 
      recycleBtn={recycleBtn}
      />
      {Elements}

    </div>
  );
}

export default App;
