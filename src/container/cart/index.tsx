import "./index.css"

import {Item} from "./item"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeAmount, deleteItem } from "./slice";
import { Fragment } from "react/jsx-runtime";
    
export function Cart() {
    const list = useSelector((state: RootState) => state.cart.list);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <h2 className="cart__title">Cart</h2>
            <hr></hr>
            <div className="cart__list">
                {list.map((item) => (
                    <Fragment key={item.id}>
                        <Item 
                        {...item}
                        onDelete={() => dispatch(deleteItem({id: item.id}))}
                        onChangeAmount={(amount) => dispatch(changeAmount({id: item.id, amount}))}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}