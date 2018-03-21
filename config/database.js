if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://user:admin@ds115198.mlab.com:15198/movietodo' }
} else {
  module.exports = { mongoURI: 'mongodb://user:admin@ds115198.mlab.com:15198/movietodo' }
}
