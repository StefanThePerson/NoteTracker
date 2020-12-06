import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './components/List'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={12} md={4}>
          <List />
        </Col>
        <Col xs={12} md={8}>
          <Form />
        </Col>
      </Row>
    </Container>
  )
}

export default App
