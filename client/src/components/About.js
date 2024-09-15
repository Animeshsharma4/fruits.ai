import React from 'react';
import './About.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
            Fruit.ai represents a
significant advancement in health
management solutions. By combining
technology with user-centric design, it
offers a comprehensive tool for improving
health outcomes. The future of health
management is here.

            </p>
            <div className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                    <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
                <div className="team-member">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Team Member 3" />
                    <h3>Emily Johnson</h3>
                    <p>Lead Developer</p>
                </div>
            </div>
            <div className="mission-vision">
                <h2>Our Mission & Vision</h2>
                <p>
                    
                    {/* Fruit.ai is an innovative health management solution designed to enhance overall
wellness. This presentation explores its design and development, highlighting key
features and benefits that cater to diverse health needs. Join us as we delve into
the transformative potential of health management. */}
Our mission is to innovate and provide the best solutions for our customers.
                    We envision a world where technology seamlessly integrates with daily life.
                </p>
            </div>
            <Link to="/home" className="home"><img src="https://th.bing.com/th/id/OIP.ZjWGBPoRd-zD8247yg5nAgHaHa?rs=1&pid=ImgDetMain" alt ="go to home page"></img></Link>

        </div>
    );
};

export default About;
