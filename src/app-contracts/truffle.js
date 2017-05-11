
let truffleOptions = {
  networks: {
    ropsten: {
      host: 'localhost',
      port: 8546,
      network_id: 3,
      gas: 4000000
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}

if (process.env.IDE === 'IntellIJ') {
  truffleOptions['mocha'] = {
    reporter: '/Users/nlv19703/Library/Application Support/IntelliJIdea2017.1/NodeJS/js/mocha-intellij/lib/mochaIntellijReporter.js'
  }
}

module.exports = truffleOptions
