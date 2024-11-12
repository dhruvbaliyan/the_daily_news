# NewsLetter - The Daily News

NewsLetter is a simple React-based application for displaying daily news articles. It demonstrates basic functionality such as fetching data from a JSON web server, state management using Redux, and user-friendly interfaces for viewing and managing news articles.

## Features

- **Fetch and Display News**: Uses a JSON server to simulate an API, pulling news articles and displaying them.
- **Redux for State Management**: Handles global state using Redux, with separate actions and reducers for managing data flow.
- **Basic Routing**: Implements navigation between different views in the application using React Router.
- **User Interactions**: Users can subscribe to a newsletter and send messages through forms, with data managed by Redux.


## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/NewsLetter.git
    cd NewsLetter
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start JSON Server** (to serve the mock API):
    ```bash
    npx json-server --watch db.json --port 3004
    ```

4. **Start the Application**:
    ```bash
    npm start
    ```

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **React Router**: For routing.
- **JSON Server**: Simulates a backend API for fetching and updating news data.
- **Axios**: For making HTTP requests to the JSON server.

## API and Data Flow

- `db.json` serves as the mock backend with structured news data.
- API calls are handled in the `api` folder and managed through Redux actions and reducers.
- User actions such as fetching posts, viewing individual posts, and sending messages are all routed through Redux for efficient state handling.

## Commands

- **Install dependencies**: `npm install`
- **Run JSON server**: `npx json-server --watch db.json --port 3004`
- **Run the app**: `npm start`

## Contributing

Feel free to fork the repository and submit pull requests for new features, bug fixes, or improvements.

## License

This project is licensed under the MIT License.
