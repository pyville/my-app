import React from 'react'; 
import Header from '../components/Header'; 
import { Link } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

function Buttons() {
  return (
    <WingBlank>
        <h1>
          100세 시대
          <br />
          오늘도 즐거운
          <br />
          하루 되세요
        </h1>
        <WhiteSpace />
        <Link to="/medical"><Button type="primary" size="large">🏥 의료지원</Button></Link>
        <WhiteSpace />
        <WhiteSpace />
        <Link to="/community"><Button size="large">🔊 커뮤니티</Button></Link>
        <WhiteSpace />
        <WhiteSpace />
        <Button type="warning" size="large" disabled>🚨 긴급신고</Button>
        <WhiteSpace />
        <WhiteSpace />
        <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
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