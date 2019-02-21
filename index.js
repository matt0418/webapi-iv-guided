require('dotenv').config()

const server = require('./api/server.js');

// const db = require('./data/db');

const port = process.env.PORT || 5000


// server.get('/', async(req, res) => {
//   try {
//     const shoutouts = await db('shortcuts')
//     const messageOfTheDay = process.env.MOTD || 'Hello World!'
//     res.status(200).json({ motd: messageOfTheDay, shoutouts })
//   } catch(error) {
//     console.log('\nERROR', error)
//     res.status(500).json({ error: 'Cannot retrieve the shoutouts' })
//   }
// })

server.listen(port, () => {
  console.log(`\n*** Server Running on ${port} ***\n`);
});