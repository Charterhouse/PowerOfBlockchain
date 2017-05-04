The Power of Blockchain
=======================
*Session Proposal for [NextBuild 2017](http://nextbuild.nl)*.<br />
*Update April 6, 2017: Our session was accepted!*

To really show you the power of Blockchain we are going to demonstrate how you can easily make an application that can be trusted by anyone. We will create a game where *cheating is impossible*. The game is a live guessing game. Anyone can set a challenge consisting of a question, its answer, and prize money<sup>1</sup>. The first person to give the correct answer wins that challenge, and takes away the prize money.

The game is called ÐQuestions<sup>2</sup>. It consists of a web based UI, and a smart contract on the Ethereum blockchain where you would normally find the backend. This smart contract ensures that *not even us* can cheat the game.

We won’t bore you with powerpoint bullet lists from hell, nor will we simply use handwaving to explain the concepts. We will go on stage and *actually* program the game during this session. We’ll show you that ~~even~~ especially in immature development environments you can rely on good coding practices such as Test Driven Development and Continuous Integration.

We intend for you to walk away from this session not only knowing how to start developing a Blockchain app, but also wanting to!

Running ÐQuestions
------------------

**Prerequisite: you need a working Node.js environment.**

If you want to run this game, after cloning this repo please do the following:

1. Run `yarn devsetup` on the root level
2. In a separate terminal, in the folder `src/app-contracts` run `yarn run testrpc` and keep it running.<sup>3</sup>
3. In the first terminal, in the folder `src/app-contracts` run `yarn run truffle -- migrate` to deploy the smart contracts to TestRPC.
4. In the folder `src/app-webapp`, run `yarn start` to run the web server.

Now browse to http://localhost:8080 and you should see the game interface.

<hr />
<sup>1</sup> The money is in fact just a number of crypto-tokens, which can represent any physical good(ie)s. So if you're lucky we may actually provide some of those goodies...

<sup>2</sup> ÐQuestions, pronounced "five-hundred questions", is the distributed version of the game 500 Questions. Please not that 'Ð' is used generally for ÐApps (distributed apps), and that 'D' is the roman numeral for 500. Clever, huh?!

<sup>3</sup> Unfortunately, TestRPC crashes now and then. Just restart it when it does.