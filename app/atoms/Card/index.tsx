
import { FC, PropsWithChildren, ReactNode } from "react";
import CardTitle from "../title/card-title";
import styles from "./card.module.scss";

type CardProps = {
    title?: string;
    rightHeader?: JSX.Element;
    hasHeader?: boolean;
} & PropsWithChildren

const Card: FC<CardProps> = ({ children, title, rightHeader, hasHeader = true }) => {
    return (
        <div className={styles.wrapper}>
            {hasHeader ? (
                <div className={styles.header}>
                    <div className="left">
                        <CardTitle>{title}</CardTitle>
                    </div>
                    {rightHeader &&
                        <div className="right">
                            {rightHeader}
                        </div>
                    }
                </div>
            ) : null}
            <div className={styles.body}>
                {children}
            </div>
        </div>
    )
}

export default Card;