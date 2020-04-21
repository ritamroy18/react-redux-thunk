import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPosts } from '../actions/postActions'

import logo from '../images/logo.svg';
import minilogo from '../images/logo512.png';
// import '../components/Postform.css';
import '../App.css';

export class PostForm extends Component {

    componentDidMount(){
        const { posts, newPosts } = this.props;
        newPosts(posts.page);
    }

    showMore = () => {
        const { posts, newPosts } = this.props;
        // update the post page
        newPosts(posts.page);
    }

    render() {
      const { posts, loading } = this.props;

        return (
            <div>
                <h2>Image Gallery</h2>
                <div className="flex-container" >
                    {
                        posts.items.map((post, i) =>
                            <div className="content" key={i}>
                                <img src = {post.urls['small']} />
                            </div>
                        )
                     }
                     </div>

                      {
                        !loading
                        ? <img src={minilogo} height="100px" width="100px" alt="Show More" onClick={this.showMore} />
                        : <img src={logo} height="200px" width="200px" className="App-logo"/>
                      }
            </div>
        )
    }
}
const mapStateToProps = ({ posts, loading }) => ({
    posts,
    loading: loading || posts.loading
});

const mapDispatchToProps = dispatch => ({
    newPosts: postLength => dispatch(newPosts({ posts: postLength, val: 10}))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
