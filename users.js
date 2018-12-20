const memoryStore = [
    {
      "id": 1,
      "firstName": "Admin",
      "email": "admin@gmail.com",
      "password": "1234"
    },
    {
        "id": 2,
        "firstName": "JBoss",
        "email": "jboss@gmail.com",
        "password": "4444"
      },
      {
        "id": 3,
        "firstName": "MegaHalla",
        "email": "megan@gmail.com",
        "password": "pineapple"
      },
  ]

  function authenticateUser(email, password) {
      const user = memoryStore.find(user => user.email === email);
      if (!user) return null;
      if (user.password === password) return user.id;
      return null;
  }

  function findById(id){
      const user = memoryStore.find(user => Number(user.id) === Number(id))
      if (!user) return null;
      return user;
  }

  module.exports = {
      authenticateUser,
      findById
  }