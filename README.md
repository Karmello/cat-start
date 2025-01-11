# CAT (startup repo)

## About

- this setup is best suited for development inside `Docker`
- VSCode's `Dev Containers` extension will be useful

```mermaid
classDiagram
CAT : Docker start-up repository
CAT: cmd/build.sh()
CAT: cmd/up.sh()
DB: Mongo
API: Node, TypeScript
APP: Node, Webpack, React, TypeScript
Shared: TypeScript
Shared: git clone()
Shared: git pull()
Stripe: payment service
CAT --> DB : Container 1
CAT --> API : Container 2 (repo)
CAT --> APP : Container 3 (repo)
CAT --> Shared : Container 4 (repo)
CAT --> Stripe : Container 5
API --|> Shared
```

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
git clone https://<PAT>@github.com/Karmello/cat-start.git
```

#### Create `.env` file in the root of the project and fill it in with the right values

```
NODE_ENV=
CLIENT_PORT=
SERVER_PORT=
API_PORT=
API_PORT_TEST=
FE_URL=
API_URL=
API_PATH=
FULL_ACCOUNT_PAYMENT_REQUIRED=
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
MONGO_URI=
MONGO_URI_TEST=
MONGO_URI_LOCAL=
MONGO_URI_MASTER=
MONGO_URI_STAGING=
MONGO_URI_PROD=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_URL=
AWS_BUCKET_NAME=
STRIPE_API_KEY=
DONATION_PAYMENT_LINK=
FULL_ACCOUNT_PAYMENT_LINK=
EMAIL_USER=
EMAIL_PASS=
PAT=
RECAPTCHA_SITE_KEY=
AUTH_SECRET=
HONEYBADGER_API_KEY=
```

#### Start Stripe (optional)

```
docker-compose up --detach stripe
```

#### Start database

```
docker-compose up --detach db
```

#### Build and start API

```
docker-compose build --no-cache api
```

```
docker-compose up --detach api
```

#### Build and start APP

```
docker-compose build --no-cache app
```

```
docker-compose up --detach app
```

#### Build and start shared repo

```
docker-compose build --no-cache shared
```

```
docker-compose up --detach shared
```

#### Manage all services at once using bash scripts

```
cmd/down
```

```
cmd/build
```

```
cmd/up
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

## Getting bash shell

#### Docker

```
docker exec -it cat-app /bin/bash
```

```
docker exec -it cat-api /bin/bash
```

```
docker exec -it cat-shared /bin/bash
```

#### Heroku

```
heroku run bash -a cat-api-development
```

## Database actions

- there's `db` folder in the root of API repository
- it contains ready scripts to perform all sorts of db actions

#### Available actions

```
seed | empty | check | notify | copyto | edit
```

#### Available environments

```
local | dev | stag | prod
```

#### Examples

```
yarn db local seed
```

```
yarn db prod check
```

```
yarn db prod copyto stag
```
