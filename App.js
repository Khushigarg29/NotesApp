// import useState, useEffect hooks from the react lib, that helps to use other states and other library features.
import { useState, useEffect } from 'react';
// this library helps in generating the unique id's.
import { nanoid } from 'nanoid';
// helps in rendering the list of notes.
import NotesList from './components/NotesList';
// helps in rendering the seacrh input feild.
import Search from './components/Search';
// it will render the header of the application.
import Header from './components/Header';

// The App component is typically the root component of a React application. It represents the main structure and behavior of the application. Inside the App component, other components are typically rendered and managed.
const App = () => {

  // useState here is a hook, that that returns array with two elements, current state value and function to update that state.
  // useState initializes the notes state with the value retrieved from the local storage.

  const [notes, setNotes] = useState(() => {
  
  // here, we use getItem to retrieve data from the local storage, that is associated with the key.
  // Retrieved data is always in JSON format, so we use, JSON.parse() to convert the string into javaScript object.
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

  // if no saved array or if parsing failed, savedNotes will be null or undefined. and it's new state will be initialzed as an empty array[].
    return savedNotes || [];
  });

  // The first line initializes a state variable named searchText with an initial value of an empty string (''). This state variable will hold the text entered by the user in the search input field. 
  // setSearchText: helps in updating the value of searchText.
  const [searchText, setSearchText] = useState('');

  // The second line initializes another state variable named darkMode with an initial value of false. This state variable will determine whether the dark mode is enabled or disabled in the application.
  // setDarkMode: helps in updating the darkMode state variable.
  const [darkMode, setDarkMode] = useState(false);


  // Local storage can only store strings, the notes array is first converted to a JSON string using JSON.stringify.
  useEffect(() => {
    // stores the note state variable under the given key.
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    // the state re-runs, whenever the notes state variable changes.
  }, [notes]);

  // this function takes text as a parameter.
  // inside it creates a new note object with unique id, with provided text, and the format the date according to local format.
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }

    // Then, it creates a new array newNotes and adding a new not to it.
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // This line defines a function deleteNote that takes id as a parameter. Inside the function, it filters out the note with the provided id from the notes array using filter method, creating a new array newNotes.
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // This code segment is returning JSX, which represents the structure and content of the component to be rendered on the user interface. 
  return (
    // div serves as the outermost container.
    // helps in toggling of the dark mode.

    // short-circuiting
    // When darkMode is true, the string 'dark-mode' is returned. This string is a CSS class name.
    // When darkMode is false, the expression evaluates to false, and no CSS class is applied.
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        {/* render header */}
        <Header handleToggleDarkMode={setDarkMode} />
        {/* render search bar */}
        <Search handleSearchNote={setSearchText} />
        {/* takes in three props, with filter search of the searched note, adding of new notes, deletion of the notes. */}
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div> 
    </div>
  );
};

// This line exports the App component as the default export of this module, allowing other modules to import and use it.
export default App;
