import React from "react";
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Cardsrow = () => {
    return (
      <div className="row" style={{backgroundColor: "#03091F"}}>
        <CardGroup>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-picture-id1145371340?k=20&m=1145371340&s=612x612&w=0&h=6OjaI8Qa-F_skLNogC7B8MHBuaBYqiBQ7lkx1im01Wo=" />
    <Card.Body>
      <Card.Title>Loans</Card.Title>
      <Card.Text>
        On offer Now! Interest free loans.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{ margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/transfer-of-money-from-hand-to-hand-picture-id1126636063?b=1&k=20&m=1126636063&s=170667a&w=0&h=BnG-0hjZWhRT_TwgLOCjStrxerx2EZzvXPtR4yxrxNc=" />
    <Card.Body>
      <Card.Title>Transfer</Card.Title>
      <Card.Text>
        Making your transfers easy.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/consulting-with-a-financial-manager-at-the-bank-picture-id1218601476?k=20&m=1218601476&s=612x612&w=0&h=vWQhmUZMLSyqczAwMApFKyV1BuEYAjVwHNNrseYfbTc=" />
    <Card.Body>
      <Card.Title>Service</Card.Title>
      <Card.Text>
        You and your wealth are safe with us.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

      </div>
    )
}


 
export default Cardsrow;