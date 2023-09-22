import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [testResList, setTestResList] = useState(resList);
       
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            {console.log(testResList)}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    
                    const filteredList = testResList.filter(
                        res => res.info.avgRating >= 4.3
                    )
                setTestResList(filteredList)
                console.log(testResList)
                }}>Top Rated Restaurant</button>
                <button className="filter-btn" onClick={() => {
                    setTestResList(resList)
                }}>
                    Reset
                </button>
            </div>
            <div className="res-container">
                {
                    testResList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;