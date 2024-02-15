import Image from "next/image";
import Link from "next/link";
import Card from "../../atoms/Card";
import style from './last-transaction.module.scss';

const LastTransaction = () => {

    const DATA_TRANSACTION = [
        {
            icon: '/account.svg',
            name: 'Bessie Cooper',
            date: '02 July, 2023',
            price: '-$3000'
        },
        {
            icon: '/account.svg',
            name: 'Guy hawkins',
            date: '02 July, 2023',
            price: '+3000'
        },
        {
            icon: '/account.svg',
            name: 'Floyds Miles',
            date: '02 July, 2023',
            price: '+8000'
        },
        {
            icon: '/account.svg',
            name: 'Peter',
            date: '02 July, 2023',
            price: '-$3000'
        },
    ]

    const SortBy = () => {
        return (
            <div className="flex-row gap-2">
                <Link href="#" style={{ color: 'gray' }}>Newest</Link>
                <Link href="#" style={{ color: 'gray' }}>Older</Link>
            </div>
        )
    }


    return (
        <Card title="Last transaction" rightHeader={SortBy()}>
            <div className={style.wrapper}>
                <hr className="mb-2" style={{ borderTop: '1px solid #eeee' }} />
                <div className={style.lists}>
                    {DATA_TRANSACTION.map((data, index) => {
                        return (
                            <>
                                <div className={style.list}>
                                    <div className="flex-row align-center gap-1">
                                        <Image src={data.icon}
                                            alt="home-icon"
                                            width="30"
                                            height="30"
                                        />
                                        <div className={style.description}>
                                            <h3>{data.name}</h3>
                                            <h6 style={{ color: 'gray' }}>{data.date}</h6>
                                        </div>
                                    </div>
                                    <div className="flex-row">
                                        <h3>{data.price}</h3>
                                        <Image src='/3dot.svg'
                                            alt="home-icon"
                                            width="20"
                                            height="20"
                                        />
                                    </div>
                                </div>
                                {index !== 2 && <hr style={{ borderTop: '1px solid #eeee' }} />}

                            </>
                        )
                    })}
                </div>

            </div>
        </Card >
    )
}

export default LastTransaction;