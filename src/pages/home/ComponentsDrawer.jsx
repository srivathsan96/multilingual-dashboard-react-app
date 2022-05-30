import React from 'react'

import classes from './ComponentsDrawer.module.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// i18n
import { useTranslation } from "react-i18next";

// Dummy Data



const ComponentsDrawer = (props) => {

    const { t } = useTranslation();

    const info = <>{t('info')}</>;
    const files = <>{t('files')}</>;
    const stakeholders = <>{t('stakeholders')}</>;
    const activeLog = <>{t('active_log')}</>;


    const navList = [info, files, stakeholders, activeLog];

    const categoryText = <>{t('category')}</>;
    const brandText = <>{t('brand')}</>;
    const packSizeText = <>{t('pack_size')}</>;
    const productNameText = <>{t('product_name')}</>;
    const componentTypeText = <>{t('component_type')}</>;
    const statusTypeText = <>{t('status')}</>;

    const product = props.product;

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.header}>
                    <div className={classes.headerIcon}><FormatListBulletedIcon fontSize="large" className={classes.listIcon} /></div>
                </div>
                <div className={classes.headerData}>
                    <h1 className={classes.heading}>{product.productName} - {product.packSize} - {product.componentType}</h1>
                    <nav className={classes.headerNav}>
                        <ul className={classes.navItems}>
                            {
                                navList.map((item) => {
                                    return <li key={Math.random()}>{item}</li>;
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classes.dataContainer}>
                <div className={classes.productInfo}>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <p className={classes.title}>{categoryText}</p>
                            <div className={classes.value}>{product.category}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{brandText}</p>
                            <div className={classes.value}>{product.brand}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{packSizeText}</p>
                            <div className={classes.value}>{product.packSize}</div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <p className={classes.title}>{productNameText}</p>
                            <div className={classes.value}>{product.productName}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{componentTypeText}</p>
                            <div className={classes.value}>{product.componentType}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{statusTypeText}</p>
                            <div className={classes.value}>{product.progressStatus}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ComponentsDrawer