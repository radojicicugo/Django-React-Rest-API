import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'


function ProductDetail(props) {

  const [product, setProduct] = useState("")

  const { id } = useParams();



  useEffect(() => {
    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }
      getSingleProduct();
  },[])

    return (
        <div className="container">
            <h1>Product Detail</h1>
            <div className="single-product-info">
            <img src={product.image} height="250" weight="400" alt="this is" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <Link className="btn btn-primary m-2" to={`/${product.id}/update`} >Update</Link>
            <Link className="btn btn-danger m-2">Delete</Link>
            </div>
        </div>
    );
}

export default ProductDetail;