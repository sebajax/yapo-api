# yapo-api

Yapo - [Calculate PI with decimals] Use cases for (Yapo interview)

[![Main CI (Prod)](https://github.com/sebajax/yapo-api/actions/workflows/main.yml/badge.svg)](https://github.com/sebajax/yapo-api/actions/workflows/main.yml)

## Docker compose for develop

1.  Install the dependencies that the project has using this command (Only fisrt time or when re-using):
    ```
    docker-compose --file docker/docker-compose.yml run --rm yapo-api npm install
    ```
2.  To run your project run this command:
    ```
    docker-compose --file docker/docker-compose.yml up -d
    ```
3.  To remove the docker execution run this command:
    ```
    docker-compose --file docker/docker-compose.yml down
    ```

## Docker using Makefile

To speed up the execution of commands, the use of Makefile is introduced, which has the following useful commands:

1. Run project in detached mode:
   ```
   make start
   ```
2. Run project not detached:
   ```
   make up
   ```
3. Build a image:
   ```
   make build
   ```
4. Run tests:
   ```
   make test
   ```
5. Install dependecies:
   ```
   make install
   ```
6. For help and more commands:
   ```
   make help
   ```

Make sure you have `make` installed!

## Testing the api

Unit testing:

    npm run test

Unit testing on dist build:

    npm run test_dist
