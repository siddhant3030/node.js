const book = {
    title: "asdasdasad",
    author: "dasadasdadadsdasd"
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedDATA = JSON.parse(bookJSON)
console.log(parsedDATA.author)
