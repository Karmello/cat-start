const user = _getEnv("MONGO_USER");
const pwd = _getEnv("MONGO_PASS");

db.auth(user, pwd);

db = db.getSiblingDB("db");

db.createUser({
  user: _getEnv("MONGO_USER"),
  pwd: _getEnv("MONGO_PASS"),
  roles: [
    {
      role: "readWrite",
      db: "db",
    },
  ],
});

db = db.getSiblingDB("db-test");

db.createUser({
  user: _getEnv("MONGO_USER"),
  pwd: _getEnv("MONGO_PASS"),
  roles: [
    {
      role: "readWrite",
      db: "db-test",
    },
  ],
});
