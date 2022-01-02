import React from 'react';
import { apikey } from '../utility/env';
import './search.css';

const SearchList = (props) => {
  const { params } = props
  const updateStocks = (stock) => {
    const selectedStocks = params.stocks ? [...params.stocks]: [];
    const names = [];
    const openAlert = (message) => {
      params.setMessage(message);
      params.setOpen(true);
    }
    if(selectedStocks.length === 3) {
      return openAlert('3 stocks have been selected. Remove on to update the view')
    } else {
      fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock['1. symbol']}&apikey=${apikey}`)
        .then(res => res.json())
        .then(
          (result) => {
            const json = {
              name: stock?.['2. name'],
              price: result?.['Global Quote']?.['05. price'],
              high: result?.['Global Quote']?.['03. high'],
              low: result?.['Global Quote']?.['04. low'],
              change: Number(result?.['Global Quote']?.['09. change']),
              changePercent: result?.['Global Quote']?.['10. change percent'],
            }
            if(!json.price) {
              openAlert(`Stock doesn't have a price.  Please make another selection`);
            }
            if(selectedStocks.length === 0) {
              selectedStocks.push(json);
              params.setStocks(selectedStocks);
            } else if(json.price) {
              selectedStocks.map((ss) => {
                return names.push(ss.name);
              })
              return names.includes(stock['2. name']) ? openAlert('The stock has already been selected please select a new stock') : selectedStocks.push(json) && params.setStocks(selectedStocks);
            }
          },
          (error) => {
            this.openAlert('There was an error fetching the data')
          }
        )
        params.setShowList(false);
    }
  }
  if(params.showList && params?.list?.length > 0) {
    return (
        <div id="keywordList">
            {params.list.map((el, idx) => {
               return <span id="symbol" onClick={()=> {updateStocks(el)}} key={`symbol${idx}`}>{el['1. symbol']} </span>
            })}
        </div>
      );
  } else {
      return null;
  }
  
}

export default SearchList;