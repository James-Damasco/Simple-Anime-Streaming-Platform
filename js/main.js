const API_BASE = "https://api.jikan.moe/v4";

async function fetchAnime(endpoint, containerId) {
    try {
        const res = await fetch(`${API_BASE}/${endpoint}`);
        const data = await res.json();
        const container = document.getElementById(containerId);
        container.innerHTML = data.data.map(anime => `<div class="anime-card">
            <a href="anime.html?id=${anime.mal_id}">
            <img src="${anime.images.jpg.image_url}" loading="lazy" alt="${anime.title}">
            <div class="title">${anime.title}</div>
            </a>
            </div>
            `).join('');
    } catch (error) {
        console.error("Error Fetching Anime:", error);
    }
}
fetchAnime("top/anime?Limit=10000", "trendingAnime");
fetchAnime("top/anime?limit=10&filter=bypopularity", "popularAnime");
fetchAnime("seasons/now", "latestEpisodes");

async function loadHeroSlider() {
    const res = await fetch(`${API_BASE}/top/anime?limit=10000`);
    const data = await res.json();

    document.getElementById("heroSlider").innerHTML = data.data.map(anime => `
        <div class="swiper-slide">
        <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
        <h3>${anime.title}</h3>
        </div>
        `).join('');
        new Swiper(".heroSlider", { pagination: { el: ".swiper-pagination"}, autoplay: true });
}
loadHeroSlider();