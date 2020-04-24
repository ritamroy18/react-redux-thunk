import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import { newPosts } from '../actions/postActions'
import '../components/Postform.scss';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



export class PostForm extends Component {

    componentDidMount() {

        const { posts, newPosts } = this.props;
        newPosts(posts.page);
    }

    showMore = () => {
        const { posts, newPosts, loading } = this.props;
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
                <div className="content">
                    <section className="grid">
                        {
                            
                            posts.items.map((post, i) =>
                                <div data-key={post.id} className={post.height <= post.width ? 'item item-1' : 'item item-2'}>
                                    <img src={post.urls['small']} />
                                </div>
                            )
                        }
                    </section>
                </div>

                {
                    !loading.loading
                        ? <FontAwesomeIcon icon={faSpinner} size="3x" onClick={this.showMore} />
                        : <FontAwesomeIcon icon={faSpinner} size="3x" rotation={90} />
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
    newPosts: pageNumber => dispatch(newPosts({ posts: pageNumber, val: 10 }))

});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
