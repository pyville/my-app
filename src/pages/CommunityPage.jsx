import React from 'react'; 
import { Link } from 'react-router-dom';
import { Button, WingBlank, List, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function CommunityPage() {
    const Item = List.Item;
    const Brief = Item.Brief;

    return (
        <>
            <Header />
            <WingBlank>
                <h1>
                    커뮤니티에
                    <br />
                    참여해 보세요
                </h1>
            </WingBlank>
                <div>
                <List renderHeader={() => '자주 묻는 질문'} className="my-list">
                        <Item onClick={() => {}}>
                            커뮤니티 가입은 어떻게 하나요?
                        </Item>
                        <Link to="/community/counsel">
                            <Item onClick={() => {}}>
                                의료 상담에 참여하는 방법을 알려주세요.
                            </Item>
                        </Link>
                    </List>
                    <List renderHeader={() => '오늘의 건강 정보'} className="my-list">
                        <Item arrow="horizontal" onClick={() => {}}>
                            노인들을 위한 생활습관 5가지 <Brief>건강하게 먹고, 운동하고, 자고</Brief>
                        </Item>
                    </List>
                    <List renderHeader={() => '커뮤니티별 게시판'} className="my-list">
                        <Item arrow="horizontal" multipleLine onClick={() => {}}>
                            코로나19 <Brief>생활 속 거리두기, 백신 정보</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => {}}>
                            허리 <Brief>허리건강, 뼈건강, 골다공증</Brief>
                        </Item>
                        <Item arrow="horizontal" multipleLine onClick={() => {}}>
                            혈관 <Brief>고지혈증, 투석</Brief>
                        </Item>
                    </List>
                    <WhiteSpace />
                    <WingBlank>
                        <Link to="/voice"><Button size="large">🎙 말로 할래요</Button></Link>
                    </WingBlank>
                </div>
            
        </>
    );
}