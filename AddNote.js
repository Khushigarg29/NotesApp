import {useState} from 'react';

// a functional component named AddNote. The component receives a prop handleAddNote. This function is responsible for adding a new note.
const AddNote = ({ handleAddNote }) => { 

    // The noteText state variable will hold the text content of the note being entered by the user. 
    const [noteText, setNoteText] = useState('');
    // maximum character limit.
    const characterLimit = 200;

    // The handleChange function is a callback function that updates the noteText state variable whenever the user types in the textarea.
    const handleChange = (event) => {
        // It checks if the remaining characters after the input is within the character limit. If it is, it updates the noteText state with the new value.
        if(characterLimit - event.target.value.length >= 0){
        // Update noteText state with the value of the textarea
        setNoteText(event.target.value); 
        }
    };

    // The handleSaveClick function is called when the user clicks the "Save" button. 
    const handleSaveClick = () => {
    // It checks if the trimmed noteText (without leading or trailing whitespaces) has a length greater than zero, indicating that the user has entered some text.
        if(noteText.trim().length >0){
    // If so, it calls the handleAddNote function passed as a prop, passing the current noteText as an argument to add the note. Then, it resets the noteText state to an empty string.
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
    // It includes a textarea element for the user to input the note text. 
    <div className='note new'>
        <textarea 
        rows="8"
        cols="10" 
        placeholder='Type to add a note...'
        // Bind value of the textarea to the noteText state
        value={noteText} 
        // It fires when the user types into a text field, selects an option in a dropdown, or otherwise modifies the value of an input element.
        // When the user interacts with the input element (such as typing into a text field), the onChange event is triggered, and React calls the handleChange function.
        onChange={handleChange}
        />
        {/* footer for character limit and save option. */}
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            {/* Save the note, when user clicks on the save button */}
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    );
};

export default AddNote;
