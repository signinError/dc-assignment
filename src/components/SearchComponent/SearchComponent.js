
import React from 'react';

import 'antd/dist/antd.css';
import './search-styles.css';
import { Input, Space } from 'antd';
const { Search } = Input;



export default function SearchComponent({setSearchkeyFn}) {
    const onSearch = value => setSearchkeyFn(value);
    return (
        <Space>
            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            />
        </Space>
    )
}
