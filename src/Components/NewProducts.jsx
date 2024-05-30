import  React,{ useState, useEffect } from "react";
import fakeImg from "../Images/fakeImg.jpg";
import Carousel from "react-bootstrap/Carousel";
import Axios from "axios";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios
      .get("https://goldfish-app-cy9wf.ondigitalocean.app/newLaunchProducts")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch products:", error);
      });
  }, []);
  return (
    <Carousel data-bs-theme="dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div className="newProductLaunch">
            <img
              className="d-block w-100"
              alt="Slide"
              src={`https://goldfish-app-cy9wf.ondigitalocean.app/Images/` + product.productImage}
              viewBox="0 0 24 24"
            />
            <div className="newProductLaunchContent">
              <p className="newProductLaunchDescription">
                {product.productName}
              </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    
  );
};

export default NewProducts;
