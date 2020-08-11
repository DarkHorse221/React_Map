import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import IncidentTable from './Table';
import CreateIncidentForm from './Form';

class Incident extends Component {

  static propTypes = {
  }

  componentDidMount() {
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {

    return (
      <React.Fragment>
         <Row type="flex" justify="end">
          <Col>
            <Button onClick={this.showModal} type="primary">
              <PlusCircleTwoTone />
              Create new incident
            </Button>
          </Col>
        </Row>
        <div>&nbsp;</div>
        <IncidentTable />
        <CreateIncidentForm 
           visible={this.state.visible}
           onCancel={this.handleCancel}
           onCreate={this.handleCreate}
        />
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
)(Incident);
