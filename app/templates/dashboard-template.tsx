import Image from 'next/image';
import Analytics from '../molecules/analytics';
import BalanceStatistic from '../molecules/balance-staticstic';
import ExpenseIncome from '../molecules/expense-income';
import LastTransaction from '../molecules/last-transaction';
import ListBuy from '../molecules/list-buy';
import DashboardWidget from '../organisms/dashboard-widget';
import style from './dashboard-template.module.scss';

const DashboardTemplate = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.headerWrapper}>
                    <div className={style.header}>
                        <h1> Hello, Jhon .D</h1>
                        <h4>View and control your finances here!</h4>
                    </div>
                    <div className={style.search}>
                        <Image src='/search.svg'
                            alt="home-icon"
                            width="30"
                            height="30"
                        />
                    </div>
                </div>

                <div className={style.dashboardWrapper}>
                    <BalanceStatistic />
                    <img src='/mastercard.png'
                        alt="home-icon"
                        width="auto"
                        height="200"
                        style={{ width: '80%', height: '80%', alignSelf: 'center' }}
                    />

                </div>

                <div className={style.dashboardWrapper2}>
                    <ListBuy />
                </div>

                <div className={style.dashboardWrapper}>
                    <LastTransaction />
                    <Analytics />
                </div>

            </div>
            <div className={style.widget}>
                <DashboardWidget />

            </div>
        </div>
    )
}

export default DashboardTemplate