import React from "react";
import classes from "./ProductItem.module.css";

import DrawerSection from '../drawer/DrawerSection';

// i18n
import { useTranslation } from "react-i18next";

// Importing product images

import cake from "../../resources/images/cake.png";
import coke from "../../resources/images/coke.png";
import frooti from "../../resources/images/frooti.png";
import chips from "../../resources/images/chips.png";
import chocolate from "../../resources/images/chocolate.png";

// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Product Item

const ProductItem = (props) => {

  const { t } = useTranslation();


  let product = props.product;
  // let navbarTitle = props.navbarTitle;

  // Dummy Data

  const categoryTitle = <>{t('category')}</>;
  const brandTitle = <>{t('brand')}</>;
  const productNameTitle = <>{t('product_name')}</>;
  const packSizeTitle = <>{t('pack_size')}</>;
  const componentTypeTitle = <>{t('component_type')}</>;

  let img;

  // Choosing the right image based on the product

  if (product.img === "cake") {
    img = cake;
  } else if (product.img === "coke") {
    img = coke;
  } else if (product.img === "frooti") {
    img = frooti;
  } else if (product.img === "chips") {
    img = chips;
  } else if (product.img === "chocolate") {
    img = chocolate;
  }

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img src={img} alt={props.product.img} />
      </div>
      <div className={`${classes.item} ${classes.itemCenter}`}>
        <div className={classes.item}>
          <div className={classes.title}>{categoryTitle}</div>
          <div className={classes.title}>{brandTitle}</div>
          <div className={classes.title}>{productNameTitle}</div>
          <div className={classes.title}>{packSizeTitle}</div>
          <div className={classes.title}>{componentTypeTitle}</div>
        </div>
        <div className={classes.item}>
          <div className={classes.value}>{product.category}</div>
          <div className={classes.value}>{product.brand}</div>
          <div className={classes.value}>{product.productName}</div>
          <div className={classes.value}>{product.packSize}</div>
          <div className={classes.value}>{product.componentType}</div>
        </div>
        <hr />
        <div className={`${classes.item} ${classes.status}`}>
          <div className={`${classes.statusInfo} ${classes.progressStatus}`}>
            {product.progressStatus}
          </div>
          <div className={`${classes.statusInfo} ${classes.timeStatus}`}>
            {product.timeStatus}
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.menuIcon}>
          {/* <MenuOutlinedIcon className={classes.icon} /> */}
          <DrawerSection product={product} page={'product'} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
