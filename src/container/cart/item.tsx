import "./index.css"

import { CartItem } from "./slice";

type ItemType = CartItem & {onDelete: () => void; onChangeAmount: (newAmount: number) => void};

export const Item: React.FC<ItemType> = ({id, name, amount, onDelete, onChangeAmount}) => {
    return (
        <div className="item">
            <div className="item__container">
                <span className="item__id">ID: {id}</span>
                <div className="item__name">{name}</div>
            </div>
            <div className="item__container">
                <button className="item__button" onClick={() => onChangeAmount(amount - 1)}>-</button>
                <div className="item__amount">{amount}</div>
                <button className="item__button" onClick={() => onChangeAmount(amount + 1)}>+</button>

                <button className="item__button item__button--alarm" onClick={() => onDelete()}>x</button>
            </div>
        </div>
    )    
}

