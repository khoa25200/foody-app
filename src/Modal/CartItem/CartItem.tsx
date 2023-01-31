import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import CartItem from 'Modal/CartItem';
import { IMeal } from 'types/product.type';
import { ICart } from 'types/cart.type';
import { useShoppingCart } from 'context/ShoppingCartContext';
const cx = classNames.bind(styles);
// eslint-disable-next-line react-hooks/rules-of-hooks

interface CartItem {
  value: ICart,
  mealList: IMeal[]
}
export default function CartItems({ value, mealList }: CartItem) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const item = mealList.find((i) => i.id === value.id)
  return (
    <li key={item?.id} className={cx('cart-item')}>
      <div>
        <h2>{item?.title}</h2>
        <div className={cx('summary')}>
          <span className={cx('price')}>${item?.price}</span>
          <span className={cx('amount')}>x {value.quantity}</span>
        </div>
      </div>
      <div className={cx('actions')}>
        <button onClick={()=>{
          decreaseCartQuantity(value?.id||-1)
        }}>−</button>
        <button onClick={()=>{
          increaseCartQuantity(value?.id||-1)
        }}>+</button>
      </div>
    </li>
  )
}
