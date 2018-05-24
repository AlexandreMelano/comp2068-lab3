const connect = require('connect');
const acc = require('accounting');
const url = require('url');

const app = connect();

/**
 * this method will add the amount from the url
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addAmount(req, res, next){
    // get the full query string what kind of paramets? amount$?
    const queryString = url.parse(req.url, true).query;
    
    //listen for both variables
    const {x, y} = queryString

    //calculate total
  
    const total = parseFloat(x) + parseFloat(y);

    //display all
    res.end(`
    <h1> Calculator</h1>
    X: ${acc.formatMoney(x)}<br>
    Y: ${acc.formatMoney(y)}<br>
    Total: ${acc.formatMoney(total)}
    `);
}

/**
 * this method will substract the amount type in the url
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function subAmount(req, res, next){
    // get the full query string what kind of paramets? amount$?
    const queryString = url.parse(req.url, true).query;
    
    //listen for both variables
    const {x, y} = queryString

    //calculate total
  
    const total = parseFloat(x) - parseFloat(y);

    //display all
    res.end(`
    <h1> Calculator</h1>
    X: ${acc.formatMoney(x)}<br>
    Y: ${acc.formatMoney(y)}<br>
    Total: ${acc.formatMoney(total)}
    `);
}



/**
 * this method will divde the amount type in the url
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function divideAmount(req, res, next){
    // get the full query string what kind of paramets? amount$?
    const queryString = url.parse(req.url, true).query;
    
    //listen for both variables
    const {x, y} = queryString

    //calculate total
  
    const total = parseFloat(x) / parseFloat(y);

    //display all
    res.end(`
    <h1> Calculator</h1>
    X: ${acc.formatMoney(x)}<br>
    Y: ${acc.formatMoney(y)}<br>
    Total: ${acc.formatMoney(total)}
    `);
}


/**
 * this method will divde the amount type in the url
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function multiplyAmount(req, res, next){
    // get the full query string what kind of paramets? amount$?
    const queryString = url.parse(req.url, true).query;
    
    //listen for both variables
    const {x, y} = queryString

    //calculate total
  
    const total = parseFloat(x) * parseFloat(y);

    //display all
    res.end(`
    <h1> Calculator</h1>
    X: ${acc.formatMoney(x)}<br>
    Y: ${acc.formatMoney(y)}<br>
    Total: ${acc.formatMoney(total)}
    `);
}

app.use('/add', addAmount);
app.use('/substract', subAmount);
app.use('/multiply', multiplyAmount);
app.use('/divide', divideAmount);
app.listen(3000);