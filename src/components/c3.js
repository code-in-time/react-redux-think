import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, displayActiveBlock } from '../actions/index';

class c3 extends Component {

    componentDidMount() {
            this.props.fetchPosts();
    }

  render() {
      console.log(this.props.posts, '------------------xxxxxx')
    return (
        <div>
            <div className="c3">Component c3
                <button onClick={(e) => this.props.displayActiveBlock('myc3_button') }>CLICK c3</button>
            </div>
        </div>
    );
  }
}



function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts, displayActiveBlock})(c3);

