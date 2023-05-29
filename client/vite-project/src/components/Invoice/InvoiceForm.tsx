import { useState } from 'react';
import styles from './Invoice.module.css';

export default function InvoiceForm(props: any) {
  // const [formData, setFormData] = useState({
  //   id: Math.random(),
  //   name: '',
  //   amount: -1,
  //   status: false,
  // });

  // id is intentionally hidden from the user to help prevent duplicates
  const [id, setId] = useState(Math.round(Math.random() * 1000));
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(-1);
  const [status, setStatus] = useState(false);

  function formSubmitHandler(e: any) {
    e.preventDefault();
    const postData = {
      id: id,
      name: name,
      amount: amount,
      status: status,
    };
    console.log({
      id: id,
      name: name,
      amount: amount,
      status: status,
    });

    const postUrl = 'https://localhost:7097/api/Invoice';
    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setId(Math.round(Math.random() * 1000));
        setName('');
        setAmount(-1);
        setStatus(false);
        props.getInvoices();
      });
  }

  function nameChangeHandler(e: any) {
    setName(e.target.value);
  }

  function amountChangeHandler(e: any) {
    setAmount(e.target.value);
  }

  function statusChangeHandler(e: any) {
    setStatus(e.target.checked);
  }

  return (
    <>
      <form className={styles['form-invoice']} onSubmit={formSubmitHandler}>
        <label htmlFor='name' className={styles['label-invoice']}>
          Name
        </label>
        <input
          onChange={nameChangeHandler}
          value={name}
          id='name'
          className={styles['input-invoice']}
          type='text'
        />

        <label htmlFor='amount' className={styles['label-invoice']}>
          Amount
        </label>
        <input
          onChange={amountChangeHandler}
          value={amount}
          id='amount'
          className={styles['input-invoice']}
          type='text'
        />

        <label htmlFor='status' className={styles['label-invoice']}>
          Status
        </label>
        <input
          onChange={statusChangeHandler}
          checked={status}
          id='status'
          className={styles['input-invoice']}
          type='checkbox'
        />

        <button type='submit'>Add Invoice</button>
      </form>
    </>
  );
}
