import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Booking = () => {
    const [bookings,setBookings] =useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/booking?email='+loggedInUser.email,{
        method: 'GET',
        headers: {
            authorization:`Bearer ${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[])
    return (
        <div>
            <h3>Booking Number {bookings.length}</h3>
            {
                bookings.map(book=><li>User Email:{book.name} Booked: From {new Date(book.checkIn).toDateString('dd/MM/yyyy')} To {new Date(book.checkIn).toDateString('dd/MM/yyyy')}</li>)
            } 
        </div>
    );
};

export default Booking;