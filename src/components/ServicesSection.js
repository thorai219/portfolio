import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import home2 from "../img/home2.jpg";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <FaClock size={27} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FaMoneyBillAlt size={27} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FcServices size={27} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <AiOutlineTeam size={27} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="laptops" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 0.5rem;
    border-radius: 9px;
  }
`;

export default ServicesSection;
