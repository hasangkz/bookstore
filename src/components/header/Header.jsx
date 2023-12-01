import React from 'react';
import { ShoppingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Badge } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../style/GeneralStyle.css';

const Header = ({ setSearch }) => {
  const basket = useSelector((state) => state.basket);

  const { pathname } = useLocation();

  return (
    <div className='border-b-4'>
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
              <h2 className='md:text-4xl text-3xl font-bold '>BOOK STORE</h2>
            </NavLink>
          </div>
        </div>
        {pathname === '/' && (
          <div className='header-search flex-1'>
            <Input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder='Ne aramıştınız?'
              size='large'
              className='rounded-full max-w-[1200] h-14 border-b-2 border-orange-400 focus-within:border-orange-400'
            />
          </div>
        )}
        <div>
          <Badge
            count={basket.basketItems.length}
            offset={[0, 0]}
            style={{ backgroundColor: '#00704a' }}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? '#fb923cd9' : '',
                  borderBottom: isActive ? '3px solid ' : '',
                };
              }}
              to={'/cart'}
              className='menu-link flex flex-col hover:text-[#fb923cd9] transition-all'
            >
              <ShoppingOutlined className='md:text-4xl text-2xl px-2' />
              <span
                className='md:text-[18px] text-[12px]'
                style={{ fontSize: '20px' }}
              >
                Sepet
              </span>
            </NavLink>
          </Badge>
        </div>
      </header>
    </div>
  );
};

export default Header;
