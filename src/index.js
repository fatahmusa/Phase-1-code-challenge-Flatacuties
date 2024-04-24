// Your code here

function renderOneCharacter(characters){
    let box = document.createElement('li')
    box.classname = 'box'
    box.innerHTML = `
    
    <img src="${characters.image}">
    <div id = "character-bar">
    <h4>${characters.name}</h4>

    <p>
        $<span> = class= "characters.name" id = ${characters.character.name}</span>
    <p>
    
    <p>${characters.description}</p>
    <div>

    `
    document.querySelector('character-bar').appendChild(box)
}

function getAllCharacters(){
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(characterData => characterData.forEach(characters => renderOneCharacter(characters)))
        console.log('before fetch returns')

}


function initialize(){
    getAllCharacters()
    console.log('after fetch returns')

    //characterData.forEach(characters => renderOneCharacter(characters))

}

initialize()