import React, { Component } from 'react';
import { connect } from 'react-redux';




import C1 from '../components/c1.js';
import C2 from '../components/c2.js';
import C3 from '../components/c3.js';
import C4 from '../components/c4.js';

class App extends Component {
    render() {
        return (
        <div>
            <div>React simple starter ActiveBLOCK=[ {this.props.activeBlock} ]</div>
            <C1 />
            <C2 />
            <C3 />
            <C4 />
        </div>
        );
    }
}


function mapStateToProps(state) {
    return { activeBlock: state.activeBlock}
}

export default connect(mapStateToProps)(App);
