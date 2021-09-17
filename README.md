### Csv reading and storing 

### Before starting 
1. Add a .env file in the root folder as below
    ```
        MONGO_URL=<mongoUrl>
        TOKEN=<token>
    ```
    

2. Install dependencies
    ```
    npm install
    ```
3. Run the app
    ```
    npm start
    ```
4. A sample csv file is provided in the root folder as per the schema

## Apis

### All apis will work only if there a bearer `token` (which is included in the .env file) in the header
use sample token 'allow' to test the app

1. Post -  `/`
    ```
      -accepts a csv file with key (name) - csv
    ```
    
2. Get -  `/files`
    ```
     -returns the collection data
    ```
    
3. Post -  `/files`
   ```     
     -accepts a json request body with key value as per the csv file and stores in the db
    ```
4. Get - `/files/:id`
    ```
     -return the details of the data corresponding to the id
    ```
    
5. Delete -  `/files/:id`
    ```
     -delete and returns the details of the data corresponding to the id
    ```
6. Put -  `/files/:id`
    ```
    - accepts a json request body with key value as per the csv file 
     and updates the data with the "id"
    ```
     


