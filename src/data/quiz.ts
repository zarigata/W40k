

export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        weights: { [factionId: string]: number };
    }[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "When facing a problem, what is your approach?",
        options: [
            {
                text: "Charge head-on with overwhelming force and faith.",
                weights: { imperium: 3, orks: 2, chaos: 1 },
            },
            {
                text: "Analyze deeply and apply the perfect technological or strategic solution.",
                weights: { tau: 3, necrons: 2, eldar: 1, imperium: 1 },
            },
            {
                text: "Adapt on the fly and use whatever keeps me surviving and growing.",
                weights: { tyranids: 3, chaos: 2, orks: 1 },
            },
            {
                text: "Scheming from the shadows or using ancient wisdom.",
                weights: { eldar: 3, necrons: 1, chaos: 1 },
            },
        ],
    },
    {
        id: 2,
        text: "What do you value most?",
        options: [
            {
                text: "Loyalty and Honor.",
                weights: { imperium: 3, tau: 1 },
            },
            {
                text: "Freedom and Power.",
                weights: { chaos: 3, orks: 2, eldar: 1 },
            },
            {
                text: "Efficiency and Order.",
                weights: { necrons: 3, tau: 2, imperium: 1 },
            },
            {
                text: "Biomass and Evolution.",
                weights: { tyranids: 3 },
            },
        ],
    },
    {
        id: 3,
        text: "Pick a weapon.",
        options: [
            {
                text: "Chainsword (Melee & Brutal).",
                weights: { imperium: 2, chaos: 2, orks: 2 },
            },
            {
                text: "Railgun (Long Range & High Tech).",
                weights: { tau: 3, necrons: 1 },
            },
            {
                text: "Psychic Powers / Magic.",
                weights: { eldar: 3, chaos: 2, tyranids: 1 },
            },
            {
                text: "Gauss Flayer (Disintegrate atoms).",
                weights: { necrons: 3 },
            },
        ],
    },
    {
        id: 4,
        text: "How do you view aliens/others?",
        options: [
            {
                text: "Suffer not the alien to live. Purge them!",
                weights: { imperium: 3, necrons: 1 },
            },
            {
                text: "They are useful allies if they submit to the Greater Good.",
                weights: { tau: 3 },
            },
            {
                text: "They are food.",
                weights: { tyranids: 3, orks: 1 }, // Orks see them as fighting partners mainly
            },
            {
                text: "Primitives to be manipulated or ignored.",
                weights: { eldar: 3, necrons: 2 },
            },
        ],
    },
    {
        id: 5,
        text: "What is your battle cry?",
        options: [
            {
                text: "For the Emperor!",
                weights: { imperium: 3 },
            },
            {
                text: "WAAAGH!",
                weights: { orks: 3 },
            },
            {
                text: "Blood for the Blood God!",
                weights: { chaos: 3 },
            },
            {
                text: "(Silence or eerie mechanical noise)",
                weights: { necrons: 3, tyranids: 2 },
            },
        ],
    },
];

export const calculateFaction = (answers: { [questionId: number]: number }): string => {
    // Logic to sum weights and return top faction ID
    // Simple implementation using reduce
    let topFaction = 'imperium';

    // Weights (accumulated elsewhere, passed as answers? No, answers are questionId -> option Index?)
    // Wait, the argument says answers: {[id]: number}. 
    // In Quiz.tsx I'm calculating scores directly. calculateFaction appears unused in Quiz.tsx?
    // I should remove it if it's unused.
    console.log(answers);
    return topFaction;
};
