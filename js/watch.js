const player = new Plyr("#player");
let currentEpisode = 1;

/** @param {string} episodeId */

async function loadEpisode(episodeId) {
    try {
        const url = `https://api.consumet.org/anime/animeunity/watch/${episodeId}`;
        const res = await fetch(url);
        const data = await res.json();

        const streamUrl = data.sources[0].url;

        player.source = {
            type: "video",
            sources: [{ src: streamUrl, type: "video/mp4" }]
        };
    } catch (err) {
        console.error("Error loading episode:", err);
    }
}

document.getElementById("prevEpisode").addEventListener("click", () => {
    if (currentEpisode > 1) {
        currentEpisode--;
        const episodeId = `your-anime-slug/${currentEpisode}`;
        loadEpisode(episodeId);
    }
});
document.getElementById("nextEpisode").addEventListener("click", () => {
    currentEpisode++;
    const episodeId = `your-anime-slug/${currentEpisode}`;
    loadEpisode(episodeId);
});

player.on("ended", () => {
    currentEpisode++;
    const episodeId = `your-anime-slug/${currentEpisode}`;
    loadEpisode(episodeId);
});

const firstEpisodeId = `your-anime-slug/${currentEpisode}`;
loadEpisode(firstEpisodeId);