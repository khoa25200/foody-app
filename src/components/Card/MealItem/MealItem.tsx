import styles from './MealItem.module.scss';
import classNames from 'classnames/bind';
import MealItemForm from '../MealItemForm';
import { IMeal } from 'types/product.type';
import { useShoppingCart } from 'context/ShoppingCartContext';
const cx = classNames.bind(styles);

interface MealItemtype {
  meal: IMeal
}

export default function MealItem({ meal }: MealItemtype) {
  const {
    getItemQuantity,
  } = useShoppingCart()

    // const quantity = 22
    const quantity = getItemQuantity(meal.id)
   
  return (
    <li className={cx("meal")}>
      <div>
        <h3>{meal.title}</h3>
        <div className={cx("description")}>{meal.description}</div>
        <div className={cx("price")}>${meal.price}</div>
      </div>
      <div>
        <MealItemForm meal={meal}/>
      </div>
    </li>
  )
}
