import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>Home Component
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Home);
