import React from 'react'
import { useSearchParams } from 'react-router-dom'
import UserTable from '../components/pagination/UserTable';
import "../components/pagination/Pagination.css"

export default function PaginationUsers() {

    const[searchParam,setSearchparam]= useSearchParams();

    const pageFromUrl = Number(searchParam.get('page'))|| 1;

    const users = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      age: 24,
      city: "Chennai",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      age: 26,
      city: "Bangalore",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      age: 28,
      city: "Coimbatore",
    },
    {
      id: 4,
      name: "Divya Raj",
      email: "divya@gmail.com",
      age: 23,
      city: "Madurai",
    },
    {
      id: 5,
      name: "Karthik S",
      email: "karthik@gmail.com",
      age: 27,
      city: "Salem",
    },
    {
      id: 6,
      name: "Sneha Devi",
      email: "sneha@gmail.com",
      age: 25,
      city: "Chennai",
    },
    {
      id: 7,
      name: "Vijay Kumar",
      email: "vijay@gmail.com",
      age: 30,
      city: "Trichy",
    },
    {
      id: 8,
      name: "Anjali R",
      email: "anjali@gmail.com",
      age: 22,
      city: "Bangalore",
    },
    {
      id: 9,
      name: "Suresh Babu",
      email: "suresh@gmail.com",
      age: 31,
      city: "Coimbatore",
    },
    {
      id: 10,
      name: "Meena Priya",
      email: "meena@gmail.com",
      age: 24,
      city: "Madurai",
    },
    {
      id: 11,
      name: "Ajay Kumar",
      email: "ajay@gmail.com",
      age: 29,
      city: "Chennai",
    },
    {
      id: 12,
      name: "Keerthana M",
      email: "keerthana@gmail.com",
      age: 23,
      city: "Salem",
    },
    {
      id: 13,
      name: "Naveen Raj",
      email: "naveen@gmail.com",
      age: 27,
      city: "Erode",
    },
    {
      id: 14,
      name: "Harini S",
      email: "harini@gmail.com",
      age: 25,
      city: "Coimbatore",
    },
    {
      id: 15,
      name: "Manoj Kumar",
      email: "manoj@gmail.com",
      age: 32,
      city: "Chennai",
    },
    {
      id: 16,
      name: "Pavithra R",
      email: "pavithra@gmail.com",
      age: 26,
      city: "Bangalore",
    },
    {
      id: 17,
      name: "Dinesh Kumar",
      email: "dinesh@gmail.com",
      age: 28,
      city: "Trichy",
    },
    {
      id: 18,
      name: "Swetha Devi",
      email: "swetha@gmail.com",
      age: 24,
      city: "Madurai",
    },
    {
      id: 19,
      name: "Ramesh S",
      email: "ramesh@gmail.com",
      age: 30,
      city: "Salem",
    },
    {
      id: 20,
      name: "Lakshmi Priya",
      email: "lakshmi@gmail.com",
      age: 27,
      city: "Erode",
    }];

    const perPage = 5;

    const totalPage = Math.ceil(users.length/perPage);
    const currentPage = Math.min(Math.max(pageFromUrl,1),totalPage) ;
    const startIndex = (currentPage -1) * perPage;
    const currentUsers = users.slice(startIndex,startIndex+perPage);
    const changePage = (page)=>{
        setSearchparam({
             page:page.toString(),
        } )
    }

    const handlePrevious =()=>{
        if(currentPage>1){
            changePage(currentPage-1)
        }

    }
    const handleNext = ()=>{
        if(currentPage<=totalPage){
            changePage(currentPage+1)
        }
    }



  return (
    <div className="pagination-page">
        <div className="pagination-header">
            <div>
                <h3>Table With Pagination</h3>
            </div>
        </div>
        <UserTable users={currentUsers}/>

        <div className="pagination-controls">
            <button onClick={handlePrevious} disabled={currentPage === 1} className='pagination-button'>Previous</button>
            <div className="page-info">
                <span>page</span>
                <strong>{currentPage}</strong>
                <span>Of {totalPage}</span>
            </div>
            <button onClick={handleNext} disabled={currentPage === totalPage} className='pagination-button'>Next</button>
        </div>
    </div>
    

  )
}
