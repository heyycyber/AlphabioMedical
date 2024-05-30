import { React, useEffect, useState } from "react";
import NavBar from "../Components/navbar.jsx";
import OurProductsParallex from "../pallarex/ourProductsParallex.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import FooTer from "../Components/footer.jsx";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import pediaCard from "../Images/pediatricianProductCard.jpg";
import dermaCard from "../Images/dermatologyProductCard.png";
import otherCard from "../Images/otherMedicine.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const OurProducts = () => {

  const [ourProducts, setOurProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    axios
      .get("https://goldfish-app-cy9wf.ondigitalocean.app/ourProducts")
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
        <OurProductsParallex />
        <div className="centerParallex  fullParallex "></div>
        <Container>
          <Row>
            <div className="cardContainer">
              <Col lg={12}>
                {" "}
                <Row xs={1} sm={2} md={3}>
                {ourProducts.map(product => (
                  <Col key={product.productTypeId}>
                    <h1 className="googleFont">{product.productTypeName}</h1>
                    <Link to={`/our-products/${product.productTypeTitle}`}>
                      <Card className="_card" style={{ overflow: "hidden" }}>
                        <img src={`https://goldfish-app-cy9wf.ondigitalocean.app/Images/`+product.productTypeImage} alt="" />
                      </Card>
                    </Link>
                  </Col> ))} 
                 
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </ParallaxProvider>
      <FooTer />
    </>
  );
};

export default OurProducts;
