import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";

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
// const TitleComponent = () => (
//     <h1 className="title"> This is the title!!👽</h1>
// );

//Using one React Functional component inside another
// Component Composition
// const ExampleComponent = () => {
//     return <h1> Using return while creating components!!👻 </h1>;
// };

// const exampleNum = 10000;

// const HeadingComponent = () => (
//    <div className="container">       
//         {ExampleComponent()}
//         <TitleComponent />
//         <ExampleComponent/>
//         <h1 id="heading"> This is heading!!👽</h1>
//    </div>    
// );



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent></HeadingComponent>);


//Coding For food Delivery app 



// const RestaurantCard = (props) => (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.resData.info.cloudinaryImageId}`}
//       />
//       <h3>{props.resData.info.name}</h3>
//       <h4>{props.resData.info.cuisines.join(", ")}</h4>
//       <h4>{props.resData.info.avgRating} stars</h4>
//       <h4>{props.resData.info.costForTwo}</h4>
//       <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
//     </div>
// );
  




const AppLayout = () => (
    <div className = "app">
        <Header/>
        <Body/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);