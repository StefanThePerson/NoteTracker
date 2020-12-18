import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './components/List'
import Form from './components/Form'
import Header from './components/Header'
import Editor from './components/Editor'
import {getNotes} from './helpers/Notes'
//
import * as N from './helpers/Notes'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes]) // Spread. makes a new array with the content of notes inside
  }

  return (
    <Container>
      <Header />
      <Row>
        <Col xs={12} md={4}>
          <List notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>
        <Col xs={12} md={8}>
          <Form refreshList={refreshList} selectedNote={selectedNote} />
          {/*<Editor />*/}
        </Col>
      </Row>
    </Container>
  )
}

export default App
