# **ToDoList RESTful API - Skilvul TPA 005**

By: Arisandi Satria Jeujanan

---

## Documentation

### 1. **Create User**

- Endpoint: `/users/register`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "name": "Jeujanan",
    "email": "jeujanan@gmail.com",
    "password": "123456"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Akun berhasil dibuat",
      "data": {
        "name": "Jeujanan",
        "email": "jeujanan@gmail.com",
        "password": "123456"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `409 CONFLICT` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ```json
    {
      "message": "Tolong isi semua input!"
    }
    ```

    If email is invalid:

    ```json
    {
      "message": "Email tidak valid!"
    }
    ```

    If email has already registered:

    ```json
    {
      "message": "Email sudah terdaftar!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 2. **Login User**

- Endpoint: `/users/login`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "arisandi@gmail.com",
    "password": "123456"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Berhasil Login!",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg1MDMwNDY2fQ.C5K6QThyAdBA7i5o7lYHjCGtdHixmcZ4zrvf0sAR25s"
    }
    ```

  - Error: `400 BAD REQUEST` || `401 UNAUTHORIZED` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ```json
    {
      "message": "Tolong isi semua input!"
    }
    ```

    If email is invalid:

    ```json
    {
      "message": "Email tidak valid!"
    }
    ```

    If password is is wrong:

    ```json
    {
      "message": "Password salah!"
    }
    ```

    If account is unregistered:

    ```json
    {
      "message": "Akun anda belum terdaftar!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 3. **Get All Todo**

- Endpoint: `/todo`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": [
        {
          "name": "Workout",
          "description": "Do 100 pushup, 4 minutes plank, 10 km run"
        },
        {
          "name": "Task",
          "description": "Make a RESTful API with Express"
        }
      ]
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 4. **Add Todo**

- Endpoint: `/todo`
- Method: `POST`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

- Response:

  - Success: `201 CREATED`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": {
        "name": "Workout",
        "description": "Do 100 pushup, 4 minutes plank, 10 km run"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty:

    ````json
    {
      "message": "Tolong isi semua input!"
    }

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ````

### 5. **Delete All Todo**

- Endpoint: `/todo`
- Method: `DELETE`
- Auth: YES
- Body: -

- Response:

  - Success: `204 NO CONTENT`

    Example:

    ```json
    {
      "message": "Semua data berhasil dihapus!"
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    Example:

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 6. **Detail Todo**

- Endpoint: `/todo/:id`
- Method: `GET`
- Auth: YES
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil ditampilkan!",
      "data": {
        "name": "Workout",
        "description": "Do 100 pushup, 4 minutes plank, 10 km run"
      }
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If todo not found:

    ```json
    {
      "message": "Data tidak ditemukan!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 7. **Update Todo**

- Endpoint: `/todo/:id`
- Method: `PUT`
- Auth: YES
- Body:

  ```json
  {
    "name": "string",
    "description": "string",
    "status": "string"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Data berhasil diubah!"
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If todo not found:

    ```json
    {
      "message": "Data tidak ditemukan!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```

### 8. **Delete Spesific Todo**

- Endpoint: `/todo/:id`
- Method: `DELETE`
- Auth: YES
- Body: -

- Response:

  - Success: `204 NO CONTENT`

    Example:

    ```json
    {
      "message": "Data berhasil dihapus!"
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If todo not found:

    ```json
    {
      "message": "Data tidak ditemukan!"
    }
    ```

    If the server get an error:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>,
    }
    ```
