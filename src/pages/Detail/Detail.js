import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Descriptions} from 'antd';
import Loading from '../../components/Loading/Loading';
import moment from 'moment';
export default function Detail() {
    const k = useParams();
    
    const [item, setItem] = useState(k.id);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://openlibrary.org/works/${item}.json`)
            .then(res => {setItem(res.data); setIsLoading(!isLoading);})
    }, [item]);
    return (
        <div>
            {isLoading && <Loading/>}
            {!isLoading && <Descriptions title="Detail Info" layout="vertical">
                <Descriptions.Item label="Title">{item.title}</Descriptions.Item>
                <Descriptions.Item label="First Publish Date">{item.first_publish_date}</Descriptions.Item>
                <Descriptions.Item label="Latest Revision">{item.latest_revision}</Descriptions.Item>
                {
                    item.last_modified.value && <Descriptions.Item label="Last Modified">{moment().format(item.last_modified.value)}</Descriptions.Item>
                }
                {/* <Descriptions.Item label="Last Modified">{item.last_modified.value}</Descriptions.Item> */}
            </Descriptions>}
        </div>
    )
}
