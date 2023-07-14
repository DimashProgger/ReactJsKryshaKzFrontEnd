import React, { Component } from 'react'
import './Style.css';
// import css from './bootstrap'
// import '/bootstrap/css';
// import './bootstrap/css/bootstrap.min.css';

import { BrowserRouter, Route, Link, Siwtch } from "react-router-dom";


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
            
            
        
      </div>
    }
}




export default Navbar