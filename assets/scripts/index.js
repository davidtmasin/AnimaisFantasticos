function chooseAnimal(animal) {

    switch (animal) {
        case 'cat':
            animalCard.setAttribute('src', 'assets/images/catmeme.jfif')
            legendAnimal.textContent = 'Jubileu'
            break;

        case 'dog':
            animalCard.setAttribute('src', 'assets/images/dog.jfif')
            legendAnimal.textContent = 'Catioro'
            break;

        case 'monkey':
            animalCard.setAttribute('src', 'assets/images/monkey.jfif')
            legendAnimal.textContent = 'Heleno'
            break;

        case 'bird':
            animalCard.setAttribute('src', 'assets/images/bird.jfif')
            legendAnimal.textContent = 'Mordecai'
            break;

        case 'alligator':
            animalCard.setAttribute('src', 'assets/images/alligator.jpg')
            legendAnimal.textContent = 'Zé Jacaré'
            break;

        case 'lion':
            animalCard.setAttribute('src', 'assets/images/lion.jfif')
            legendAnimal.textContent = 'Leão de Chernobyl'
            break;

        case 'wolf':
            animalCard.setAttribute('src', 'assets/images/wolf.jfif')
            legendAnimal.textContent = 'Lobo de Chernobyl'
            break;

        case 'frog':
            animalCard.setAttribute('src', 'assets/images/frog.jpg')
            legendAnimal.textContent = 'Kermit o sapo'
            break;

        case 'horse':
            animalCard.setAttribute('src', 'assets/images/horse.jfif')
            legendAnimal.textContent = 'Pé de pano'
            break;

        default:
            console.log("inválido!");
    }

}

function mockStructure() {
    animalCard.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheNt-nn8erRO80Vd0H8YSvNJ-ElBAbcwnhg&usqp=CAU')
}