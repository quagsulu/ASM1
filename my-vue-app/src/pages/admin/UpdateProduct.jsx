import React from 'react'
import  { useState } from 'react'
import { useParams } from 'react-router-dom'
const UpdateProduct = ({onUpdateProduct,products}) => {
  const {id} = useParams();
  const product = products.find(product => product.id == id)
  const [data,setdata] = useState()

  const onHandleChange = (event)=>{
      const {name, value} = event.target;
      const newdata = {...data,[name]: value}
      setdata(newdata)
      // console.log(newdata)
  }
  const onHandleSubmit = (event)=>{
      event.preventDefault()
      const dataUpdate = {...data, "id":id}
      onUpdateProduct(dataUpdate)
      alert('Update product successfully')
  };
return (
  <div>
      <form action="" onSubmit={onHandleSubmit}>
          <label htmlFor="name">Name:</label>
           <input type="text" onChange={onHandleChange} defaultValue={product?.name} name='name' />
           <label htmlFor="price">price:</label>
           <input type="text" onChange={onHandleChange} defaultValue={product?.price} name='price' />
           <button>Submit</button>
      </form>
  </div>
)
}

export default UpdateProduct