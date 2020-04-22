import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPosts } from '../actions/postActions'
// import '../components/Postform.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export class PostForm extends Component {

    componentDidMount(){
        const { posts, newPosts } = this.props;
        newPosts(posts.page);
    }

    showMore = () => {
        const { posts, newPosts ,loading} = this.props;
        // update the post page
        const pageNumber = posts.page;
        // newPosts(posts.page);
        newPosts(pageNumber);
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
                        !loading.loading
                        ? <FontAwesomeIcon icon={faSpinner} size="2x" onClick={this.showMore} />
                        : <FontAwesomeIcon icon={faSpinner} size="2x" rotation={90} />
                      } 

            </div>
        )
    }
}
const mapStateToProps = ({ posts, loading }) => ({
    posts,
    // loading: loading || posts.loading
    loading 

});

const mapDispatchToProps = dispatch => ({
    newPosts: pageNumber => dispatch(newPosts({ posts: pageNumber, val: 10}))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
