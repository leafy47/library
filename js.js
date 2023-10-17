const myLibrary = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        pagesNum: "251",
        read: true
    },
    {
        title: "The Fountainhead",
        author: "Ayn Rand",
        pageNum: "752",
        read: false
    }
];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.info = function() {
        return read ? `${title} by ${author}, ${pageNum} pages, already read` : `${title} by ${author}, ${pageNum} pages, not yet read`;
    }
}

function display(myLibrary) {
    for (i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.classList.add('card');
        let booktitle = document.createElement("p");
        booktitle.textContent = `Title: ${myLibrary[i].title}`;
        card.appendChild(booktitle);
        let bookauthor = document.createElement("p");
        bookauthor.textContent = `Author: ${myLibrary[i].author}`;
        card.appendChild(bookauthor);
        let page = document.createElement('p');
        page.textContent = `Number of Pages: ${myLibrary[i].pageNum}`;
        card.appendChild(page);
        let read = document.createElement('p');
        read.textContent = myLibrary[i].read ? `Read Yet?: Already Read` : `Read Yet?: Not Yet`;
        card.appendChild(read);

        let booktable = document.querySelector(".bookdisplay");
        booktable.appendChild(card);
    }
}

display(myLibrary);





