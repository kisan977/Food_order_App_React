import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BmcRestro & Bar</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.mainImage}>
        <img src={mealsImage} alt="main_image_restro" />
      </div>
    </Fragment>
  );
};

export default Header;
