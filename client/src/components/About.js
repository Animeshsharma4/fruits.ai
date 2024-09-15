import React from 'react';
import './About.css'; // Import the CSS file

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
                    <img src="https://via.placeholder.com/150?text=John+Doehttps://images.unsplash.com/photo-1516831474-1e2c1b4d4c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
                <div className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Team Member 3" />
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
        </div>
    );
};

export default About;
