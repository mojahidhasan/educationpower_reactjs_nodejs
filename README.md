# Educationpower-reactjs-nodejs

Made with React for front end, and Raw NodeJS server.

# Overview

Made Landing page only. An uncompleted website. Only front-end and no back-end functionalities have been added except data in the course section. Courses lists are shown from the server, also you can retrieve more data by clicking the "Explore more" button.

Back end server has been made with a built-in HTTP module of NodeJS, no framework has been used to make the server for this simple server.

# Preview
- https://educationpower-reactjs-nodejs.onrender.com/, this link may take time on the first run because the free version of the render server spins down with inactivity.
- https://7d664ed2-87a0-496b-8819-34c0fdf3be57-00-d7evtkbxqjyi.pike.replit.dev/, try this also.

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

- **For production**:

  From the root directory (where .gitignore file is placed), run:

  ```bash
  npm run build
  npm run start
  ```
  Or
  ```bash
  npm run build-start
  #to build and start the server altogether.
  ```

  It will run `npm run build` from the client to make an optimized production build and then run the server `node server.js` after that.

  Both commands are needed to run otherwise some data from the server won't load such as course data.

# Credits

- The UI design was taken from some random website that I lost the citation. I will include them in the future upon finding them.
