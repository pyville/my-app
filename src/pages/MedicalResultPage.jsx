import React from 'react'; 
import { Link } from 'react-router-dom';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function MedicalResultPage() {

    return (
        <>
            <Header />
            <WingBlank>
                <WhiteSpace />
                <h1>
                    어떤 작업을
                    <br />
                    수행할까요?
                </h1>
                <WhiteSpace />
                <Link to="/medical/map"><Button type="primary" size="large">가까운 병원 찾아보기</Button></Link>
                <WhiteSpace />
                <Button size="large">원격진료 받기</Button>
                <WhiteSpace />
                <Link to="/medical/pills"><Button size="large">약 처방받기</Button></Link>
                <WhiteSpace />
                <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
            </WingBlank>
        </>
    );
}