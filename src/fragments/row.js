import React from 'react';
import withClass from "./withClass.js";

const Row = (props) => {
    return (
        <>
            <p>{props.title}</p>
            <small>Sub title</small>
        </>
    );
};

export default withClass(Row,"my-super-class");
