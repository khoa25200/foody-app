import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import CartItem from 'Modal/CartItem';
import { useShoppingCart } from 'context/ShoppingCartContext';
import { formatCurrency } from 'utilities/formatCurrency';
const cx = classNames.bind(styles);
export default function Cart() {
  const { closeCart, cartItems } = useShoppingCart()
  const mealList = useSelector((state: RootState) => state.meal.mealList)
  return (
    <ul className={cx('cart-items')}>

      {cartItems.map((value) => {
       
        return (
          <CartItem value={value} mealList={mealList}/>
        );
      })}
      <div className={cx('total')}><span>Total Amount</span><span>{formatCurrency(cartItems.reduce((total, cartItem) => {
        const item = mealList.find((i) => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
      }, 0))}</span></div>

      <div className={cx('actions')}>
        <button className={cx('button--alt')} onClick={closeCart}>Close</button>
        <button className={cx('button')}>Order</button>
      </div>

    </ul>
  )
}
