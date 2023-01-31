import styles from './Input.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);
export default function Input(props: any) {
  const sendData = (e: any) => {
    props.parentCallback(parseInt(e.target.value));
  }
  return (
    <div className={cx("input")}>
      <label htmlFor="amount_m1">Amount</label>
      <input id="amount_m1" type="number" min={1} max={5} step={1} defaultValue={1} onChange={sendData} />
    </div>

  )
}
