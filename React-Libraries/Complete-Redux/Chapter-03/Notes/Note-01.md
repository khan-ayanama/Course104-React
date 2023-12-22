# Redux Data Flow

## Creating the Posts Slice

The first step is to create a new Redux "slice" that will contain the data for our posts. Once we have that data in the Redux store, we can create the React components to show that data on the page.

```js
    import { createSlice } from '@reduxjs/toolkit'

    const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
    ]

    const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
    })

    export default postsSlice.reducer
```

## Setting-Up Configure Store

```js
    import { configureStore } from '@reduxjs/toolkit'

    import postsReducer from '../features/posts/postsSlice'

    export default configureStore({
    reducer: {
        posts: postsReducer
    }
    })
```

## Rendering the data in UI

```js
    import React from 'react'
    import { useSelector } from 'react-redux'

    export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="posts-list">
        <h2>Posts</h2>
        {renderedPosts}
        </section>
    )
    }
```

## Adding New Posts

```js
    import React, { useState } from 'react'

    export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    return (
        <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            />
            <button type="button">Save Post</button>
        </form>
        </section>
    )
    }
```

## Dispatching the "Post Added" Action

```js
    import React, { useState } from 'react'
    import { useDispatch } from 'react-redux'
    import { nanoid } from '@reduxjs/toolkit'

    import { postAdded } from './postsSlice'

    export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
        dispatch(
            postAdded({
            id: nanoid(),
            title,
            content
            })
        )

        setTitle('')
        setContent('')
        }
    }

    return (
        <section>
        <h2>Add a New Post</h2>
        <form>
            {/* omit form inputs */}
            <button type="button" onClick={onSavePostClicked}>
            Save Post
            </button>
        </form>
        </section>
    )
    }
```

## Summary

### SUMMARY

* Redux state is updated by "reducer functions":
  * Reducers always calculate a new state immutably, by copying existing state values and modifying the copies with the new data
  * The Redux Toolkit createSlice function generates "slice reducer" functions for you, and lets you write "mutating" code that is turned into safe immutable updates
  * Those slice reducer functions are added to the reducer field in configureStore, and that defines the data and state field names inside the Redux store
* React components read data from the store with the useSelector hook
  * Selector functions receive the whole state object, and should return a value
  * Selectors will re-run whenever the Redux store is updated, and if the data they return has changed, the component will re-render
* React components dispatch actions to update the store using the useDispatch hook
* createSlice will generate action creator functions for each reducer we add to a slice
* Call dispatch(someActionCreator()) in a component to dispatch an action
* Reducers will run, check to see if this action is relevant, and return new state if appropriate
* Temporary data like form input values should be kept as React component state. Dispatch a Redux action to update the store when the user is done with the form.

## Updating

* Any React component can use data from the Redux store as needed
* Any component can read any data that is in the Redux store
  * Multiple components can read the same data, even at the same time
  * Components should extract the smallest amount of data they need to render themselves
  * Components can combine values from props, state, and the Redux store to determine what UI they need to render. They can read multiple pieces of data from the store, and reshape the data as needed for display.
  * Any component can dispatch actions to cause state updates
* Redux action creators can prepare action objects with the right contents
  * createSlice and createAction can accept a "prepare callback" that returns the action payload
  * Unique IDs and other random values should be put in the action, not calculated in the reducer
* Reducers should contain the actual state update logic
  * Reducers can contain whatever logic is needed to calculate the next state
  * Action objects should contain just enough info to describe what happened.
