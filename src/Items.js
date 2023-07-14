import React, { useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './bootstrap/css/bootstrap.min.css';

function ListItems({newItemAddedId}){

  const [data, setData] = useState([]);

  async function loadData() {
    let response = await fetch("http://localhost:8000/api/allitems");
    let tableData = await response.json();
    setData(tableData);
  }

  useEffect(() => {
    loadData();
  }, [newItemAddedId]);

  return (
    <div className = "container">
        <table className = "table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>IMAGE URL</th>
              <th>PRICE</th>
              <th>TypeOfService</th>
              <th>TypeOfObject</th>
              <th>City</th>
              <th>Rooms</th>
              <th>BuildingCondition</th>
              <th>Telephone of seller</th>
              {/* <th>AMOUNT</th> */}
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(row=>(
              <tr key = {row.id}>
                <td>
                  {row.id}
                </td>
                <td>
                  {row.name}
                </td>
                <td>
                  {row.description}
                </td>
                <td>
                  {row.image}
                </td>
                <td>
                  {row.price}
                </td>
                <td>
                  {row.typeOfService}
                </td>
                <td>
                  {row.typeOfObject}
                </td>
                <td>
                  {row.city}
                </td>
                <td>
                  {row.rooms}
                </td>
                <td>
                  {row.buildingCondition}
                </td>
                <td>
                  {row.telephoneOfSeller}
                </td>
                {/* <td>
                  {row.amount}
                </td> */}
                <td width = "10%">
                    <a className = "btn btn-primary btn-sm" href = {`/edititem/${row.id}`}>EDIT</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )

}

function Items(){
  
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
  const [newId, setNewId] = useState(0);
  const [message, setMessage] = useState("");

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

    const inputData = {name, description, image, price, typeOfService, typeOfObject, city, rooms, buildingCondition, telephoneOfSeller}
    console.log(inputData);
    addItem(inputData);
    setName("");
    setDescription("");
    setImage("");
    setPrice(0);
    setTypeOfService("");
    setTypeOfObject("");
    setCity("");
    setRooms("");
    setBuildingCondition("");
    setTelephoneOfSeller("");
    // setAmount(0);
    event.preventDefault();

  }

  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

  async function addItem(data){

    const bearer = "Bearer " + cookieJWT['jwt'].jwtToken;

    const response = await fetch("http://localhost:8000/api/additem", {
      method: "POST",
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
    setMessage(messData.id? "Data Added" : "Error");
    setNewId(messData.id);
  }

  

  return (
    <div className = "container">
      <div className = "row">
        <div className = "col-6 mx-auto">
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
            </div>
            <div className = "form-group">
              <label>
                Telephone of seller: 
              </label>
              <input type = "text" className = "form-control" value = {telephoneOfSeller} onChange = {handleTelephoneOfSellerChange} required/>
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
              <button className = "btn btn-success" >ADD ITEM</button>
            </div>
          </form>
        </div>
      </div>  
      <div className = "row mt-3">
        <div className = "col-12">
          <ListItems newItemAddedId = {newId}/>
        </div>
      </div>
     </div>
  )

}

export default Items;