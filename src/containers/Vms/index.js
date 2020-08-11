import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import VMSTable from './Table';



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
            
          </Col>
        </Row>
        <div>&nbsp;</div>
        <VMSTable />
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
