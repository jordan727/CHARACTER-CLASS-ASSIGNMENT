// Character Class Assignment - Jordan Antonio

// Task 1
// Character Class
class character {
    // Construct characters with parameters
    constructor(name, phrase1, phrase2) {
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
    }

    // Output either phrase 1 or 2 of the character
    speak(phraseNum) {
        if (phraseNum == 1) {
            console.log(this.phrase1);
        } else if (phraseNum == 2) {
            console.log(this.phrase2);
        }
    }

    // Set the level of the character
    setLevel(newLevel) {
        this.level = newLevel;
    }
}

// Task 2
// Create characters
let character1 = new character("Megumin", "Exxplooosiooon!", "Magik item");
let character2 = new character("Chamber", "They are so dead", "Merci");

// Task 3
character1.speak(1);
character1.setLevel(2);
character2.speak(2);
console.log(character1);
console.log(character2);