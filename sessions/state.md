# ReactJS State

## What is state?

State is a built-in object that allows components to store variables and privately manage them.

Unlike props, component state cannot be accessed by another external component unless it passes the state as a prop.

## State in Class-based components

How to create state in class-based components

- First pass props in the constructor and super methods
- Initialize the state using this keyword `this.state`
- Refer to the state in the elements using `this.state.stateName` syntax

Example;

```javascript
import React, { Component } from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: "State in class Components" };
  }
  render() {
    return <h1>The topic of study is{this.state.topic}</h1>;
  }
}
export default Main;
```

## How to modify State

Unlike props, state in react is mutable. However you cannot modify state directly like this:
`this.state.topic = 'Another topic name'`

Instead, to modify the state we use `this.setState ()`

Before we practically do it lets briefly talk about events in ReactJs

To add Events in reactJs, we pass the function to be invoked as an expression(i.e as a expression).
The events are named using camelCase e.g onClick.

Example;

```javascript
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: " State in class Components" };
  }
  render() {
    return (
      <>
        <h1>The topic of study is{this.state.topic}</h1>
        <button onClick={() => this.setState({ topic: " new Topic" })}>
          Change
        </button>
      </>
    );
  }
}
export default Main;
```

Let's make our code cleaner by invoking the this.setState() method in a separate function instead of inline

```javascript
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: " State in class Components" };
  }

  changeTopic = () => this.setState({ topic: " new Topic" });
  render() {
    return (
      <>
        <h1>The topic of study is{this.state.topic}</h1>
        <button onClick={this.changeTopic}>Change</button>
      </>
    );
  }
}
export default Main;
```

## this keyword in class components

Notice that I used arrow function to invoke the setState method. What if we used the usual fuction declaration ??

We will run into an error: `Main.js:10 Uncaught TypeError: Cannot read properties of undefined (reading 'setState')`

WHY???

Notice, if you try to console.log(this) inside the `changeTopic()` method, it returns undefined

That is, this scope is not aware of the propeties in the declared in the constructor method.

To avoid this issue we can use arrow functions(like we did) or bind this on the method inside the constructor method

```javascript
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: " State in class Components" };
    this.changeTopic = this.changeTopic.bind(this);
  }

  changeTopic() {
    this.setState({ topic: " new Topic" });
  }
  render() {
    return (
      <>
        <h1>The topic of study is{this.state.topic}</h1>
        <button onClick={this.changeTopic}>Change</button>
      </>
    );
  }
}
export default Main;
```

## State in functional components

React State should be initialized inside the class constructor. However functional components do not have a constructor to initialize the state. For this reason, Functional components are known to be `stateless comonents`

Any solution?

Yes, we can use Hooks

**Hooks** are special functions that enable us to access or hook to react features that are not by default accessible

To use state in functional components, we need the useState hook.

## useState hook

How do we use state hook ?

- import useState from react at the top i.e

```javascript
import React, { useState } from "react";
```

- Next, initialize the state inside the fuction using useState

useState accepts the initial state value and returns two values i.e current state and a function that updates the state.

Example;

```javascript
import { useState } from "react";

function Main() {
  const [topic, changeTopic] = useState("State");
  return (
    <>
      <h1>In a fuction component</h1>
      <h2>Our topic today is {topic}</h2>
    </>
  );
}
export default Main;
```

## Changing state in functional components

We will add an event listener that calls a method which changes the state

```javascript
import { useState } from "react";

function Main() {
  const [topic, setTopic] = useState("State in class components");

  return (
    <>
      <h1>In a fuction component</h1>
      <h2>Our topic today is {topic}</h2>
      <button onClick={() => setTopic("New topic")}>Change</button>
    </>
  );
}
export default Main;
```

## Changing state based on the pevious state

The setState method receives a parameter that represents the previous state.

Example;
Let's create a state to store our count

```javascript
const [count, setCount] = useState(0);
```

Next add an event listener that calls the method that changes the state

```html
<button onClick="{changeCount}">click</button>
```

Declare the method and set the state

```javascript
function changeCount() {
  setCount((prev) => prev + 1);
}
```

## Updating objects and array state

Unlike class components which the states are merged after any change, state in functional components is completely replaced.

Thus, we must read the state first and set in functional components

```javascript
import { useState } from "react";

function Main() {
  const [classDetails, changeClassDetails] = useState({
    topic: "state",
    time: "Morning session",
  });

  function editTopic() {
    changeClassDetails({ ...classDetails, topic: "new topic" });
  }

  return (
    <>
      <h1>In a fuction component</h1>
      <h2>Our topic today is {classDetails.topic}</h2>
      <h3>We are in {classDetails.time}</h3>
      <button onClick={editTopic}>Change</button>
    </>
  );
}
export default Main;
```
