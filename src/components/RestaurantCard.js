import { IMAGE_URL } from "../utils/common";

const RestaurantCard = (props) => {    
    const {resData} = props;
    const {name,cuisines, avgRating, sla,cloudinaryImageId,costForTwo} = resData?.info; // optional chaining operator
    // return (<div classNameName="res-card">
    //             <img classNameName="res-logo" src={ IMAGE_URL + cloudinaryImageId}/>
    //             <h3>{name}</h3>
    //             <h4>{cuisines.join(", ")}</h4>
    //             <h4>{avgRating} stars</h4>
    //             <h4>{sla.deliveryTime} minutes</h4>
    //             <h4>{costForTwo}</h4>
    //         </div>
    //     );
    return (
        <div className="restaurant-card">
            <img src={ IMAGE_URL + cloudinaryImageId} alt="Restaurant Image" />
            <div className="restaurant-details">
                <h1 className="restaurant-name">{name}</h1>
                <div className="restaurant-rating">
                    {avgRating} stars
                </div>
                <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
                <p className="restaurant-cost">{costForTwo}</p>
            </div>
        </div>
    );
};


export default RestaurantCard;