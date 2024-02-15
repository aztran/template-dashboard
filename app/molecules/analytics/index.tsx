'use client'

import Image from "next/image";
import { Doughnut } from 'react-chartjs-2';
import Card from "../../atoms/Card";
import style from './latest-spending.module.scss';

import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },

    };

    const data = {
        labels: ['Done', 'In progress', 'Todo'],
        datasets: [
            {
                label: 'poll',
                data: [3, 6, 12],
                backgroundColor: ['blue', 'yellow', 'red'],
                circumference: 180,
                rotation: 270
            }
        ],
    };
    return (
        <Card title="Analytics" rightHeader={<Image src='/3dot.svg'
            alt="home-icon"
            width="20"
            height="20"
        />}>
            <div className="flex justify-center">

                <div style={{ width: '50%', height: '50%' }} >
                    <Doughnut data={data} options={{
                        responsive: true,
                        maintainAspectRatio: true,
                    }} />
                </div>
            </div>
        </Card>
    )
}

export default Analytics;