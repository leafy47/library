const myLibrary = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        pageNum: "251",
        read: true
    },
    {
        title: "The Fountainhead",
        author: "Ayn Rand",
        pageNum: "752",
        read: false
    }
];





const submit = document.querySelector('#submit');
submit.addEventListener("click", clickAdd)
let titlet = document.querySelector('#booktitle');
let authora = document.querySelector('#author');
let pagess = document.querySelector('#pages');
let read = document.querySelector('input[name=read]');

function clickAdd(event) {
    if(!read) {
        return
    }
    if(titlet.value && authora.value && pagess.value) {
        addBookToLibrary();
    }
    else {}
    event.preventDefault();
}



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
        let del = document.createElement('button');
        del.textContent = 'Delete';
        card.appendChild(del);
        del.addEventListener("click", delEntry);
    }
}

function addBookToLibrary() {
    myLibrary.push({
        title: titlet.value,
        author: authora.value,
        pageNum: pagess.value,
        read: true
    });
    let card = document.createElement("div");
    card.classList.add('card');
    card.id = `card${myLibrary.length - 1}`;
    let booktitle = document.createElement("p");
    booktitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
    card.appendChild(booktitle);
    let bookauthor = document.createElement("p");
    bookauthor.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
    card.appendChild(bookauthor);
    let page = document.createElement('p');
    page.textContent = `Number of Pages: ${myLibrary[myLibrary.length - 1].pageNum}`;
    card.appendChild(page);
    let read = document.createElement('p');
    read.textContent = myLibrary[i].read ? `Read Yet?: Already Read` : `Read Yet?: Not Yet`;
    card.appendChild(read);
    let booktable = document.querySelector(".bookdisplay");
    booktable.appendChild(card);
    let del = document.createElement('button');
    del.id = `${myLibrary.length - 1}`;
    del.textContent = 'Delete';
    card.appendChild(del);
    del.addEventListener("click", delEntry);
}

function delEntry(event) {
    delete myLibrary[this.id];
    let delcard = document.querySelector(`#card${this.id}`);
    delcard.remove();
}

display(myLibrary);





