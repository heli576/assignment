import { Divider, Grid, Paper } from "@mui/material";
import React from "react";
import { fetchCityList, fetchGenderList, fetchStatusList } from "../../helper";
import InputField from "../Inputs/InputField";
import SelectMenu from "../Inputs/SelectMenu";
import swal from "sweetalert";

const FilterMain = ({users, inputData, setInputData}) => {
   const {name, gender, count, city, status} = inputData;

   const genderList = fetchGenderList(users);
   const cityList = fetchCityList(users);
   const statusList = fetchStatusList(users);

    return (
        <Paper style={{marginBottom:20}}>
            <Grid container sx = {{padding: 3}}>
                <InputField 
                label = "Name"
                type = "text"
                value = {name}
                handleChange={(v)=> setInputData({...inputData, name:v})}
                />
            <Divider orientation="vertical" flexItem />
            
            <SelectMenu
            label = "Gender"
            value = {gender}
            list = {genderList}
            handleChange = {(v)=> setInputData({...inputData, gender:v})}
            />

            <Divider orientation="vertical" flexItem />

            <InputField 
                label = "Count"
                type = "number"
                value = {count}
                handleChange={(v)=>{
                    if(parseInt(v)<=0||parseInt(v)>users.length){
                        swal("Oops!", "Invalid count selected", "error");
                    }else{
                        setInputData({...inputData, count:v})}
                    }
                } 
                />
            <Divider orientation="vertical" flexItem />

            <SelectMenu
            label = "Status"
            value = {status}
            list = {statusList}
            handleChange = {(v)=> setInputData({...inputData, status:v})}
            />
            <Divider orientation="vertical" flexItem />
           
            <SelectMenu
            label = "Address"
            value = {city}
            list = {cityList}
            handleChange = {(v)=> setInputData({...inputData, city:v})}
            />
            </Grid>
        </Paper>
    );
}

export default FilterMain