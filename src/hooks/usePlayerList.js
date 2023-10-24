// import { usePlayerStore } from "@/store/playerStore"; // Estado global
// import { useEffect } from "react";

// const usePlayerList = (id) => {
//     const { isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(
//         (state) => state
//     );

//     useEffect(() => {
//         try {

//             const res = await

//         } catch (error) {
//             console.error('Error en la solicitud de la lista de reproducción', error);
//         }

//         fetch(`/api/get-info-playlist.json?id=${id}`)
//         .then(res => res.json())
//         .then(data => {
//             const { songs, playlist } = data
//             setIsPlaying(true)
//             setCurrentMusic( {songs, playlist, song: songs[0]})
//         })
//     }, [id, isPlaying, ])

// };

// export default usePlayerList;
