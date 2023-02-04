import styles from './MealItem.module.scss';
import classNames from 'classnames/bind';
import MealItemForm from '../MealItemForm';
import { IMeal } from 'types/product.type';
import { useShoppingCart } from 'context/ShoppingCartContext';
import images from 'assets/images/mealsImg';
const cx = classNames.bind(styles);

interface MealItemtype {
  meal: IMeal
}

export default function MealItem({ meal }: MealItemtype) {
  const {
    getItemQuantity,
  } = useShoppingCart()

  // const quantity = 22
  const quantity = getItemQuantity(meal?.id)

  return (
    <li className={cx("meal")}>
      <div className={cx("meal--left")}>
        <div className={cx("thumbnail")}>
          {
            meal?.imgUrl ? <img src={meal?.imgUrl} alt="imageError" /> : <img src={String(images?.default)} alt="imageError" />
          }
        </div>
        <div className={cx("content")}>
          <h3>{meal?.title}</h3>
          <div className={cx("description")}>{meal?.description}</div>
          <div className={cx("price")}>${meal?.price}</div>
        </div>
      </div>
      <div>
        <MealItemForm meal={meal} />
      </div>
    </li>
  )
}
