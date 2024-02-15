'use client';
import styles from './sidebar.module.scss'
import Image from "next/image";
import { useState } from 'react';
import HomeIcon from '../atoms/icon/home-icon';
import CreditIcon from '../atoms/icon/credit-icon';
import Menu from '../molecules/menu';
import Avatar from '../atoms/icon/avatar-icon';
import LogoutIcon from '../atoms/icon/logout-icon';

const Sidebar = () => {
    const [expand, setExpand] = useState<boolean>(false);
    return (
        <div className={`${styles.wrapper} ${expand ? styles.expand : styles.collapse}`} onMouseOver={() => setExpand(true)} onMouseLeave={() => setExpand(false)}>
            <div className={styles.header}>
                <Image
                    src="/account.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={50}
                    height={50}
                    priority
                />
                <div className="flex-row-center mt-4" >
                    <div className={styles.creditWrapper}>
                        <CreditIcon />
                    </div>
                    <span style={{ paddingLeft: '12px' }}>Credit</span>
                </div>
            </div>
            <div className={styles.body}>
                <Menu />
            </div>

            <div className={styles.footer}>
                <div className={styles.avatar}>

                    <Avatar />
                </div>
                <div className={styles.avatar}>
                    <LogoutIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;