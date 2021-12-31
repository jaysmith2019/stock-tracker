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
               <div className="stock-container" style={{'borderRight' : idx ===  2 ? null : '1px solid black'}}>
                   <div className='remove-column' onClick={()=> removeStock(stock)}>
                        <span id="close">X</span>
                        <span id="closeText">Remove</span>
                   </div>
                    <h2 id="stockTitle">{stock.name}</h2>
                    <div className="stock-row">
                        <div className="icon-section"> 
                        {stock?.change < 0 ? <span className="icon red">&#x2193;</span>: <span className="icon green">&#x2191;</span> }
                       </div>
                        <div className="price-section">
                            <h3 id="currentPrice">{stock.price}</h3>
                            {stock?.change < 0 ? <span className="percent red">{stock?.changePercent?.replace('-', '')}</span>: <span className="percent green">{stock?.changePercent?.replace('-', '')}</span>}
                        </div>
                    </div>
                    <div className="stats-section" >
                            <h2 id="statsTitle">Stats</h2>
                            <div className="row">
                                <span className="field">High</span>
                                <span className="stat-price">{stock?.high}</span>
                            </div>
                            <div className="row">
                                <span className="field">Low</span>
                                <span className="stat-price">&nbsp;{stock?.low}</span>
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