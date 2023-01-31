import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import MealsSummary from 'components/MealsSummary';
import AvailableMeals from 'components/AvailableMeals';
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx('wrapper')}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  )
}
