export interface ImperiumFaction {
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
    bannerImage: string;
}

export const imperiumFactions: ImperiumFaction[] = [
    {
        id: 'ultramarines',
        name: 'Ultramarines',
        description: 'The paragons of the Adeptus Astartes. Disciplined, tactical, and statesmen-soldiers who strictly adhere to the Codex Astartes.',
        motto: 'Courage and Honour!',
        colors: {
            primary: '#1D4585', // Macragge Blue
            secondary: '#D4AF37', // Gold
            accent: '#FFFFFF', // White
        },
        traits: ['disciplined', 'tactical', 'statesman', 'codex-compliant', 'honorable'],
        bannerImage: '/W40k/assets/ultramarines_banner.png',
    },
    {
        id: 'blood_angels',
        name: 'Blood Angels',
        description: 'Noble and artistic warriors cursed with the Red Thirst and Black Rage. They fight with angelic grace and terrifying fury.',
        motto: 'By the Blood of Sanguinius!',
        colors: {
            primary: '#8A0A0A', // Blood Red
            secondary: '#000000', // Black
            accent: '#D4AF37', // Gold
        },
        traits: ['noble', 'artistic', 'furious', 'cursed', 'angelic'],
        bannerImage: '/W40k/assets/blood_angels_banner.png',
    },
    {
        id: 'dark_angels',
        name: 'Dark Angels',
        description: 'The First Legion. Secretive, knightly, and obsessed with hunting the Fallen to redeem their ancient shame.',
        motto: 'Repent! For tomorrow you die!',
        colors: {
            primary: '#0F3D24', // Caliban Green
            secondary: '#D7CDB7', // Bone
            accent: '#000000', // Black
        },
        traits: ['secretive', 'knightly', 'stubborn', 'loyal', 'unforgiving'],
        bannerImage: '/W40k/assets/dark_angels_banner.png',
    },
    {
        id: 'space_wolves',
        name: 'Space Wolves',
        description: 'Savage executioners of the Emperor. They disdain authority but value courage, pack loyalty, and the protection of the innocent.',
        motto: 'For Russ and the Allfather!',
        colors: {
            primary: '#6C7F93', // Russ Grey
            secondary: '#F1C40F', // Yellow
            accent: '#5D4037', // Leather/Fur
        },
        traits: ['savage', 'loyal', 'independent', 'pack-minded', 'honorable'],
        bannerImage: '/W40k/assets/space_wolves_banner.png',
    },
    {
        id: 'sisters',
        name: 'Adepta Sororitas',
        description: 'The Sisters of Battle. Fanatical warriors who enforce the Imperial Creed with flamer, bolter, and absolute faith in the God-Emperor.',
        motto: 'Faith is my Shield.',
        colors: {
            primary: '#000000', // Black Power Armour
            secondary: '#FFFFFF', // White Robes
            accent: '#C0392B', // Red
        },
        traits: ['faithful', 'fanatical', 'zealous', 'pure', 'fiery'],
        bannerImage: '/W40k/assets/sisters_banner.png',
    },
    {
        id: 'custodes',
        name: 'Adeptus Custodes',
        description: 'The Emperor\'s Bodyguards. Genetically superior even to Space Marines, they are the Ten Thousand, the Golden Legion.',
        motto: 'Loyalty Unending.',
        colors: {
            primary: '#D4AF37', // Gold
            secondary: '#8E44AD', // Imperial Purple
            accent: '#C0392B', // Red
        },
        traits: ['elite', 'loyal', 'perfect', 'guardian', 'superior'],
        bannerImage: '/W40k/assets/custodes_banner.png',
    },
    {
        id: 'admech',
        name: 'Adeptus Mechanicus',
        description: 'Tech-priests of Mars who view flesh as weak and the machine as sacred. Guardians of technology and logic.',
        motto: 'There is no truth in flesh.',
        colors: {
            primary: '#8A0A0A', // Mars Red
            secondary: '#D7CDB7', // Bone
            accent: '#27AE60', // Glow Green
        },
        traits: ['logical', 'technological', 'detached', 'religious', 'augmented'],
        bannerImage: '/W40k/assets/admech_banner.png',
    },
    {
        id: 'guard',
        name: 'Astra Militarum',
        description: 'The Imperial Guard. Countless billions of ordinary men and women holding the line against horrors with grit, tanks, and lasguns.',
        motto: 'The Planet broke before the Guard did.',
        colors: {
            primary: '#4B5320', // Drab Green
            secondary: '#F4D03F', // Gold/Brass
            accent: '#17202A', // Black
        },
        traits: ['brave', 'numerous', 'gritty', 'disciplined', 'human'],
        bannerImage: '/W40k/assets/imperial_guard_banner.png',
    },
    {
        id: 'inquisition',
        name: 'The Inquisition',
        description: 'Shadowy agents given unlimited power to root out heresy, daemons, and xenos. They sacrifice the few to save the many.',
        motto: 'Innocence proves nothing.',
        colors: {
            primary: '#17202A', // Black
            secondary: '#D4AF37', // Gold
            accent: '#8A0A0A', // Red
        },
        traits: ['ruthless', 'secretive', 'determined', 'powerful', 'judgemental'],
        bannerImage: '/W40k/assets/inquisition_banner.png',
    },
];
