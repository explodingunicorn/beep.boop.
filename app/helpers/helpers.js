module.exports.getColor = (type) => {
    let types = {
        Game: 'green',
        Movie: 'blue',
        Book: 'purple',
        Opinion: 'red'
    }

    console.log(types[type]);
    return types[type];
}