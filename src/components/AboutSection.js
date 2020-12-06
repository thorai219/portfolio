import home1 from "../img/home1.jpg";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for quotes on your project. We are thrilled to help new
          aspiring software developers obtain experience.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="dark background laptop" />
      </Image>
    </About>
  );
};

export default AboutSection;
