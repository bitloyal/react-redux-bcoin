# UN-BLOCK-ER

This is a bounty app that pays in bitcoin which is designed to help people who have become blocked on a project they're working on.  It could be useful for a variety of digital media work -- graphic design, copy creation or web development, for example.

The motivation for building such a system with bitcoin derives from the cryptocurrency's globally consistent value.  Without a consistent global value for the work, international collaboration tends to be defined more by currency value differences than quality of work.  Those currency differences are of course an excellent opportunity the people of India and Africa, but it also tends to lock out contributors from established tech hubs.

A bitcoin-based bounty app for unblocking projects could potentially highlight the benefits of having a single global currency for some types of work.

## Standing Up the App

First, install packages:

    npm install

Next, delete line 58 (assert) in:

    /bcoin/lib/node/config.js 

Also, in order to remove a dependency error, set `var clientVersion` to the integer 10 (or any integer really), at line 10 in file:

    node_modules/socket.io/lib/index.js

Now, start the mongo daemon:

    sudo mongod 

In another terminal shell, type `mongo`, and show the db's with:

    show dbs

To run this app, you should have a db called `store`.  If it does not exist, create it with:

    db.store.insert({"test":"test"});

To enable support for bcoin, type:

    npm run start-bcoin

To start the project, type:

    npm start

To view the app, go to:

    http://localhost:3000

So, in summary, there are three different things which need to be running here: MongoDB, the bcoin wallet and the Unblocker app.

## The State of the Project

This app was first created as part of the bcoin hackathon at San Francisco's Hack Reactor on the weekend of March 24th, 2017.  Much of the functionality was mocked due to time constraints.

The state of the app by the end of the hackathon included a rudimentary frontend (entirely copied from Stack Overflow), an ability to log in users, and an ability to associate those users with a bitcoin wallet address (which could then be seeded with bitcoin from a public faucet).

The app is built on React/Redux, but significant refactoring is needed in order to clean up the code and replace mocked/rushed functionality/design.