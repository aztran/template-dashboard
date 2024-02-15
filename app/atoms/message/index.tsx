import Avatar from "../icon/avatar-icon";
import style from './message.module.scss'

const Message = ({ message, right }) => {

    return (
        <div className="flex" style={{ flexDirection: right ? 'row-reverse' : 'row' }}>
            <Avatar />
            <div className={`${style.bubbleMessage} ${right ? style.right : style.left}`}>
                {message}
            </div>
        </div>
    )
}

export default Message;