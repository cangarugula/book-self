const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, { logging: false })

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
  }
})

const syncAndSeed = () => {
  return db.sync({force:true})
    .then(() => console.log('synced!'))
    .then(()=> User.create({
      name: "Cang Truong",
      email: "cang@email.com"
    }))
    .then(() => console.log('seeded!'))
}

module.exports = {
  db,
  User,
  syncAndSeed
}


