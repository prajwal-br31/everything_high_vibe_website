import React from 'react';
import './Homepage.css'; // Import the CSS for the slider
import banners from './banners.json';


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="image-slider-container-outer">
        <div className="image-slider-container">
          <div className="image-slider">
            {banners.map((banner) => (
              <div key={banner.id} className="image-item">
                <img
                  src={banner.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <div class="text">
          <text class="textfont">Welcome to Everything High Vibe Store!</text>
          <br></br><br></br>
          <p class="p">
            At our shop, we believe in the transformative power of high-vibe energy to elevate every aspect of life.
            We are passionate about offering products that inspire positivity, mindfulness, and spiritual growth.
            Each item is carefully selected to promote balance, healing, and a deeper connection to your higher self.
            <br></br><br></br>
            Our goal is to create a space where you can find tools, inspirations, and reminders to nurture your soul,
            uplift your spirit, and bring a sense of peace into your daily life. With a focus on quality, authenticity,
            and intentionality, we are here to support your journey toward living with greater joy, clarity, and harmony.
            Let us help you bring high-vibe energy into your life, one product at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
