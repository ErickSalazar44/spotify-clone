import { usePlayerStore } from "@/store/playerStore"; // Estado global
/**
 * Hook personalizado para cargar y reproducir canciones de una lista de reproducción.
 *
 * @returns {function} Una función que permite cargar y reproducir canciones de una lista de reproducción.
 * @param {string|number} albumId - El ID del álbum de la lista de reproducción (opcional).
 * @param {string|number} songId - El ID de la canción a reproducir (opcional).
 */

const usePlayerList = () => {
    // Obtener funciones del estado global
    const { setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);

    //Carga una canción de una lista de reproducción y comienza la reproducción.

    const loadMusic = async (albumId, songId) => {
        try {
            // Determinar el identificador del álbum
            const identificador = albumId ? Number(albumId) : 1;
            // Realizar una solicitud para obtener información de la lista de reproducción
            const response = await fetch(
                `/api/get-info-playlist.json?id=${identificador}`
            );
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("Error en la solicitud de datos");
            }
            // Obtener los datos de la lista de reproducción
            const data = await response.json();
            const { songs, playlist } = data;

            // Cambiar el estado de reproducción a "reproduciendo"
            setIsPlaying(true);
            // Establecer la canción inicial (por defecto o según songId)
            const initialSong = songId
                ? songs.find((song) => song.id === songId)
                : songs[0];

            setCurrentMusic({ songs, playlist, song: initialSong });
        } catch (error) {
            console.error("Error en la carga de música:", error);
        }
    };

    return loadMusic;
};

export default usePlayerList;
