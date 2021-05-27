import React from 'react'; 
import Header from '../components/Header'; 
import { Link } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

function Buttons() {
  return (
    <WingBlank>
        <WhiteSpace />
        <Button type="primary" size="large">🏥 의료지원</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button size="large">🔊 커뮤니티</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button type="warning" size="large" disabled>🚨 긴급신고</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Button size="large" loading>듣고 있어요</Button>
        <WhiteSpace />
        <WhiteSpace />
    </WingBlank>
  );
}

export default function MainPage() {
  return (
    <>
        <Header />
        <Buttons />
    </>
  );
}