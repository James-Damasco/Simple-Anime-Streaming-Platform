# 🎬 AnimeWatch Website Template
A fully responsive **Anime Watch Website** built with **HTML5, CSS3, SCSS, and JavaScript (ES6+)**, featuring **API Integration** with the [Consumet Anime API](https://docs.cosumet.org/) and [Jikan API](https://jikan.moe/).

---

## 🚀 Features
- **Homepage**
  - Hero Slider (Swiper.JS)
  - Trending Anime
  - Popular Anime
  - Latest Episodes

- **Anime Details Page**
  - Poster, title, synopsis
  - Genres, Rating, Status
  - Episode list with links to watch page
 
- **Watch Page**
  - Embedded Video Player (Plyr.js)
  - Episode navigation (next/previous)
  - Auto-play next episode

- **Search & Filter**
  - Search anime by title
  - Filter by genre

- **UI/UX**
  - Dark anime-style theme
  - Smooth hover effects and animations
  - Fully Responsive (Mobile, Tablet, Desktop)
  - Loading spinners / skeleton screens

 - **Extra Functionality**
   - API Error Handling
   - Lazy loading images
   - LocalStorage support (favorites & watch history)
  
---

## 📂 Project Structure

- **index.html** # homepage
- **anime.html** # Anime details page
- **watch.html** # watch page

- css/
  - **style.css** # Compiled CSS
- scss/
  - **style.scss** # SCSS Source
- js/
  - **main.js** # Homepage logic
  - **anime.js** # Anime Details Logic
  - **watch.js** # Watch page logic
 ---

 ## 🔧 Technologies Used

 - **HTML5** (Semantic Structure)
 - **CSS3 + SCSS** (Modular styles, compiled to CSS)
 - **JavaScript (ES6+)**
 - **Libraries/Frameworks**
   - [Swiper.js](https://swiperjs.com/) - Hero slider
   - [Plyr.js](https://plyr.io) - Video Player
   - [Consumet API](https"//docs.consumet.org/) - Streaming Links
   - [Jikan API](https://jikan.moe/) - Anime metadata
---
## 📤 Example API Request
- **Trending Anime (Jikan API):**
- **Anime Details (Consumet Anilist API):**
- **Episode Streaming Links (Consumet AnimeUnity API):**
---

## ⚙️ Running Locally
1. **Clone the Repository**
   ```
   bash
   git clone https://github.com/James-Damasco/Simple-Anime-Streaming-Platform.git
   cd Simple-Anime-Streaming-Platform
   ```
2. **Install SCSS Compiler (If not installed)**
  ```
npm install -g sass
```
3. **Compile SCSS to CSS**
   ```
   sass scss/style.scss css/style.css
   ```
4. **Run locally
   - Open index.html) in your browser, or
   - Use a local server (recommended):
     ```
     npx serve .
     ```
     Then visit http://localhost:3000

---

## 📌 Notes
- Jikan Api provides **metadata only** (titles, posters, symbols)
- Consumet API provides **episode streaming links.**
- Ensure CORS is enabled when fetching API's locally (use a dev server).
- Replace placeholder *episodeId* with real IDs from the API response.

## 🛠️ Future Improvements
* Add user authentication
* Implement favorites list with persistent storage
* Advance filtering (year, rating, status)
* Multi-server streaming options

## 📜 License
**Apache License 2.0**

---
