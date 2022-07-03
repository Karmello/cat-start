# Ask The World (startup repo)

## Initial steps

- install Docker on your machine
- create SSH key and provide it to the owner of the repo (needed for cloning private repos)
- ask for certificates

## How to startup

#### Clone this repo and always run commands from the root

```
/
```

#### Clone subrepositories

```
git clone git@github.com:Karmello/ask-the-world-api.git apps/ask-the-world-api
```

```
git clone git@github.com:Karmello/ask-the-world-fe.git apps/ask-the-world-fe
```

```
git clone git@github.com:Karmello/ask-the-world-shared.git apps/ask-the-world-shared
```

#### Create env files for API and FE repos

```
apps/ask-the-world-api/env/env.local -> apps/ask-the-world-api/env/env
```

```
apps/ask-the-world-fe/env/env.local -> apps/ask-the-world-fe/env/env
```

#### Place certificates inside the repo

```
/certs
```

#### Build and run the project

```
docker-compose build app
```

```
docker-compose up app
```

#### Verify API

```
curl https://localhost:9000/info
```
