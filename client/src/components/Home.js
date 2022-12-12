import React from 'react'

const Home = () => {
  return (
    <div>
      <Card className='mb-3' style={{color:'#00'}}>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-picture-id1145371340?k=20&m=1145371340&s=612x612&w=0&h=6OjaI8Qa-F_skLNogC7B8MHBuaBYqiBQ7lkx1im01Wo=" />
   
            <Card.Body>
              <Card.Title style={{}}>
                My Bank is the best in the world
              </Card.Title>
              <Card.Text>
                Example
              </Card.Text>
              <Button  variant='primary' > Login </Button>
            </Card.Body>
          </Card>




    </div>
  )
}

export default Home