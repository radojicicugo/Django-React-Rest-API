import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function Addproducts(props) {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
   
    const history = useHistory();

    const AddProductInfo = async () => {
        let formField = new FormData()
        
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null){
            formField.append('image', image)
        }
        
        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField,
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }

    return (
        <div className="box">
            <h2>Add Products</h2>
            <div className="container">
               <div className="form-group">
                 <div className="form-control">
                     <div className="form-group">
                     <div className="form-group">
                         <label>select image</label>
                 <input 
                    type="file"
                    className='form-control form-control-lg'
                    name="image"
                    src={image}
                    onChange={(e) => setImage(e.target.files[0])}
                 />
                     </div>
                 <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder="Enter product name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 />
                     </div>
                     <div className="form-group">
                 <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder="Enter product category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                 />
                     </div>
                     <div className="form-group">
                 <input 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder="Enter product price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                 />
                     </div>
                     <div className="form-group">
                 <textarea 
                    type="text"
                    className='form-control form-control-lg'
                    placeholder="Enter product description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                 />
                     </div>
                     <button id="btn" className="btn btn-success" onClick={AddProductInfo}>Add Product</button>
                 </div>
             </div>
            </div>
        </div>
    );
}

export default Addproducts;