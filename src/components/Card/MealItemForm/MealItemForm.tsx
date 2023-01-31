import styles from './MealItemForm.module.scss';
import classNames from 'classnames/bind';
import Input from '../Input';
import { useState } from 'react';
import { useShoppingCart } from 'context/ShoppingCartContext';
import { IMeal } from 'types/product.type';
const cx = classNames.bind(styles);
interface Meal {
  meal: IMeal
}
export default function MealItemForm({ meal }: Meal) {
  const {
    addCartQuantity
  } = useShoppingCart()
  const [value, setValue] = useState<number>(1)
  const handelAddToCart = (e: any) => {
    e.preventDefault()
    // Xử lý add to cart
    addCartQuantity(meal.id, value)
  }
  const callbackFunction = (childData: any) => {
    // Xử lý add to cart
    setValue(childData)

  }
  return (
    <form className={cx("form")}>
      <Input parentCallback={callbackFunction} />
      <button onClick={handelAddToCart}>+ Add</button>
    </form>
  )
}
