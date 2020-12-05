import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import home2 from "../img/home2.jpg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality</span> Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FaClock />
              <h3>Efficient</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
            consectetur corrupti deserunt? Commodi nam laborum, impedit
            doloremque quae aperiam nemo! Animi, quod? Maxime dolores nulla quas
            laudantium nihil fugit!
          </div>
          <div className="card">
            <div className="icon">
              <FaMoneyBillAlt />
              <h3>Affordable</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
            consectetur corrupti deserunt? Commodi nam laborum, impedit
            doloremque quae aperiam nemo! Animi, quod? Maxime dolores nulla quas
            laudantium nihil fugit!
          </div>
          <div className="card">
            <div className="icon">
              <FcServices />
              <h3>Diaphragm</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
            consectetur corrupti deserunt? Commodi nam laborum, impedit
            doloremque quae aperiam nemo! Animi, quod? Maxime dolores nulla quas
            laudantium nihil fugit!
          </div>
          <div className="card">
            <div className="icon">
              <AiOutlineTeam />
              <h3>Affordable</h3>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus
            consectetur corrupti deserunt? Commodi nam laborum, impedit
            doloremque quae aperiam nemo! Animi, quod? Maxime dolores nulla quas
            laudantium nihil fugit!
          </div>
        </div>
      </div>
      <img src={home2} alt="laptops" />
    </div>
  );
};

export default ServicesSection;
