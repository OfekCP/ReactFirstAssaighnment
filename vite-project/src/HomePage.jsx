import React from "react";
import {Route, Link} from "react-router-dom"
import "./HomePage.css"

const Home = ({userData}) => {
  const currentDate= new Date()
  const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const currentYear=currentDate.getFullYear()
  const selectedDate = new Date(userData.birthdate)
  const selectedMonth = selectedDate.getMonth();
const selectedDay = selectedDate.getDate();
const selectedYear= selectedDate.getFullYear()
const isBirthday = currentMonth === selectedMonth && currentDay === selectedDay;
const age=(currentYear-selectedYear)
  return (
    <div className="text">
     {isBirthday?(
      <div>
     <h1>happy birthday, {userData?.name} you are now {age}!</h1>
      <img src="https://www.funimada.com/assets/images/cards/big/bday-643.gif" id="gif"/>
      </div>
      ):(
      <h1>Hello, {userData?.name}</h1>
      )}
      <Link to={"/"}>
      <button class="button type1" type="submit">
          <span class="btn-txt">Click to change info</span>
        </button>
      </Link>
    </div>
  );
};

export default Home;



