### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
```
Essentially a set of standards or pattern to follow when you are structuring routes for your application
```
- What is a resource?
```
as it pertains to REST it is a basic building block or object that we are returning, etc.
```

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
```
because it is simply there to return JSON
```

- What does idempotent mean? Which HTTP verbs are idempotent?
```
idempotent means that the same result will occur each time a request, etc. is made. GET, HEAD, OPTIONS, TRACE, PUT and DELETE.
```

- What is the difference between PUT and PATCH?
```
PUT replaces the entire resource while PATCH only a subset or part of it.
```
- What is one way encryption?
```
also calleding hashing it essentially means you are using an encryption algorithm to encrpy strings etc. that can't be unencrypted
```

- What is the purpose of a `salt` when hashing a password?
```
allows for technically users having diffnerent despite passing in the same password
it is the process of adding random data to a password before hashing
```

- What is the purpose of the Bcrypt module?
```
assist with building password security into your application by hashing and salting passwords
```

- What is the difference between authorization and authentication?
```
Authentication verifies identity while authorization determines privilege or access rights.
```