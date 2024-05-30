import { React, useState, useEffect } from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/navbar";

const ProductDetails = () => {
  const [pediaProducts, setPediaProducts] = useState([]);
  const  {productId}  = useParams();

  useEffect(() => {
    // Fetch the data for UserList
    fetch("https://goldfish-app-cy9wf.ondigitalocean.app/pediaProducts")
      .then((resp) => resp.json())
      .then((data) => setPediaProducts(data));
  }, []);

  const selectedProduct = pediaProducts.find(
    (product) => product._id.toString() === productId
  );

  return (
    <>
      {" "}
      <NavBar />
      <Container fluid className="productDetailsContainer">
        {selectedProduct ? (
          <>
            <Row>
              <Col lg={12}>
                <Row xs={1} sm={1} md={1}>
                  <Col style={{display:"flex",justifyContent:"center"}}>
                    <Image
                      width={"30%"}
                      
                      src={
                        `https://goldfish-app-cy9wf.ondigitalocean.app/Images/` +
                        selectedProduct.productImage
                      }
                      thumbnail
                    />
                  </Col>
                </Row>
                <Row xs={1} sm={2} md={2}style={{display:"flex",justifyContent:"center"}}>
                    
                  <Col>
                    <Table striped bordered hover className="googleFont">
                      <thead>
                        <tr>
                          <th>
                            <h2>Product Name</h2>
                          </th>
                          <th>
                            <h2>{selectedProduct.productName}</h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Composition</td>
                          <td>{selectedProduct.productComposition}</td>
                        </tr>
                        <tr>
                          <td>Availability</td>
                          <td>{selectedProduct.productAvailability}</td>
                        </tr>
                        <tr>
                          <td>Indication</td>
                          <td>{selectedProduct.productIndication}</td>
                        </tr>
                        <tr>
                          <td>Adverse Effects</td>
                          <td>{selectedProduct.productAdverseEffects}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </Container>
    </>
  );
};

export default ProductDetails;
