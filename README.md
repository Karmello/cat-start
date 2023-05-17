# Ask The World (startup repo)

## Info

- this setup is best suited for development inside `Docker`, for that please use the `Remote - Container` vscode extension

## Initial steps

- install `Docker` on your machine and start it up
- ask for the `personal access token (PAT)`
- ask about `.env` file
- ask for `countries` and `question-categories` data 

## How to startup

#### Clone this repo using https and the PAT

```
git clone https://<PAT>@github.com/Karmello/ask-the-world.git
```

#### Create `.env` file in the root of the project and fill it in with the right values

```
PAT=
STRIPE_API_KEY=
EMAIL_PASS=
AUTH_SECRET=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

#### Run database

```
docker-compose up db
```

#### Run Stripe

```
docker-compose up stripe
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
## Prepare data

#### Add new entry to /etc/hosts file

```
127.0.0.1 host.docker.internal
```

#### Connect to database

```
mongodb://host.docker.internal:27018/ask-the-world-local
```

#### Import static data

```
countries.json >>> countries
```

```
question-categories.json >>> questioncategories
```

#### Seed dynamic data (from inside API container)

```
yarn db-seed mongodb://db:27017/ask-the-world-local
```
