import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
}

ReactDOM.render(
    <Layout>
        <p>This is the page's specific content</p>
    </Layout>,
    document.getElementById('app')
);