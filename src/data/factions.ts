export interface Faction {
    id: string;
    name: string;
    description: string;
    motto: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    traits: string[];
    bannerImage: string; // Placeholder or generated asset path
    warriorImage: string; // Placeholder or generated asset path
}

export const factions: Faction[] = [
    {
        id: 'imperium',
        name: 'Imperium of Man',
        description: 'A vast, galaxy-spanning empire fueled by faith, xenophobia, and the sacrifice of billions. They fight for the God-Emperor of Mankind.',
        motto: 'For the Emperor!',
        colors: {
            primary: '#C0A04D', // Gold
            secondary: '#003366', // Deep Blue (Ultramarines)
            accent: '#891111', // Crimson
        },
        traits: ['loyal', 'disciplined', 'stoic', 'zealous', 'xenophobic'],
        bannerImage: '/src/assets/imperium_banner.png',
        warriorImage: '/assets/imperium_warrior.webp',
    },
    {
        id: 'chaos',
        name: 'Chaos',
        description: 'Corrupted warriors and daemons seeking to drown the galaxy in madness and bloodshed for the Dark Gods.',
        motto: 'Death to the False Emperor!',
        colors: {
            primary: '#891111', // Blood Red
            secondary: '#000000', // Black
            accent: '#FFD700', // Brass/Gold
        },
        traits: ['ambitious', 'aggressive', 'rebellious', 'chaotic', 'powerful'],
        bannerImage: '/src/assets/chaos_banner.png',
        warriorImage: '/assets/chaos_warrior.webp',
    },
    {
        id: 'orks',
        name: 'Orks',
        description: 'A warlike, fungal race that lives for the thrill of the fight. They are brutal, cunning, and numberless.',
        motto: 'WAAAGH!',
        colors: {
            primary: '#4C7031', // Green
            secondary: '#333333', // Dark Metal
            accent: '#8B0000', // Red (Go Faster)
        },
        traits: ['brutal', 'fun-loving', 'reckless', 'horde', 'strong'],
        bannerImage: '/src/assets/orks_banner.png',
        warriorImage: '/assets/orks_warrior.webp',
    },
    {
        id: 'eldar',
        name: 'Aeldari',
        description: 'An ancient, dying race of psychic masters. They wield advanced technology and see the future to avoid extinction.',
        motto: 'The stars were once ours.',
        colors: {
            primary: '#F5E6C4', // Bone
            secondary: '#008080', // Teal
            accent: '#800080', // Purple
        },
        traits: ['wise', 'arrogant', 'perfectionist', 'psychic', 'elusive'],
        bannerImage: '/src/assets/eldar_banner.png',
        warriorImage: '/assets/eldar_warrior.webp',
    },
    {
        id: 'necrons',
        name: 'Necrons',
        description: 'Ancient skeletal androids awakening from eons of slumber to reclaim the galaxy from the "upstart" races.',
        motto: 'Our time has come again.',
        colors: {
            primary: '#5D5D5D', // Silver/Grey
            secondary: '#24B72D', // Glowing Green
            accent: '#000000', // Black
        },
        traits: ['logical', 'ancient', 'unyielding', 'cold', 'superior'],
        bannerImage: '/src/assets/necrons_banner.png',
        warriorImage: '/assets/necrons_warrior.webp',
    },
    {
        id: 'tyranids',
        name: 'Tyranids',
        description: 'An extragalactic swarm of bio-engineered horrors consuming all organic life. The Great Devourer.',
        motto: 'Nom Nom Nom', // Informal
        colors: {
            primary: '#4B0082', // Dark Purple (Leviathan)
            secondary: '#F5F5DC', // Bone/Flesh
            accent: '#FF0000', // Red
        },
        traits: ['hungry', 'adaptive', 'instinctive', 'hive-minded', 'relentless'],
        bannerImage: '/src/assets/tyranids_banner.png',
        warriorImage: '/assets/tyranids_warrior.webp',
    },
    {
        id: 'tau',
        name: 'T\'au Empire',
        description: 'A young, optimistic race believing in the Greater Good, using advanced mechs and railguns to unite the galaxy.',
        motto: 'For the Greater Good.',
        colors: {
            primary: '#D88A2F', // Ochre
            secondary: '#FFFFFF', // White
            accent: '#000000', // Black
        },
        traits: ['idealistic', 'technological', 'cooperative', 'pragmatic', 'ranged'],
        bannerImage: '/src/assets/tau_banner.png',
        warriorImage: '/assets/tau_warrior.webp',
    },
];
