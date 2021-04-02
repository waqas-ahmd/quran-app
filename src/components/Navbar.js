import React, { useState } from "react";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import Brightness6RoundedIcon from "@material-ui/icons/Brightness6Rounded";
import FullscreenRoundedIcon from "@material-ui/icons/FullscreenRounded";
import FullscreenExitRoundedIcon from "@material-ui/icons/FullscreenExitRounded";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import { getParaNumber } from "../utils/getParaNumber";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#873EFF",
    color: "white",
    boxShadow: "theme.shadows[1]",
    fontSize: 11,
    borderRadius: 0,
  },
}))(Tooltip);

const Navbar = ({
  pageNum,
  nextPage,
  prevPage,
  nextPara,
  prevPara,
  savePage,
  changeDarkMode,
  fullscreen,
}) => {
  const paraNum = getParaNumber(pageNum);
  const [isFullScreen, setFullScreen] = useState(fullscreen.active);
  const handleFullScreen = () => {
    isFullScreen ? fullscreen.exit() : fullscreen.enter();
    setFullScreen(!isFullScreen);
  };

  const [open, setOpen] = React.useState(false);

  const handleSavePage = () => {
    savePage();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="functions">
          <div className="nav-icon">
            <MyTooltip title="Remember this Page">
              <SaveRoundedIcon onClick={handleSavePage} />
            </MyTooltip>
          </div>
          <div className="nav-icon">
            <MyTooltip title="Switch Dark Mode">
              <Brightness6RoundedIcon onClick={changeDarkMode} />
            </MyTooltip>
          </div>
          <div onClick={handleFullScreen} className="nav-icon">
            {isFullScreen ? (
              <MyTooltip title="Exit Full Screen">
                <FullscreenExitRoundedIcon />
              </MyTooltip>
            ) : (
              <MyTooltip title="Enter Full Screen">
                <FullscreenRoundedIcon />
              </MyTooltip>
            )}
          </div>
        </div>
        <div className="navigation">
          <div className="nav-icon">
            <MyTooltip title="Next Chapter">
              <ChevronLeftRoundedIcon onClick={nextPara} />
            </MyTooltip>
          </div>
          <div className="urdu">{paraNum} : پارہ</div>
          <div className="nav-icon">
            <MyTooltip title="Previous Chapter">
              <ChevronRightRoundedIcon onClick={prevPara} />
            </MyTooltip>
          </div>

          <div className="nav-icon">
            <MyTooltip title="Next Page">
              <ChevronLeftRoundedIcon onClick={nextPage} />
            </MyTooltip>
          </div>
          <div className="urdu">
            {pageNum + 1}-{pageNum} : صفحہ
          </div>
          <div className="nav-icon">
            <MyTooltip title="Previous Page">
              <ChevronRightRoundedIcon onClick={prevPage} />
            </MyTooltip>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          PAGE BOOKMARKED
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Navbar;
