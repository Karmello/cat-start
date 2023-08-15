# Ask The World (startup repo)

## Info

- this setup is best suited for development inside `Docker`
- VSCode's `Dev Containers` extension will be useful

## Initial steps

- make sure you have `Docker` up on your machine
- ask for `personal access token (PAT)` and `.env` file
- ask for `countries` and `question-categories` data collections

## How to startup

#### Clone this repo using https and the PAT

```
git clone https://<PAT>@github.com/Karmello/ask-the-world.git
```

#### Create `.env` file in the root of the project and fill it in with the right values

```
PAT=
STRIPE_API_KEY=
RECAPTCHA_SITE_KEY=
EMAIL_PASS=
AUTH_SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
API_PATH=
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
MONGO_URI_PROD=
MONGO_URI_STAGING=
MONGO_URI_MASTER=
MONGO_URI_TEST=
MONGO_URI_LOCAL=
```

#### Run database

```
docker-compose up --detach db
```

#### Run Stripe

```
docker-compose up --detach stripe
```

#### Build and run API

```
docker-compose build --no-cache api
```

```
docker-compose up --detach api
```

#### Build and run FE

```
docker-compose build --no-cache fe
```

```
docker-compose up --detach fe
```

#### Build and run shared repo

```
docker-compose build --no-cache shared
```

```
docker-compose up --detach shared
```

#### Verify services

```
https://localhost:9100/info
```

```
https://localhost:8100/info
```

```
https://localhost:3100
```

## Prepare data

#### Add new entry to /etc/hosts file

```
127.0.0.1 host.docker.internal
```

#### Seed data (from inside API container)

```
yarn db local seed
```

## Other database actions

#### Dump

```
mongodump --uri="<DATABASE_URI>"
```

#### Restore

```
mongorestore --uri="<DATABASE_URI>" dump/
```
