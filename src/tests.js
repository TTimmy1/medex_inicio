const object = {name: "timmy"}

const step1 = () => {
    const data = get ()
    const found = data.filter(v =>v.name === object.name)
    if (found.length > 0)
        console.log("Dados existentes")
    else {
        data.push(object)
        insert(data)
    }
}

step1