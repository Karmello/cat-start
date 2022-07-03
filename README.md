# Ask The World (startup repo)

## Initial steps

- install Docker on your machine
- create ssh key and provide it to the owner of the repo
- ask for the env files and the certificates

## How to startup

Clone this repo and from the root

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

Create env files for API and FE repos

```
apps/ask-the-world-api/env/env.local -> apps/ask-the-world-api/env/env
```

```
apps/ask-the-world-fe/env/env.local -> apps/ask-the-world-fe/env/env
```

Place certificates inside the repo

```
/certs
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
