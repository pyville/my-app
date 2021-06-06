import React from 'react'; 
import { Link } from 'react-router-dom';
import { Modal, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function MedicalPillsPage() {
    const alert = Modal.alert

    return (
        <>
            <Header />
            <WingBlank>
                <WhiteSpace />
                <h1>
                    타이레놀
                    <br />
                    주문할게요.
                </h1>
                <WhiteSpace />
                <Button type="primary" size="large" onClick={
                    () => {
                        const alertInstance = alert('결제 확인', '결제하시겠습니까?', [
                          { text: '취소', style: 'default' },
                          { text: '확인' },
                        ]);
                    }
                }>
                결제</Button>
                <WhiteSpace />
                <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
                </WingBlank>
        </>
    );
}