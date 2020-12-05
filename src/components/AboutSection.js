import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for quotes on your project. We are thrilled to help new
          aspiring software developers obtain experience.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="dark background laptop" />
      </div>
    </div>
  );
};

export default AboutSection;
