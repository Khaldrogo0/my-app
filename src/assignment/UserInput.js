import React from 'react';

const UserInput= (props) => {
   return(
       <div>
       < input type='text' onChange={props.click} value={props.name}/>
       </div>
   )

};

export default UserInput;