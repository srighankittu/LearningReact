import { Interior_IMG, Dish1_IMG, Dish2_IMG } from "../utils/common";
const AboutUs = () => {

    return (
    //     <div>
    //         <div className="about-content">
    //         <h1>About Us</h1>
    //         <p>Welcome to the culinary world of <span className="restaurant-name">The Gourmet Oasis</span>. We are not just a restaurant; we are an experience.</p>
    //         <p>Our journey began in 2010 when our founder, Chef Michael Smith, envisioned a place where food transcends taste and becomes art. With passion as our secret ingredient, we've crafted a menu that celebrates flavors, diversity, and innovation.</p>
    //         <p>At <span className="restaurant-name">The Gourmet Oasis</span>, we believe that every dish tells a story. Our dedicated team of chefs and staff work tirelessly to ensure that each plate is a masterpiece, a reflection of our commitment to excellence.</p>
    //         <p>Our restaurant isn't just about food; it's about creating memories. Whether you're celebrating a special occasion or simply savoring a quiet dinner, we promise an unforgettable experience that will keep you coming back for more.</p>

    //         <!-- Additional content (you can extend this further) -->
    //         <!-- ... -->

    //         <!-- Stylish CSS animations -->
    //         <div className="special-dishes">
    //             <h2>Our Special Dishes</h2>
    //             <div className="dish">
    //                 <img src="dish1.jpg" alt="Special Dish 1">
    //                 <h3>Signature Dish 1</h3>
    //                 <p>Our Signature Dish 1 is a masterpiece of flavors, combining the finest ingredients and culinary expertise. Prepare to be delighted!</p>
    //             </div>
    //             <div className="dish">
    //                 <img src="dish2.jpg" alt="Special Dish 2">
    //                 <h3>Signature Dish 2</h3>
    //                 <p>Signature Dish 2 is a celebration of textures and tastes. It's a feast for the senses that you won't want to miss.</p>
    //             </div>
    //             <!-- Add more dishes as needed -->
    //         </div>
    //     </div>
    //     <div className="about-image">
    //         <img src="restaurant-interior.jpg" alt="Restaurant Interior">
    //     </div>
    // </section>
    // <footer>
    //     <p>&copy; 2023 The Gourmet Oasis. All rights reserved.</p>
    // </footer>
    //     </div>
        <div className="about-content">
            <h1>About Us</h1>
             <p>Welcome to the culinary world of <span className="restaurant-name">The Gourmet Oasis</span>. We are not just a restaurant; we are an experience.</p>
             <p>Our journey began in 2010 when our founder, Chef Michael Smith, envisioned a place where food transcends taste and becomes art. With passion as our secret ingredient, we've crafted a menu that celebrates flavors, diversity, and innovation.</p>
             <p>At <span className="restaurant-name">The Gourmet Oasis</span>, we believe that every dish tells a story. Our dedicated team of chefs and staff work tirelessly to ensure that each plate is a masterpiece, a reflection of our commitment to excellence.</p>
             <p>Our restaurant isn't just about food; it's about creating memories. Whether you're celebrating a special occasion or simply savoring a quiet dinner, we promise an unforgettable experience that will keep you coming back for more.</p>
             <div className="special-dishes">
                 <h2>Our Special Dishes</h2>
                 <div className="dish">
                     <img src={Dish1_IMG} alt="Special Dish 1" />
                     <h3>Signature Dish 1</h3>
                     <p>Our Signature Dish 1 is a masterpiece of flavors, combining the finest ingredients and culinary expertise. Prepare to be delighted!</p>
                 </div>
                 <div className="dish">
                     <img src={Dish2_IMG} alt="Special Dish 2" />
                     <h3>Signature Dish 2</h3>
                     <p>Signature Dish 2 is a celebration of textures and tastes. It's a feast for the senses that you won't want to miss.</p>
                 </div>               
            </div>
            <div className="about-image">
                <img src={Interior_IMG} alt="Restaurant Interior" />
            </div>
        </div>
    );
}

export default AboutUs;