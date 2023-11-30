import React from 'react';
import { CoffeeOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Badge } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

const Header = ({ setSearch }) => {
  // @ts-ignore
  // const basket = useSelector((state) => state.basket);
  // @ts-ignore

  const { pathname } = useLocation();

  return (
    <div className='border-b  '>
      <header className='p-6 flex justify-between items-center gap-10'>
        <div className='header-logo flex items-center gap-6'>
          <div className='header-logo-img'>
            <NavLink to='/'>
              <img
                className='object-contain h-20 w-20 '
                src='https://cdn-icons-png.flaticon.com/512/5320/5320512.png'
                alt='logo'
              />
            </NavLink>
          </div>
          <div className='header-logo-exp'>
            <NavLink to='/'>
              <h2 className='md:text-4xl text-3xl font-bold '>KİTAPÇI</h2>
            </NavLink>
          </div>
        </div>
        {pathname === '/' && (
          <div className='header-search flex-1'>
            <Input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder='Ne aramıştınız?'
              size='large'
              className='rounded-full max-w-[1200] h-14 border-b-2 border-green-600 focus-within:border-green-600'
            />
          </div>
        )}
        <div className='header-menu flex justify-between items-center gap-10 md:static fixed z-10 bottom-0 md:w-auto w-screen md:transparent bg-white left-0 md:border-t-0 border-t md:p-0 p-4'>
          <div className='mb-2'>
            {/* <Badge
              count={basket.basketItems.length}
              offset={[0, 0]}
              style={{ backgroundColor: '#00704a' }}
            >
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#54399e' : '',
                    borderBottom: isActive ? '5px solid ' : '',
                  };
                }}
                to={'/cart'}
                className='menu-link flex flex-col hover:text-[#54399e] transition-all'
              >
                <ShoppingOutlined className='md:text-4xl text-2xl' />
                <span
                  className='md:text-[18px] text-[12px]'
                  style={{ fontSize: '20px' }}
                >
                  Sepet
                </span>
              </NavLink>
            </Badge> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
