import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import BeaconTable from './Table';



class Beacons extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
         <Row type="flex" justify="end">
          <Col>
            
          </Col>
        </Row>
        <div>&nbsp;</div>
        <BeaconTable />
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({
});

const actionCreators = {
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Beacons);
