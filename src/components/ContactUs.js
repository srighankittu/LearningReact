const ContactUs = () => {
    return (
        <div className="contact">
            <div className="contact-form">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.</p>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                    <button type="submit">Send Message</button>
                </div>
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>If you prefer to contact us through other means, here are our details:</p>
                <ul>
                    <li><span className="info-label">Address:</span> 123 Restaurant Street, Foodville</li>
                    <li><span className="info-label">Phone:</span> +1 (123) 456-7890</li>
                    <li><span className="info-label">Email:</span> info@thegourmetoasis.com</li>
                </ul>
            </div>
        </div>
    );
}

export default ContactUs;