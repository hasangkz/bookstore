import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Switch,
  Form,
  Input,
  Modal,
  Select,
  Card,
  message,
} from 'antd';
import { emptyBasket } from '../../redux/features/BasketSlice';
const CreateBill = ({
  isModalOpen,
  handleOk,
  handleCancel,
  subTotal,
  cartItems,
  setIsModalOpen,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let totalItems = cartItems?.length;

  const onFinish = () => {
    try {
      message.success('Sipariş başarıyla oluşturuldu.');
      form.resetFields();
      setIsModalOpen(false);
      dispatch(emptyBasket());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        footer={false}
        title='Fatura Oluştur'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='text-xl p-5 mt-5 text-gray-500'>
          <span>{totalItems} adet ürün siparişini tamamlamak için:</span>
        </div>
        <Form
          form={form}
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item
            label='Ad'
            name='name'
            rules={[{ required: true, message: 'Lütfen isminizi girin!' }]}
          >
            <Input placeholder='İsim' />
          </Form.Item>

          <Form.Item
            label='Telefon'
            name='phoneNumber'
            rules={[
              { required: true, message: 'Lütfen telefon numarasını girin!' },
            ]}
          >
            <Input placeholder='Telefon' maxLength={11} />
          </Form.Item>
          <Form.Item
            label='Adresi'
            name='customerAddress'
            rules={[{ required: true, message: 'Lütfen adresiniz, girin!' }]}
          >
            <Input placeholder='Adres' />
          </Form.Item>

          <Form.Item
            label='Ödeme Yöntemi'
            name='paymentMode'
            rules={[{ required: true, message: 'Ödeme Yöntemini Seçin!' }]}
          >
            <Select placeholder='Ödeme yöntemi seçin'>
              <Select.Option value='Nakit'>Nakit</Select.Option>

              <Select.Option value='Kart'>Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label='Eve Servis'
            name='isForHome'
            valuePropName='checked'
          >
            <Switch />
          </Form.Item>
          <br />

          <Card className='w-100'>
            <div className='flex justify-between'>
              <span>Toplam</span>
              <span>{subTotal}₺</span>
            </div>
            <Button
              htmlType='submit'
              className='mt-4 w-full'
              size='large'
              type='text'
              style={{
                backgroundColor: '#00704a',
                color: 'white',
              }}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
