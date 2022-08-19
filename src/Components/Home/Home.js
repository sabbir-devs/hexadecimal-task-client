import React, { useEffect, useState } from 'react';

const Home = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Home;