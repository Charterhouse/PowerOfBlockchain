#set($CLASSNAME = ${StringUtils.removeAndHump(${NAME}, "-")})
/* eslint-env mocha */
const expect = require('chai').expect
const ${CLASSNAME} = artifacts.require('${CLASSNAME}.sol')
const Web3 = require('web3')
const web3 = new Web3()

contract(${CLASSNAME}, function (accounts) {

})