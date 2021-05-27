import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

function Buttons() {
  return (
    <WingBlank>
      <Button type="primary" size="large">의료지원</Button>
      <WhiteSpace />
      <WhiteSpace />
      <Button size="large">커뮤니티</Button>
      <WhiteSpace />
      <WhiteSpace />
      <Button type="warning" size="large" disabled>긴급신고</Button>
      <WhiteSpace />
      <WhiteSpace />
      <Button size="large" loading>듣고 있어요</Button>
      <WhiteSpace />
      <WhiteSpace />
    </WingBlank>
  );
}

export default function App() {
  return (
    <>
      <Buttons />
      <Link to="/config" className="btn btn-primary">처음이에요</Link>
    </>
  );
}