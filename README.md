## User Authentication System with Private Routing using React, Redux, Node.js, and MongoDB

Welcome to the User Authentication System project! This comprehensive application employs React, Redux, React Router, Node.js, MongoDB, Bootstrap, and additional middleware such as Redux DevTools Extension, Redux Logger, and Redux Thunk to establish an authentication system complete with private routing. This project aims to streamline user authentication, enabling seamless login, registration, and protected page access.

### Features

1. **Login Page:** Users can enter their credentials to log in.
2. **Register Page:** New users can register by creating an account.
3. **Protected Page:** Access to this page is restricted to logged-in users only.
4. **Home Page:** The central hub of the application.
5. **Logout Page:** Users can log out to end their session.

### Technologies Utilized

- **React:** Building the user interface and frontend components.
- **Redux:** Managing global application state, including login status.
- **React Router:** Enabling navigation and private routing.
- **Node.js:** Serving as the backend runtime environment.
- **Express.js:** Creating a robust API for authentication and data communication.
- **MongoDB:** Storing user data securely in a database.
- **Bootstrap:** Styling the application for a polished appearance.
- **Redux DevTools Extension:** Facilitating debugging and state inspection.
- **Redux Logger:** Logging Redux actions and state changes for debugging.
- **Redux Thunk:** Handling asynchronous actions within Redux such as Fetching API's.

### Installation and Usage

Follow these steps to install and run the application:

**Step 1:** Install Dependencies for Frontend
```bash
cd frontend
npm install
```
This command will navigate to the frontend directory and install all the necessary Node packages required for the frontend.

**Step 2:** Install Dependencies for Backend
```bash
cd backend
npm install
```
This command will navigate to the backend directory and install all the necessary Node packages required for the backend.

**Step 3:** Run the Frontend and Backend
```bash
cd frontend
npm run dev
```
Navigate to [http://localhost:5173/](http://localhost:5173/) in your web browser to access the frontend.

```bash
cd backend
npm start
```
The backend server will start running, serving the API at [http://localhost:8000](http://localhost:8000).

### How It Works

1. **Login Page:** Users input their credentials. The server compares this data with the stored data in MongoDB. Upon successful authentication, the Redux state is updated.
2. **Register Page:** New users provide registration information. The server stores this data in MongoDB.
3. **Protected Page:** Private routing is established using the React Router. Only logged-in users can access this page.
4. **Logout Page:** Logging out clears the user's session.

### Contribution

Contributions are welcomed! If you discover any issues or wish to add new features, please fork the repository and submit a pull request.

### Contact

For any inquiries or assistance, please contact [vasubhalodi111@gmail.com](mailto:vasubhalodi111@gmail.com).

Enjoy the seamless user authentication experience brought to you by this application, enhanced by Redux DevTools Extension, Redux Logger, and Redux Thunk!
