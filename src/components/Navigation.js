import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Switch from 'react-switch';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul className='navigation-list'>
          <li>
            <a style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='active' href='#home'>Trang chủ</a>
          </li>
          <li>
            <a style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='active' href='#news'>Giới thiệu</a>
          </li>
          <li>
            <a style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='active' href='#about'>Dịch vụ</a>
          </li>
          <li>
            <a style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='active' href='#contact'>Liên hệ</a>
          </li>
          <li>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlFor="toggle-theme-btn" style={{ marginRight: '10px', fontSize: '14px' }}>
                Switch to {!dark ? 'Dark' : 'Light'} mode
              </label>
              <Switch
                checked={dark}
                onChange={toggle}
                onColor="#000"
                onHandleColor="#fff"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                height={16}
                width={40}
                className="react-switch"
                id="toggle-theme-btn"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
