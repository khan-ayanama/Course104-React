# Redux Core vs Redux Toolkit

## Writing reducer in core Redux

```js
    const ADD_TODO = 'ADD_TODO'
    const TODO_TOGGLED = 'TODO_TOGGLED'

    export const addTodo = text => ({
    type: ADD_TODO,
    payload: { text, id: nanoid() }
    })

    export const todoToggled = id => ({
    type: TODO_TOGGLED,
    payload: { id }
    })

    export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        return state.concat({
            id: action.payload.id,
            text: action.payload.text,
            completed: false
        })
        case TODO_TOGGLED:
        return state.map(todo => {
            if (todo.id !== action.payload.id) return todo

            return {
            ...todo,
            completed: !todo.completed
            }
        })
        default:
        return state
    }
    }
```

## Writng Reducer in redux-toolkit

```js
    import { createSlice } from '@reduxjs/toolkit'

    const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
        state.push({
            id: action.payload.id,
            text: action.payload.text,
            completed: false
        })
        },
        todoToggled(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        todo.completed = !todo.completed
        }
    }
    })

    export const { todoAdded, todoToggled } = todosSlice.actions
    export default todosSlice.reducer
```

## Why we should not directly modifies the state

Object/Array Modification and Reference:

In JavaScript, when you modify an object or an array directly, the reference to that object or array remains the same. Modifying the content of the object or array doesn't change its identity in terms of reference.

```javascript
    const originalArray = [1, 2, 3];
    const modifiedArray = originalArray;

    modifiedArray.push(4);

    console.log(originalArray === modifiedArray); // true
```

In this example, even though we modified modifiedArray, the reference to originalArray and modifiedArray remains the same.

Redux and Reference Equality:

Redux uses a process known as reference equality checks to determine if the state has changed. When you dispatch an action in Redux, it goes through the reducers to calculate the new state. After the state is calculated, Redux checks if the new state is a different reference than the previous state.

If the new state has the same reference as the previous state, Redux assumes that the state hasn't changed, even if the content of the state (objects or arrays inside it) has been modified.

This is an optimization strategy to avoid unnecessary re-renders and updates in components. If the reference is the same, React and Redux can skip certain operations, assuming that nothing has changed.

Consequences of Not Recognizing Changes:

If you directly modify an object or array in the Redux state without creating a new reference, Redux may not recognize the change. This can lead to unexpected behavior in your application.

```javascript
    Copy code
    // Bad practice (mutating the state directly):
    // state.someProperty.push(newValue);

    // Good practice (creating a new reference):
    return { ...state, someProperty: [...state.someProperty, newValue] };
```

If you directly modify an array or object in the state, the reference might remain the same, and Redux may not trigger re-renders or update subscribers, causing your UI to be out of sync with the actual state.

In summary, Redux relies on reference equality checks to efficiently determine state changes. It's crucial to maintain immutability when updating the state to ensure that Redux recognizes the changes and triggers the necessary updates in your application. Using patterns like the spread operator or libraries like Immer can help you achieve immutability in your Redux reducers.

### JS object property

```js
    {id: 0, name: 'Ayan', age: 20, name: 'abcd'}
```

There is a duplicate property with the key "name" in the object. When an object in JavaScript has multiple properties with the same key, the last occurrence of that key will overwrite any previous occurrences. In this case, the second occurrence of "name" (name: 'abcd') will overwrite the first occurrence (name: 'Ayan').
