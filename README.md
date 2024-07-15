# Educationpower-reactjs-nodejs

Made with React for front end, and Raw NodeJS server.

# Overview

Made Landing page only. An uncompleted website. Only front-end and no back-end functionalities have been added except data in the course section. Courses lists are shown from the server, also you can retrieve more data by clicking the "Explore more" button.

Back end server has been made with a built-in HTTP module of NodeJS, no framework has been used to make the server for this simple server.

# Technologies

1. React v18.2.0
2. TailwindCSS v3.3.3
3. Nodejs server (No framework)

# Preview

- https://educationpower-reactjs-nodejs.onrender.com/, this link may take time on the first run because the free version of the render server spins down with inactivity. It might take 50 seconds to load on first request. So please wait...

# Status

This project is an unfinished project and unmaintained. Refactoring has not been done also.

Only the home page and a back-end API for retrieving course data, serving static data in production, etc. routes were developed but other functionalities won't work.

# Work locally

Download the code in your local machine by zip or by running:

```bash
git clone https://github.com/mojahidhasan/educationpower_reactjs_nodejs.git
```

and then run the command below to install the necessary dependencies for both client side and server side:

```bash
cd educationpower_reactjs_nodejs #if you are already not in the root directory
```

- **For development**:

  You have to run both the client and server's server from different terminal instances

  ```bash
  npm run dev:client

  # server starts in http://localhost:3000
  ```

  ```bash
  npm run dev:server # make sure "nodemon" is installed

  # server starts in http://localhost:4000
  ```

  Both commands are needed to run otherwise some data from the server won't load such as course data.

- **For production**:

  From the root directory (where .gitignore file is placed), run:

  ```bash
  npm run build
  npm run start
  ```
  `npm run build` creates a **build** folder in **client** directory where `react-scripts` generates an optimized static files (html, css, js and assets) for production. An then `npm run start` starts a node server that gets static data from `./client/build` to show to the client.

  Or

  ```bash
  npm run build-start
  #to build and start the server altogether.
  ```

# Credits

- The UI design was taken from some random website that I lost the citation. I will include them in the future upon finding them.
