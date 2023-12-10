'use client'

// components/Menu.js
import React, {useState} from 'react';
import styles from './menu.module.css';

const Menu = () => {
    const [showWork, setShowWork] = useState(false);
    const [showSeoul, setShowSeoul] = useState(false);
    const [showNewYork, setShowNewYork] = useState(false);

    const handleWorkClick = () => {
        setShowWork(!showWork);
        setShowSeoul(false);
        setShowNewYork(false);
    };

    const handleSeoulClick = () => {
        setShowSeoul(!showSeoul);
        setShowNewYork(false);
    };

    const handleNewYorkClick = () => {
        setShowNewYork(!showNewYork);
        setShowSeoul(false);
    };

    const handleMenuBlur = () => {
        setShowWork(false);
        setShowSeoul(false);
        setShowNewYork(false);
    };

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuItemHeaderContainer}>
                <a onClick={handleWorkClick}> WORK</a>
            </div>
            <div className={styles.menuItemHeaderContainer} style={{
                visibility: showWork ? "visible" : "hidden",
                color: showSeoul ? "black" : "lightgrey",
            }}>
                <a onClick={handleSeoulClick}>SEOUL</a>
                <div className={styles.menuItemBodyContainer} style={{
                    visibility: showSeoul ? "visible" : "hidden",
                }}>
                    <a>PROMOTIONAL</a>
                    <a>EDITORIAL</a>
                    <a>CALENDAR</a>
                </div>
            </div>
            <div className={styles.menuItemHeaderContainer} style={{
                visibility: showWork ? "visible" : "hidden",
                color: showNewYork ? "black" : "lightgrey",
            }}>
                <a onClick={handleNewYorkClick}>NEW YORK</a>
                <div className={styles.menuItemBodyContainer} style={{
                    visibility: showNewYork ? "visible" : "hidden",
                }}>
                    <a>NONFICTION</a>
                    <a>FICTION</a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
