import styles from './card-title.module.scss';


const CardTitle = ({children}) => {
    return (
        <div className={styles['card-wrapper']}>
                {children}
        </div>
    )
}

export default CardTitle;