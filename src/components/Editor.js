import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default function Editor() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-3" />
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" className="mb-3" />
      </Form.Group>
      <Button variant="primary" className="mr-2">
        Save
      </Button>
      <Button variant="danger">Delete</Button>
    </Form>
  )
}
