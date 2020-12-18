import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {makeNote, getNotes, updateNote, deleteNote} from '../helpers/Notes'
import Alert from 'react-bootstrap/Alert'

export default function Form({selectedNote, setSelectedNote, refreshList}) {
  const [title, setTitle] = useState(undefined) // the [ ] can only contain two values
  const [alertOnSave, switchOnSave] = useState(false)
  const [alertOnDelete, switchOnDelete] = useState(false)

  const alertHQSaved = () => {
    switchOnSave(true)
    setTimeout(() => switchOnSave(false), 3000)
  }
  const alertHQDelete = () => {
    switchOnDelete(true)
    setTimeout(() => switchOnDelete(false), 3000)
  }
  // See State and Lifecycle in Docs on React-website
  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title)
      setBody(selectedNote.body)
    } else {
      setTitle('')
      setBody('')
    }
  }, [selectedNote])
  const [body, setBody] = useState(undefined)
  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    setTitle('')
    setBody('')
    alertHQSaved()
    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }
    makeNote(title, body)
    refreshList()
  }
  const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    setTitle('')
    setBody('')
    alertHQDelete()
  }
  return (
    <div>
      <label htmlFor="basic-url">Title</label>
      <InputGroup className="mb-3">
        {/*<FormControl aria-describedby="basic-addon1" onChange={onChangeTitle} />
         */}
        <FormControl aria-describedby="basic-addon1" value={title} onChange={onChangeTitle} />
      </InputGroup>
      <label htmlFor="basic-url">Note</label>
      <InputGroup>
        {/*<FormControl
          as="textarea"
          aria-label="With textarea"
          className="mb-3"
          onChange={onChangeBody}
        />*/}
        <FormControl
          as="textarea"
          aria-label="With textarea"
          className="mb-3"
          value={body}
          onChange={onChangeBody}
        />
      </InputGroup>
      <Button variant="primary" className="mr-2" onClick={onSave}>
        Save
      </Button>
      {selectedNote && (
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      )}
      <br />
      <br />
      {alertOnSave && <Alert variant="success">The note has changed!</Alert>}
      {alertOnDelete && <Alert variant="danger">This note will never be seen again.</Alert>}
    </div>
  )
}
