import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return(
    <React.Fragment>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Start Here</Accordion.Header>
          <Accordion.Body>
            Welcome to the Marketplace. This application is an inventory. She keeps track of your shops and the products within that shop. Take your time and look around. Thanks for stopping by!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Explore</Accordion.Header>
          <Accordion.Body>
            <CardGroup>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Marketplace</Card.Title>
                  <Card.Text>
                    Learn more about the current and upcoming features of this application.
                  </Card.Text>
                  <Button href='/about' variant="primary">About</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Shops</Card.Title>
                  <Card.Text>
                    See which shops are in the Marketplace.
                  </Card.Text>
                  <Button href='/shops' variant="primary">View Shops</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  )
};
