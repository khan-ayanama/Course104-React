# Notes - 04

## JSX Return

Only one parent element can return JSX to solve the problem enclosed all element inside the div

```jsx
    const jsx = (
        <div>
        <h1>Element1</h1>
        <h1>Element2</h1>
        <h1>Element3</h1>
    </div>
    )
```

## React.Fragment

```jsx
    const jsx = (
    <React.Fragment>
        <h1>Element1</h1>
        <h1>Element2</h1>
        <h1>Element3</h1>
    </React.Fragment>
    )
```

You can also remove div instead of it write it with empty tag instead of React.Fragment

```jsx
    const jsx = (
    <>
        <h1>Element1</h1>
        <h1>Element2</h1>
        <h1>Element3</h1>
    </>
    )
```

## Inline Style

```jsx
    const styleObj = {
        backgroundColor:"red",
    }

    const jsx = (
    <div style={styleObj}>
        <h1>Element1</h1>
        <h1>Element2</h1>
        <h1>Element3</h1>
    </div>
    )
```

## Can we use nested React.Fragment

Yes we can use nested React.Fragment

## Config Driven UI

When the UI is determined by the external configuration rather than hard-coded within the components.  
For example the image on the screen directly not should be hard coded it should come from database this is called config driven UI.

## PROPS

* To pass props, add them to the JSX, just like you would with HTML attributes.
* To read props, use the function Avatar({ person, size }) destructuring syntax.
* You can specify a default value like size = 100, which is used for missing and undefined props.
* You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
* Nested JSX like `<Card><Avatar /></Card>` will appear as Card component’s children prop.
* Props are read-only snapshots in time: every render receives a new version of props.
* You can’t change props. When you need interactivity, you’ll need to set state.

### Passing Data as props

```jsx
    const RestaurantCard = (props) => {
    return (
        <div className="card">
        <img src={props.restaurant.image} alt="Burger" />
        <h2>{props.restaurant.title}</h2>
        <h3>{props.restaurant.type.join(", ")}</h3>
        <h4>{props.restaurant.rating} stars</h4>
        </div>
    );
    };

    const Body = () => {
    return (
        <div className="restaurant-list">
        <RestaurantCard restaurant={restaurantData[0]} />
        <RestaurantCard restaurant={restaurantData[1]} />
        <RestaurantCard restaurant={restaurantData[2]} />
        <RestaurantCard restaurant={restaurantData[5]} />
        </div>
    );
    };
```

### More optimize way of passing data

```jsx
    const RestaurantCard = ({ image, title }) => {
    return (
        <div className="card">
        <img src={image} alt="Burger" />
        <h2>{title}</h2>
        <h3>{props.restaurant.type.join(", ")}</h3>
        <h4>{props.restaurant.rating} stars</h4>
        </div>
    );
    };

    const Body = () => {
    return (
        <div className="restaurant-list">
        <RestaurantCard {...restaurantData[0]} />
        <RestaurantCard {...restaurantData[1]} />
        <RestaurantCard {...restaurantData[2]} />
        <RestaurantCard {...restaurantData[5]} />
        </div>
    );
    };
```

### More optimization

```jsx
    const RestaurantCard = ({ image, title, type, rating }) => {
    return (
        <div className="card">
        <img src={image} alt="Burger" />
        <h2>{title}</h2>
        <h3>{type.join(", ")}</h3>
        <h4>{rating} stars</h4>
        </div>
    );
    };

    const Body = () => {
    return (
        <div className="restaurant-list">
        {restaurantData.map((restaurant) => (
            <RestaurantCard {...restaurant} />
        ))}
        </div>
    );
    };
```

## Map vs forEach

As forEach doesn't return anything and map returns thing so we should use map in jsx.

## VirtualDOM

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

## Renconcilation in React

Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.  
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

## Diff Algorithm

The diffing algorithm in React allows for the efficient updates and rendering of these DOM elements. As changes occur within the application's state or properties, React uses its diff algorithm to compare the new Virtual DOM with the old one.

## What is React Fibre

React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long-standing issues in React.  
[Read more about React Fibre](https://github.com/acdlite/react-fiber-architecture)

## Why we don't use index as key in map function

In summary, using the index of an array as the key prop in React's map() function can cause issues when the list items can be added, removed, or reordered. To avoid these problems, you should always use a unique identifier as the key prop instead.

## React Folder Structure

## export Default

You can only export only one thing default

## Export by name

When component is not exported as defualt then it is exported by name, you can export as many named component as you want unlike defualt.

## Named import

When component is exported normally not defualt then we need to import it as {named} component.

## Default Import

In default import you can change name while importing suppose the component name is Header but you can import as CustomizedHeader

## Import as *

It means importing all the functions in the object

## File extenson as jsx --> Header.jsx instead of Header.js

It's a matter of choice not creates much difference.

## constant or config files

It is file where hard coded data is placed which will later used by compnents

## Search Variable in React

If we put the value of input hardcoded then you won't be able to change it.

```js
    const SearchButton = () => { 
        // Declaration of harcoded text 
        let searchTxt = "KFC";

        return (
            <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="Search"

                // Here is reference to harcoded text
                value={searchTxt}

                />
                <button className="search-btn">Search</button>
            </div>
        );
    };
```

## Hooks

### What is Hook?

* It is just a function, we get it from the React as named import.
* There are many hooks in React.  
* One of such hook is useState(), It is used to create state variable.  
* Hook returns an array

### useState() Hook

```js
    // Importing useState()
    import {useState} from 'react'


    const SearchButton = () => { 
        // Declaration of harcoded text 
        // let searchTxt = "KFC";


        // searchText is a local state variable declaring using useState()
        const [searchText] = useState("default value")

        return (
            <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="Search"

                // Here is reference to harcoded text
                value={searchTxt}

                />
                <button className="search-btn">Search</button>
            </div>
        );
    };
```

* Every component in React maintains a state, Every time you use local variable use state

### Variables in React - (Searchinput)

<!-- This is two way binding -->

```js
    const SearchText = () => {
  [searchInput, setSearchInput] = useState("Default");  // returns = [variablename, function to update variable]

  return (
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </div>
  );
};

```

### Why State Variable

Everytime you want your variable in synch with UI you should use state variable

## Working Search Bar

```js
    function filterData(searchInput, restaurants) {
        const filterData = restaurants.filter((restaurant) =>
            restaurant.title.includes(searchInput)
        );
        return filterData;
        }

    const Body = () => {
        const [searchInput, setSearchInput] = useState("");
        const [restaurants, setRestaurants] = useState(restaurantData);

        return (
            <>
            <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
                />
                <button
                className="search-btn"
                onClick={() => {
                    // need to filter the data
                    const data = filterData(searchInput, restaurants);
                    // update the state
                    setRestaurants(data);
                }}
                >
                Search
                </button>
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant.id} />
                ))}
            </div>
            </>
        );
    };
```
