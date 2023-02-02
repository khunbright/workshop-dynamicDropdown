import { useState } from 'react';
import './App.css';
import Data from './components/Data';
import Dropdown from './components/Dropdown';
import DataProduct from './data/DataProduct';

function App() {

  const [product,setProduct] = useState(DataProduct)

  const changeProductData=(e)=>{
    const typeProduct= e.target.value
    if(typeProduct === "all"){
      setProduct(DataProduct)
    }else{
      const result = DataProduct.filter((element)=>{
        return element.menu === typeProduct
      })
      setProduct(result)
    }
  }

  return (
   <div className='container'>
      <Dropdown changeProductData={changeProductData}/>
      <div className='content'>
        {product.map((item,index)=>{
            return <Data key={index} {...item}/>
        })}

      </div>
    </div>
  );
}

export default App;
