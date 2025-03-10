import React from 'react';
import { Form, Input, Radio, Select, Button, Checkbox } from 'antd';

const { Option } = Select;

const MyForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    form.resetFields();
  };

  return (
    <div className="form-container">
      <h2>ФОРМА</h2>
      <Form
        form={form}
        name="myForm"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        layout="vertical"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="ФИО" />
        </Form.Item>

        <Form.Item name="gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
          <Radio.Group>
            <Radio value="female">Жен.</Radio>
            <Radio value="male">Муж.</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="country" rules={[{ required: true, message: 'Please select your country!' }]}>
          <Select placeholder="Страна">
            <Option value="russia">Россия</Option>
            <Option value="uk">United Kingdom</Option>
          </Select>
        </Form.Item>

        <Form.Item name="preferences" rules={[{ required: true, message: 'Please select your preferences!' }]}>
          <Checkbox.Group>
            <Checkbox value="icecream">Мороженное</Checkbox>
            <Checkbox value="meat">Мясо</Checkbox>
            <Checkbox value="salad">Салат</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyForm;
