import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header() {
  return (
    <Jumbotron>
      <h1 style={styles.heading}>NoteTracker</h1>
    </Jumbotron>
  )
}

const styles = {
  heading: {
    fontSize: 100,
  },
}
