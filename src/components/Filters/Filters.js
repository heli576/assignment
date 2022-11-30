import React, { useEffect, useState } from "react";
import FilterHeader from "./FilterHeader";
import FilterMain from "./FilterMain";


const Filters = ({ users, filters, setFilters, clearSearch, filterUsers }) => {
    const [inputData, setInputData] = useState({
        name: "",
        gender: "",
        city: "",
        count: 5,
        status: ""
    });
    const searchData = async() => {
        setFilters({...filters,...inputData});
        await filterUsers({...filters,...inputData});
    };

    const clearData = async() => {
        setFilters({...filters, name:"",gender:"",city:"",count:5, status:""});
        setInputData({...filters, name:"",gender:"",city:"",count:5, status:""});
        await clearSearch();
    }

    useEffect(()=>{
       setInputData({
        name: filters.name,
        gender: filters.gender,
        city: filters.city,
        count: filters.count,
        status: filters.status
       })
    },[filters])
    return (
        <>
        <FilterHeader users = {users} searchData = {searchData} clearData = {clearData}/>
        <FilterMain 
        users ={users}
        inputData = {inputData}
        setInputData = {setInputData}
        />
        </>
    );
}

export default Filters