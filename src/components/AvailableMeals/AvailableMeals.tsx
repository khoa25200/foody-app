import Card from "components/Card";
import styles from './AvailableMeals.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export default function AvailableMeals() {
  return (
    <div className={cx('meals')}>
      <Card/>
    </div>
  )
}
