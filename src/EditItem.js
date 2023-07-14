import React, { useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  
} from "react-router-dom";

import './bootstrap/css/bootstrap.min.css';

function EditItem(){

    let {itemId} = useParams();
  
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [typeOfService, setTypeOfService] = useState("Sell");
    const [typeOfObject, setTypeOfObject] = useState("House");
    const [city, setCity] = useState("Almaty");
    const [rooms, setRooms] = useState("1-2rooms");
    const [buildingCondition, setBuildingCondition] = useState("NewBuilding");
    const [telephoneOfSeller, setTelephoneOfSeller] = useState("");

    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        getItem(itemId);
    },[]);

    const handleNameChange = event =>{
        setName(event.target.value);
    }

    const handleDesctiptionChange = event =>{
        setDescription(event.target.value);
      }
    
      const handleImageChange = event =>{
        setImage(event.target.value);
      }

    const handlePriceChange = event =>{
        setPrice(event.target.value);
    }

    const handleTypeOfServiceChange = event =>{
        setTypeOfService(event.target.value);
      }
    
      const handleTypeOfObjectChange = event =>{
        setTypeOfObject(event.target.value);
      }
    
      const handleCityChange = event =>{
        setCity(event.target.value);
      }
    
      const handleRoomsChange = event =>{
        setRooms(event.target.value);
      }
    
      const handleBuildingConditionChange = event =>{
        setBuildingCondition(event.target.value);
      }

      const handleTelephoneOfSellerChange = event =>{
        setTelephoneOfSeller(event.target.value);
      }

    const handleAmountChange = event =>{
        setAmount(event.target.value);
    }

    const handleSubmit = event =>{

        const inputData = {id, name, description, image, price, typeOfService, typeOfObject, city, rooms, buildingCondition, telephoneOfSeller};
        saveItem(inputData);
        event.preventDefault();

    }

    async function setData(data) {
        setId(data.id);
        setName(data.name);
        setDescription(data.description);
        setImage(data.image);
        setPrice(data.price);
        setTypeOfService(data.typeOfService);
        setTypeOfObject(data.typeOfObject);
        setCity(data.city);
        setRooms(data.rooms);
        setBuildingCondition(data.buildingCondition);
        setTelephoneOfSeller(data.telephoneOfSeller);
        // setAmount(data.amount);
    }

    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    async function saveItem(data){

        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

        const response = await fetch("http://localhost:8000/api/saveitem", {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearer
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Saved" : "Error");
    }

    
   

    async function getItem(itemId) {
        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

        let response = await fetch("http://localhost:8000/api/getitem/"+itemId,  {
            method:'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": bearer
            }
        });
        if(response.status==200){
            let data = await response.json();
            setData(data);
        }else{
            setMessage("404 ITEM NOT FOUND");
        }
    }

    async function toDeleteItem() {
        const inputData = {id, name, price, description, image};
        deleteItem(inputData);
    }

    async function deleteItem(data){

        const bearer = "Bearer "+cookieJWT['jwt'].jwtToken;

        const response = await fetch("http://localhost:8000/api/deleteitem", {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization": bearer
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
        });
        let messData = await response.json();
        setMessage(messData.id? "Data Deleted" : "Error");
    }

    return (
        <div className = "container">
        <div className = "row">
            <div className = "col-6 mx-auto">
            <h1>{message}</h1>
            <form onSubmit = {handleSubmit}>
                <div className = "form-group">
                <label>
                    NAME : 
                </label>
                <input type = "text" className = "form-control" value = {name} onChange = {handleNameChange} required/>
                </div>
                <div className = "form-group">
                <label>
                    DESCRIPTION : 
                </label>
                <input type = "text" className = "form-control" value = {description} onChange = {handleDesctiptionChange} required/>
                </div>
                <div className = "form-group">
                <label>
                    IMG URL : 
                </label>
                <input type = "text" className = "form-control" value = {image} onChange = {handleImageChange} required/>
                </div>
                <div className = "form-group">
                <label>
                    PRICE : 
                </label>
                <input type = "number" className = "form-control" value = {price} onChange = {handlePriceChange} required/>
                <div className = "form-group">
              <label>
                Telephone of seller: 
              </label>
              <input type = "text" className = "form-control" value = {telephoneOfSeller} onChange = {handleTelephoneOfSellerChange} required/>
            </div>
            <div className = "form-group"></div>
                </div>
                <div className = "form-group">
              <label>
              TypeOfService : 
              </label>
              <select class = "custom-select" name="listOfServices" id="listOfServices" value = {typeOfService} onChange = {handleTypeOfServiceChange} required>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
                
              </select>
            </div>
            <div className = "form-group">
              <label>
              TypeOfObject : 
              </label>
              <select class = "custom-select" name="listOfObjects" id="listOfObjects" value = {typeOfObject} onChange = {handleTypeOfObjectChange} required>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
                
              </select>
            </div>
            <div className = "form-group">
              <label>
              city : 
              </label>
              <select class = "custom-select" name="listOfCitys" id="listOfCitys" value = {city} onChange = {handleCityChange} required>
                <option value="Almaty">Almaty</option>
                <option value="Nur-Sultan">Nur-Sultan</option>
                <option value="Shymkent">Shymkent</option>
                <option value="Pavlodar">Pavlodar</option>
                <option value="Taraz">Taraz</option>
                
              </select>
            </div>
            <div className = "form-group">
              <label>
              rooms : 
              </label>
              <select class = "custom-select" name="listOfRooms" id="listOfRooms" value = {rooms} onChange = {handleRoomsChange} required>
                <option value="1-2rooms">1-2rooms</option>
                <option value="2-3rooms">2-3rooms</option>
                <option value="3-4rooms">3-4rooms</option>
                <option value="4-5rooms">4-5rooms</option>
                
              </select>
            </div>
            <div className = "form-group">
              <label>
              BuildingCondition : 
              </label>
              <select class = "custom-select" name="listOfBuildingCondition" id="listOfBuildingCondition" value = {buildingCondition} onChange = {handleBuildingConditionChange} required>
                <option value="NewBuilding">NewBuilding</option>
                <option value="OldBuilding">OldBuilding</option>
                
              </select>
            </div>
                {/* <div className = "form-group">
                <label>
                    AMOUNT : 
                </label>
                <input type = "number" className = "form-control" value = {amount} onChange = {handleAmountChange} required/>
                </div> */}
                <div className = "form-group">
                <button className = "btn btn-success">SAVE ITEM</button>
                <button type = "button" className = "btn btn-danger ml-2" onClick = {toDeleteItem}>DELETE ITEM</button>
                </div>
            </form>
            </div>
        </div>     
        </div>
    )

}

export default EditItem;