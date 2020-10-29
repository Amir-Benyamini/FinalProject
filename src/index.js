import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import lessonsStore from './Stores/LessonsStore';
import userStore from './Stores/userStore';
const axios = require('axios')

const getLessons = async function() {
  try {
		const response = await axios.get('/allLessons');
		
    return(response);
  } catch (error) {
    console.error(error);
  }
}

// const getUser = async function() {
//   try {
//     const response = await axios.get('/getUser');
//     LessonsStore(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const user = userStore({id:7, name:'Amir Benyamini', pasword:278278, img:'https://media-exp1.licdn.com/dms/image/C4D03AQHEmW4PGr22_A/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=lsPfv0-L-wjz6vcEe6YnJex_MvwEBvK2G6l1IIvk5bQ', nextLessons:[1,2,3]})

const lessons = lessonsStore(getLessons())

// const lessons = lessonsStore(getLessons())
const stores = {lessons, user}

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
