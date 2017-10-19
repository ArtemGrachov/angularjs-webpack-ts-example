#AngularJS + Webpack + TypeScript sample project
## TODO list:

###GUEST
+ dishes
    - dishes categories + sorting + pagination
+ cart page
    - dishes in cart
    - total price
+ ordering
    - cart list
    - customer's information: address, email, phone number (required)
    - google map
+ feedback
    - writing a message
    - robot check (optional)
+ order
    - dishes list
    - price
    - google map
+ restaurants
    - google map
    - restaurants list with info

###ADMIN
+ dishes
    - managing categories
    - managing dishes
    - load dish picture (Firebase)
+ orders
    - managing orders: set status, delete
+ feedbacks
    - read
    - delete
+ restaurants
    - manage restaurants
    - add / delete / change location
+ curiers
    - watch curiers status

###COURIER
+ get order
+ set order status

###SERVICES
+ auth service
    - log in
    - log out
    - check access (admin, courier, guest)
+ dishes service
+ restaurants service
+ data service
    - work with Firebase
+ orders service
    - creating order:
        - list:
            [- dish id
            - dish name
            - dish price]