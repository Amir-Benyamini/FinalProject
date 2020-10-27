import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import LessonsStore from './Stores/LessonsStore';
const axios = require('axios')

// const getLessons = async function() {
//   try {
//     const response = await axios.get('/getAllClasses');
//     LessonsStore(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

const leesons = LessonsStore([{title:'Meditaion', decription:'short meditaion seasion for enhanced focus and stress release', price: 50, teacher:'Yaron', level:'beginner',duration: 30, img:'https://www.news-medical.net/image.axd?picture=2019%2F5%2Fshutterstock_688367407.jpg'}, {title:'Yoga', decription:'short yoga seasion for relaxing muscles and mobility', price: 40, teacher:'Shahar', level:'beginner', duration: 20, img:'https://lh3.googleusercontent.com/ZkshrLf54rvmlMBg_Rg78yCr3FDCWWm9yURMvsWI-2Vsn__fB1TflmKO0Lzthgbhdwqid48jTBTFKIEzy_NyCl9YPMkEIkfNpvSbE3_9ZQLYCdID=d'}, {title:'Hiit', decription:'short and beginner frindly high intencity interval workout for calories burning and faster metabolism', price: 30, teacher:'Michal', level:'beginner', duration: 15, img:'https://nak2.com/wp-content/uploads/2019/01/hiit-fit-og.jpg'}])

const stores = {leesons}

ReactDOM.render(
  <React.StrictMode>
   <Provider {...stores}> <App /></Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
