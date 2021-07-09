# ExpressServerJWT
express server with JWT Authentication

5 endpoints:

0) Authenticate First : http://localhost:8000/authenticate 
body - {
    "email":"test",
    "password":"test"
}


Add Bearer Token to all api's in Authorization.

1) GET Particular User: http://localhost:8000/users?email=test1234@gg11
2) GET ALL USERS: http://localhost:8000/users
3) GET PARTICULAR PAGE: http://localhost:8000/users?page=3
4) POST USER: http://localhost:8000/users
5) DELETE USER: http://localhost:8000/users?email=test
