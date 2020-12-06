import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import List from './components/List'
import Form from './components/Form'

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1 style={styles.heading}>NoteTracker</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={4}>
          <Button variant="dark" block>
            New note
          </Button>
          <br />
          <List />
        </Col>
        <Col xs={12} md={8}>
          <Form />
          <br />
          <Button variant="primary">Save</Button> <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App

const styles = {
  heading: {
    fontSize: 100,
  },
}
