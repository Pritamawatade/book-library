# 📚 Books Library Web Application

## Project Overview

Books Library is a dynamic web application that allows users to explore and interact with a collection of books using the FreeAPI.app Books API. The application provides an intuitive interface for browsing, searching, and sorting books.

## 🌟 Features

- **Dynamic Book Fetching**: Retrieves book data from FreeAPI.app
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Search Functionality**: Filter books by title or author
- **Sorting Options**: 
  - Sort by title (A-Z and Z-A)
  - Sort by publication date (Newest and Oldest)
- **View Modes**: 
  - Grid View
  - List View
- **Pagination**: Navigate through book collections
- **Book Details**: 
  - Thumbnail
  - Title
  - Authors
  - Publisher
  - Publication Date
- **Quick Access**: Direct link to more book information

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- FreeAPI.app Books API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/books-library.git
```

2. Navigate to the project directory:
```bash
cd book-library
```

3. Open `index.html` in your preferred web browser

## 🚀 Usage

### Searching Books
- Use the search input to filter books by title or author
- Type in the search bar and results will update instantly

### Sorting Books
Select from the dropdown to sort books:
- Title (A-Z)
- Title (Z-A)
- Date (Oldest First)
- Date (Newest First)

### Changing View
- Click "List View" for a compact list display
- Click "Grid View" for a visual grid layout

### Pagination
- Use "Previous" and "Next" buttons to navigate through book pages
- Current page number is displayed between navigation buttons

## 🖼 Screenshots

### Grid View
![Grid View Screenshot](/screenshots/Screenshot%202025-03-28%20193444.png)

### List View
![List View Screenshot](screenshots/Screenshot%202025-03-28%20193500.png)

### Mobile Responsive
![Mobile View Screenshot](screenshots/Screenshot%202025-03-28%20193528.png)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Some books might not have complete information
- Thumbnail images may be missing for some books

## 📋 Performance Optimization

- Implements efficient API fetching
- Uses event delegation
- Minimizes DOM manipulations
- Responsive design with minimal overhead

## 🔒 API Usage

- **Endpoint**: https://api.freeapi.app/api/v1/public/books
- **Method**: GET
- **Parameters**:
  - `page`: Current page number
  - `limit`: Number of books per page

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🌐 Contact

Your Name - [pritam_awatade]

Project Link: [https://book-library-iota-gray.vercel.app/](https://github.com/Pritamawatade/book-library)

---

**Happy Reading! 📖**