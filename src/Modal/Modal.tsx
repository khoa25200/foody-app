import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useShoppingCart } from 'context/ShoppingCartContext';
import Cart from './Cart';

const cx = classNames.bind(styles);
type ShoppingCartProps = {
    isOpen: boolean
}
export default function Modal({ isOpen }: ShoppingCartProps) {
    



    if (!isOpen) {
        return <></>
    }
    else {
        return (
            <div id="overlays">
                <div className={cx('backdrop')}></div>
                <div className={cx('modal')}>
                    <div>
                        <Cart />


                    </div>

                </div>
            </div>
        )
    }
}
