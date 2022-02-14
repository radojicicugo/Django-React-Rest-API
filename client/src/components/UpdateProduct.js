import React,{useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';


const UpdateProduct = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
   
    const history = useHistory();
    const { id } = useParams(); 

    const loadProducts = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`);
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
        setCategory(data.category)
    }

    useEffect(() => {
        loadProducts();
    }, [])

    //update products
    const UpdateProductInfo = async () => {
        let formField = new FormData()
        
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)
        if (image !== null){
            formField.append('image', image)
        }
       await axios({
           method: "PUT",
           url:`http://localhost:8000/api/${id}/`,
           data:formField
       }).then(response => {
           console.log(response.data)
           history.push('/')
       })
    }

    return (
        <div>
            <h3>Update product opp sada</h3>
            <div className="container">
               <div className="form-group">
                 <div className="form-control">
                     <div className="form-group">
                     <div className="form-group">
                       <img src={image} height={'300px'} width={'150px'} alt="gett" />  
                         <label>select image to Upload</label>
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
                     <button id="btn" className="btn btn-success" onClick={UpdateProductInfo}>Update</button>
                 </div>
             </div>
            </div>
        </div>
    );
}

export default UpdateProduct;