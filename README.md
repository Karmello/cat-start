# Ask The World (startup repo)

## Initial steps

- install Docker on your machine
- ask for the personal access token (PAT)

## How to startup

#### Clone this repo using https and PAT

```
git clone https://<PAT>@github.com/Karmello/ask-the-world.git
```

#### Create .env file in the root with the PAT value

```
PAT=...
```

#### Build and run the project

```
docker-compose up app
```

#### Verify API

```
curl -k https://localhost:9000/info
```
