import { IMAGE_URL } from "../utils/common";

const RestaurantCard = (props) => {    
    const {resData} = props;
    const {name,cuisines, avgRating, sla,cloudinaryImageId,costForTwo} = resData?.info; // optional chaining operator
    return (<div className="res-card">
                <img className="res-logo" src={ IMAGE_URL + cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
            </div>
        );
};


export default RestaurantCard;