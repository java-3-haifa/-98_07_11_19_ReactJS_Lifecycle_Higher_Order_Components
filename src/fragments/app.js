import React from 'react';
import Row from './row.js';
import MyComponent from './my-comp.js'

export default class extends React.Component {
    render() {
        return (
            <>
                <MyComponent>
                    <p>Hello World</p>
                </MyComponent>
            <ul>
                <li><Row title='Title 1'/></li>
                <li><Row title='Title 2'/></li>
                <li><Row title='Title 3'/></li>
                <li><Row title='Title 4'/></li>
            </ul>
                </>
        );
    }
}
