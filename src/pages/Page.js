import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { createPageNumber } from "../utils/createPageNumber";
import {
  LOCAL_STORAGE_KEY_PAGES,
  LOCAL_STORAGE_KEY_VISION,
  PARAS_PAGES,
} from "../utils/constants";
import { getParaNumber } from "../utils/getParaNumber";

const Page = ({ fullscreen }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_VISION)) || false
  );
  const location = Number(useLocation().pathname.replace("/page/", ""));
  const paraNum = getParaNumber(location);
  const nextPage = () => location < 548 && navigate(`/page/${location + 2}`);
  const prevPage = () => location > 1 && navigate(`/page/${location - 2}`);
  const nextPara = () =>
    paraNum < 30 && navigate(`/page/${PARAS_PAGES[paraNum]}`);
  const prevPara = () =>
    paraNum > 1 && navigate(`/page/${PARAS_PAGES[paraNum - 2]}`);

  const savePage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PAGES, location);
  };

  const changeDarkMode = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY_VISION, !darkMode);
    setDarkMode(!darkMode);
  };

  const handleWheel = (e) => {
    e.deltaY > 0 ? nextPage() : prevPage();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <Navbar
        pageNum={location}
        nextPage={nextPage}
        prevPage={prevPage}
        nextPara={nextPara}
        prevPara={prevPara}
        savePage={savePage}
        changeDarkMode={changeDarkMode}
        fullscreen={fullscreen}
      />
      <div onWheel={handleWheel} className="pagesContainer">
        <img
          onDoubleClick={nextPage}
          className={darkMode ? "negative-image" : ""}
          src={`/page-images/${createPageNumber(location + 2)}.png`}
          alt="page"
        />
        <img
          onDoubleClick={prevPage}
          className={darkMode ? "negative-image" : ""}
          src={`/page-images/${createPageNumber(location + 1)}.png`}
          alt="page"
        />
      </div>
    </div>
  );
};

export default Page;
