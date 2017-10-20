# AngularJS + Webpack + TypeScript sample project
## TODO list:

### GUEST
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

### ADMIN
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

### COURIER
+ get order
+ set order status

### MODULES
+ ORDER module
    - dishes list
    - dish description
    - cart list
    - order page
+ MAIN module
    - greeting page
    - restaurants list
    - feedback page
+ ADMIN module
    - dishes managing:
        - dishes list
        - dish details
        - dish add / edit
        - dish categories
    - restaurants managing
        - restaurants list
        - restaurant details
        - restaurant add / edit / remove
    - couriers managing
        - couriers list
        - courier details
        - enable / disable courier
        - confirm courier's profile cnahges
    - orders list
    - order details
        - manage order (comfirm completed / cancelled ), remove order, set courier
+ COURIER module
    - profile page
        - change profile data
    - free orders list
    - own orders
        - order details: set completed / cancelled + message

### SERVICES
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

### DATA

#### DISH
- name (string)
- price (number)
- imageUrl (string)
- description (string)
- ingredients list ([string])

#### RESTAURANT
- address (string)
- Google Map coordinates ({lat, lng})
- phone number (string)

#### ORDER
- dishes list
    - dish:
        - name (string)
        - price (number)
        - ingredients list ([string])
- Google Map coordinates ({lat, lng})

#### COURIER
- name (string)
- phone number (string)
- email (string)
- address (string)
- orders' ids ([string])