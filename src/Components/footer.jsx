// import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import SvgIcon from "@mui/material/SvgIcon";
import {
  Facebook,
  X,
  Google,
  Instagram,
  LinkedIn,
  Business,
  Print,
  Email,
  Phone
} from "@mui/icons-material";
import * as React from 'react';
import Container from "react-bootstrap/esm/Container";


export default function FooTer() {
  return (<Container fluid>
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <span>
              <SvgIcon component={Facebook} fontSize="large" inheritViewBox />{" "}
            </span>
          </a>
          <a href="" className="me-4 text-reset">
            <span>
              <SvgIcon component={X} fontSize="large" inheritViewBox />{" "}
            </span>
          </a>
          <a href="" className="me-4 text-reset">
            <span>
              <SvgIcon component={LinkedIn} fontSize="large" inheritViewBox />{" "}
            </span>{" "}
          </a>
          <a href="" className="me-4 text-reset">
            <span>
              <SvgIcon component={Google} fontSize="large" inheritViewBox />{" "}
            </span>{" "}
          </a>
          <a href="" className="me-4 text-reset">
            <span>
              <SvgIcon component={Instagram} fontSize="large" inheritViewBox />{" "}
            </span>{" "}
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                ALPHABIO Medical Pvt Ltd
              </h6>
              <p style={{textAlign:"justify"}}>
                ALPHABIO Medical Pvt Ltd is a pharmaceutical company
                located at Bangalore, the IT capital of India, and also the
                capital of State of Karnataka.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Our Products</h6>
             
              <p>
                <a href="#!" className="text-reset">
                  Dermatology
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pediatrics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                Otolaryngology
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                 General
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
              <span>
              <SvgIcon component={Business}  inheritViewBox />{" "}
            </span>
                Bangalore, IN
              </p>
              <p>
              <span>
              <SvgIcon component={Email}  inheritViewBox />{" "}
            </span>
            <a href="mailto:`{email}`?subject={subject}&body={body}"style={{textDecoration:"none", color:"black"}} >Send us an Email</a>
              </p>
              <p>
              <span>
              <SvgIcon component={Phone}  inheritViewBox />{" "}
            </span> <a href="tel:7051502019"style={{textDecoration:"none", color:"black"}}>Call us</a>
              </p>
              {/* <p>
              <span>
              <SvgIcon component={Print}  inheritViewBox />{" "}
            </span> <a href="fax:+358.555.1234567">+358.555.1234567</a>
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://heyycybercodes.netlify.app" target="_blank " rel="noreferrer">
            Cyber
        </a>
      </div>
    </MDBFooter></Container>
  );
}
