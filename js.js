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

const radios = document.getElementsByName("read");
const submit = document.querySelector('#submit');
submit.addEventListener("click", clickAdd)
let titlet = document.querySelector('#booktitle');
let authora = document.querySelector('#author');
let pagess = document.querySelector('#pages');
let read = document.querySelector('input[name=read]');
let form = document.querySelector('#form1');

for(var i = 0; i < radios.length; i++){
    radios[i].addEventListener('change', enableButton);
}

function enableButton() {
    if(document.querySelector('input[name="read"]:checked')){
      submit.disabled = false; 
    }
}


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

class myBook {
    constructor(title) {
        this.title = title;
    }
    constructor(author) {
        this.author = author;
    }
    constructor(pageNum) {
        this.pageNum = pageNum;
    }
    constructor(read) {
        this.read = read;
    }
    info() {
        return read ? `${this.title} by ${this.author}, ${this.pageNum} pages, already read` : `${this.title} by ${this.author}, ${this.pageNum} pages, not yet read`;
    }
}

let fresh = new myBook("Fresh Prince", "Willy from Philly", "75", false);

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
    read.id = `read${myLibrary.length - 1}`;
    let readx = document.querySelectorAll('input[name="read"]');
    let value;
for(let n = 0; n < readx.length; n++){
  if(readx[n].checked){
    value = readx[n].value;
    break;
  }
}
    if(value == 'false') {value = false} else {value = true};
    read.textContent = value ? `Read Yet?: Already Read` : `Read Yet?: Not Yet`;
    card.appendChild(read);
    let booktable = document.querySelector(".bookdisplay");
    booktable.appendChild(card);
    let del = document.createElement('button');
    del.classList.add(`${myLibrary.length - 1}`);
    del.textContent = 'Delete';
    card.appendChild(del);
    del.addEventListener("click", delEntry);
    let rbutton = document.createElement('button');
    rbutton.textContent = 'Toggle Read Status';
    rbutton.classList.add(`${myLibrary.length - 1}`);
    rbutton.addEventListener('click', toggleRead);
    card.appendChild(rbutton);
    reset();
}

function delEntry(event) {
    delete myLibrary[this.className];
    let delcard = document.querySelector(`#card${this.className}`);
    delcard.remove();
}

function toggleRead(event) {
    let mantis = document.querySelector(`#read${this.className}`);
    if(mantis.textContent == "Read Yet?: Already Read") {
        mantis.textContent = "Read Yet?: Not Yet";
        myLibrary[this.className].read = false;
    }
    else {
        mantis.textContent = "Read Yet?: Already Read";
        myLibrary[this.className].read = true;
    }
    
}

function reset() {
    form.reset();
    submit.disabled = true;
}






