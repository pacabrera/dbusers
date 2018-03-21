if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://admin:admin@ds145303.mlab.com:45303/users' }
} else {
  module.exports = { mongoURI: 'mongodb://admin:admin@ds145303.mlab.com:45303/users' }
}
