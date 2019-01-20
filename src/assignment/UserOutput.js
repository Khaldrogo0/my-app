import React from 'react';
import './UserOutput.css';

const UserOutput = ( props ) => {
    return (
        <div className= "UserOutput">
            <p>

                <p>{props.name}</p>
                <ol>Create TWO new components: UserInput and UserOutput</ol> 
                <ol>UserInput should hold an input element, UserOutput two paragraphs</ol>
                <ol>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</ol>
                <ol>Pass a username (of your choice) to UserOutput via props and display it there</ol>
                <ol>Add state to the App component (=> the username) and pass the username to the UserOutput component</ol>
                <ol>Add a method to manipulate the state (=> an event-handler method)</ol>
                <ol>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</ol>
                <ol>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</ol>
                <ol>Add two-way-binding to your input (in UserInput) to also display the starting username</ol>
                <ol>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</ol>
            </p>
        </div>

    )
};
export default UserOutput;