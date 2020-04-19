import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

export class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemsToShow : 10,
        }
    }
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    showMore() {
        this.setState({
            itemsToShow: this.state.itemsToShow + 10
        });
    } 
    render() {
        
        return (
            <div>
                <h2>All Post</h2>
                {
                    //  this.props.posts.map(post => <h3 key={post.id}>{post.title}</h3>)
                     this.props.posts.slice(0, this.state.itemsToShow).map((post, i) => 
                        <h3 key={i}>{post.id} - {post.title}</h3>
                     )}
                        <p>
                     <button className="btn btn-primary" onClick = {()=>this.showMore()}>Show more</button>
                    </p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    // console.log('state', state);
    posts: state.posts.items  
})
// export default PostForm
export default connect(mapStateToProps, {fetchPosts})(PostForm);
