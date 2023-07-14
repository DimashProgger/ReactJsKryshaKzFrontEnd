import React, { useState, useEffect, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {useCookies} from 'react-cookie';

import './Style.css';
// import css from './bootstrap'
// import '/bootstrap/css';
// import './bootstrap/css/bootstrap.min.css';

import { BrowserRouter} from "react-router-dom";


function Search(props){



    const [typeOfService, setTypeOfService] = useState("");
    const handleTypeOfServiceChange = event =>{
      setTypeOfService(event.target.value);
    }
  
    const handleSubmit = event =>{
  
  
      setTypeOfService("");
      props.setSTypeOfService(typeOfService);
      
      event.preventDefault();
  
    }
}

function ListCards({newCardAddedId, stypeOfService}){
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
    const [data, setData] = useState([]);
    

    
  
    
  
    useEffect(() => {



        loadData();
        
      
      
      }, [newCardAddedId, stypeOfService]);
  
    async function loadData() {
  
  
      let response;
      if (stypeOfService == "")
      { 
        const bearer = "Bearer " + cookieJWT['jwt'].jwtToken;
         response = await fetch("http://localhost:8000/api/allcards", {
          method:'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": bearer
          }
      });
   
       
      
      }
      else{
  
       response = await fetch("http://localhost:8000/api/search/" + stypeOfService);
  
  }
  let tableData = await response.json();
  setData(tableData);

  


  if(data.length != 0){
    return (
  
  <div className = "container">



  <h4> {stypeOfService ? `Search results for:  ${stypeOfService}` : ''} </h4>
           
      <div className = " row">
         
              {data?.map(row=>(
  
            <div key = {row.id} className="col-4 p-4 ">
                <div  className="card  shadow-lg">
                
                  
                  <div className="card-body">
                    {row.name}
                  
                  </div>
                  
                  <div className="card-footer">
                    
                  <span className="text-muted">  {row.addedDate}</span>  <br/>
                    <a className = "btn btn-warning btn-sm " href = {`/gettasks/${row.id}`}>DETAILS</a>
                  </div>
                  
                
                </div>
                </div>
              ))}
            
           
      </div>
      </div>
  
  
    )
              }
              else{
                return(
                  <div className = "container">
                    
                  <h4> {stypeOfService ? `Search results for: ${stypeOfService}` : ''} </h4>
  
  
                <div className = "  text-center">
                   
                <h1>  No results </h1>
                
                  </div></div>);
              }
  
  
  
  
  }
  

}






function MyCard(props) {
  
    return <div className = "col-3">
          <div className = "card">
          <img src={props.photo} className="card-img-top"></img>
              <div className="card-body">
              <h5 className="card-title">{props.zagolovok}</h5>
              <p className="card-text">{props.cardText}</p>
              <a href={props.href} className="btn btn-primary">{props.linkText}</a>
              </div>
          </div>
      </div>;
  }

function NavbarFunc() {

    
      let {itemId} = useParams();
  
      const [stypeOfService, setSTypeOfService] = useState("");
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

      
  
    //   const handleSubmit = event =>{
  
    //       const inputData = {id, name, description, image, price, typeOfService, typeOfObject, city, rooms, buildingCondition};
    //       saveItem(inputData);
    //       event.preventDefault();
  
    //   }
  
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

    return <div>
    
            <header>
            <div className = "container">
            <nav class="navbar navbar-expand-lg">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a href = "https://kolesa.kz/">
                            <img src="https://sun9-75.userapi.com/impg/MclRGHlQRDV6wuZktMhxYWdCN7xriSrjw24zFQ/N48z4HvzZu8.jpg?size=82x27&quality=96&sign=b59ef87cd92f30f5f7ce399f37e3769c&type=album"></img>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <img src="https://sun9-61.userapi.com/impg/sPKgRDcUl3j5bf4co-VBW6Qa4Lz8r3slykDMMQ/g2OqWx6glkA.jpg?size=84x29&quality=96&sign=4e946843a3dcbccd0bcb6c9a5031942a&type=album"></img>
                        </a>
                    </li>
                    <li>
                        <a href = "https://market.kz/">
                            <img src="https://sun9-68.userapi.com/impg/3jyE2UYRpC7CSkc0uvkdQmylWx5kgYcEKiIbpQ/y0GkSG8iikU.jpg?size=90x27&quality=96&sign=8513bc8203b66e51ee333ffbf84d94c7&type=album"></img>
                        </a>
                    </li>
                </ul>

                
                <a class = "boba" href = "#">Избранное</a>
                
                <a class = "boba" href = "/register2">Регистрация</a>
                <a class = "boba" href = "/login">Вход</a>
                <a class = "boba" href = "/profile">Личный кабинет</a>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/home"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJOm9vVr6LxQwss1T4rociDmjgm4er8Hzo60-ksuTGMgs7culCnKPP57xkcLiykSXPGs&usqp=CAU" alt="КРЫША" width="158" height="59"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Продажа <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Аренда</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Компании и специалисты</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Новостройки</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Крыша Гид</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    
                    </ul>

                    <button className="zayava">
                        Подать заявление
                    </button>

                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                </div>
            
            </nav>
            </div>
            </header>     
            
            <main>
                <div class = "container">
                    <div class = "krishaFilter">
                        <div class = "search-panel">
                        
                            <select class="select" > 
                                
                                <option value="value1" selected >Купить</option>
                                <option value="value2">Снять</option>
                            </select>
                            
                            <select class="select"> 
                                <option value="value1" selected>квартиру</option>
                                <option value="value2">дом</option>
                                <option value="value3">дачу</option>
                                <option value="value4">участок</option>
                                <option value="value5">офис</option>
                                <option value="value6">помещение</option>
                                <option value="value7">здание</option>
                                <option value="value8">магазин, бутик</option>
                                <option value="value9">промбазу, склад</option>
                                <option value="value10">прочее</option>
                            </select>
                            <select class="select"> 
                                <option value="value1" selected>Весь Казахстан</option>
                                <option value="value2">Алматы</option>
                                <option value="value3">Нур-Султан(Астана)</option>
                                <option value="value4">Шымкент</option>
                                <option value="value5">Павлодар</option>
                                <option value="value6">Тараз</option>
                            </select>
                            <select class="select"> 
                                <option value="value1" selected>любой комнатности</option>
                                <option value="value2">1 комн.</option>
                                <option value="value3">1-2 комн.</option>
                                <option value="value4">2 комн.</option>
                                <option value="value5">2-3 комн.</option>
                                <option value="value6">3 комн.</option>
                                <option value="value7">3-4 комн.</option>
                                <option value="value8">4 комн.</option>
                                <option value="value9">4-5 комн.</option>
                                <option value="value10">5 и более комн.</option>
                            </select>
                            
                                <input type="text" size="6" placeholder="от">
                                </input>
                                &#160;—&#160;
                                <input type="text" size="6" placeholder="до">
                                </input>
                                &#160;тг
                                <button class ="find-button">
                                    Найти
                                </button>
                                <button class ="find-button">
                                    <img src="https://w7.pngwing.com/pngs/556/286/png-transparent-location-icon-geolocation-symbol-computer-icons-encapsulated-postscript-symbol-miscellaneous-cdr-black.png"></img>
                                    На карте
                                </button>
                                
                                
                                

                                <div calss="checkbox-panel">
                                    <input class="checki" type="checkbox" name="option1" value="a1"></input>
                                    есть фото&#160;&#160;
                                    <input class="checki" type="checkbox" name="option2" value="a1"></input>
                                    новостройки&#160;&#160;
                                    <input class="checki" type="checkbox" name="option3" value="a1"></input>
                                    от проверенных агентств&#160;&#160;
                                    <input class="checki" type="checkbox" name="option3" value="a1"></input>
                                    от хозяев&#160;&#160;
                                </div>
                                
                        </div>

                            
                            
                    </div>
                </div>
                
            </main>
        
      </div>
    }



class Navbar extends Component{
    render() {
        
        return <div>
    
            <header>
            <div className = "container">
            <nav class="navbar navbar-expand-lg">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <a href = "https://kolesa.kz/">
                            <img src="https://sun9-75.userapi.com/impg/MclRGHlQRDV6wuZktMhxYWdCN7xriSrjw24zFQ/N48z4HvzZu8.jpg?size=82x27&quality=96&sign=b59ef87cd92f30f5f7ce399f37e3769c&type=album"></img>
                        </a>
                    </li>
                    <li>
                        <a href = "#">
                            <img src="https://sun9-61.userapi.com/impg/sPKgRDcUl3j5bf4co-VBW6Qa4Lz8r3slykDMMQ/g2OqWx6glkA.jpg?size=84x29&quality=96&sign=4e946843a3dcbccd0bcb6c9a5031942a&type=album"></img>
                        </a>
                    </li>
                    <li>
                        <a href = "https://market.kz/">
                            <img src="https://sun9-68.userapi.com/impg/3jyE2UYRpC7CSkc0uvkdQmylWx5kgYcEKiIbpQ/y0GkSG8iikU.jpg?size=90x27&quality=96&sign=8513bc8203b66e51ee333ffbf84d94c7&type=album"></img>
                        </a>
                    </li>
                </ul>

                
                <a class = "boba" href = "#">Избранное</a>
                
                <a class = "boba" href = "/register2">Регистрация</a>
                <a class = "boba" href = "/login">Вход</a>
                <a class = "boba" href = "/profile">Личный кабинет</a>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/home"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJOm9vVr6LxQwss1T4rociDmjgm4er8Hzo60-ksuTGMgs7culCnKPP57xkcLiykSXPGs&usqp=CAU" alt="КРЫША" width="158" height="59"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Продажа <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Аренда</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Компании и специалисты</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Новостройки</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Крыша Гид</a>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    
                    </ul>

                    <button className="zayava">
                        Подать заявление
                    </button>

                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}

                </div>
            
            </nav>
            </div>
            </header>     
            
            <main>
                <div class = "container">
                    <div class = "krishaFilter">
                        <div class = "search-panel">
                            
                            <select class="select"> 
                                
                                <option value="value1" selected>Купить</option>
                                <option value="value2">Снять</option>
                            </select>
                            <select class="select"> 
                                <option value="value1" selected>квартиру</option>
                                <option value="value2">дом</option>
                                <option value="value3">дачу</option>
                                <option value="value4">участок</option>
                                <option value="value5">офис</option>
                                <option value="value6">помещение</option>
                                <option value="value7">здание</option>
                                <option value="value8">магазин, бутик</option>
                                <option value="value9">промбазу, склад</option>
                                <option value="value10">прочее</option>
                            </select>
                            <select class="select"> 
                                <option value="value1" selected>Весь Казахстан</option>
                                <option value="value2">Алматы</option>
                                <option value="value3">Нур-Султан(Астана)</option>
                                <option value="value4">Шымкент</option>
                                <option value="value5">Павлодар</option>
                                <option value="value6">Тараз</option>
                            </select>
                            <select class="select"> 
                                <option value="value1" selected>любой комнатности</option>
                                <option value="value2">1 комн.</option>
                                <option value="value3">1-2 комн.</option>
                                <option value="value4">2 комн.</option>
                                <option value="value5">2-3 комн.</option>
                                <option value="value6">3 комн.</option>
                                <option value="value7">3-4 комн.</option>
                                <option value="value8">4 комн.</option>
                                <option value="value9">4-5 комн.</option>
                                <option value="value10">5 и более комн.</option>
                            </select>
                            
                                <input type="text" size="6" placeholder="от">
                                </input>
                                &#160;—&#160;
                                <input type="text" size="6" placeholder="до">
                                </input>
                                &#160;тг
                                <button class ="find-button">
                                    Найти
                                </button>
                                <button class ="find-button">
                                    <img src="https://w7.pngwing.com/pngs/556/286/png-transparent-location-icon-geolocation-symbol-computer-icons-encapsulated-postscript-symbol-miscellaneous-cdr-black.png"></img>
                                    На карте
                                </button>
                                

                                <div calss="checkbox-panel">
                                    <input class="checki" type="checkbox" name="option1" value="a1"></input>
                                    есть фото&#160;&#160;
                                    <input class="checki" type="checkbox" name="option2" value="a1"></input>
                                    новостройки&#160;&#160;
                                    <input class="checki" type="checkbox" name="option3" value="a1"></input>
                                    от проверенных агентств&#160;&#160;
                                    <input class="checki" type="checkbox" name="option3" value="a1"></input>
                                    от хозяев&#160;&#160;
                                </div>
                                
                        </div>

                            
                            
                    </div>
                </div>
                
            </main>
        
      </div>
    }
}

// function Navbar(){

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark" style = {{backgroundColor: 'brown'}}>
//                 <Link to = '/' className="navbar-brand">
//                    iTrello
//                 </Link>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
                       
//                         <li className="nav-item">
//                         <Link to  = "/allcards" className="nav-link">
//                                 All cards
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to = "/login" className="nav-link">
//                                 Login
                                

//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to = "/register2" className="nav-link">
//                                 Register
                                

//                             </Link>
//                         </li>

//                     </ul>
                  
//                 </div>
//             </nav>
//         </div>
//     );
    
// }


export default NavbarFunc