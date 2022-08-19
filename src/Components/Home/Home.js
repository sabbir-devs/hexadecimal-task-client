import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://fast-lake-41053.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data)
        })
    },[])
    return (
        <div className='home'>
            <h1>{users?.length}</h1>
            {
                users?.map(user => <Table user={user} key={user._id}></Table>)
            }
        </div>
    );
};

export default Home;