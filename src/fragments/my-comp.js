import React from 'react';

export default (props)=>{
    return (
        <div>
            <p>My Component</p>
            {props.children}
        </div>
    );
}
