# Educationpower-reactjs-nodejs

Made with React for front end, and Raw nodejs server.

# Overview

Made Landing page only. An uncompleted website. Only front end. No back end funtionalitie have been added except data in course section. Courses lists are shown from server, also you can retrive more data by clicking "Explore more" button.

Back end server has been made with built in http module of nodejs, no framework has been used to make the server for this simple server.

# Status

This project is unfinished project and unmaintained. Refactoring has not been done also.

Only home page of it was developed and a back api for retriving courses data serving static data in production etc. routes. Other funtionalities won't work.

# Work locally

Download the code in you local machine by zip or by running:

```bash
git clone https://github.com/mojahidhasan/educationpower_reactjs_nodejs.git
```

and then run the command below to install necessary dependencies for both client and server:

```bash
cd educationpower_reactjs_nodejs #if you are already not in the root directory
npm run installDeps
```

- **For development**:

  You have to run both client and server's server from different terminal instances

  ```bash
  npm run dev:client

  # server starts in http://localhost:3000
  ```

  ```bash
  npm run dev:server # make sure "nodemon" is installed

  # server starts in http://localhost:4000
  ```

- **For production**:

  From root directory (where .gitignore file is placed), run:

  ```bash
  npm run production
  ```

  It will run `npm run build` from client to make optimized production build and then run the server `node server.js` after that.

  both commands are needed to run otherwise some data from server won't load such as courses data.
