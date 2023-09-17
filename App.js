import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *      <div id = "child">
 *          <h1> </h1>
 *      </div>
 * </div>
 */

// const parent = React.createElement('div',{id:'parent'},
//                [React.createElement('div', {id:'child'},
//                [React.createElement('h1',{},"This is h1"), React.createElement('h2',{},"This is h2")]), 
//                React.createElement('div', {id:'child2'},
//                [React.createElement('h1',{},"This is h1"), React.createElement('h2',{},"This is h2")])]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
//heading is a react element
//const heading = React.createElement('h1', {id : "heading"}, 'Hello World from React');
//const root = ReactDOM.createRoot(document.getElementById('root'));
//console.log(parent);//return oobject
//render will  to take object (heading) create h1 tag that browser understands and put it in root
//root.render(heading);

//This is how to create react elements using core react
//const heading = React.createElement("h1",{id:"heading"},"Learning React! 👽");


// This is how to create react elements(objects) using JSX
// JSX is the conviction of using HTML and JS togethere
// JSX is not a part of React, it is HTML like syntax to make the code easier to understand
// const jsxHeading = <h1 id="heading">This is heading using JSX!!!👽</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Component
//WHat?? => it is a normal JS Function that returns a JSX code (react element(object))
//Types ==> Class based components and React Functional components

// React Functional Component
const TitleComponent = () => (
    <h1 className="title"> This is the title!!👽</h1>
);

//Using one React Functional component inside another
// Component Composition
const ExampleComponent = () => {
    return <h1> Using return while creating components!!👻 </h1>;
};

const exampleNum = 10000;

const HeadingComponent = () => (
   <div className="container">       
        
        <TitleComponent />
        <ExampleComponent/>
        <h1 id="heading"> This is heading!!👽</h1>
   </div>    
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);