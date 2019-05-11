import React from 'react';

export default class NotesList extends React.Component {
    render(props) {
        
        if(this.props.notes.length){
            let notesLi = this.props.notes.map((note)=>{
                return <li key={note.id}>
                    <div>{note.title}</div>
                    <div>{note.details}</div>
                </li>
            })
            return ( 
            <div>
                <h1>All Notes</h1>
                <h1>Number of notes:{this.props.notes.length}</h1>
                <ul>{notesLi}</ul>
            </div>
            )
        }else{
            return <div>No Notes found</div>
        }
    }
  }