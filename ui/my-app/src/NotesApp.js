import React from 'react';
import './App.css';
import NotesList from './components/notesList.component'


export default class NotesApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          "id": "1",
          "title": "first Note",
          "details": "This is my first note"
        }, {
          "id": "2",
          "title": "Second Note",
          "details": "This is my Second note"
        },{
          "id": "3",
          "title": "Third Note",
          "details": "This is my Third note"
        }
      ]
    };
  }

  render(props) {
    return ( 
      <div className="App">
      Notes App
      <NotesList notes={this.state.notes} />
    </div>
    )
  }
}
