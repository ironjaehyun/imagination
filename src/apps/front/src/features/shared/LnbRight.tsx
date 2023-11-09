import { Link } from "react-router-dom"

const LnbRight = () => {
    return (
        <div className="Lnb-right">
            <button className="Lnb-create-btn">
                <Link to={'/create'}>
                    <span className="Lnb-create-btn-plus">+</span>Create
                </Link>
            </button>
            <div className="Lnb-allim">
                <img src="./img/alarm.png" alt="" className="Lnb-alarm" />
                <span>6</span>
                <Link to={'/chat'} className="Lnb-chat">
                    <img src="./img/share.png" alt="" />
                </Link>
                <span>6</span>
            </div>
        </div>
    )
}

export default LnbRight