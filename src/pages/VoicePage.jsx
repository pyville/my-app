import React from 'react'; 
import { WhiteSpace } from 'antd-mobile';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd-mobile/dist/antd-mobile.css';
import Header from '../components/Header'; 

export default function VoicePage() { 

    return (
        <>  
            <Header />
                <h1>
                    듣고 있어요
                </h1>
                <WhiteSpace />
                <WhiteSpace />
                <p><LoadingOutlined /></p>
        </>
    ); 
}