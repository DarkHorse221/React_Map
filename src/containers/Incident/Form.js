import React from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Modal, Input, Select, DatePicker } from 'antd';
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const CreateIncidentForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create incident"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Type">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Select defaultValue="lucy" onChange={handleChange}>
              <Option value="jack">Animal on Road</Option>
              <Option value="lucy">Debris</Option>
              <Option value="disabled">
                Detour
              </Option>
              <Option value="Yiminghe">Emergency Vehicles</Option>
            </Select>)}
            </Form.Item>
            <Form.Item label="Location">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Camera">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Select defaultValue="lucy" onChange={handleChange}>
            </Select>)}
            </Form.Item>
            <Form.Item label="Time">
              {getFieldDecorator('description')(<DatePicker style={{width: "100%"}} showTime placeholder="Select Time" onChange={console.log} onOk={console.log} />
)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default CreateIncidentForm;
