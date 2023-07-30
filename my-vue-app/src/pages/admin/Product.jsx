import React from 'react'
import { Link } from 'react-router-dom';
const Product = ({products,RemoveProduct}) => {
  console.log(products)
  const onHandleRemove =(id)=>{
    console.log(id)
    RemoveProduct(id);  
  }
  return (
    <div>
      <Link to={'/admin/product/add'}>
        <button>Add New Product</button>
      </Link>
      <table>
        <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>price</td>
        <td>action</td>
      </tr>
        </thead>
        <tbody>
        {products.map((product,index) =>{
          return (
            <tr key={index +1}>
              <td>{index +1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={()=>onHandleRemove(product.id)}>Remove</button>

              </td>
            </tr>
          )
        })}

          </tbody>    
      </table>
    </div>
  )
}

export default Product