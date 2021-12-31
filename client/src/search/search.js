import React, { useState} from 'react';
import SearchList from './searchList';
import './search.css';

const Search = (props) => {
  const { setStocks, stocks, setOpen, setMessage} = props;
  const [userInput, setUserInput] = useState();
  const [timer, setTimer] = useState();
  const [list, setList] = useState();
  const [showList, setShowList] = useState(false);
  const description = 'Enter up to 3 stocks to compare the current stock prices';
  
  const params = {
    list: list,
    showList: showList,
    stocks: stocks,
    setShowList: setShowList,
    setStocks: setStocks,
    setOpen: setOpen,
    setMessage: setMessage
  }
  const searchKeywords = (e) => {
    const val = e.target.value.replace('/s+/g', '')
    setUserInput(val)
    clearTimeout(timer);
    const inputTimer = setTimeout(() => {
      if(val.length > 0) {
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${userInput}&apikey=98HMVQD0UF7YV23S`)
        .then(res => res.json())
        .then(
          (result) => {
            setList(result.bestMatches)
            setShowList(true)
          },
          (error) => {
            setMessage('There was an error fetching stocks')
            setOpen(true)
          }
        )
      } else {
        setShowList(false)
      }
      
    }, 500);
    setTimer(inputTimer)
  }
  return (
    <div id="searchDiv">
     <div className="row">
        <span id="title">Stock Comparison</span>
     </div>
     <div className="row">
         <span id="description">{description}</span>
     </div>
     <div className="row">
       <div className="column">
          <input id="stockSearch" placeholder="Search" onChange={searchKeywords}  autoComplete="off"/>
          <SearchList params={params}/>
       </div>   
     </div>
    </div>
  );
}

export default Search;