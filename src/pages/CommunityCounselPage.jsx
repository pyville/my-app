import React from 'react'; 
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function CommunityCounselPage() {

    return (
        <>
            <Header />
            <WingBlank>
                <h1>
                    영상통화를
                    <br />
                    시도하고 있어요
                </h1>
                <LoadingOutlined />
                <WhiteSpace />
                <Webcam 
                    width={300}
                    height={300}
                />
                <WhiteSpace />
                <Button size="large">🎙 말로 할래요</Button>
                <WhiteSpace />
                <Link to="/"><Button size="large">취소</Button></Link>
            </WingBlank>
        </>
    );
}