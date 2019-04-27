# twg-ecomm-code-challenge

## Project setup

This application use MongoDB as database.

You can install it by Docker
```
docker pull mongo
mkdir ~/data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```

# Install the MongoDB client
```
sudo apt-get install mongodb-clients
```

# Create database
```
$ mongo <enter>
> use TwgDB (this command create the database)
> exit (quit from the editor)
```

Import the data.
```
$ mongoimport -v --db TwgDB --collection products --file /path/to/file/noelleeming-catalog.json --jsonArray
```

Just for testing... connect on mongo and type the command line bellow
```
> db.products.find( {"sku" : "164254" } );
```

The result should be a json. ;)

If these steps are "ok", you can run the application.


```
npm install
```

### Compiles and hot-reloads for development (It starts frontend and backend at the same time)
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
