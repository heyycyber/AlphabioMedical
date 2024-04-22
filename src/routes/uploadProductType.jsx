import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../Components/navbar';


function UploadProductType() {
    const [file,setFile]=useState("");
    const [name,setName]=useState("");
    const [title,setTitle]=useState("");
    const [productName,setProductName]=useState("");
    const [productTitlee,setProductTitle]=useState("");
    const [productImage,setProductImage]=useState("");
    const [productAvailability,setProductAvailabitily]=useState("");
    const [productComposition,setProductComposition]=useState("");
    const [productIndication,setProductIndication]=useState("");
    const [productAdverseEffects,setProductAdverseEffects]=useState("");
    const titlee=title.toLowerCase();
    const productTitle=productTitlee.toLowerCase();
    const [collectionNames, setCollectionNames] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
  
    useEffect(() => {
      fetchTables();
    }, []);
  
    const fetchTables = () => {
      Axios.get('http://localhost:3009/collections') // Replace with your backend API URL
        .then((res) => {
          setCollectionNames(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    const handleTableSelect = (e) => {
      setSelectedTable(e.target.value);
    };

  const handleFile=(e)=>{
setFile(e.target.files[0])
  }
  const handleUpload=(e)=>{
    e.preventDefault();
    //require Axios to create an API that connect with Server
    const formdata=new FormData();
    formdata.append('imagee',file);
    formdata.append('name',name);
    formdata.append('title',titlee);
  Axios.post('http://localhost:3009/uploadProductType',formdata).then(res=>{
            if(res.data.Status==="Success"){
                console.log("Suceeded");
            }
            else{
                console.log("Failed");
            }
        })
        .catch(err=>console.log(err));
      }




      const handleProductImage=(e)=>{
        setProductImage(e.target.files[0])
          }
      const updateProductDetails=(e)=>{
        e.preventDefault();
        //require Axios to create an API that connect with Server
        const productdata=new FormData();
        productdata.append('productName',productName);
        productdata.append('productTitle',productTitle);
        productdata.append('productImage',productImage);
        productdata.append('productAvailability',productAvailability);
        productdata.append('productComposition',productComposition);
        productdata.append('productIndication',productIndication);
        productdata.append('productAdverseEffects',productAdverseEffects);
        productdata.append('selectedTable',selectedTable);
        
      Axios.post('http://localhost:3009/uploadProductDetails',productdata).then(res=>{
                if(res.data.Status==="Success"){
                    console.log("Suceeded");
                }
                else{
                    console.log("Failed");
                }
            })
            .catch(err=>console.log(err));
          }
      
  
//   const handleUpload=()=>{
//     const formdata=new FormData();
//     formdata.append('imagee',file);
//     Axios.post("http://localhost:3009/upload",formdata)
//     .then(res=>{
//         if(res.data.Status==="Success"){
//             console.log("Suceeded");
//         }
//         else{
//             console.log("Failed");
//         }
//     })
//     .catch(err=>console.log(err));
//   }
    return (
    <Container fluid>
        
        <h1>CREATE PRODUCT TYPE</h1>
        <input type="file" onChange={handleFile} />
        <input type="text" onChange={(event) => {
                            setName(event.target.value);
                          }} />
        <input type="text" onChange={(event) => {
                            setTitle(event.target.value);
                          }}/>
        <button onClick={handleUpload}>Upload</button>

        <h1>CREATE PRODUCT DETAILS</h1>
        <label htmlFor="">NAME</label>
        <input type="text" onChange={(event) => {
                            setProductName(event.target.value);
                          }} />
        <br />
        <label htmlFor="">TITLE</label>
        <input type="text" onChange={(event) => {
                            setProductTitle(event.target.value);
                          }} />
        <br />
        <label htmlFor="">IMAGE</label>
        <input type="file" onChange={handleProductImage} />
        <br />
        <label htmlFor="">COMPOSITION</label>
        <input type="text"  onChange={(event) => {
                            setProductComposition(event.target.value);
                          }}/>
        <br />
        <label htmlFor="">AVAILABILITY</label>
        <input type="text"  onChange={(event) => {
                            setProductAvailabitily(event.target.value);
                          }}/>
        <br />
        <label htmlFor="">INDICATION</label>
        <input type="text"  onChange={(event) => {
                            setProductIndication(event.target.value);
                          }}/>
        <br />
        <label>Select Table:</label>
      <select value={selectedTable} onChange={handleTableSelect}>
        <option value="">-- Select Table --</option>
        {collectionNames.map(collection => (
          <option key={collection} value={collection}>
            {collection}
          </option>
        ))}
      </select>
      {/* <button disabled={!selectedTable}>Add Product</button> */}

                    <br />
        <label htmlFor="">ADVERSE EFFECTS</label>
        <input type="text"  onChange={(event) => {
                            setProductAdverseEffects(event.target.value);
                          }}/>
        <br />
        <button  onClick={updateProductDetails}>UPdate</button>


       
    </Container>
  )
}

export default UploadProductType
