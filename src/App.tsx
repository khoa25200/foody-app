import Header from "components/Header";
import Home from "pages/Home";
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import ShoppingCartProvider from "context/ShoppingCartContext";
const cx = classNames.bind(styles);
function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <div className={cx('header')}>
          <Header />
        </div>
        <div className={cx("wrapper")}>
          <Home />
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
