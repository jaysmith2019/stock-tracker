import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Search from './search/search';
import StockContainer from './stockContainer/stockContainer';
import Alert from './utility/Alert';
const App = () => {
  const [stocks, setStocks] = useState();
  const [open, setOpen] = useState();
  const [message, setMessage] = useState();
  return (
    <div className="body">
      {open && <Alert open={open} setOpen={setOpen} message={message}/>}
      <Header/>
      <Search  stocks={stocks} setStocks={setStocks} setOpen={setOpen} setMessage={setMessage}/>
      <StockContainer stocks={stocks} setStocks={setStocks} />
    </div>
  );
}

export default App;
