# Ask The World (startup repo)

## About

- this setup is best suited for development inside `Docker`
- VSCode's `Dev Containers` extension will be useful

## Initial steps

- make sure you have `Docker` up on your machine
- ask for `environment variables`

## OS

#### Add new entry to /etc/hosts file

```
127.0.0.1 host.docker.internal
```

## How to startup local environment

#### Clone this repo using https and GitHub personal access token

```
git clone https://<PAT>@github.com/Karmello/ask-the-world.git
```

#### Create `.env` file in the root of the project and fill it in with the right values

```
// GitHub personal access token
PAT=
// Stripe payment service api key
STRIPE_API_KEY=
// Google recaptcha site key
RECAPTCHA_SITE_KEY=
// app email account password
EMAIL_PASS=
// secret for creating tokens
AUTH_SECRET=
// AWS S3 credentials
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
// api
API_PATH=
// Mongo admin user credentials
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
// Mongo uri's for different environments
MONGO_URI_PROD=
MONGO_URI_STAGING=
MONGO_URI_MASTER=
MONGO_URI_TEST=
MONGO_URI_LOCAL=
```

#### Run Stripe (optional)

```
docker-compose up --detach stripe
```

#### Run database

```
docker-compose up --detach db
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

#### Get a bash shell in the container

```
docker exec -it atw-fe /bin/bash
```

## Database actions (from inside API container)

#### Seed data

```
yarn db local seed
```

#### Dump db

```
mongodump --uri="<DATABASE_URI>"
```

#### Restore db

```
mongorestore --uri="<DATABASE_URI>" dump/
```
