import React from 'react'


const Home = () => {
  const boxStyles = {
    width: '1000px',
    height: '500px',
    backgroundColor: 'white',
    //border: '1px solid gray',
    padding: '150px',
    display:'flex',
    flexDirection: 'column',     // Arrange items vertically
    justifyContent: 'center',    // Center vertically
    alignItems: 'center',        // Center horizontally
    textAlign: 'center',         // Center text within the box
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    fontfamily: 'Satisfy'
  };

  const logoStyles = {
    width: '100px',          // Adjust logo width as needed
    marginLeft: '1000px',      // Space between box and logo
  };

  return (
    <div style={boxStyles}>
      {/* Content inside the box */}
      <h1>About</h1>
      <h4>Sytron stands tall as a celebrated annual technical fest hosted by the prestigious Department of Electronics and Communication Engineering at the esteemed Institute of Engineering and Management (IEM) in Kolkata. Drawing participants from all corners of the nation, this captivating event serves as a melting pot of cutting-edge ideas, technological marvels, and inventive solutions. The primary objective of SYTRON is to exhibit and celebrate the remarkable strides made in the realm of technology and foster an environment of innovation, learning, and growth. By bringing together students, professionals, and experts, the fest aspires to instill a profound sense of technical knowledge and expertise in the minds of the attendees. At the core of SYTRON's captivating allure are an array of thrilling and enlightening activities that captivate both participants and spectators alike. Throughout the fest, participants are engrossed in hackathons that challenge their creative prowess, coding competitions that test their programming acumen, and robotics competitions that push the boundaries of autonomous machines. </h4>

      <img
style={logoStyles}
src={"piaz/src/LOGO_Sytron (1).png"}  // Replace with actual logo path
alt="Logo"
/>

    </div>


  );
};

export default Home;
