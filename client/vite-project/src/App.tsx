import { useEffect, useState } from 'react';
import './App.css';
import InvoiceForm from './components/Invoice/InvoiceForm';
import InvoiceList from './components/Invoice/InvoiceList';
import Profile from './components/auth/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import { SignupButton } from './components/auth/SignupButton';

function App() {
  const [invoices, setInvoices] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  async function getInvoices() {
    const url = 'https://localhost:7097/api/Invoice';
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  }

  useEffect(() => {}, [getInvoices]);

  if (isAuthenticated) {
    <>
      <h1>.NET Core Invoice</h1>
      <LoginButton />
    </>;
  }

  return (
    <>
      <h1>.NET Core Invoice</h1>
      {!isAuthenticated && (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <Profile />
          <LogoutButton />
          <InvoiceForm getInvoices={getInvoices} />
          <InvoiceList invoiceData={invoices} />
        </>
      )}
    </>
  );
}

export default App;
