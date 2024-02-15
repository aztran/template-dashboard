import Image from "next/image";
import Card from "./atoms/Card";
import ExpenseIncome from "./molecules/expense-income";
import DashboardWidget from "./organisms/dashboard-widget";
import styles from "./page.module.css";
import DashboardTemplate from "./templates/dashboard-template";
import style from './page.module.scss';

export default function Home() {
  return (
    <main className={style.main}>
      <DashboardTemplate />
    </main>
  );
}
