const user = _getEnv("MONGO_INITDB_ROOT_USERNAME");
const pwd = _getEnv("MONGO_INITDB_ROOT_PASSWORD");

db.auth(user, pwd);

db = db.getSiblingDB("db");

db.createUser({
  user: _getEnv("MONGO_INITDB_ROOT_USERNAME"),
  pwd: _getEnv("MONGO_INITDB_ROOT_PASSWORD"),
  roles: [
    {
      role: "readWrite",
      db: "db",
    },
  ],
});

db = db.getSiblingDB("db-test");

db.createUser({
  user: _getEnv("MONGO_INITDB_ROOT_USERNAME"),
  pwd: _getEnv("MONGO_INITDB_ROOT_PASSWORD"),
  roles: [
    {
      role: "readWrite",
      db: "db-test",
    },
  ],
});
