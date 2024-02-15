'use client';

import Image from "next/image";
import { Bar } from 'react-chartjs-2';
import Card from "../../atoms/Card";
import style from './balance-statistic.module.scss';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BalanceStatistic = () => {
    const labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    const data = {
        labels,
        datasets: [
            {

                data: [60, 40, 40, 20, 20],
                backgroundColor: 'rgba(80,94,219)',
            },
            {

                data: [50, 30, 30, 10, 10],
                backgroundColor: 'rgba(201,202,255)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },

    };

    const dropdown = () => {
        return (
            <select>
                <option>Filter</option>
            </select>
        )
    }


    return (
        <Card title="Balance Statistics" rightHeader={dropdown()}>
            <div className={style.wrapper}>
                <div className={style.balance}>
                    <h3>$564</h3>
                    <div className={style.totalBalance}>
                        <Image src='/coin.svg'
                            alt="home-icon"
                            width="30"
                            height="30"
                        />
                        <h4>Your total balance</h4>
                    </div>
                    <hr className="mt-1" />
                    <div className="mt-1">
                        <h6>Always see your earnings update</h6>
                    </div>
                </div>
                <div className={style.chart}>
                    <Bar data={data} options={options} />
                </div>
            </div>


        </Card>
    )
}

export default BalanceStatistic;