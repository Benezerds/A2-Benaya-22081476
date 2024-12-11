# IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

# Please include your shared repository link here:

# Example: Choiru's shared repository: https://github.com/Benezerds/A2-Benaya-22081476.git

# Make sure for your case it is in Private

## **Access Database**

# 1 Plsql Cheat Sheet: You can refer to the PostgreSQL cheat sheet here.

# 2 Know the Container ID: To find out the container ID, execute the following command:

# docker ps

#  9958a3a534c9   testsystem-nginx           "/docker-entrypoint.?"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1

#  53121618baa4   testsystem-frontend        "docker-entrypoint.s?"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1

#  c89e46ac94b0   testsystem-api             "docker-entrypoint.s?"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1

#  9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s?"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1

# Running the application

# docker compose command:

# docker compose up --build

# 4 Access postgreSQL in the container: Once you have the container ID, you can execute the container using the following command: You will see the example of running the PostgreSQL inside the container.

# docker exec -it testsystem-db-1 psql -U postgres

# choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       

# psql (15.3)

# Type "help" for help.

# 

# postgres=# \dt

#           List of relations

#  Schema |   Name   | Type  |  Owner   

# --------+----------+-------+----------

#  public | contacts | table | postgres

#  public | phones   | table | postgres

# (2 rows)

# 

#  postgres=# select * from contacts;

#  id |  name  |         createdAt         |         updatedAt         

# ----+--------+---------------------------+---------------------------

#   1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00

#  (1 row)

#  postgres=# select * from phones;

#  id | phone_type |   number    | contactId |         createdAt          |         updatedAt          

# ----+------------+-------------+-----------+----------------------------+----------------------------

#   1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00

# 

# 

# postgres=# select * from contacts;

# Replace container_ID with the actual ID of the container you want to execute.

# 

# Task 2

## Show Contact

![](/images/X01_Image_1.png)

## Add Contact

2. Invoke-WebRequest -Uri "http://localhost/api/contacts" `

-Method POST `

-ContentType "application/json" `

-Body '{"name":"John Doe"}'

![](/images/0Pt_Image_2.png)

## Delete Contact

3. Invoke-WebRequest -Uri "http://localhost/api/contacts/4" -Method DELETE

![](/images/Yck_Image_3.png)

## Update Contact

4. Invoke-WebRequest -Uri "http://localhost/api/contacts/3" `

-Method PUT `

-ContentType "application/json" `

-Body '{"name": "Benaya"}'

![](/images/vIG_Image_4.png)

## Show Phone

5. curl localhost/api/contacts/3/phones

![](/images/puR_Image_5.png)

## Add Phone

6. Invoke-WebRequest -Uri "http://localhost/api/contacts/3/phones" `

-Method POST `

-ContentType "application/json" `

-Body '{"name":"Telephone", "number":"081362291"}'

![](/images/YpK_Image_6.png)

## Update Phone

7. Invoke-WebRequest -Uri "http://localhost/api/contacts/3/phones/2" `

-Method PUT `

-ContentType "application/json" `

-Body '{"name": "Work Phone", "number": "12345678999"}'

![](/images/5iL_Image_7.png)

## Delete Phone

8. Invoke-WebRequest -Uri "http://localhost/api/contacts/3/phones/2" `

-Method DELETE

![](/images/l0p_Image_8.png)

# Task 3

## Show Contact

![](/images/6DQ_Image_9.png)

## Add Contact

2. Invoke-WebRequest -Uri "http://localhost/api/contacts" `

-Method POST `

-ContentType "application/json" `

-Body '{"name":"Sunib", ?address?:?Senayan?}'

![](/images/1Cd_Image_10.png)

## Delete Contact

3. Invoke-WebRequest -Uri "http://localhost/api/contacts/4" -Method DELETE

![](/images/AKc_Image_11.png)

## Update Contact

4. Invoke-WebRequest -Uri "http://localhost/api/contacts/1" `

-Method PUT `

-ContentType "application/json" `

-Body '{"name": "Sunib", ?address?: ?Fx Senayan Sudirman?}'

![](/images/dhk_Image_12.png)

## Show Phone

5. curl localhost/api/contacts/3/phones

![](/images/cyz_Image_13.png)

## Add Phone

6. Invoke-WebRequest -Uri "http://localhost/api/contacts/1/phones" `

-Method POST `

-ContentType "application/json" `

-Body '{"phone_type":"Telephone", "phone_number":"628813111399"}'

![](/images/JOI_Image_14.png)

## Update Phone

7. Invoke-WebRequest -Uri "http://localhost/api/contacts/1/phones/2" `

-Method PUT `

-ContentType "application/json" `

-Body '{"phone_type": "Work Phone", "phone_number": "12345678999"}'

![](/images/l6k_Image_15.png)

## Delete Phone

8. Invoke-WebRequest -Uri "http://localhost/api/contacts/1/phones/2" `

-Method DELETE

![](/images/sLZ_Image_16.png)

# Task 4

## Create Companies

API Endpoint

router.post("/companies/:contactId/", companies.create);

Invoke-WebRequest -Uri "http://localhost/api/companies/1" `

-Method POST `

-ContentType "application/json" `

-Body '{"company_name":"Enam Sekawan Group", "company_address":"Senayan"}'

![](/images/0rn_Image_17.png)

## Get All Companies

router.get("/companies/:contactId/", companies.findAll);

curl localhost/api/companies/1/

![](/images/4uD_Image_18.png)

## Update Companies

API Endpoint:

router.put("/companies/:companyId/contacts/:contactId", companies.update);

Invoke-WebRequest -Uri "http://localhost/api/companies/1/contacts/1" `

-Method PUT `

-ContentType "application/json" `

-Body '{"company_name": "Solit", "company_address": "IDX Gedung"}'

![](/images/lgd_Image_19.png)

## Delete Companies

API Endpoint: \
router.delete("/companies/:companyId/contacts/:contactId", companies.delete);

Invoke-WebRequest -Uri "http://localhost/api/companies/1/contacts/1" `

>> 	-Method DELETE

![](/images/QWL_Image_20.png)

# 

# 

# Task 5

### **NewCompany.js**

Created NewCompany component

The NewCompany component will be the front end for creating new company data. It is implemented inside the CompanyList component.

![](/images/is7_Image_21.png)

*Screenshot 1.0 The front-end result of the modified Contact component*

### **CompanyList.js**

This component is located inside the Contact.js component, which will show the list of companies related to the specific Contact. Furthermore, the CompanyList component will be the parent component for the Company and the NewCompany component.

![](/images/NLa_Image_22.png)

*Screenshot 2.0 The Front-end result of CompanyList*

### **Company.js**

This component will be the individual Company object or component, implemented inside the CompanyList component.

![](/images/yEz_Image_23.png)

*Screenshot 3.0 The Front-end result of the Company component*

To ensure the company list is updated when there is a CRUD operation, I initialize the list's states in the Contact.js file, which I then pass down to the other component related to the Company feature.

![](/images/lPW_Image_24.png)

*Screenshot 3.1 Companies list state initialized inside the Contact component*

![](/images/H6A_Image_25.png)

*Screenshot 3.2 Passing the contact, companies and setCompanies state to the CompanyList Component.*

# 

# Task 6

1. Files created for the models

### Customer Model

![](/images/Bqz_Image_26.png)

*Screenshot 4.0 Customer Model*

### Item Model

![](/images/g50_Image_27.png)

*Screenshot 4.1 Item Model*

### Order Model

![](/images/pdH_Image_28.png)

*Screenshot 4.2 Order Model*

### Database Implementation in <span style="text - decoration: underline;">index.js</span>

![](/images/qxG_Image_29.png)

*Database Implementation for the newly created models as well as defining the relationships*

2. API Routes

## **Customer API Endpoints**

### **POST ****/customers**

**Description:** Create a new customer.

- **Body Parameter:**

- **customer_name** (string, required): The name of the customer.

- **customer_email** (string, required): The email address of the customer.

- **Response:**

- **201 Created**: Returns the created customer object.

- **400 Bad Request**: If required fields are missing.

**Example:**

$body = @{customer_name="John Doe"; customer_email="johndoe@example.com"} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost/customers" -Method Post -Body $body -ContentType "application/json"

### **GET ****/customers**

**Description:** Retrieve all customers.

- **Parameters:** None.

- **Response:**

- **200 OK**: Returns a list of all customers.

- **500 Internal Server Error**: If an error occurs.

**Example:**

Invoke-RestMethod -Uri "http://localhost/customers" -Method Get

### **PUT ****/customers/:customerId**

**Description:** Update specific customer data.

- **Parameters:**

- **customerId** (path, required): The ID of the customer to update.

- Request body with fields to update.

- **Response:**

- **200 OK**: If the update is successful.

- **404 Not Found**: If the customer is not found.

**Example:**

$body = @{customer_name="Jane Doe"} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost/customers/1" -Method Put -Body $body -ContentType "application/json"

### **DELETE ****/customers/:customerId**

**Description:** Delete a specific customer.

- **Parameters:**

- **customerId** (path, required): The ID of the customer to delete.

- **Response:**

- **200 OK**: If the deletion is successful.

- **404 Not Found**: If the customer is not found.

**Example:**

Invoke-RestMethod -Uri "http://localhost/customers/1" -Method Delete


## **Item API and Routes**

### **POST ****/items**

**Description:** Create a new item.

- **Body Parameters:**

- **item_name** (string, required): The name of the item.

- **item_price** (number, required): The price of the item.

- **Response:**

- **201 Created**: Returns the created item object.

- **400 Bad Request**: If required fields are missing.

**Example:**

$body = @{item_name="Laptop"; item_price=1200} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost/items" -Method Post -Body $body -ContentType "application/json"

### **GET ****/items**

**Description:** Retrieve all items.

- **Parameters:**

- **name** (query, optional): Filter items by name (partial match).

- **Response:**

- **200 OK**: Returns a list of all items or filtered results.

- **500 Internal Server Error**: If an error occurs.

**Example:**

Invoke-RestMethod -Uri "http://localhost/items" -Method Get

### **PUT ****/items/:itemId**

**Description:** Update specific item data.

- **Parameters:**

- **itemId** (path, required): The ID of the item to update.

- Request body with fields to update.

- **Response:**

- **200 OK**: If the update is successful.

- **404 Not Found**: If the item is not found.

**Example:**

$body = @{item_price=1300} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost/items/1" -Method Put -Body $body -ContentType "application/json"

### **DELETE ****/items/:itemId**

**Description:** Delete a specific item.

- **Parameters:**

- **itemId** (path, required): The ID of the item to delete.

- **Response:**

- **200 OK**: If the deletion is successful.

- **404 Not Found**: If the item is not found.

**Example:**

Invoke-RestMethod -Uri "http://localhost/items/1" -Method Delete

## ***Order API Endpoints***

### ***POST ******/orders***

***Description:**** Create a new order.*

- ***Body Parameters:***

- ***order_date**** (string, required): The date of the order.*

- ***customer_id**** (integer, required): The ID of the customer placing the order.*

- ***item_id**** (integer, required): The ID of the item being ordered.*

- ***Response:***

- ***201 Created****: Returns the created order object, including customer and item details.*

- ***400 Bad Request****: If required fields are missing.*


***Example:***

*$body = @{order_date="2024-12-10"; customer_id=1; item_id=2} | ConvertTo-Json*

*Invoke-RestMethod -Uri "http://localhost/orders" -Method Post -Body $body -ContentType "application/json"*

### ***GET ******/orders/:customerId***

***Description:**** Retrieve all orders for a specific customer.*

- ***Parameters:***

- ***customerId**** (path, required): The ID of the customer whose orders are being retrieved.*

- ***Response:***

- ***200 OK****: Returns a list of all orders for the customer, including customer and item details.*

- ***500 Internal Server Error****: If an error occurs.*

***Example:***

*Invoke-RestMethod -Uri "http://localhost/orders/1" -Method Get*

### ***PUT ******/orders/:orderId***

***Description:**** Update specific order data.*

- ***Parameters:***

- ***orderId**** (path, required): The ID of the order to update.*

- *Request body with fields to update.*

- ***Response:***

- ***200 OK****: If the update is successful.*

- ***404 Not Found****: If the order is not found.*

***Example:***

*$body = @{order_date="2024-12-11"} | ConvertTo-Json*

*Invoke-RestMethod -Uri "http://localhost/orders/1" -Method Put -Body $body -ContentType "application/json"*

### ***DELETE ******/orders/:orderId***

***Description:**** Delete a specific order.*

- ***Parameters:***

- ***orderId**** (path, required): The ID of the order to delete.*

- ***Response:***

- ***200 OK****: If the deletion is successful.*

- ***404 Not Found****: If the order is not found.*

***Example:***

*Invoke-RestMethod -Uri "http://localhost/orders/1" -Method Delete*

- Front-end

I created 3 new folders inside the components folder to organize the file.

![](/images/UnU_Image_30.png)
