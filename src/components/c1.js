import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, displayActiveBlock } from '../actions/index';

class c1 extends Component {

    componentDidMount() {
            this.props.fetchPosts();
    }

  render() {
      console.log(this.props.posts, '------------------xxxxxx')
    return (
        <div>
            <div className="c1">Component c1
                <button onClick={(e) => this.props.displayActiveBlock('myC1_button') }>CLICK C1</button>
            </div>
        </div>
    );
  }
}



function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts, displayActiveBlock})(c1);



