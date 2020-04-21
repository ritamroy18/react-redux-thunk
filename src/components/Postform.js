import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts,newPosts } from '../actions/postActions'

export class PostForm extends Component {


    componentDidMount(){
        this.props.fetchPosts();
        // this.props.newPosts();
    }
 
    showMore = () => {
        this.props.newPosts(this.props.posts.length);
    }

    render() {
        console.log(this.props.posts.length)
     
        return (
            <div>
                <h2>All Post</h2>
                {
                        this.props.posts.map((post, i) => <h3 key={i}>{post.id}-{post.title}</h3>)

                    //  this.props.posts.map(post => <h3 key={post.id}>{post.title}</h3>)
                    //  this.props.posts.slice(0, this.state.itemsToShow).map((post, i) => 
                    //     <h3 key={i}>{post.id} - {post.title}</h3>
                    //  )
                     }

                    <p>
                     <button className="btn btn-primary"  onClick={this.showMore}>Show more</button>
                    </p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
    posts: state.posts.items  
})
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
     
        newPosts: (postLength) => dispatch(newPosts({ posts: postLength, val: 10})),
    }    
}


// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         fetchPosts: () => dispatch(fetchPosts()),
//         newPosts: (props) => {
//             dispatch(newPosts({posts: this.props.posts.length, val: 10}));
//         }
//     }
// }

// export default PostForm
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
