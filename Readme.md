The Power of Blockchain
=======================
*Session given at [NextBuild 2017](http://nextbuild.nl), [XPDays 2017](http://www.xpdaysbenelux.nl) and [AppDevCon 2018](http://appdevcon.nl).*

[![Build Status](https://travis-ci.org/Charterhouse/PowerOfBlockchain.svg?branch=master)](https://travis-ci.org/Charterhouse/PowerOfBlockchain)

To show you the power of Blockchain we are going to demonstrate how you can make an application that can be trusted by anyone. We will create a game where *cheating is impossible*. The game is a live guessing game. Anyone can set a challenge consisting of a question, its answer, and prize money. The first person to give the correct answer wins that challenge, and takes away the prize money.

The game is called ÐQuestions<sup>1</sup>. It consists of a web based UI, and a smart contract on the Ethereum blockchain where you would normally find the backend. This smart contract ensures that *not even us* can cheat the game.

We won’t bore you with powerpoint bullet lists from hell, nor will we simply use handwaving to explain the concepts. We will go on stage and *actually* program the game during this session. We’ll show you that ~~even~~ especially in immature development environments you can rely on good coding practices such as Test Driven Development and Continuous Integration.

We intend for you to walk away from this session not only knowing how to start developing a Blockchain app, but also wanting to!

Running ÐQuestions Yourself
---------------------------

**Prerequisite: you need a working Node.js environment.**

If you want to run this game, after cloning this repo please do the following:

1. Run `yarn install` on the root level
2. Run `yarn truffle develop` to start the Truffle development console
    - In the development console, run `migrate` to deploy the smart contracts
3. In the folder `web-app`, run `yarn start` to run the web server.
4. Install the browser extension [MetaMask](https://metamask.io) and open it.
    -  When prompted, choose the option to "Import existing DEN"
    -  Use the phrase `candy maple cake sugar pudding cream honey rich smooth crumble sweet treat`. Important: only use this on a local Truffle network, never on a production Ethereum network or you will surely lose funds.
    - Switch from the Main Network to a Custom RPC network with url: `http://localhost:9545`

Now browse to http://localhost:3000 and you should see the game interface.


<hr />

<sup>1</sup> ÐQuestions, pronounced "five-hundred questions", is the decentralized version of the game 500 Questions. Please not that 'Ð' is used generally for ÐApps (decentralized apps), and that 'D' is the roman numeral for 500. Clever, huh?!
