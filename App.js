/**
 * <div id="parent">
 *      <div id = "child">
 *          <h1> </h1>
 *      </div>
 * </div>
 */

const parent = React.createElement('div',{id:'parent'},
               [React.createElement('div', {id:'child'},
               [React.createElement('h1',{},"This is h1"), React.createElement('h2',{},"This is h2")]), 
               React.createElement('div', {id:'child2'},
               [React.createElement('h1',{},"This is h1"), React.createElement('h2',{},"This is h2")])]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);





//heading is a react element
const heading = React.createElement('h1', {id : "heading"}, 'Hello World from React');
//const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);//return oobject
//render will  to take object (heading) create h1 tag that browser understands and put it in root
//root.render(heading);