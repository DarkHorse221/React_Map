import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import ParkingTable from './Table';



class VMS extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
         <Row type="flex" justify="end">
          <Col>
            {/* <Button type="primary">
              <Icon type="plus-circle" theme="twoTone" />
              Create new incident
            </Button> */}
          </Col>
        </Row>
        <div>&nbsp;</div>
        <ParkingTable />
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
)(VMS);
