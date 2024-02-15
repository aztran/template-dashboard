import Card from "../../atoms/Card";
import style from './expense-income.module.scss';

const ExpenseIncome = () => {

    const DATA_EXPENSE = [
        {
            title: 'Expense',
            percent: 75,
            count: 5653
        },
        {
            title: 'Income',
            percent: 25,
            count: 5653
        },
    ]
    return (
        <Card title="Expense and income">
            <div className={style.wrapper}>
                <div className={style.above}>
                    <div className={style.data}>
                        <h5>{DATA_EXPENSE[0].title}</h5>
                        <h2>{DATA_EXPENSE[0].percent + '%'}</h2>
                        <h6>{DATA_EXPENSE[0].count}</h6>
                    </div>
                    <div className={style.separator}>
                        <h5>|</h5>
                        <h2>VS</h2>
                        <h5>|</h5>
                    </div>

                    <div className={style.data}>
                        <h5>{DATA_EXPENSE[1].title}</h5>
                        <h2>{DATA_EXPENSE[1].percent + '%'}</h2>
                        <h6>{DATA_EXPENSE[1].count}</h6>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div style={{ width: `${DATA_EXPENSE[0].percent}%`, height: '20px', borderRadius: '10px', background: 'blue' }}>

                    </div>
                    <div style={{ width: `${DATA_EXPENSE[1].percent}%`, height: '20px', borderRadius: '10px', background: 'red' }}>

                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseIncome;