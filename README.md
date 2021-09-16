### Csv reading and storing site

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
4. A sample csv file is provided in the root folder

### Apis

1. Post -  `/`
    ```
      -contains a csv form data with key (name) - csv
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
     


