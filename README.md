# CRA Fullstack MERN Web App - User Blogging Platform

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that provides a user-friendly platform for users to register, login, view blogs with images and text, upload their own blogs, and perform actions such as editing and deleting their own blogs.

[demoImage](projectBlog.png)

## Features

- User Registration: Users can create a new account by providing their necessary details, including name, email, and password.

- User Login: Registered users can log in using their credentials to access the blogging platform.

- Blog Viewing: Users can view blogs created by themselves as well as other users. Blogs will include both text and images.

- Blog Creation: Users can create and upload their own blogs, including text content and accompanying images.

- Blog Editing: Users have the ability to edit the blogs they have created, allowing them to modify the content or update images.

- Blog Deletion: Users can delete their own blogs if they no longer wish to keep them on the platform.

## Installation

1\. Clone the repository to your local machine.

```

git clone <repository_url>

```

2\. Navigate to the project directory.

```

cd project-directory

```

3\. Install the dependencies for the server.

```

cd server

npm install

```

4\. Install the dependencies for the client.

```

cd client

npm install

```

## Configuration

1\. Create a `.env` file in the server directory and configure the following environment variables:

```

DB_CONNECTION=<MongoDB_connection_string>

JWT_SECRET=<JWT_secret_key>

```

2\. Update the MongoDB connection string (`<MongoDB_connection_string>`) with your own MongoDB database credentials.

## Usage

1\. Start the server.

```

cd server

npm start

```

2\. Start the client.

```

cd client

npm start

```

3\. Access the application in your browser.

```

http://localhost:3000

```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue in the repository.

## License

This project is licensed under the [MIT License](LICENSE).
