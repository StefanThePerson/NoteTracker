import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import {getNotes} from '../helpers/Notes'
import Alert from 'react-bootstrap/Alert'

export default function List({selectedNote, setSelectedNote, notes}) {
  const [alertNoNotes, switchNoNotes] = useState(false)
  useEffect(() => {
    if (notes.length === 0) return switchNoNotes(true)
    return switchNoNotes(false)
  }, [notes])

  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  const onClickNewNote = () => {
    setSelectedNote(undefined)
  }
  /*const alertHQNoNotes = () => {
    switchOnNoNotes(true)
    setTimeout(() => switchOnNoNotes(false), 10000)
  }*/
  return (
    <>
      <Button variant="dark" block onClick={onClickNewNote}>
        New note
      </Button>
      <br />
      {alertNoNotes && <Alert variant="danger">No notes found in list.</Alert>}
      <ListGroup as="ul">
        {notes.map((note, index) => (
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
