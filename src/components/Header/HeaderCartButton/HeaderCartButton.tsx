import styles from './HeaderCartButton.module.scss';
import classNames from 'classnames/bind';
import { CartIcon } from '../../icons'
import { useShoppingCart } from 'context/ShoppingCartContext';

const cx = classNames.bind(styles);


export default function HeaderCartButton() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <button className={cx("button")} onClick={openCart}>
            <span className={cx("icon")}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={cx("badge")}>{cartQuantity}</span>
        </button>

    )
}
