# Ask The World (startup repo)

## Dependencies

- Docker

## How to startup

From the root of the project

```
/
```

Clone repositories

```
git clone git@github.com:Karmello/ask-the-world-api.git apps/ask-the-world-api
```

```
git clone git@github.com:Karmello/ask-the-world-fe.git apps/ask-the-world-fe
```

```
git clone git@github.com:Karmello/ask-the-world-shared.git apps/ask-the-world-shared
```

Run MongoDB

```
docker run -d -p 27017:27017 --name mongo mongo:latest
```

Build and run API

```
docker build apps/ask-the-world-api -t atw/api
```

```
docker run --name ask-the-world-api -p 9000:9000 -d atw/api
```
