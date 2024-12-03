const mongoose = require('mongoose');
let dbURI = "mongodb+srv://lollylooney:Gads1858@cluster0.2sjgu.mongodb.net/TheRoastHouse?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => {
        console.log("Mongoose is connected");
    })
    .catch(err => {
        console.error("Connection error:", err);
    });

mongoose.connection.on('connected', () => 
  {console.log(`Mongoose connected to ${dbURI}`);});

mongoose.connection.on('error', err => 
  {console.log('Mongoose connected error:', err);});

mongoose.connection.on('disconnected', () => 
  {console.log('Mongoose disconnected');});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
  console.log(`Mongoose disconnected through ${msg}`);
  callback;
});
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./schema');

module.exports = mongoose; 