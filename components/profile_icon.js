'use client'

// components/ProfileIcon.js
import React, { useState } from 'react';
import styles from './profile_icon.module.css';
import {log} from "next/dist/server/typescript/utils";
import Image from "next/image";

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
            <Image src={"/ProfileIcon.jpg"} alt={"profile"} width={21} height={21}/>
        </div>
    );
};

export default ProfileIcon;

