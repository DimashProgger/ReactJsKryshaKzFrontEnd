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

function MorePage(){

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
        
        <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
            {/* <img src={image} alt="Loading..." width="450" height="400"/> */}
                <img src= {image} class="img-fluid" alt="Loading..." width="450" height="400"></img>
            </div>
            <div class="col" style={{backgroundColor: '#FFCC66'}}>
                <div class="card-block px-2">
                    <h4 class="card-title"><b style={{fontSize: '17px'}}>{name}</b></h4>
                    <p class="card-text"><b style={{fontSize: '17px'}}>Описание: {description}</b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>Цена: {price} 〒</b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>Telephone of seller: {telephoneOfSeller} </b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>typeOfService: {typeOfService} </b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>typeOfObject: {typeOfObject} </b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>city: {city} </b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>rooms: {rooms} </b></p>
                    <p class="card-text"><b style={{fontSize: '17px'}}>buildingCondition: {buildingCondition} </b> 
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <a className = "btn btn-danger  " href = {`/edititem/${id}`}>EDIT</a></p>
                    
                    {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            I keep my house clean all the time !
        </div>
        </div>
            
        <br></br><br></br>
                <div className = "container">
                <section className = "seo-content">
                    <h4>«Под крышей дома своего...»</h4>
                    <p>Каждый человек хотя бы раз в своей жизни неминуемо сталкивается с операциями на рынке недвижимости. И неудивительно, ведь все мы живём на собственной либо арендованной жилплощади, работаем в помещениях, которые являются объектами недвижимости.</p>
                    <p>Практически каждый из нас мечтает о приобретении большой красивой квартиры или дома, и многим эту мечту удаётся реализовать. Кроме того, есть немало людей, для которых операции с недвижимым имуществом – это их бизнес или работа.</p>
                    <p>Именно потому, что недвижимость – это неотъемлемая часть нашей жизни, сайт krisha.kz, в деятельности которого на равных правах принимают участие все участники рынка, очень популярен в Казахстане уже много лет. Кем бы вы ни были: брокером, владельцем крупной риэлторской компании, покупателем, продавцом, арендатором или арендодателем – наш сайт будет очень полезным для вас.</p>
                    <p>
                    krisha.kz – это постоянный доступ к актуальной базе объявлений о продаже, покупке, аренде квартир, домов, дач, земельных участков в городах и сёлах Казахстана, а также к информации о любых видах коммерческой недвижимости. Во всех объявлениях указана цена объекта, что очень важно для анализа конкретной ситуации.
                    </p>
                    <p>
                    Читайте новости, аналитические материалы и статьи о состоянии и перспективах рынка. Задавайте вопросы — и мы с удовольствием на них ответим. Наши еженедельные обзоры рынков позволят вам постоянно держать руку на пульсе, а у хорошо информированного человека всегда больше шансов для совершения выгодной сделки. Работая с объявлениями о покупке, продаже и аренде, вы всегда будете знать реальные цены.
                    </p>
                    <p>
                    С нами у каждого есть замечательная возможность купить, продать, сдать, снять или обменять недвижимость без посредников. Но если вы не уверены, что отлично разбираетесь в юридических тонкостях, или по какой-то причине не можете уделить достаточно времени поиску подходящих вариантов, обращайтесь к профессионалам. При помощи krisha.kz вы легко подберёте наиболее подходящие риэлторскую и юридическую компании, которые сэкономят ваше время и снизят риски при любых операциях с недвижимостью.
                    </p>


                </section>
                </div>
        
        </div>
    )

}

export default MorePage;