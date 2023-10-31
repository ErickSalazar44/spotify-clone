import { colors } from "./colors";

export interface Playlist {
    id: number;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: 1,
        albumId: 1,
        title: "Chill Lo-Fi Music",
        color: colors.yellow,
        cover:
            "https://i.ibb.co/dMjgZ3f/9.webp",
        artists: ["NoSpirit", "Casiio"],
    },
    {
        id: 2,
        albumId: 2,
        title: "Lo-Fi Chill Session",
        color: colors.indigo,
        cover:
            "https://i.ibb.co/44QZFsF/10.webp",
        artists: ["Kupla", "Blue Fox"],
    },
    {
        id: 3,
        albumId: 3,
        title: "Study Session",
        color: colors.rose,
        cover:
            "https://i.ibb.co/zm8Qn9J/11.webp",
        artists: ["Tenno", "xander", "Team Astro"],
    },
    {
        id: 4,
        albumId: 4,
        title: "Blue Note Study Time",
        color: colors.purple,
        cover:
            "https://i.ibb.co/tC1rBfG/1111.webp",
        artists: ["Raimu", "Yasumu"],
    },
    {
        id: 5,
        albumId: 5,
        title: "Relaxed Session",
        color: colors.lila,
        cover:
            "https://i.ibb.co/DRH5pYB/8.webp",
        artists: ["Chau Relaxed", "Earl", "kyu"],
    },
    {
        id: 6,
        albumId: 6,
        title: "Like a Necessity",
        color: colors.orange,
        cover:
            "https://i.ibb.co/cwqYKQr/4.webp",
        artists: ["WFS", "Nadav Cohen"],
    },
    {
        id: 7,
        albumId: 7,
        title: "Lofi hip hop",
        color: colors.teal,
        cover:
            "https://i.ibb.co/tZ6zTdG/1.webp",
        artists: ["WFS", "lofi"],
    },
    {
        id: 8,
        albumId: 8,
        title: "Inspiring Piano",
        color: colors.lila,
        cover:
            "https://i.ibb.co/M2NbMf8/7.webp",
        artists: ["Larsen", "Candlelight"],
    },
    {
        id: 9,
        albumId: 9,
        title: "Japon City",
        color: colors.yellow,
        cover:
            "https://i.ibb.co/DM2wjgs/2.webp",
        artists: ["Japan City", "Lofi Mix"],
    },
    {
        id: 10,
        albumId: 10,
        title: "Arcade Night",
        color: colors.pink,
        cover:
            "https://i.ibb.co/SvjWTps/2222.webp",
        artists: ["Aika", "Bao", "Kotori"],
    },
    {
        id: 11,
        albumId: 11,
        title: "Yung Lean",
        color: colors.green,
        cover:
            "https://i.ibb.co/GfmmzVz/5.webp",
        artists: ["lofi, Yung Lean"],
    },
    {
        id: 12,
        albumId: 12,
        title: "Covered Link",
        color: colors.gray,
        cover:
            "https://i.ibb.co/cwRCb7Z/3.webp",
        artists: ["Shayne Orok", "CInui Toko_Machita"],
    },
];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
}))

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
]

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [
    {
        "id": 1,
        "albumId": 1,
        "title": "Moonlit Walk",
        "image": `https://i.ibb.co/dMjgZ3f/9.webp`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Coffee Daze",
        "image": `https://i.ibb.co/dMjgZ3f/9.webp`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Urban Echoes",
        "image": `https://i.ibb.co/dMjgZ3f/9.webp`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "Night's End",
        "image": `https://i.ibb.co/dMjgZ3f/9.webp`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 2,
        "title": "Silent Rain",
        "image": `https://i.ibb.co/44QZFsF/10.webp`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 2,
        "title": "Lost Pages",
        "image": `https://i.ibb.co/44QZFsF/10.webp`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 2,
        "title": "Midnight Tales",
        "image": `https://i.ibb.co/44QZFsF/10.webp`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 2,
        "title": "City Lights",
        "image": `https://i.ibb.co/44QZFsF/10.webp`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:30"
    },
    {
        "id": 1,
        "albumId": 3,
        "title": "Go go go!",
        "image": `https://i.ibb.co/zm8Qn9J/11.webp`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 2,
        "albumId": 3,
        "title": "Keep focus!",
        "image": `https://i.ibb.co/zm8Qn9J/11.webp`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 3,
        "albumId": 3,
        "title": "JavaScript is the way",
        "image": `https://i.ibb.co/zm8Qn9J/11.webp`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 4,
        "albumId": 3,
        "title": "No more TypeScript for me",
        "image": `https://i.ibb.co/zm8Qn9J/11.webp`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 4,
        "title": "Go go go!",
        "image": "https://i.ibb.co/tC1rBfG/1111.webp",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 2,
        "albumId": 4,
        "title": "Keep focus!",
        "image": "https://i.ibb.co/tC1rBfG/1111.webp",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 3,
        "albumId": 4,
        "title": "JavaScript is the way",
        "image": "https://i.ibb.co/tC1rBfG/1111.webp",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 4,
        "albumId": 4,
        "title": "No more TypeScript for me",
        "image": "https://i.ibb.co/tC1rBfG/1111.webp",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 5,
        "title": "Moonlit Walk",
        "image": "https://i.ibb.co/DRH5pYB/8.webp",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 5,
        "title": "Coffee Daze",
        "image": "https://i.ibb.co/DRH5pYB/8.webp",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 5,
        "title": "Skyline Serenade",
        "image": "https://i.ibb.co/DRH5pYB/8.webp",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 5,
        "title": "Urban Echoes",
        "image": "https://i.ibb.co/DRH5pYB/8.webp",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 1,
        "albumId": 6,
        "title": "Moonlit Walk",
        "image": "https://i.ibb.co/cwqYKQr/4.webp",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "1:57"
    },
    {
        "id": 2,
        "albumId": 6,
        "title": "Coffee Daze",
        "image": "https://i.ibb.co/cwqYKQr/4.webp",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "1:49"
    },
    {
        "id": 3,
        "albumId": 6,
        "title": "Skyline Serenade",
        "image": "https://i.ibb.co/cwqYKQr/4.webp",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "2:35"
    },
    {
        "id": 4,
        "albumId": 6,
        "title": "Urban Echoes",
        "image": "https://i.ibb.co/cwqYKQr/4.webp",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "2:49"
    },
    {
        "id": 1,
        "albumId": 7,
        "title": "Cool Chill Hip Hop",
        "image": "https://i.ibb.co/tZ6zTdG/1.webp",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:30"
    },
    {
        "id": 2,
        "albumId": 7,
        "title": "Elevator music lofi",
        "image": "https://i.ibb.co/tZ6zTdG/1.webp",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:29"
    },
    {
        "id": 3,
        "albumId": 7,
        "title": "Melancholic Ig version",
        "image": "https://i.ibb.co/tZ6zTdG/1.webp",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:28"
    },
    {
        "id": 4,
        "albumId": 7,
        "title": "Lofi Guitar beat",
        "image": "https://i.ibb.co/tZ6zTdG/1.webp",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:22"
    },
    {
        "id": 5,
        "albumId": 7,
        "title": "Lofi Piano beat",
        "image": "https://i.ibb.co/tZ6zTdG/1.webp",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:29"
    },
    {
        "id": 1,
        "albumId": 8,
        "title": "Candle Light",
        "image": "https://i.ibb.co/M2NbMf8/7.webp",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "2:27"
    },
    {
        "id": 2,
        "albumId": 8,
        "title": "The lakes acoustic",
        "image": "https://i.ibb.co/M2NbMf8/7.webp",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "1:49"
    },
    {
        "id": 3,
        "albumId": 8,
        "title": "Tygve larsen",
        "image": "https://i.ibb.co/M2NbMf8/7.webp",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "4:32"
    },
    {
        "id": 4,
        "albumId": 8,
        "title": "Wind",
        "image": "https://i.ibb.co/M2NbMf8/7.webp",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "2:27"
    },
    {
        "id": 1,
        "albumId": 9,
        "title": "Japon city piano",
        "image": "https://i.ibb.co/DM2wjgs/2.webp",
        "artists": ["Japan City", "Lofi Mix"],
        "album": "Japan City",
        "duration": "3:02"
    },
    {
        "id": 2,
        "albumId": 9,
        "title": "Sweet medicine",
        "image": "https://i.ibb.co/DM2wjgs/2.webp",
        "artists": ["Japan City", "Lofi Mix"],
        "album": "Japan City",
        "duration": "1:54"
    },
    {
        "id": 1,
        "albumId": 10,
        "title": "Arcade Night ft Bao",
        "image": "https://i.ibb.co/SvjWTps/2222.webp",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "3:59"
    },
    {
        "id": 2,
        "albumId": 10,
        "title": "Kotori y Aika",
        "image": "https://i.ibb.co/SvjWTps/2222.webp",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "4:16"
    },
    {
        "id": 3,
        "albumId": 10,
        "title": "Lovely Scars",
        "image": "https://i.ibb.co/SvjWTps/2222.webp",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "4:21"
    },
    {
        "id": 1,
        "albumId": 11,
        "title": "Young Lean Summer Time",
        "image": "https://i.ibb.co/GfmmzVz/5.webp",
        "artists": ["lofi, Young Lean"],
        "album": "Yung Lean",
        "duration": "3:09"
    },
    {
        "id": 2,
        "albumId": 11,
        "title": "Mert Can, Robbe",
        "image": "https://i.ibb.co/GfmmzVz/5.webp",
        "artists": ["lofi, Young Lean"],
        "album": "Yung Lean",
        "duration": "2:25"
    },
    {
        "id": 1,
        "albumId": 12,
        "title": "Dive Back In Time Cover",
        "image": "https://i.ibb.co/cwRCb7Z/3.webp",
        "artists": ["Shayne Orok", "CInui Toko_Machita"],
        "album": "Covered Link",
        "duration": "1:02"
    },
    {
        "id": 2,
        "albumId": 12,
        "title": "Odoriko Coverd",
        "image": "https://i.ibb.co/cwRCb7Z/3.webp",
        "artists": ["Shayne Orok", "CInui Toko_Machita"],
        "album": "Covered Link",
        "duration": "3:50"
    }
]