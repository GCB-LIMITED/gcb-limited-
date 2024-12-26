console.log('Welcome to GCb Limited!');
// Fetch live cryptocurrency prices
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('btc-price').textContent = `BTC: $${data.bitcoin.usd}`;
        document.getElementById('eth-price').textContent = `ETH: $${data.ethereum.usd}`;
        document.getElementById('bnb-price').textContent = `BNB: $${data.binancecoin.usd}`;
        document.getElementById('sol-price').textContent = `SOL: $${data.solana.usd}`;
    });
