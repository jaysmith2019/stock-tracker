import './stockContainer.css';

const StockContainer = (props) => {
  const { stocks, setStocks } = props;
  const removeStock = (stock) => {
     const stocklist = [...stocks];
     stocklist.splice(stocklist.indexOf(stock), 1);
     setStocks(stocklist);
  }
  if(stocks) {
    return (
        <div id="container">
            <div className="stock-row">
            {stocks.map((stock, idx) => {
               return (
               <div className="stock-container" key={`stock-container${idx}`} style={{'borderRight' : idx ===  2 ? null : '1px solid black'}}>
                   <div className='remove-column' key={`remove-column${idx}`} onClick={()=> removeStock(stock)}>
                        <span id="close" key={`close${idx}`}>X</span>
                        <span id="closeText" key={`closeText${idx}`}>Remove</span>
                   </div>
                    <h2 id="stockTitle" key={`stockTitle${idx}`}>{stock.name}</h2>
                    <div className="stock-row" key={`stock-row${idx}`}>
                        <div className="icon-section" key={`icon-section${idx}`}> 
                        {stock?.change < 0 ? <span className="icon red" key={`icon-red${idx}`}>&#x2193;</span>: <span className="icon green" key={`icon-green${idx}`}>&#x2191;</span> }
                       </div>
                        <div className="price-section" key={`price-section${idx}`}>
                            <h3 id="currentPrice" key={`currentPrice${idx}`}>{stock.price}</h3>
                            {stock?.change < 0 ? <span className="percent red" key={`percent-red${idx}`}>{stock?.changePercent?.replace('-', '')}</span>: <span className="percent green" key={`percent-green${idx}`}>{stock?.changePercent?.replace('-', '')}</span>}
                        </div>
                    </div>
                    <div className="stats-section" key={`stats-section${idx}`}>
                            <h2 id="statsTitle" key={`statsTitle${idx}`}>Stats</h2>
                            <div className="row" key={`row-high${idx}`}>
                                <span className="field" key={`row-high-field${idx}`}>High</span>
                                <span className="stat-price" key={`stats-price${idx}`}>{stock?.high}</span>
                            </div>
                            <div className="row" key={`row-low${idx}`}>
                                <span className="field" key={`row-low-field${idx}`}>Low</span>
                                <span className="stat-price" key={`row-stats-price${idx}`}>&nbsp;{stock?.low}</span>
                            </div>
                        </div>
                </div>
               );
            })}
            </div>
        </div>
      );
  } else {
      return (
          <div id="noData">
              <h2>Select up to 3 stocks to compare</h2>
          </div>
      )
  }
  
}

export default StockContainer;