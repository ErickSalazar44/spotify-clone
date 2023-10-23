import { colors } from "./colors";

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: "Chill Lo-Fi Music",
        color: colors.yellow,
        cover:
            "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        artists: ["NoSpirit", "Casiio"],
    },
    {
        id: '2',
        albumId: 2,
        title: "Lo-Fi Chill Session",
        color: colors.indigo,
        cover:
            "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla", "Blue Fox"],
    },
    {
        id: '3',
        albumId: 3,
        title: "Study Session",
        color: colors.rose,
        cover:
            "https://f4.bcbits.com/img/a1435058381_65.jpg",
        artists: ["Tenno", "xander", "Team Astro"],
    },
    {
        id: '4',
        albumId: 4,
        title: "Blue Note Study Time",
        color: colors.green,
        cover:
            "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Raimu", "Yasumu"],
    },
    {
        id: '5',
        albumId: 5,
        title: "Chau Saura Session",
        color: colors.purple,
        cover:
            "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["Chau Saura", "amies", "kyu"],
    },
    {
        id: '6',
        albumId: 6,
        title: "Like a Necessity",
        color: colors.orange,
        cover:
            "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
    },
    {
        id: '7',
        albumId: 7,
        title: "Lofi hip hop",
        color: colors.teal,
        cover:
            "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        artists: ["WFS", "lofi"],
    },
    {
        id: '8',
        albumId: 8,
        title: "Inspiring Piano",
        color: colors.lila,
        cover:
            "https://i1.sndcdn.com/artworks-000601275661-1iia6q-t500x500.jpg",
        artists: ["Larsen", "Candlelight"],
    },
    {
        id: '9',
        albumId: 9,
        title: "Japon City",
        color: colors.yellow,
        cover:
            "https://i.ytimg.com/vi/Cv7Be37b04E/maxresdefault.jpg",
        artists: ["Japan City", "Lofi Mix"],
    },
    {
        id: '10',
        albumId: 10,
        title: "Arcade Night",
        color: colors.pink,
        cover:
            "https://public-files.gumroad.com/csgojqb02yq2mdfv61y96gxm58lh",
        artists: ["Aika", "Bao", "Kotori"],
    },
    {
        id: '11',
        albumId: 11,
        title: "Yung Lean",
        color: colors.green,
        cover:
            "https://lastfm.freetls.fastly.net/i/u/300x300/3911ac651c87ddc0b744277bba12e740.jpg",
        artists: ["lofi, Yung Lean"],
    },
    {
        id: '12',
        albumId: 12,
        title: "Covered Link",
        color: colors.gray,
        cover:
            "https://f4.bcbits.com/img/a4172390638_10.jpg",
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
        "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Coffee Daze",
        "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Skyline Serenade",
        "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "Urban Echoes",
        "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 1,
        "title": "Night's End",
        "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 2,
        "title": "Silent Rain",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 2,
        "title": "Lost Pages",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 2,
        "title": "Midnight Tales",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 2,
        "title": "City Lights",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 2,
        "title": "Night Drive",
        "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 3,
        "title": "Lunar",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 3,
        "title": "Go go go!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 3,
        "title": "Keep focus!",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 3,
        "title": "JavaScript is the way",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 3,
        "title": "No more TypeScript for me",
        "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 4,
        "title": "Lunar",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 4,
        "title": "Go go go!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 4,
        "title": "Keep focus!",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 4,
        "title": "JavaScript is the way",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 4,
        "title": "No more TypeScript for me",
        "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 5,
        "title": "Moonlit Walk",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 5,
        "title": "Coffee Daze",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 5,
        "title": "Skyline Serenade",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 5,
        "title": "Urban Echoes",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 5,
        "title": "Night's End",
        "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 6,
        "title": "Moonlit Walk",
        "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "1:57"
    },
    {
        "id": 2,
        "albumId": 6,
        "title": "Coffee Daze",
        "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "1:49"
    },
    {
        "id": 3,
        "albumId": 6,
        "title": "Skyline Serenade",
        "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "2:35"
    },
    {
        "id": 4,
        "albumId": 6,
        "title": "Urban Echoes",
        "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "2:49"
    },
    {
        "id": 5,
        "albumId": 6,
        "title": "Night's End",
        "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
        "artists": ["WFS", "Nadav Cohen"],
        "album": "Like a Necessity",
        "duration": "2:29"
    },
    {
        "id": 1,
        "albumId": 7,
        "title": "Cool Chill Hip Hop",
        "image": "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:30"
    },
    {
        "id": 2,
        "albumId": 7,
        "title": "Elevator music lofi",
        "image": "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:29"
    },
    {
        "id": 3,
        "albumId": 7,
        "title": "Melancholic Ig version",
        "image": "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:28"
    },
    {
        "id": 4,
        "albumId": 7,
        "title": "Lofi Guitar beat",
        "image": "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:22"
    },
    {
        "id": 5,
        "albumId": 7,
        "title": "Lofi Piano beat",
        "image": "https://i.pinimg.com/550x/42/2e/09/422e095f9aa6c6ea1eb1cd803b6d993b.jpg",
        "artists": ["WFS", "lofi"],
        "album": "Lofi hip hop",
        "duration": "0:29"
    },
    {
        "id": 1,
        "albumId": 8,
        "title": "Candle Light",
        "image": "https://i1.sndcdn.com/artworks-000601275661-1iia6q-t500x500.jpg",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "2:27"
    },
    {
        "id": 2,
        "albumId": 8,
        "title": "The lakes acoustic",
        "image": "https://i1.sndcdn.com/artworks-000601275661-1iia6q-t500x500.jpg",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "1:49"
    },
    {
        "id": 3,
        "albumId": 8,
        "title": "Tygve larsen",
        "image": "https://i1.sndcdn.com/artworks-000601275661-1iia6q-t500x500.jpg",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "4:32"
    },
    {
        "id": 4,
        "albumId": 8,
        "title": "Wind",
        "image": "https://i1.sndcdn.com/artworks-000601275661-1iia6q-t500x500.jpg",
        "artists": ["Larsen", "Candlelight"],
        "album": "Inspiring Piano",
        "duration": "2:27"
    },
    {
        "id": 1,
        "albumId": 9,
        "title": "Japon city piano",
        "image": "https://i.ytimg.com/vi/Cv7Be37b04E/maxresdefault.jpg",
        "artists": ["Japan City", "Lofi Mix"],
        "album": "Japan City",
        "duration": "3:02"
    },
    {
        "id": 2,
        "albumId": 9,
        "title": "Sweet medicine",
        "image": "https://i.ytimg.com/vi/Cv7Be37b04E/maxresdefault.jpg",
        "artists": ["Japan City", "Lofi Mix"],
        "album": "Japan City",
        "duration": "1:54"
    },
    {
        "id": 1,
        "albumId": 10,
        "title": "Arcade Night ft Bao",
        "image": "https://public-files.gumroad.com/csgojqb02yq2mdfv61y96gxm58lh",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "3:59"
    },
    {
        "id": 2,
        "albumId": 10,
        "title": "Kotori y Aika",
        "image": "https://public-files.gumroad.com/csgojqb02yq2mdfv61y96gxm58lh",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "4:16"
    },
    {
        "id": 3,
        "albumId": 10,
        "title": "Lovely Scars",
        "image": "https://public-files.gumroad.com/csgojqb02yq2mdfv61y96gxm58lh",
        "artists": ["Aika", "Bao", "Kotori"],
        "album": "Arcade Night",
        "duration": "4:21"
    },
    {
        "id": 1,
        "albumId": 11,
        "title": "Mert Can, Robbe",
        "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3911ac651c87ddc0b744277bba12e740.jpg",
        "artists": ["lofi, Young Lean"],
        "album": "Yung Lean",
        "duration": "2:25"
    },
    {
        "id": 2,
        "albumId": 11,
        "title": "Young Lean Summer Time",
        "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3911ac651c87ddc0b744277bba12e740.jpg",
        "artists": ["lofi, Young Lean"],
        "album": "Yung Lean",
        "duration": "3:09"
    },
    {
        "id": 1,
        "albumId": 12,
        "title": "Dive Back In Time Cover",
        "image": "https://f4.bcbits.com/img/a4172390638_10.jpg",
        "artists": ["Shayne Orok", "CInui Toko_Machita"],
        "album": "Covered Link",
        "duration": "1:02"
    },
    {
        "id": 2,
        "albumId": 12,
        "title": "Odoriko Coverd",
        "image": "https://f4.bcbits.com/img/a4172390638_10.jpg",
        "artists": ["Shayne Orok", "CInui Toko_Machita"],
        "album": "Covered Link",
        "duration": "3:50"
    }
]