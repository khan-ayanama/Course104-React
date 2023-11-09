import flipkart from "/images/flipkart.png";
import amazon from "/images/amazon.png";
import shoeImg from "/images/shoe_image.png";

const Hero = () => {
  return (
    <div className="hero-section container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-content-btn">
          <button className="btn-1">Shop Now</button>
          <button className="btn-2">Category</button>
        </div>
        <p>Alo Available On</p>
        <div className="hero-content-icon">
          <img src={flipkart} alt="flipkart" className="flipkart" />
          <img src={amazon} alt="amazon" className="amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src={shoeImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
