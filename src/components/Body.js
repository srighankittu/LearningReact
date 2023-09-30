import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Swiggy_API } from "../utils/common";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);    
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);    
    useEffect(() => {
        fetchData();
    }, []);
    let ResListFromAPI;
    const fetchData= async () => {
        const APIData = await fetch(Swiggy_API);
        const json = await APIData.json();
        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        ResListFromAPI = json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(ResListFromAPI);
        setFilteredListOfRestaurants(ResListFromAPI);
    }
    console.log(ResListFromAPI);
    if (listOfRestaurants.length === 0){
        return <Shimmer/>;
    }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            {/* {console.log(testResList)} */}
            <div className="filter-body">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value); 
                        //setFilteredListOfRestaurants(listOfRestaurants);
                                               
                    }}/>
                    <button onClick={() => {
                        //Filter the cards and update UI
                        //Search text
                        console.log(searchText);
                        let filteredListOfRes = listOfRestaurants.filter(
                            res => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredListOfRes);
                        // setListOfRestaurants(filteredRes);
                    }} className="filter-btn">Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        res => res.info.avgRating >= 4.3
                    )
                    setFilteredListOfRestaurants(filteredList)
                //console.log(testResList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredListOfRestaurants.map((restaurant) => (
                        <Link className="linkStyles" key={restaurant.info.id}  to={"restaurant/" + restaurant.info.id} style={{ textDecoration: 'none', margin: "50px" }}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;