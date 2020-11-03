import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import React from 'react'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { useSelector } from 'react-redux'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Eidt Post
        </Link>
      </article>
    </section>
  )
}
