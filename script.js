class BookLibrary {
    constructor() {
        this.apiUrl = 'https://api.freeapi.app/api/v1/public/books';
        this.currentPage = 1;
        this.totalPages = 1;
        this.booksContainer = document.getElementById('booksContainer');
        this.searchInput = document.getElementById('searchInput');
        this.sortSelect = document.getElementById('sortSelect');
        this.prevPageBtn = document.getElementById('prevPage');
        this.nextPageBtn = document.getElementById('nextPage');
        this.currentPageSpan = document.getElementById('currentPage');
        this.listViewBtn = document.getElementById('listViewBtn');
        this.gridViewBtn = document.getElementById('gridViewBtn');

        this.bindEvents();
        this.fetchBooks();
    }

    bindEvents() {
        this.searchInput.addEventListener('input', () => this.fetchBooks());
        this.sortSelect.addEventListener('change', () => this.fetchBooks());
        this.prevPageBtn.addEventListener('click', () => this.changePage(-1));
        this.nextPageBtn.addEventListener('click', () => this.changePage(1));
        this.listViewBtn.addEventListener('click', () => this.toggleView('list'));
        this.gridViewBtn.addEventListener('click', () => this.toggleView('grid'));
    }

    async fetchBooks() {
        try {
            const searchTerm = this.searchInput.value.toLowerCase();
            const sortValue = this.sortSelect.value;

            const response = await fetch(`${this.apiUrl}?page=${this.currentPage}&limit=10`);
            const data = await response.json();

            // Filter and sort books
            let books = data.data.data;
            
            books = books.filter(book => 
                book.volumeInfo.title.toLowerCase().includes(searchTerm) ||
                (book.volumeInfo.authors && 
                 book.volumeInfo.authors.some(author => 
                     author.toLowerCase().includes(searchTerm)
                 ))
            );

            // Sorting logic
            switch(sortValue) {
                case 'title-asc':
                    books.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
                    break;
                case 'title-desc':
                    books.sort((a, b) => b.volumeInfo.title.localeCompare(a.volumeInfo.title));
                    break;
                case 'date-asc':
                    books.sort((a, b) => new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate));
                    break;
                case 'date-desc':
                    books.sort((a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate));
                    break;
            }

            this.renderBooks(books);
            this.updatePagination(data.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    renderBooks(books) {
        this.booksContainer.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');

            const thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/200x300?text=No+Image';

            bookItem.innerHTML = `
                <img src="${thumbnailUrl}" alt="${book.volumeInfo.title}">
                <div class="book-details">
                    <h2>${book.volumeInfo.title}</h2>
                    <p><strong>Author(s):</strong> ${book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                    <p><strong>Publisher:</strong> ${book.volumeInfo.publisher || 'Unknown'}</p>
                    <p><strong>Published Date:</strong> ${book.volumeInfo.publishedDate || 'Unknown'}</p>
                    <a href="${book.volumeInfo.infoLink}" target="_blank">More Details</a>
                </div>
            `;

            this.booksContainer.appendChild(bookItem);
        });
    }

    updatePagination(data) {
        this.currentPage = data.page;
        this.totalPages = data.totalPages;

        this.currentPageSpan.textContent = `Page ${this.currentPage}`;
        this.prevPageBtn.disabled = this.currentPage === 1;
        this.nextPageBtn.disabled = this.currentPage === this.totalPages;
    }

    changePage(direction) {
        this.currentPage += direction;
        this.fetchBooks();
    }

    toggleView(view) {
        if (view === 'list') {
            this.booksContainer.classList.remove('grid-view');
            this.booksContainer.classList.add('list-view');
        } else {
            this.booksContainer.classList.remove('list-view');
            this.booksContainer.classList.add('grid-view');
        }
    }
}

// Initialize the Book Library
document.addEventListener('DOMContentLoaded', () => {
    new BookLibrary();
});
