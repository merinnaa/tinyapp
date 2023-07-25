# TinyApp Project

TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.

## Final Product
<img width="1435" alt="Screenshot 2023-07-25 at 3 46 29 AM" src="https://github.com/merinnaa/tinyapp/assets/107540971/d3371f55-c181-4f48-979f-62d51a09ae26">
<img width="1435" alt="Screenshot 2023-07-25 at 3 46 50 AM" src="https://github.com/merinnaa/tinyapp/assets/107540971/ad41541c-6815-4c86-9e60-f8a65853d624">



## Dependencies

- Node.js
- Express
- EJS
- bcrypt
- cookie-session

## Getting Started

1) Install all dependencies (using the `npm install` command).
2) Run the development web server using the `node express_server.js` command.
3) Go to `localhost:8080` on your browser.

## How To Use TinyApp

#### Register/Login
Users must be logged in to create new links, view them, and edit them.

Just click Register on right top, put in your email and password, and you're good to go.

#### Create New Links

Either click Create a New Short Link in My URLs page, or Create New URL on navigation bar.

Then simply enter the long URL you want to shorten.

#### Edit or Delete Short Links

In My URLs, you can delete any link you want.

You can also click Edit, and then enter a new long URL to update your link. It will be the same short URL, but redirect to an updated long URL.

#### Use Your Short Link

The path to use any short link is /u/:shortLink. This will redirect you to the long URL.

You can also reach this by clicking edit on a link, and using the link corresponding to the short URL.