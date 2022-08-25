console.log("####### Classes #######");
class Monster {
    constructor({ name, health }) {
        this.name = name;
        this.health = health;
    }
}
class Snake extends Monster {
    constructor(options) {
        super(options);
        this.nickname = options.nickname;
    }
    bite(snake) { 
        snake.health -= 10;
    }
}
const snake = new Snake({ name: "monsterName", health: 100, nickname: "pippoMonster" });
const snake2 = new Snake({ name: "monsterName2", health: 100, nickname: "pippoMonster2" });
snake.bite(snake2);
console.log(snake);
console.log(snake2);