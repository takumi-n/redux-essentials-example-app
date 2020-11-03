import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { AddPostForm } from './feature/posts/AddPostForm'
import { EditPostForm } from './feature/posts/EditPostForm'
import { Navbar } from './app/Navbar'
import { PostsList } from './feature/posts/PostList'
import React from 'react'
import { SinglePostPage } from './feature/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
