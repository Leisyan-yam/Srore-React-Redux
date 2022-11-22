import React from 'react';

import {
    Link,
  } from "react-router-dom";

const Home = () => {

    return(
        <div className="home">
            <h1> If you keep good food in your fridge, you will eat good food.</h1>
            <button className="makeAnOrderBtn"> <Link className="Link" to='/Catalog'>Make an order </Link> </button>
        </div>
    )
}
export default Home