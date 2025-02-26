const express = require("express");
const app = express();
const cors = require("cors");

//read the json files coming to you
app.use(express.json());
app.use(express.static('dist'));

//require dotenv
require("dotenv").config();

//get the city function which get location from geoNames
const  {getCityLoc} = require("./getCityLoc");
const {weatherTemp} = require("./weatherTemp");
const {getCityPic} = require("./getCityPic");

//using cors
app.use(cors());

port = 8000;

//I had to fix an issue with the env file that it doesn't want to get the integers in my username so i made
// a separate const for them
const userstring = process.env.USERNAME;
const usernumber = process.env.USERNUMBER;
const WEATHER_KEY = process.env.WEATHER_KEY;
const pixabay_key = process.env.pixabay_key;
const username = userstring.concat(usernumber);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/getCityLoc", async (req, res) => {
    try {
        console.log("Received request for postal code:", req.body.postalcode); // Log the incoming request

        const { postalcode, country } = req.body;
        const Location = await getCityLoc(postalcode, country, username);
        return res.send(Location); // Send the location back to the client
    } catch (error) {
        console.error("Error fetching city location:", error);
        res.status(500).send({ error: "Failed to fetch city location" });
    }
});

app.post("/weatherTemp", async (req, res) => {
    try {
        const { lng, lat, remainingDays } = req.body;
        const getWeather = await weatherTemp(lng, lat, remainingDays, WEATHER_KEY);
        return res.send(getWeather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send({ error: "Failed to fetch weather data" });
    }
});

app.post("/getCityPic", async (req, res) => {
    try {
        const { city_name } = req.body;
        const getPic = await getCityPic(city_name, pixabay_key);
        return res.send(getPic);
    } catch (error) {
        console.error("Error fetching city picture:", error);
        res.status(500).send({ error: "Failed to fetch city picture" });
    }
});

app.listen(8000, () => console.log(`server is listening on port ${port}`));
