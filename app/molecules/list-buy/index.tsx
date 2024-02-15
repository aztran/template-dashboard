
'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import { Bar } from 'react-chartjs-2';
import Card from "../../atoms/Card";
import Message from "../../atoms/message";
import CardTitle from "../../atoms/title/card-title";
import style from './list-buy.module.scss';

const ListBuy = () => {

    const [listMessages, setListmessage] = useState(['Are you ready?', 'I have prepared everything'])
    const input = useRef<any>();

    const date_range = [
        {
            time: '02:00',
            date: 'Sat, August 12'
        },
        {
            time: '05:00',
            date: 'Sat, Sep 12'
        }
    ]

    const items = ['macbook', 'Bicycle', 'Motorcycle', 'Iphone 14 pro max'];


    return (
        <Card hasHeader={false} >
            <div className={style.gridSeparator}>
                <div className={style.wrapper}>
                    <CardTitle>List of items to buy</CardTitle>
                    <div className={`${style.dateRange} mt-2`}>
                        <div className="flex-col">
                            <h3>{date_range[0].time}</h3>
                            <h5 style={{ color: 'gray', fontWeight: 'normal' }}>{date_range[0].date}</h5>
                        </div>
                        <Image src='/right.svg'
                            alt="home-icon"
                            width="30"
                            height="30"
                        />
                        <div className="flex-col">
                            <h3>{date_range[1].time}</h3>
                            <h5 style={{ color: 'gray', fontWeight: 'normal' }}>{date_range[1].date}</h5>
                        </div>
                    </div>

                    <div className={`${style.shoppingWrapper} mt-2`}>
                        <h6 style={{ fontWeight: 'normal' }}>0/3 <span style={{ fontWeight: 'bold' }}>Shopping lists</span> </h6>
                        <h6>+ Add an item </h6>
                    </div>

                    <div className={`${style.items} mt-2`}>
                        {items.map(item => {
                            return (
                                <div className={style.item} key={item}>
                                    <div>
                                        <input type="checkbox" id={item} name={item} value={item} />
                                        <h6 style={{ display: 'inline' }}>{item}</h6>
                                    </div>
                                    <Image src='/3dot.svg'
                                        alt="home-icon"
                                        width="20"
                                        height="20"
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>


                <div className={style.chat}>
                    <CardTitle>Esther Howard</CardTitle>
                    <div className={style.chatList}>
                        {listMessages.map((msg, idx) => {
                            console.log({ idx })
                            const odd = idx % 2 === 1 ? false : true
                            return (
                                <Message message={msg} right={odd} key={idx} />
                            )
                        })}

                    </div>
                    <form className={style.formMessage} onSubmit={(e) => {
                        e.preventDefault();
                        setListmessage([...listMessages, input.current.value as any])
                    }}>
                        <textarea
                            id="messageInput"
                            name="messageInput"
                            className="form-input__input"
                            placeholder="type your message..."
                            rows={5}
                            ref={input}
                        />
                        <div className={style.btnWrapper}>
                            <div className={style.icon}>
                                <Image src='/smile.svg'
                                    alt="home-icon"
                                    width="30"
                                    height="30"
                                />
                                <Image src='/attachment.svg'
                                    alt="home-icon"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <button className="btn btn-primary">Send now</button>
                        </div>
                    </form>
                </div>



            </div>



        </Card>
    )
}

export default ListBuy;