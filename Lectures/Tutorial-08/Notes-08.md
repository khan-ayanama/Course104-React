# Class Based Component

* Read more about router from react-router-dom.

## Nested Routes

To make a nested route define a component inside the route called nested routing

```js
    {
    path: "/about",
    element: <About />,
    children: [
        {
        path: "profile",
        element: <Profile />,
        },
    ],
    },
```

## Class Based component

You can't write classed based component without render method

## Accessing props in class based funtion

```js
    // pass the props
    <ProfileClass name={"Ayan"} />

    // Consume the props
    <h2>Name: {this.props.name}</h2>
```

* We do not mutate state directly

## Variables and state in React class based component

```js
    import React from "react";

    class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.num = 0;
        this.state = {
        count: this.num,
        count2: 0,
        };
    }
    render() {
        return (
        <div>
            <h1>Profile Class Based Component</h1>
            <h2>Name: {this.props.name}</h2>
            <button
            onClick={() => {
                this.num++;
                this.setState({
                count: this.num,
                });
            }}
            >
            Button: {this.state.count}
            </button>
        </div>
        );
    }
    }

    export default Profile;
```

## Life Cycle of Class based component

### When parent and child component involved

1. Parent Constructor
2. Parent Render
3. First Child Constructor
4. First child render
5. Second child constructor
6. Second child render
7. First chhild conponendDidMount
8. Second child conponendDidMount
9. Parent conponendDidMount

### Life cycle when updation is allowed

1. Constructor
2. Render
3. child componentDidMount
   * API Call
   * setState
4. Render
5. componentDidUpdate

* Why can make componentDidMount async but not useEffect

### componentDidMount

componentDidMount is a lifecycle method in React's class components. It's called after a component has been rendered in the DOM. This method is often used for tasks that require interaction with the DOM or fetching data from an API.

```js
    import React from "react";

    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        data: null,
        };
    }

    componentDidMount() {
        // This method is called after the component has been rendered in the DOM.
        // It's a good place to fetch data from an API or perform other actions.

        // Example: Fetch data from an API
        fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => {
            this.setState({ data });
        });
    }

    render() {
        return (
        <div>
            <h1>My Component</h1>
            {this.state.data ? (
            <p>Data: {this.state.data}</p>
            ) : (
            <p>Loading data...</p>
            )}
        </div>
        );
    }
    }

    export default MyComponent;

```

### componentDidUpdate

The componentDidUpdate method is another lifecycle method in React's class components. It's called whenever a component updates and re-renders. This method is useful when you need to perform certain actions after the component has been updated due to changes in props or state.

```js
    import React from "react";

    class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        // This method is called after the component updates and re-renders.
        // It's a good place to perform actions based on prop or state changes.

        // Example: Check if the count state has changed
        if (this.state.count !== prevState.count) {
        console.log("Count has changed:", this.state.count);
        }
    }

    render() {
        return (
        <div>
            <h1>My Component</h1>
            <p>Count: {this.state.count}</p>
            <button
            onClick={() => {
                this.setState((prevState) => ({
                count: prevState.count + 1,
                }));
            }}
            >
            Increment Count
            </button>
        </div>
        );
    }
    }

    export default MyComponent;

```

### componentWillUnmount

he componentWillUnmount method is a lifecycle method in React's class components. It's called just before a component is removed from the DOM, providing an opportunity to perform cleanup tasks or cancel any ongoing processes.

```js
    import React from "react";

    class MyComponent extends React.Component {
    intervalId = null;

    constructor(props) {
        super(props);
        this.state = {
        count: 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        }, 1000);
    }

    componentWillUnmount() {
        // This method is called just before the component is removed from the DOM.
        // It's a good place to clean up any resources, like intervals or event listeners.
        
        clearInterval(this.intervalId);
    }

    render() {
        return (
        <div>
            <h1>My Component</h1>
            <p>Count: {this.state.count}</p>
        </div>
        );
    }
    }

    export default MyComponent;
```

### Clearing the Mess

* In componentWillUnmount you should clear all the mess.
* You should also clear the mess in useEffect in return function

```js
    useEffect(()=>{
        // Call API
        const id = setInterval(()=>{
            console.log('dd')
        })
        return ()=>{
            clearTimeInterval(id)
        }
    })
```
