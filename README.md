# Ask The World (startup repo)

## Info

- this setup is best suited for development inside `Docker`, for that please use the `Remote - Container` vscode extension

## Initial steps

- install `Docker` on your machine and start it up
- ask for the `personal access token (PAT)`
- ask about `.env` file

## How to startup

#### Clone this repo using https and the PAT

```
git clone https://<PAT>@github.com/Karmello/ask-the-world.git
```

#### Fill in the .env file with the right values

```
PAT=
EMAIL_PASS=
AUTH_SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

#### Run database

```
docker-compose up db
```

#### Build and run API

```
docker-compose build --no-cache api
```

```
docker-compose up api
```

#### Build and run FE

```
docker-compose build --no-cache fe
```

```
docker-compose up fe
```

#### Verify services

```
https://localhost:9000/info
```

```
https://localhost:8000/info
```

```
https://localhost:3000
```
