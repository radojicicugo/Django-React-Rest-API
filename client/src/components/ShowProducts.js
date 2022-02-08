import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Button, } from 'react-bootstrap'

function ShowProducts(props) {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div id="container" className="container">
            <h2>Show all products</h2>
           {products.map((product, index) => (
      <Card className="m-2 rounded shadow-lg" style={{ width: '18rem' }} key={product.id}>
         <Card.Img variant='top' src={product.image} />
         <Card.Body>
           <Card.Title>{product.name}</Card.Title>
           <Card.Text>{product.price}</Card.Text>
           <Card.Text>{product.description}</Card.Text>
           <Card.Text>{product.category}</Card.Text>
           <Button variant="primary">Details</Button>
         </Card.Body>
       </Card>
           ))}
        </div>
    );
}

export default ShowProducts;