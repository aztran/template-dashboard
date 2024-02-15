import Image from "next/image";
import Link from "next/link";
import Card from "../../atoms/Card";
import style from './premium-card.module.scss';

const PremiumCard = () => {

    const DATA_EXPENSE = [
        {
            icon: '/spending-cart.svg',
            title: 'Online Store',
            date: 'May 30, 2023 at 08.00 pm'
        },
        {
            icon: '/spending-hospital.svg',
            title: 'Pay the hospital',
            date: 'May 28, 2023 at 08.00 pm'
        },
        {
            icon: '/spending-ticket.svg',
            title: 'Tickets',
            date: 'May 25, 2023 at 08.00 pm'
        },
    ]
    return (
        <Card hasHeader={false}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <h5>Go to premium</h5>
                </div>
                <Image src='/crown.svg'
                    alt="home-icon"
                    width="80"
                    height="80"
                />
                <h3>Need more features?</h3>
                <h4>Update your acccount to premium to get more features</h4>

                <button className="btn-primary btn">
                    Get Now
                </button>
            </div>


        </Card>
    )
}

export default PremiumCard;