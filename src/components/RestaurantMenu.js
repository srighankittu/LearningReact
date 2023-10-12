import { useEffect, useState } from "react";
import { Swiggy_Menu_API } from "../utils/common";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resData, setResData] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const {resID} = useParams();
    console.log(resID);
    const fetchMenu = async () =>{
        const MenuData = await fetch(Swiggy_Menu_API + resID);
        const Menujson = await MenuData.json();
        //console.log(Menujson);
        setResData(Menujson);
    }

    if (resData === null) return <Shimmer/>
    const {name,cuisines,costForTwoMessage,locality, areaName,avgRating} = resData?.data?.cards[0]?.card?.card?.info;
    //console.log(temp);
    const menuItems = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //console.log(menuItems);
    //const itemCategories = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
        <div className="restaurant-menu">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-cuisine">Cuisine: {cuisines}</p>
          <p className="restaurant-cost-for-two">Cost for Two: {costForTwoMessage}</p>
          <p className="restaurant-distance">Locality: {locality} {areaName}</p>
          <p className="restaurant-ratings">Ratings: {avgRating}</p>          
          <div className="menu-items">
            <h2 className="menu-heading">Menu Items:</h2>
            <ul className="menu-list">
              {console.log(menuItems)}
              {menuItems.map((item) => (
                  <li className="menu-item" key={item.card.info.id}>
                    <span className="item-name">{item.card.info.name}</span>
                    <span className="item-price">{"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      );
}



export default RestaurantMenu;