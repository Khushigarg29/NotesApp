// to import the icons
import { MdDeleteForever } from 'react-icons/md'

// The component receives props such as id, text, date, and handleDeleteNote.
const Note = ({ id, text, date, handleDeleteNote }) => {

    // This line begins the return statement, indicating that the component will return JSX to render.
    return(
        // act as parent div for this component, making it easier for us to style an individual note and easier to position an individual element within a note.
        <div className='note'>
            {/*it will hold the text of the note, the value of text is passed through the props above. */}
            <span>{text}</span>

            {/* it is going to hold the delete and date icon */}
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)} 
                className='delete-icon' 
                size='1.3em' 
                />
            </div>
        </div>
    );
};

export default Note;
