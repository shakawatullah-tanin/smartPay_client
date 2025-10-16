# Bill Management Website (Smart-pay)

##  Project Overview
The **Bill Management Website** is a single-page application that allows users to view and pay utility bills such as electricity, gas, water, internet. Users can manage their payments using their account balance and see their payment history. The project is built with **React**, **Firebase Authentication**, and hosted on **Surge**.

---

## Live Demo
Live URL : https://smart-pay-dev-st.surge.sh



## Features

### Authentication
- User Registration with Name, Email, Photo URL, and Password
- Login with Email/Password
- Google Social Login (Sign in with Google)
- Password validation: Minimum 6 characters, at least one uppercase and one lowercase letter

### User Profile
- Display profile picture, name, and email
- Update Name and Photo URL

### Bills Management
- View a list of utility bills (Electricity, Gas, Internet, Water, TV)
- Bill details page with two-column layout:
  - Organization logo, bill type icon
  - Organization name, amount, due date
  - Pay Bill button
- Deduct bill amount from user balance
- Prevent paying the same bill twice
- Show a toast for successfully paid bills


### Home Page
-  Carousel using for slider 
- Icons of utility organizations (DESCO, NESCO, WASA, Tv.)
- Fully responsive on mobile, tablet, and desktop

### Navbar
- Logo on left
- Links: Bills , Profile
- Login/Register buttons when user is not signed in
- Profile picture with dropdown menu showing balance and Logout when user is signed in

### Footer
- Simple and consistent design






