import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import HeaderCartButton from './HeaderCartButton';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div>
            <header className={cx('wrapper')}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            
            <div className={cx("main-image")}>
                <img src="https://order-app-84ace.web.app/static/media/meals.2971f633.jpg" alt="A table full of delicious food!" />
            </div>
        </div>
    )
}
