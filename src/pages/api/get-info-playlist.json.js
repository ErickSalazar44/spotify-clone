import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
    // get id de la url search params
    const { url } = request; // tenemos la url
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get("id");

    // buscamos la playList con el mismo id de la url
    const playlist = allPlaylists.find((playlist) => playlist.id === +id);

    // devolvemos todas las canciones de la playlist elegida
    const songs = allSongs.filter((song) => song.albumId === playlist?.albumId);

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: { "content-type": "application/json" },
    });
}
