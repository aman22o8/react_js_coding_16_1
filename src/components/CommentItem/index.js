// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentstyles,
    mygivencomments,
    counting,
    likingfunction,
    deletingfunction,
  } = props
  const {name, mycomment, id, isLiked} = mygivencomments
  const clicking = () => {
    likingfunction(id)
  }
  const deleting = () => {
    deletingfunction(id)
  }

  const unliked = isLiked ? '' : 'unlike'
  return (
    <li className="items_list">
      <div className="comment_heading_container">
        <p className={`comment_heading ${commentstyles[counting - 1]}`}>
          {name[0].toUpperCase()}
        </p>
        <p className="comment_main_heading">{name}</p>
        <p className="date">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="para_comment">{mycomment}</p>
      <div className="comment_footer">
        <button
          className={`button_like ${unliked}`}
          onClick={clicking}
          type="button"
        >
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
            />
          )}
          Like
        </button>

        <button
          type="button"
          data-testid="delete"
          onClick={deleting}
          className="button_delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="separator_comment" />
    </li>
  )
}

export default CommentItem
