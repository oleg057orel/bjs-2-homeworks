// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            return this._state = 0;
        } else {
            if (value > 100) {
                return this._state = 100;
            } else {
                return this._state = value;
            }
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}



// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
    let result = this.books.find(book => book[type] === value);
    if (result == undefined) {
        return null;
    } else {
        return result;
    }
    }

    giveBookByName(bookName) {
        let result = this.books.find(book => book.name === bookName);
        if (result == undefined) {
            return null;
        } else {
            let index = this.books.indexOf(result);
            this.books.splice(index, 1);
            return result;
        }
    }        
}

// Проверка корректности работы классов и методов

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание рассказов",2019,1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине",1972,168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1919, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("releaseDate", 1919).name); //Машина времени

console.log("Состояние: " + library.findBookBy("name", "Машина времени").state); //Состояние: 100

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
let book = new PrintEditionItem("Машина времени", 1919, 138);
book.state = 50;
console.log("Книга: " + book.name + ", состояние: " + book.state); //Книга: Машина времени, состояние: 50
book.fix();
console.log("Книга: " + book.name + ", состояние: " + book.state); //Книга: Машина времени, состояние: 75
book.author = "Герберт Уэллс";
book.type = "detective";
console.log(book); // {name: 'Машина времени', releaseDate: 1919, pagesCount: 138, _state: 75, type: 'detective', …}
library.addBook(book);
console.log("Количество книг после возврата: " + library.books.length); //Количество книг после выдачи: 4
console.log("Книга в библиотеке: " + library.findBookBy("releaseDate", 1919).name); //Машина времени


// Задача 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {

        if (mark < 2 || mark > 5) {
            return;
        } else {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }  
    }

    getAverageBySubject(subject) {

        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        } else {
            return this.marks[subject].reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
        }
    }

    getAverage() {
        if (!this.marks) {
            return 0;
        } else { 
            let subjectAll = Object.keys(this.marks);
            return subjectAll.reduce((acc, element, index, arr) => acc + this.getAverageBySubject(element) / arr.length, 0);
        }
    }
}