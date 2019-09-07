const request = require('request')

const url = "https://api.darksky.net/forecast/279498d0c6ab07c44dea8ff341054edf/37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})

