import ExpenseIncome from '../molecules/expense-income';
import LatestSpending from '../molecules/latest-spending';
import PremiumCard from '../molecules/premium-card';
import style from './dashboard-widget.module.scss';

const DashboardWidget = () => {
    return (
        <div className={style.wrapper}>
            <ExpenseIncome />
            <LatestSpending />
            <PremiumCard />
        </div>
    )
}

export default DashboardWidget;