import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Button, Card, Table, message, Popconfirm } from 'antd';
import CreateBill from '../components/basket/CreateBill';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/features/BasketSlice';
import { DeleteFilled } from '@ant-design/icons';

const BasketPage = () => {
  const basket = useSelector((state) => state.basket);

  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Ürün Adı',
      dataIndex: 'title',
      key: 'title',
      width: '14%',
      render: (value) => {
        return (
          <div className='text-center'>
            <span style={{ fontSize: '24px' }}>{value}</span>
          </div>
        );
      },
    },
    {
      title: 'Ürün Görseli',
      dataIndex: 'img',
      key: 'img',
      width: '8%',
      render: (text) => {
        return <img src={text} alt='' className='w-full h-80 object-cover' />;
      },
    },
    {
      title: 'Ürün Adeti',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '8%',
      render: (value) => {
        return (
          <div className='text-center'>
            <span style={{ fontSize: '24px' }}>{value}</span>
          </div>
        );
      },
    },
    {
      title: 'Toplam Ürün Fiyatı',
      dataIndex: 'price',
      key: 'price',
      render: (val, record) => {
        return (
          <div className='text-center'>
            <span style={{ fontSize: '24px' }}>
              {(record.quantity * val).toFixed(2)}₺
            </span>
          </div>
        );
      },
      width: '8%',
    },
    {
      title: 'Ürün İşlemi',
      width: '8%',
      render: (_, record) => {
        return (
          <Popconfirm
            title='Ürünü sepetten çıkartmak istiyor musunuz?'
            onConfirm={() => {
              dispatch(deleteBook(record));
              message.success('Ürün Sepetten Silindi.');
            }}
            okText='Evet'
            cancelText='Hayır'
          >
            <div className='text-center'>
              <Button type='link' danger size='large'>
                <DeleteFilled />
              </Button>
            </div>
          </Popconfirm>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const subTotal = basket.total.toFixed(2);
  return (
    <>
      <Header />
      {basket.basketItems.length > 0 ? (
        <div className='px-6'>
          <Table
            scroll={{
              x: 1200,
              y: 600,
            }}
            dataSource={basket.basketItems}
            columns={columns}
            bordered
            pagination={true}
          />
          <div className='cart-total flex justify-end mt-4'>
            <Card className='w-72'>
              <div className='flex justify-between'>
                <b>Sipariş Toplamı</b>
                <b>{subTotal}₺</b>
              </div>
              <Button
                className='mt-4 w-full'
                onClick={showModal}
                type='text'
                htmlType='submit'
                style={{
                  backgroundColor: '#00704a',
                  color: 'white',
                }}
                size='large'
              >
                Fatura Düzenle
              </Button>
            </Card>
          </div>
        </div>
      ) : (
        <div className='flex justify-center align-center'>
          <img src={'images/preview.png'} alt='emptyBasket' />
        </div>
      )}

      <CreateBill
        subTotal={subTotal}
        cartItems={basket.basketItems}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default BasketPage;
