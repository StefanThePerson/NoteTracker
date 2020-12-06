import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Form() {
  return (
    <div>
      <label htmlFor="basic-url">Title</label>
      <InputGroup className="mb-3">
        <FormControl aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>
      <label htmlFor="basic-url">Note</label>
      <InputGroup>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <br />
      <Button variant="primary">Save</Button> <Button variant="danger">Delete</Button>
    </div>
  )
}
