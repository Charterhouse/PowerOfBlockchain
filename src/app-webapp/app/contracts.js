import Web3 from 'web3'
/* globals web3 */
import appContracts from 'app-contracts'

let web3Provider
let ourWeb3

function setTransactionDefaults () {
  appContracts.setTransactionDefaults({
    from: ourWeb3.eth.accounts[0],
    gas: 600000 // you probably want to tweak this for production...
  })
}

function configure () {
  if (typeof web3 !== 'undefined') {
    web3Provider = web3.currentProvider
    appContracts.setProvider(web3Provider)

    ourWeb3 = new Web3(web3Provider)
    setTransactionDefaults()
  }
}

let account0
function startAccountDetectTimer () {
  setInterval(function () {
    if (ourWeb3.eth.accounts[0] !== account0) {
      console.info('Account change detected; update transaction defaults')
      account0 = ourWeb3.eth.accounts[0]
      setTransactionDefaults()
    }
  }, 1000)
}

let retryCount = 0
function onWeb3Available (f) {
  configure()
  if (typeof web3 === 'undefined' && retryCount < 10) {
    ++retryCount
    setTimeout(() => onWeb3Available(f), 100)
  } else {
    account0 = ourWeb3.eth.accounts[0]
    startAccountDetectTimer()
    f()
  }
}

function getWeb3 () {
  return ourWeb3
}

module.exports = {
  getWeb3: getWeb3,
  onWeb3Available: onWeb3Available,
  ...appContracts
}
