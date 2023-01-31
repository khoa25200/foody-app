import styles from './Card.module.scss';
import classNames from 'classnames/bind';
import MealItem from './MealItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IMeal } from 'types/product.type';
const cx = classNames.bind(styles);
// const initialCart: ICart = {
//   id: null,
//   quantity: 0,
// }


export default function Card() {
  const mealList = useSelector((state: RootState) => state.meal.mealList)


  // const dispatch = useDispatch()
  return (

    <div className={cx('card')}>
      <ul>
        {
          mealList.map((meal: IMeal) => (
            <MealItem key={meal.id} meal={meal} />
          ))
        }
      </ul>
    </div>
  )
}

