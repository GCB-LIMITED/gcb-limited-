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
// Calculate ROI
function calculateROI() {
    const deposit = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(deposit) || deposit <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    const roi = deposit * 0.015; // 1.5% daily ROI
    document.getElementById('roi-result').textContent = `Daily ROI: $${roi.toFixed(2)}`;
}
