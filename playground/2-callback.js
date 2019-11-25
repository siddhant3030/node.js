setTimeout(() => {
    console.log('two seconds are up')
}, 2000)

const names = ['sad', 'asda', 'dasda']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('phil', (data) =>{
    console.log(data)
})