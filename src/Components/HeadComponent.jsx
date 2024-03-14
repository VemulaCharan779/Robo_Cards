import React, { useState } from "react";

const HeadComponent = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event) => {
        setSearchQuery(event.target.value); 
        onSearch(event.target.value); 
    };

    return (
        <>
            <div className="header">
                <h1>ROBO FRIENDS</h1>
                <input 
                    type="text" 
                    placeholder="Search Robot" 
                    value={searchQuery} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <hr />
            </div>
        </>
    );
}

export default HeadComponent;
