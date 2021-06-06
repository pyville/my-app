import React from 'react'; 
import { Link } from 'react-router-dom';
import { WingBlank, WhiteSpace, Button, List } from 'antd-mobile';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function MedicalMapPage() {
    const Item = List.Item;

    return (
        <>
            <Header />
            <WingBlank>
                <WhiteSpace />
                <h1>
                    가까운 병원을
                    <br />
                    찾고 있어요.
                </h1>
                <iframe 
                    src="https://m.map.naver.com"
                    width="300px"
                    height="300px"
                />
                <p><LoadingOutlined /></p>
                <List renderHeader={() => '추천 병원'} className="my-list">
                    <Item onClick={() => {}}>
                        맘편한병원
                    </Item>
                    <Item onClick={() => {}}>
                        고려대학교병원
                    </Item>
                    <Item onClick={() => {}}>
                        안심정형외과
                    </Item>
                </List>
                <WhiteSpace />
                <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
                </WingBlank>
        </>
    );
}