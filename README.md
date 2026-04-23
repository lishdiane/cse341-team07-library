# Library Content REST API

A RESTful API for managing a digital library catalog including books, magazines, digital media, and user accounts. Built with Node.js, Express, and MongoDB, with Swagger documentation and Jest unit tests.

> ⚠️ **Note:** This is a demo environment. Any GitHub-authenticated user can perform write operations. Data may be modified by visitors.

---

## Tech Stack
| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, GitHub OAuth |
| Testing | Jest |
| Documentation | Swagger |
| Deployment | Render |

---

## Getting Started

The API is live and ready to explore — no setup required.

🔗 **Live API:** https://cse341-team07-library.onrender.com  
📄 **Interactive Docs:** https://cse341-team07-library.onrender.com/api-docs

You can test endpoints directly in the Swagger UI, or import the base URL into Postman. Write operations (POST, PUT, DELETE) require authentication via GitHub OAuth.
To authenticate, visit `https://cse341-team07-library.onrender.com/login` and sign in with your GitHub account.

### Run Locally
1. Clone the repository
2. Install dependencies: `npm install`
3. Add a `.env` file with your MongoDB connection string: `MONGODB_URI=your_connection_string_here`
4. Start the server: `npm start`
5. Run tests: `npm run test:jest`

---

## API Endpoints

### 📚 Books
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/book/` | Get all books | No |
| GET | `/book/:id` | Get book by ID | No |
| GET | `/book/search?title=&author=` | Search books by title or author | Yes |
| POST | `/book/` | Add a new book | Yes |
| PUT | `/book/:id` | Update a book | Yes |
| DELETE | `/book/:id` | Delete a book | Yes |

**Book fields:** `ISBN`, `title`, `author`, `releaseYear`, `publisher`, `format`, `pages`

### 📰 Magazines
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/magazine/` | Get all magazines | No |
| GET | `/magazine/:id` | Get magazine by ID | No |
| GET | `/magazine/search?title=` | Search magazines by title | Yes |
| POST | `/magazine/` | Add a new magazine | Yes |
| PUT | `/magazine/:id` | Update a magazine | Yes |
| DELETE | `/magazine/:id` | Delete a magazine | Yes |

**Magazine fields:** `title`, `issueNumber`, `publisher`, `topic`, `publicationDate`

### 💻 Digital Media
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/digital/` | Get all digital media | No |
| GET | `/digital/:id` | Get digital item by ID | No |
| POST | `/digital/` | Add a new digital item | Yes |
| PUT | `/digital/:id` | Update a digital item | Yes |
| DELETE | `/digital/:id` | Delete a digital item | Yes |

**Digital fields:** `type`, `title`, `author`, `format`, `fileURL`

### 👤 Accounts
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/account/` | Get all accounts | No |
| GET | `/account/:id` | Get account by ID | No |
| POST | `/account/` | Create a new account | Yes |
| PUT | `/account/:id` | Update an account | Yes |
| DELETE | `/account/:id` | Delete an account | Yes |

**Account fields:** `fname`, `lname`, `phone`, `birthday`, `books`

---

## Sample Data

Try these in the live API or Swagger UI:

### Books
| Title | Author | ID |
|---|---|---|
| Throne of Glass | Maas, Sarah J. | 687993e32dc14952ba268201 |

### Magazines
| Title | Topic | ID |
|---|---|---|
| Healthy Living | Health & Wellness | 6889865d739294b010c9ca51 |

### Digital
| Title | Type | ID |
|---|---|---|
| Frankenstein | eBook | 6889868e739294b010c9ca5d |

### Accounts
| Name | ID |
|---|---|
| Diane Lish | 687bf253e3e3bbb25b71075a |

**Example:** `GET /book/687993e32dc14952ba268201`

---

## Architecture
Follows MVC pattern with separate models, controllers, and routes for each collection. Includes a utils layer for shared helpers and global error handling.

---

## Future Improvements
- Implement role-based access control to restrict write operations
- Move search endpoints to public access (currently require authentication)
- Add logging and audit trails
- Expand search filtering across all collections
