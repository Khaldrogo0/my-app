import React from 'react';

const validation = (props) => {
 return (
     <div>
        {
             props.inputlen >5 ?
             <p>The length is too long</p>
             :
             <p>The length is too small</p>

        }
     </div>

 );
};
export default validation;