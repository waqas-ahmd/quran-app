import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ pageNumber }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(`/page/${pageNumber}`);
    }, 3000);
  }, []);
  return (
    <div className="homepage">
      <h1 className="urdu">القرآنِ الحکیم</h1>
      {/* <h5 className="subheading">16 Lines Holy Qur'an</h5> */}
    </div>
  );
};

export default Home;
