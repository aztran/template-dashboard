import CalendarIcon from '../../atoms/icon/calendar-icon';
import HomeIcon from '../../atoms/icon/home-icon';
import NotifIcon from '../../atoms/icon/notif-icon';
import PeopleIcon from '../../atoms/icon/people-icon';
import SettingIcon from '../../atoms/icon/setting-icon';
import WatchIcon from '../../atoms/icon/watch-icon';
import style from './menu.module.scss'
const Menu = () => {

    const menus = [
        {
            icon: <HomeIcon />,
            title: 'Home',
            isActive: true
        },
        {
            icon: <NotifIcon />,
            title: 'Notification',
            isActive: false
        },
        {
            icon: <WatchIcon />,
            title: 'Schedule',
            isActive: false
        },
        {
            icon: <PeopleIcon />,
            title: 'Users',
            isActive: false
        },
        {
            icon: <CalendarIcon />,
            title: 'Calendar',
            isActive: false
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
            isActive: false
        },
    ]
    return (
        <div className={style.wrapper}>
            {menus.map(menu => {
                return (
                    <div className='flex-row-center'>
                        <div className={`${style.menu_list} ${menu.isActive ? style.active : ''}`}>
                            {menu.icon}
                        </div>
                        <span style={{ paddingLeft: '12px' }}>{menu.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu;