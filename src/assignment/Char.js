import React from 'react';


const char = ( props ) =>
{
    const chars ={

        display: "inline-block",
        padding: "16px",
        margin : "16px",
        border : "1px solid black"
};

return(
    <div style={chars} onClick={props.del}>
    {props.character }
    </div>
);
};
export default char;