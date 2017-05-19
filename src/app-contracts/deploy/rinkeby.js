const isPortReachable = require('is-port-reachable')
const spawn = require('child-process-promise').spawn
const fs = require('fs-extra-promise')
const path = require('path')

const rinkebyPort = 8547

async function deploy () {
  if (await isPortReachable(rinkebyPort)) {
    await rinkebyAvailable()
  } else {
    rinkebyUnavailable()
  }
}

async function rinkebyAvailable () {
  console.log(`Deploying to ethereum node running on port ${rinkebyPort}.`)

  const buildDir = path.join(__dirname, '..', 'build')
  const releaseDir = path.join(__dirname, '..', 'released')

  await fs.removeAsync(buildDir)
  await fs.moveAsync(releaseDir, buildDir)

  try {
    await truffleMigrate()
    await truffleNetworksClean()
  } finally {
    await fs.moveAsync(buildDir, releaseDir)
    await fs.copyAsync(releaseDir, buildDir)
  }
}

async function truffleMigrate () {
  await spawn(
    'yarn', ['run', 'truffle', 'migrate', '--', '--network', 'rinkeby'],
    { stdio: 'inherit' }
  )
}

async function truffleNetworksClean () {
  await spawn(
    'yarn', ['run', 'truffle', 'networks', '--', '--clean'],
    { stdio: 'inherit' }
  )
}

function rinkebyUnavailable () {
  console.error(
    `Error: No ethereum node was found on port ${rinkebyPort}. ` +
    'Did you start Geth correctly?\n' +
    'For example:\n'
  )
  console.error(
    `  geth --testnet -rpc --rpcport ${rinkebyPort} ` +
    '-rpcapi "eth,net,web3,personal" --unlock 0\n'
  )
  process.exit(1)
}

deploy()
