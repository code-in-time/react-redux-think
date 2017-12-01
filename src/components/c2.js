import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, displayActiveBlock } from '../actions/index';

class c2 extends Component {

    componentDidMount() {
            this.props.fetchPosts();
    }

  render() {
      console.log(this.props.posts, '------------------xxxxxx')
    return (
        <div>
            <div className="c2">Component c2
                <button onClick={(e) => this.props.displayActiveBlock('myc2_button') }>CLICK c2</button>
            </div>
        </div>
    );
  }
}



function mapStateToProps(state) {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts, displayActiveBlock})(c2);

