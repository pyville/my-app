import React from 'react'; 
import { Link } from 'react-router-dom';
import { WhiteSpace, Button, TextareaItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function MedicalPage() {

    return (
        <>
            <Header />
            <WhiteSpace />
            <h1>
                어디가
                <br />
                아프신가요?
            </h1>
            <TextareaItem 
                placeholder="아프신 곳을 알려주세요"
                title=""
                clear="true"
            />
            <WhiteSpace />
            <Link to="/medical/result"><Button type="primary" size="large">확인</Button></Link>
            <WhiteSpace />
            <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
        </>
    );
}