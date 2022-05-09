const fs = require('fs')

const insert = data => {
    try{
        fs.writeFileSync('.database.json', JSON.stringify(data))
        console.log("Dados inseridos com sucesso")
    } 
        catch (err) {
            console.error(err)
        }
}

const get = () => {
    try {
        const string = fs.readFileSync('./database.json', 'utf8')
        return JSON.parse(string)
    }
        catch (err) {
            return[]
        }
}

