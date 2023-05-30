import React, { useState } from 'react';

export default function Navigation() {
  return (
    <nav>
      <ul className='navigation-list'>
        <li>
          <a className='active' href='#home'>Trang chủ</a>
        </li>
        <li>
          <a className='active' href='#news'>Giới thiệu</a>
        </li>
        <li>
          <a className='active' href='#about'>Dịch vụ</a>
        </li>
        <li>
          <a className='active' href='#contact'>Liên hệ</a>
        </li>
      </ul>
    </nav>
  );
}
