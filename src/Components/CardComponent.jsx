import React, { useEffect, useState } from "react";
import HeadComponent from "../Components/HeadComponent";
import Card from "./Card";

const CardComponent = () => {
    const [data, setData] = useState([]);
    const [filterItem, setFilterItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const perPage = 12;

    const fetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${perPage}&inc=id,name,email`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const res = await response.json();

            const userData = res.results.map((item) => ({
                id: item.id.name + item.id.value,
                name: item.name,
                email: item.email
            }));

            setData(userData);
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Filter the data 
        const filteredData = data.filter(item =>
            item.name.first.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
        setFilterItems(filteredData);
    }, [data, searchQuery]); 

    const handleSearch = (searchItem) => {
        setSearchQuery(searchItem);
    };

    return (
        <div>
            <HeadComponent onSearch={handleSearch} />
            <div className="robo-cards">
                {filterItem.map((val) => (
                    <Card key={val.id} name={val.name.first} email={val.email} />
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
