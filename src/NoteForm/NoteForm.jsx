import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return(
            <div className = "formWrapper">
                <input className= "noteInput"
                placeholder="Write a new note" />
                <button className="postButton">Add Note</button>
            </div>
        )
    }
}

export default NoteForm;