import React from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './loading.css';
export default function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <div className="loading">
            <Spin indicator={antIcon} />
        </div>
    )
}
