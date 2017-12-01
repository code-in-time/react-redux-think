import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, displayActiveBlock } from '../actions/index';

class c4 extends Component {

    componentDidMount() {
            this.props.fetchPosts();
    }

  render() {
      console.log(this.props.posts, '------------------xxxxxx')
    return (
        <div>
            <div className="c4">Component c4
                <button onClick={(e) => this.props.displayActiveBlock('myc4_button') }>CLICK c4</button>
            </div>
        </div>
    );
  }
}



function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts, displayActiveBlock})(c4);

