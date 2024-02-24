class BookClub{
    constructor(library){
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author){
        let obj = this.books.find(x => x.title == title && x.author == author);
        if(obj){
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
        this.books.push({title, author});
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember (memberName){
        let obj = this.members.find(x => x == memberName);
        if (obj){
            return `Member ${memberName} is already a part of the book club.`;
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle){
        let member = this.members.find(x => x == memberName);
        let book = this.books.find(x => x.title == bookTitle);
        if (!member){
            throw new Error(`Member ${memberName} not found.`);
        }
        if (!book){
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${book.author}.`;
    }

    generateReadingReport(){
        if (this.members.length == 0){
            return "No members in the book club.";
        }
        if (this.books.length == 0){
            return "No available books in the library.";
        }

        let result = `Available Books in ${this.library} library:\n`;
        this.books.forEach(el => result += `"${el.title}" by ${el.author}\n`);

        return result.trim();
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "1984"));
// console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
// console.log(myBookClub.generateReadingReport());
