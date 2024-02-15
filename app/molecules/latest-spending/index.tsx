import Image from "next/image";
import Link from "next/link";
import Card from "../../atoms/Card";
import style from './latest-spending.module.scss';

const LatestSpending = () => {

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
        <Card title="Latest Spending" rightHeader={<Image src='/3dot.svg'
            alt="home-icon"
            width="20"
            height="20"
        />}>
            <div className={style.wrapper}>
                <div className={style.lists}>
                    {DATA_EXPENSE.map((data, index) => {
                        return (
                            <>
                                <div className={style.list}>
                                    <Image src={data.icon}
                                        alt="home-icon"
                                        width="50"
                                        height="50"
                                    />
                                    <div className={style.description}>
                                        <h3>{data.title}</h3>
                                        <h6>{data.date}</h6>
                                    </div>
                                </div>
                                {index !== 2 && <hr style={{ borderTop: '1px solid #eeee' }} />}

                            </>
                        )
                    })}
                </div>

                <div className={style.bottom}>
                    <Link href="#"> Replay &#8594;</Link>
                </div>
            </div>
        </Card>
    )
}

export default LatestSpending;