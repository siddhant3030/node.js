const request = require('request')

// const url = "https://api.darksky.net/forecast/279498d0c6ab07c44dea8ff341054edf/37.8267,-122.4233?key=value&otherKey=otherValue?units=si"

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.currently)
// })

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lkZGhhbnRzaW5naCIsImEiOiJjazA5a2N1cjUwOHp0M2lwanlrdjUxNWV1In0.UA4P2c9J71PWCoeD4Q7leA"



request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
 })

