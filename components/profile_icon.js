'use client'

// components/ProfileIcon.js
import React, { useState } from 'react';
import styles from './profile_icon.module.css';
import {log} from "next/dist/server/typescript/utils";

const ProfileIcon = ({ label }) => {
    const [rotateMenuItem, setRotateMenuItem] = useState(false);

    const handleClick = () => {
        setRotateMenuItem(!rotateMenuItem);
    };

    return (
        <div
            onClick={handleClick}
            className={`${styles.profileIcon} ${rotateMenuItem ? styles.rotate : ''}`}
        >
            {label}
        </div>
    );
};

export default ProfileIcon;

