import {React,useEffect,useState} from "react";
import NavBar from "../../Components/navbar.jsx";
import OtherParallex from "../../pallarex/Products/OtherProductsParallex.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import FooTer from "../../Components/footer.jsx";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import otherCard from "../../Images/otherMedicine.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import SvgIcon from "@mui/material/SvgIcon";
import Axios from "axios";
const OtherProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    Axios
      .get("https://goldfish-app-cy9wf.ondigitalocean.app/generalProducts")
      .then((response) => {
        const productData = response.data.map((product) => {
          
          return {
            ...product,
            
          };
        });

        setOurProducts(productData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
    <NavBar />
    <ParallaxProvider>
      <OtherParallex />
      <div className="centerParallex  fullParallex ">
        
      </div>
      <Container fluid>
          <Row>
            <div className="cardContainer">
            <Col lg={12}>
              {" "}
              <Row xs={1} sm={2} md={3}>
              {ourProducts.map(product => (
                <Col className="productDetailCard" key={product._id}>
                  <span className="googleFont">{product.productName}</span>
                  <Link to={`/our-products/general-products/${product._id}`}>
                  <Card className="_card" style={{ overflow: "hidden" }}>
                  <img src={`https://goldfish-app-cy9wf.ondigitalocean.app/Images/`+product.productImage} alt="" className="productImages" />
                  </Card></Link>
                  <Link to={`/our-products/general-products/${product._id}`}><Button variant="link">Details<span><SvgIcon component={KeyboardArrowRightTwoToneIcon}  inheritViewBox fontSize="small"/></span></Button>{' '}</Link>
                </Col> ))}  
              </Row>
            </Col></div>
          </Row>
         
        </Container>
    </ParallaxProvider>
    <FooTer />
  </>
  )
}

export default OtherProducts
