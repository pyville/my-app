import React from 'react'; 
import Header from '../components/Header'; 
import { DatePicker, List, TextareaItem, WhiteSpace, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default function SignPage() { 
    return (
        <>
            <Header />
            <h1>
                선생님에 대해 알고 싶어요
                <br />
                성함을 알려주세요
            </h1>
            <WhiteSpace />
            <TextareaItem 
                placeholder="홍길동"
                title="성명"
                clear="true"
            />
            <WhiteSpace />
            <h1>
                생년월일도 궁금해요
            </h1>
            <WhiteSpace />
            <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={new Date(Date.now())}
                >
                    <List.Item arrow="horizontal">생년월일</List.Item>
                </DatePicker>
            </List>
            <WhiteSpace />
            <WhiteSpace />
            <Link to="/main"><Button type="primary" size="large">다음</Button></Link>
        </>
    ); 
} 