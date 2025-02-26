# test-webpack

## Project Overview
This project is designed to fetch city location, weather data, and pictures using various APIs. It serves as a demonstration of using Webpack for bundling and Express for handling server requests. The application allows users to input a city and receive relevant information, enhancing their experience with location-based data.

## Installation Steps
To install the necessary dependencies, run the following command:
```bash
npm install
```

## Usage Instructions
To start the server, use the following command:
```bash
npm start
```
The server will listen on port 8000. You can access the application by navigating to `http://localhost:8000` in your web browser.

## API Endpoints
- **GET /**: Renders the main index.html page.
- **POST /getCityLoc**: Fetches the location of a city based on postal code and country.
  - **Request Body**: 
    ```json
    {
      "postalcode": "12345",
      "country": "US"
    }
    ```
- **POST /weatherTemp**: Retrieves weather data for a specified location.
  - **Request Body**: 
    ```json
    {
      "lng": -73.935242,
      "lat": 40.730610,
      "remainingDays": 5
    }
    ```
- **POST /getCityPic**: Fetches a picture of the specified city.
  - **Request Body**: 
    ```json
    {
      "city_name": "New York"
    }
    ```

## Dependencies
This project uses the following main dependencies:
- `axios`: For making HTTP requests.
- `express`: For setting up the server.
- `cors`: For enabling Cross-Origin Resource Sharing.

## Troubleshooting Tips
- Ensure that you have the correct API keys set in your `.env` file.
- If you encounter issues with the server not starting, check for any syntax errors in your code.
- Make sure all required environment variables are defined in the `.env` file.

## Environment Variables
Make sure to create a `.env` file in the root directory with the following keys:
```
USERNAME=your_username
USERNUMBER=your_user_number
WEATHER_KEY=your_weather_api_key
pixabay_key=your_pixabay_api_key
