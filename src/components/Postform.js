import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts,newPosts } from '../actions/postActions'

export class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            itemsToShow : 10,
        }
    }
    
    componentDidMount(){
        this.props.fetchPosts();
        // this.props.newPosts();
    }

    // showMore() {
    //     // this.setState({
    //     //     itemsToShow: this.state.itemsToShow + 10
    //     // });
    // //     const { dispatch } = this.props.posts;
    // // dispatch(fetchPosts('FETCH_POSTS'));
    // // fetchPosts()(dispatch);
    // } 

    //  showMore() {
    //     return dispatch => fetch(`http://data.com/${userId}`)
    //       .then(res => res.json())
    //       .then(
    //         data => dispatch({ type: 'USER_PROFILE_LOADED', data }),
    //         err => dispatch({ type: 'USER_PROFILE_LOAD_FAILED', err })
    //       );
    //   }

    // newPosts = () => {
        /*
          Begin by setting loading = true, and use the callback function
          of setState() to make the ajax request. Set loading = false after
          the request completes.
        */
    //     this.setState({ loading: true }, () => {
    //       fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    //         .then(result => 
    //             this.setState({
    //           loading: false,
    //           data: this.props.posts.length+ result.data.length,
    //         }));
    //     });
    //   }
    // newPosts() {
    //     this.props.posts
    // }
    render() {
        console.log(this.props.posts)
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
                     {/* <button className="btn btn-primary" onClick = {()=>this.showMore()}>Show more</button> */}
                     <button className="btn btn-primary"  onClick={()=>this.props.newPosts()}>Show more</button>
                     {/* <button className="btn btn-primary"  onClick={()=>this.newPosts()}>Show more</button> */}
                    
                    </p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    // console.log('state', state);
    posts: state.posts.items  
})
const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        newPosts: () => dispatch(newPosts()),
    }
}

// export default PostForm
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
