import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import { Link } from 'react-router-dom';



import './home-page.css';
import Loading from '../../components/Loading/Loading';

export default function HomePage() {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const setSearchkeyFn = (value) => {
        setSearchKey(value);
    }
    useEffect(() => {
        axios.get(`https://openlibrary.org/search.json?q=${searchKey}`)
        .then(res => {
            let data = res.data;
            let resultObject = [];
            for(let doc of data.docs){
                resultObject = [...resultObject, {'key': doc.key ,'title': doc.title, 'author': doc.author_name, 'editionCount': doc.edition_count, 'firstPublishYear': doc.first_publish_year, 'languages': doc.language, 'place': doc.place, 'publisher': doc.publisher[0]}];
            }
            setSearchResults(resultObject);
            // setIsLoading(!isLoading);
        })  
    }, [searchKey]);

    return (
        <div className="home-page">
            <SearchComponent setSearchkeyFn={setSearchkeyFn}></SearchComponent>

            {/* {
                isLoading && <Loading/>
            } */}
            {
                isLoading && <div className="search-results">
                {searchResults.map((item, k) => {
                    return( 
                    <>
                    <Link to={`detail${item.key}`}>
                        <div className="item" key={k}>
                            <h4>{item.title}</h4>
                            <p>{item.author}</p>
                        </div>
                    </Link>
                    </>
                    )
                })
                }
            </div>
            }

            
        </div>
    )
}
