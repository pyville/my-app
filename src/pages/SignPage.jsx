import React from 'react'; 
import Header from '../components/Header'; 
import { DatePickerView, TextareaItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

export default function SignPage() { 
    return (
        <>
            <Header />
            <WingBlank>
                <h1>
                    선생님에 대해 알고 싶어요
                    <br />
                    성함을 알려주세요
                </h1>
                <WhiteSpace />
                <TextareaItem 
                    placeholder="홍길동"
                    title=""
                    clear="true"
                />
                <WhiteSpace />
                <h1>
                    생년월일도 궁금해요
                </h1>
                <WhiteSpace />
                <DatePickerView 
                    mode="date"
                    minDate={new Date('1920-01-01')}
                    value={new Date(Date.now())}
                    onChange={()=>{}}
                    onValueChange={()=>{}}
                />
                <WhiteSpace />
                <h1>
                    평소 건강 상태는 어떠신가요?
                </h1>
                <WhiteSpace />
                <TextareaItem 
                    placeholder="건강 상 특이사항"
                    title=""
                    clear="true"
                />
                <WhiteSpace />
                <WhiteSpace />
                <Link to="/main"><Button type="primary" size="large">다음</Button></Link>
            </WingBlank>
        </>
    ); 
} 