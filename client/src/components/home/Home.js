import React from "react";
import './Home.css'; // Import custom CSS

function Home() {
  return (
    <div className="home-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTG1LW-o46L89kVB2prwNmWNpXYH5nU-2qeg&s"
        className="home-image"
        alt="BlogApp"
      />
      <h2 className="home-text">
      Kalki will come within this millennium. He will take birth in India. Lord Kalki will be expected to incarnate on the Shukla Paksha Dwadashi Tithi(12th day of the bright fortnight) in the Hindu month Vaishakha. According to some beliefs, he will appear at the end of this Kali Yuga which is about 432,000 years away.      </h2>
    </div>
  );
}

export default Home;
