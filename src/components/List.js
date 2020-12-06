import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {getNotes} from '../helpers/Notes'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  return (
    <>
      <Button variant="dark" block>
        New note
      </Button>
      <br />
      <ListGroup as="ul">
        {getNotes().map((note, index) => (
          <ListGroup.Item
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => onSelectNote(note)}
            as="li"
          >
            {note.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}
/* 
<ListGroup as="ul">
  <ListGroup.Item as="li" active>
    Cras justo odio
  </ListGroup.Item>
  <ListGroup.Item as="li">
    Dapibus ac facilisis in
  </ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Morbi leo risus
  </ListGroup.Item>
  <ListGroup.Item as="li">
    Porta ac consectetur ac
  </ListGroup.Item>
</ListGroup>
*/
