import React, { useState, useEffect } from 'react';
import './test.css';
import {useCookies} from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";







function MyCard(props) {
  
    return <div className = "col-3">
          <div className = "card">
          <img src={props.photo} className="card-img-top"></img>
              <div className="card-body">
              <h5 className="card-title">{props.zagolovok}</h5>
              <p className="card-text">{props.cardText}</p>
              <a href={props.href} className="btn btn-warning">{props.linkText}</a>
              </div>
          </div>
      </div>;
  }

// class Content extends Component{
    
//     render() {
//         return <div className="container">
        
//         <div class="hot-header">
//             <h3>
//             Горячие предложения недвижимости в Казахстане
//             </h3>
//         </div>

//         <div class="main-body">
//             <div className = "row mt-3">
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/4d/4d16a187-a74d-457c-93ae-2989dd3e81ec/1-200x150.webp" zagolovok="2-комнатная квартира, 50 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/9f/9f77c206-336e-4c31-b17e-cbeae86b7c86/1-200x150.webp" zagolovok="3-комнатная квартира, 72 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/ea/ea360e20-9053-4697-b5fd-e05a93e06990/4-200x150.webp" zagolovok="4-комнатная квартира, 61 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/c6/c617a9d4-844b-487e-b2d2-c8223efdd7f9/6-200x150.webp" zagolovok="1-комнатная квартира, 58 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
                
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/9a/9add1dad-792b-455d-a71a-6202026bc3c9/1-200x150.webp" zagolovok="3-комнатная квартира, 94 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/5e/5e7def5f-2679-40de-a1eb-8ec91b519b42/1-200x150.webp" zagolovok="2-комнатная квартира, 67 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/de/de83948d-09fb-4dc7-b325-3df8af7a99a1/7-200x150.webp" zagolovok="1-комнатная квартира, 84 м²" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//                 <MyCard photo="https://photos-kr.kcdn.kz/webp/5b/5bfe5218-b517-47d1-b402-21b823580d67/10-200x150.webp" zagolovok="4-комнатная квартира, 93 м² Forte" cardText = "11/11 этаж, Орынбор 12 — проспект Кабанбай Батыра" href="#" linkText="Подробнее"/>
//             </div>
//         </div>
        
//       </div>

      
//     }
// }



function Content() {

    async function loadSData() {
  
  
        let response;
        
    
         response = await fetch("http://localhost:8000/api/search/" + search + "/" + search2 + "/" + search3 + "/" + search4 + "/" + search5, {
         method:'GET',
         headers: {
           "Content-Type": "application/json",
            
         }
      });

        let tableData = await response.json();
        setData(tableData);

      }

    const [data, setData] = useState([]);

    const handleSearchChange = event =>{
        setSearch(event.target.value);
    }
    const [search, setSearch] = useState("Rent");

    const handleSearch2Change = event =>{
        setSearch2(event.target.value);
    }
    const [search2, setSearch2] = useState("Almaty");

    const handleSearch3Change = event =>{
        setSearch3(event.target.value);
    }
    const [search3, setSearch3] = useState("Flat");


    const handleSearch4Change = event =>{
        setSearch4(event.target.value);
    }
    const [search4, setSearch4] = useState("2-3rooms");

    const handleSearch5Change = event =>{
        setSearch5(event.target.value);
    }
    const [search5, setSearch5] = useState("OldBuilding");

    

    async function loadData() {
    let response = await fetch("http://localhost:8000/api/allitems");
    let tableData = await response.json();
    setData(tableData);
    }

    useEffect(() => {
    loadData();
    }, []);


        return <div className="">
            {/* return <div className="container"> */}

<div>
    
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
                
                    <select class="select"  value={search}  onChange={ async (e) => { await handleSearchChange(e)}}> 
                        
                        <option value="Sell" selected >Купить</option>
                        <option value="Rent">Снять</option>
                    </select>
                    
                    <select class="select" value={search3}  onChange={ async (e) => { await handleSearch3Change(e)}}> 
                        <option value="Flat" selected>квартиру</option>
                        <option value="House">дом</option>
                        <option value="value3">дачу</option>
                        <option value="value4">участок</option>
                        <option value="value5">офис</option>
                        <option value="value6">помещение</option>
                        <option value="value7">здание</option>
                        <option value="value8">магазин, бутик</option>
                        <option value="value9">промбазу, склад</option>
                        <option value="value10">прочее</option>
                    </select>
                    <select class="select" value={search2}  onChange={ async (e) => { await handleSearch2Change(e)}}> 
                        <option value="value1" >Весь Казахстан</option>
                        <option value="Almaty" selected>Алматы</option>
                        <option value="Nur-Sultan">Нур-Султан(Астана)</option>
                        <option value="Shymkent">Шымкент</option>
                        <option value="Pavlodar">Павлодар</option>
                        <option value="Taraz">Тараз</option>
                    </select>
                    <select class="select" value={search4}  onChange={ async (e) => { await handleSearch4Change(e)}}> 
                        <option value="value1" >любой комнатности</option>
                        {/* <option value="value2">1 комн.</option> */}
                        <option value="1-2rooms">1-2 комн.</option>
                        {/* <option value="value4">2 комн.</option> */}
                        <option value="2-3rooms" selected>2-3 комн.</option>
                        {/* <option value="value6">3 комн.</option> */}
                        <option value="3-4rooms">3-4 комн.</option>
                        {/* <option value="value8">4 комн.</option> */}
                        <option value="4-5rooms">4-5 комн.</option>
                        {/* <option value="value10">5 и более комн.</option> */}
                    </select>
                    
                        <input type="text" size="6" placeholder="от">
                        </input>
                        &#160;—&#160;
                        <input type="text" size="6" placeholder="до">
                        </input>
                        &#160;тг
                        
                        <button type="button" onClick={loadSData} class ="find-button">
                            Найти
                        </button>
                        <button class ="find-button">
                            <img src="https://w7.pngwing.com/pngs/556/286/png-transparent-location-icon-geolocation-symbol-computer-icons-encapsulated-postscript-symbol-miscellaneous-cdr-black.png"></img>
                            На карте
                        </button>
                        
                        
                        

                        <div calss="checkbox-panel" value={search5}  onChange={ async (e) => { await handleSearch5Change(e)}}>
                            <input class="checki" type="checkbox" name="option1" value="a1"></input>
                            есть фото&#160;&#160;
                            <input class="checki" type="checkbox" name="option2" value="NewBuilding"></input>
                            новостройки&#160;&#160;
                            <input class="checki" type="checkbox" name="option3" value="OldBuilding"></input>
                            старые дома&#160;&#160;
                            <input class="checki" type="checkbox" name="option3" value="a1"></input>
                            от хозяев&#160;&#160;
                        </div>
                        
                </div>

                    
                    
            </div>

            
            
        </div>
        
    </main>

</div>


<div className="input-group mt-3">

        
        {/* <input type="search" value={search}  onChange={ async (e) => { await handleSearchChange(e)}}  className="form-control rounded border border-primary" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /> */}
        {/* <input type="search" value={search2}  onChange={ async (e) => { await handleSearch2Change(e)}}  className="form-control rounded border border-primary" placeholder="Search" aria-label="Search" aria-describedby="search-addon" /> */}
        {/* <button type="button" onClick={loadSData} className="btn btn-outline-primary ml-2">Search</button> */}



      </div>
        <div className = "container">
        <div class="hot-header">
            <h3>
            Горячие предложения недвижимости в Казахстане
            </h3>
        </div>
                
        <div class="main-body">
            
            
            <div className = "row mt-3">


            {data?.map(row=>(

<MyCard photo={row.image} zagolovok={row.name} cardText = {row.description} href={`/MorePage/${row.id}`} linkText="Подробнее"/>
            ))}

            

            </div>
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


            <br></br><br></br>
        <div id="container2">
         <div id="part1">
             <div id="companyinfo"> <a id="sitelink" href="#">Крыша</a>
                 <p id="title">Все объявления строго провреяются</p>
                 <p id="detail">Самый удобный сайт для поиска нужного Вам жилья! </p>
             </div>
             <div id="explore">
                 <p id="txt1">Наводчик</p> <a class="link" href="#">Продажа</a> <a class="link" href="#">Аренда</a> <a class="link" href="#">Компании</a> <a class="link" href="#">Новостройки</a>
             </div>
             <div id="visit">
                 <p id="txt2">Адрес</p>
                 <p class="text">Дом 194 Б </p>
                 <p class="text">Макатаева  </p>
                 <p class="text">Алматы 0500 026 </p>
                 <p class="text">Phone: (727) 2363-3611 </p>
                 <p class="text">Fax: (727) 2363-0350 </p>
             </div>
             <div id="legal">
                 <p id="txt3">Пользовательское соглашение</p> <a class="link1" href="#">Terms and Conditions</a> <a class="link1" href="#">Private Policy</a>
             </div>
             <div id="subscribe">
                 <p id="txt4">Подпишитесь на нас</p> <br></br>
                  <input id="email" type="email" placeholder="Email"/>  <a class="waves-effect waves-light btn">Подписаться</a>
                 <p id="txt5">Свяжитесь с нами</p> <i class="fab fa-facebook-square social fa-2x"></i> <i class="fab fa-linkedin social fa-2x"></i> <i class="fab fa-twitter-square social fa-2x"></i>
             </div>
             
         </div>
         <div id="part2">
             <p id="txt6"><i class="material-icons tiny"> </i>© 2006 — 2021 «Крыша» - All right reserved</p>
         </div>
        </div>

      </div>



}



export default Content