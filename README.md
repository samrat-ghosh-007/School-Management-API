# School Management API

A simple RESTful API to manage schools — add, view school records built using Node.js, Express, and MySQL.

---

## Live API

You can access the live deployed API here:

🔗 [https://school-management-api-29y8.onrender.com](https://school-management-api-29y8.onrender.com)

---


## Features

- Add new schools with location data (name, address, latitude, longitude)
- Retrieve list of schools
- Logging with Morgan middleware
- Environment variable configuration with dotenv

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MySQL**
- **Morgan** (HTTP request logger)
- **dotenv** (Environment variable management)


---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- MySQL database running
- [Postman](https://www.postman.com/) (optional) for API testing

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/samrat-ghosh-007/School-Management-API.git
    ```

2. Navigate into the project folder:

    ```bash
    cd School-Management-API
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:

    ```env
    DB_HOST=your_mysql_host
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=your_database_name
    PORT=3306
    ```

5. Start the server:

    ```bash
    npm start
    ```

---

## API Endpoints

| Method | Endpoint       | Description             | Query Parameters				 |
| ------ | -------------- | ----------------------- |--------------------------------------|
| POST   | `/addSchools`  | Add a new school        | 
| GET    | `/listSchools` | Get list of all schools | latitude (number), longitude (number)|


---

## Usage

Use [Postman](https://www.postman.com/) or any HTTP client to test the API endpoints.

---

## License

This project is licensed under the [MIT License](LICENSE).
