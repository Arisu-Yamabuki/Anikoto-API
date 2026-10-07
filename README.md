# 🚀 Anikoto API

A **fast, reliable, and well-documented** unofficial REST API for [anikototv.to](https://anikototv.to) built with **Express.js + Cheerio**.

Scrape anime schedules, episode lists, and rich anime details in clean JSON format.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue?style=for-the-badge&logo=express)
![Version](https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge)

---

## ✨ Features

-  **Daily & Custom Date Schedule** with proper validation
-  Complete **Episode Lists** with `data-id`, titles & streaming info
-  **Rich Anime Details** (`/info`) — posters, synopsis, metadata, genres, studios
-  Extract `data-id` from any watch page
-  Built-in Rate Limiting & Security
-  Lightweight, fast & optimized responses
-  Fully responsive & mobile-friendly

---

## 🛠️ Quick Start

```bash
git clone https://github.com/Arisu-Yamabuki/Anikoto-API.git
cd Anikoto-API
npm install
npm start
```

Server runs at **http://localhost:3000**

**Live Demo:** [https://anikoto-api-glng.onrender.com/](https://anikoto-api-glng.onrender.com/)

---

## 📡 API Endpoints

| Method | Endpoint                    | Description                        | Query Params       |
|--------|-----------------------------|------------------------------------|--------------------|
| GET    | `/`                         | Home & Documentation               | -                  |
| GET    | `/schedule`                 | Get anime schedule                 | `date` (YYYY-MM-DD)|
| GET    | `/episodes`                 | Get all episodes of an anime       | `id`               |
| GET    | `/info`                     | Get detailed anime information     | `url`              |
| GET    | `/page`                     | Extract `data-id` from slug        | `name`             |

---

### Example Requests

**1. Schedule**
```http
GET /schedule?date=2026-05-18
```

**2. Anime Info (Recommended)**
```http
GET /info?name=one-piece-odmau
```

**3. Episodes**
```http
GET /episodes?id=1642
```

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **Axios** — HTTP requests
- **Cheerio** — HTML parsing
- **dayjs** — Date & time handling
- **express-rate-limit** — Rate limiting & security

---

## 📁 Project Structure

```bash
Anikoto-API/
├── app.js                 # Main server
├── package.json
├── README.md
└── mwr/
    ├── schedule.js
    ├── ep.js
    ├── info.js
    └── id.js
```

---

## ⚠️ Disclaimer

This is an **unofficial** API for educational and personal use only.  
This project is not affiliated with anikototv.to. Please respect their terms of service and use responsibly.

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are **highly welcome**!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **GPL3 License**.

---

**Made with ❤️ for the anime community**

**If you like this project, please give it a star!** ⭐
