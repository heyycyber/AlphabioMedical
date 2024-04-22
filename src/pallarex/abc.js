import { Parallax } from 'react-parallax';
import { Container } from "react-bootstrap";
import contactUs from "../Images/contactUs.jpg"

const ContactUsParallex = () => (
    <Container fluid>
        <Parallax  bgImage={contactUs}  strength={1200} className='pallarexImage' bgImageStyle={{ maxWidth: '100%',maxHeight:"100%"}}>
        <div class="parallexTextBox googleFont"><span className='parallexText'>Contact Us</span></div>
    </Parallax> 
    </Container>
);
export default ContactUsParallex;