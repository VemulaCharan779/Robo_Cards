import React, { useEffect, useState } from "react";
import HeadComponent from "../Components/HeadComponent";
import Card from "./Card";

const CardComponent = () => {
    const [data, setData] = useState([]);
    const [filterItem, setFilterItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    
    const perPage = 12;

    const fetchData = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${perPage}&inc=id,name,email&page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const res = await response.json();

            const userData = res.results.map((item, index) => ({
                id: `card-${(page - 1) * perPage + index}`, // Using index as a unique identifier
                name: item.name,
                email: item.email
            }));

            setData((prevData) => [...prevData, ...userData]);
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    useEffect(() => {
        // Filter the data
        const filteredData = data.filter(item =>
            item.name.first.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.trim().toLowerCase())

        );
        setFilterItems(filteredData);
    }, [data, searchQuery]);

    const handleSearch = (searchItem) => {
        setSearchQuery(searchItem);
    };

    
    const [scrolled, setScrolled] = useState(false);
    let count = 0;

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollPosition = scrollTop + clientHeight;

        if (count ===0 && scrollPosition / scrollHeight >= 0.5) { 
            setPage((prevPage) => prevPage + 1);
            setScrolled(true);
            count++;
        }
    };

    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

   
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
