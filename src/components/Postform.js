import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPosts,newPosts } from '../actions/postActions'
import { newPosts } from '../actions/postActions'

import logo from '../images/logo.svg';
import minilogo from '../images/logo512.png';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
// import '../components/Postform.css';
import '../App.css';

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
                <h2>Image Gallery</h2>
                <div className="flex-container" >
                    {
                       
                        this.props.posts.map((post, i) =>
                        //  <h3 key={i}>{post.id}-{post.title}</h3>
                        // <div style={{ width: '100%' }}  key={i}>
                        <div  key={i}>
                         {<img  
                         src = {post.urls['small']} />}
                        </div>
                        //  </Box>
                        //  </div>
                         )
                       
                     }
                     </div>
                   
                        {!this.props.loading &&
                        // <button className="btn btn-primary"  onClick={this.showMore}>Show more</button>
                        <img src={minilogo} height="100px" width="100px" alt="Show More" onClick={this.showMore} />
                        }                        
 
                     {this.props.loading && <img src = {logo} height="200" width="200"  className = "App-logo"/>}
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
