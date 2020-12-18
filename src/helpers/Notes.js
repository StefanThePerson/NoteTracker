const notes = []
/*const notes = [
  {id: 1, title: 'My first note!', body: 'I´m full of optimism!'},
  {id: 2, title: 'My second note.', body: 'Not as fun as i thought.'},
  {id: 3, title: 'My third note...', body: 'I´m over this...'},
]*/

export function makeNote(title, body) {
  const note = {
    id: Date.now(),
    title: title /* alternatively just: title, */,
    body: body /* alternatively just: body, */,
  }
  notes.push(note)
  return note
}

export function getNote(id) {
  const note = notes.find((note) => note.id === id)
  return note
  //alternatively: return notes.find((note) => note.id === id)
}

export function getNotes() {
  return notes
}

export function updateNote(id, title, body) {
  const noteToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  // remove old note
  notes.splice(noteToUpdate, 1)
  // add new note to start of list
  notes.splice(0, 0, note)
  return note
}

export function deleteNote(id) {
  const noteToDelete = notes.findIndex((note) => note.id === id)
  if (noteToDelete >= 0)
    // ^^^^ makes sure the counter doesn't go negative and loops in the index
    notes.splice(noteToDelete, 1) //since the the item after 1 in this case is optional, we can leave it empty
  return true
}
