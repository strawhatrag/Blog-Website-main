# Blogging Website

This is a simple blogging website built using Node.js and Express framework. It allows users to create posts, view them, and navigate through different pages such as the home page, about page, and contact page.

## Features

- **Home Page**: Displays a list of all the blog posts created by users. Each post consists of a title and content.

- **About Page**: Provides information about the website or any other relevant details.

- **Contact Page**: Allows users to get in touch with the website administrators or owners.

- **Compose Page**: Enables users to create new blog posts. It includes a form with fields for entering the post title and content.

- **Post Page**: Shows the full content of a specific blog post when its title is clicked. It retrieves the post based on the URL parameter.

## Usage

1. Install the required dependencies by running `npm install` in the project directory.

2. Start the server by running `node app.js` or `npm start` in the project directory.

3. Access the website by navigating to `http://localhost:3000` in your web browser.

4. From the home page, you can view existing posts, click on their titles to read the full content, or create new posts using the "Compose" button.

## Dependencies

- **Express**: A minimal web application framework for Node.js that provides a robust set of features for web and mobile applications.

- **Body-parser**: Middleware for handling HTTP POST request data. It extracts the entire body portion of an incoming request stream and exposes it on `req.body`.

- **EJS**: A simple templating language that lets you generate HTML markup with plain JavaScript.

- **Lodash**: A JavaScript utility library that provides helpful functions for working with arrays, objects, and other data types.

## Further Customization

You can customize the website by modifying the provided templates (`home.ejs`, `about.ejs`, `contact.ejs`, `compose.ejs`, and `post.ejs`) located in the `views` folder. Additionally, you can modify the CSS styles by editing the `public/styles.css` file.

Feel free to enhance the website's functionality or design according to your specific requirements.
