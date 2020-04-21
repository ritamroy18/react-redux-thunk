import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPosts,newPosts } from '../actions/postActions'
import { newPosts } from '../actions/postActions'

// import logo from './logo.svg';

export class PostForm extends Component {


    componentDidMount(){
        // this.props.fetchPosts();
        // this.props.newPosts();
        this.props.newPosts(this.props.posts.length);
    }
 
    showMore = () => {
        this.props.newPosts(this.props.posts.length);
    }

    render() {
        // console.log(this.props.posts.length)
     
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
                     {/* {this.props.loading && <img src = {logo} className = "App-logo"/>} */}
                    </p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
    posts: state.posts.items ,
    loading : state.posts.loading
})
const mapDispatchToProps = dispatch => {
    return {
        // fetchPosts: () => dispatch(fetchPosts()),
     
        newPosts: (postLength) => dispatch(newPosts({ posts: postLength, val: 10})),
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
