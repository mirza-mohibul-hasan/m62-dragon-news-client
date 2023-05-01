import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-4'>
                {
                    categories.map(catagory => <p key={catagory.id}>
                        <Link to={`/category/${catagory.id}`} className='text-decoration-none text-secondary'>{catagory.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;