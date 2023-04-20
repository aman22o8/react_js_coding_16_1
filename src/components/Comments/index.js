import {Component} from 'react'
import {v4 as myid} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {comments: [], name: '', mycomment: '', count: 0}

  likedfunction = id => {
    this.setState(prevState => ({
      comments: prevState.comments.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deletecomment = id => {
    const {comments} = this.state
    const filtereditem = comments.filter(each => each.id !== id)
    this.setState(prevState => ({
      count: prevState.count - 1,
      comments: filtereditem,
    }))
  }

  submittingcomment = event => {
    event.preventDefault()
    const {name, mycomment} = this.state
    const commentgiven = {
      id: myid(),
      name,
      mycomment,
      isLiked: true,
    }
    this.setState(prevState => ({
      comments: [...prevState.comments, commentgiven],
      name: '',
      mycomment: '',
      count: prevState.count + 1,
    }))
  }

  changingmyname = event => {
    this.setState({name: event.target.value})
  }

  changingmycomment = event => {
    this.setState({mycomment: event.target.value})
  }

  render() {
    const {comments, name, mycomment, count} = this.state
    console.log(comments.length)
    return (
      <div className="bg_container">
        <h1 className="main_heading">Comments</h1>
        <div className="header_container">
          <div className="part_first">
            <p className="para_class">Say something about 4.0 Technologies</p>
            <form className="forms" onSubmit={this.submittingcomment}>
              <input
                type="text"
                value={name}
                className="input_element"
                placeholder="Your Name"
                onChange={this.changingmyname}
              />
              <textarea
                className="text_area_element"
                value={mycomment}
                cols="50"
                rows="5"
                placeholder="Your Comment"
                onChange={this.changingmycomment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="comments_section">
          <p className="number_of_comments">{count}</p>
          <p className="comment">Comments</p>
        </div>
        <ul className="footer_container">
          {comments.map(each => (
            <CommentItem
              mygivencomments={each}
              key={each.id}
              counting={count}
              commentstyles={initialContainerBackgroundClassNames}
              likingfunction={this.likedfunction}
              deletingfunction={this.deletecomment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
