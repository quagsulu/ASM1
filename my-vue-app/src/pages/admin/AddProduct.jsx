import React, { useState } from 'react'

const AddProduct = ({AddNewProduct}) => {
    const [data,setdata] = useState([])
    const onHandleChange = (event)=>{
        const {name, value} = event.target;
        const newdata = {...data,[name]: value}
        setdata(newdata)
    }
    const onHandleSubmit = (event)=>{
        event.preventDefault()
        AddNewProduct(data)
        alert('Add new product successfully')
    };
  return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <label htmlFor="name">Name:</label>
             <input type="text" onChange={onHandleChange} name='name' />
             <label htmlFor="price">price:</label>
             <input type="text" onChange={onHandleChange} name='price' />
             <button>Submit</button>
        </form>
    </div>
  )
}

export default AddProduct