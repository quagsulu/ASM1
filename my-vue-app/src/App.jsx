import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AddProduct, DashBoard, Product, UpdateProduct } from './pages'

function App() {
  const [products, setproducts] = useState([])
  useEffect(()=> {
    fetch(`http://localhost:3000/products`)
    .then((response)=> response.json()).then((data)=> setproducts(data))
  },[])

  const RemoveProduct = (id) =>{
    fetch(`http://localhost:3000/products/${id}`,
    {
      method: 'DELETE'
    })
    .then(() =>setproducts(products.filter(product => product.id != id)));
  }
  const AddNewProduct = (product) => {
    fetch(`http://localhost:3000/products`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),

    })

  };
  const onUpdateProduct = (product) =>{
    fetch(`http://localhost:3000/products/${product.id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
  }
  return (
    <>
<Routes>
  <Route path='/admin' element={DashBoard}/>
  <Route path='/admin/product' element={<Product products={products} RemoveProduct={RemoveProduct}/>}/>
  <Route path='/admin/product/add' element={<AddProduct AddNewProduct={AddNewProduct} />}/>
  <Route path='/admin/product/update/:id' element={<UpdateProduct onUpdateProduct={onUpdateProduct} products={products} />}/>
  
  </Routes>
    </>
  )
}

export default App
