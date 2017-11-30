import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class c1 extends Component {

    componentDidMount() {
            this.props.fetchPosts();
    }

  render() {
      console.log(this.props.posts, '------------------xxxxxx')
    return (
      <div className="red">Component c1</div>
    );
  }
}



function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(c1);



