
import React, { Component } from 'react' 
import { PayPalButton } from "react-paypal-button-v2";
import { Container,Row, Col } from 'react-bootstrap';
 
export default class PayPalBtn extends Component <{}, { value: string }> {
  constructor(props) {
    super(props);
    this.state = {value: '0.0'};

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    if(event.target.value !== null && event.target.value !== ''){
    this.setState({value: event.target.value});
  }
  }

  submit(event) {
    if(event.target.value == null || event.target.value !== '' || event.target.value !== '0'){
      alert("Please enter an amount to donate");
  }
  }


  render() {
    return (
      <Container className="grey">
         <Row className="mt-5"></Row>
         <Row className=""><Col></Col></Row>
         <Row className="mt-5"></Row>
         <Row className=""><Col><label>
    Enter Donation Amount in $:
    <input type="text" name="name" onChange={this.handleChange} />
  </label></Col></Row>
         <Row className="mt-5"></Row> 
      <PayPalButton 
        amount={this.state.value} 
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
         onSuccess={(data) => {
          //onSuccess={() => {
          alert("Transaction completed by ");
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          //Enter the Client ID here
          clientId: ""
        }}
      /> 
      </Container>
    );
  }
}