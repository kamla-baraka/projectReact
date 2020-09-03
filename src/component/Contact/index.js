import React from 'react';
import {Drop,DropTitle,Span,Form,FormInput,Textarea,Submit,InputEmail,InputText,InputTex} from './style.js'
import Footer from './../Footer'
const Contact = () => { 
    return (
        <React.Fragment>
            <Drop>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputTex type="text" className="sub" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Submit type="submit" value="Send Message" />
                </Form>
            </div>
        </Drop>
        <Footer />
        </React.Fragment>
    );
}
  

export default Contact;
