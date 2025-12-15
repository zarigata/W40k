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
        text: "The enemy is at the gates. How do you prepare your defense?",
        options: [
            {
                text: "Consult the Codex Astartes. Strict adherence to tactical doctrine ensures victory.",
                weights: { ultramarines: 5, guard: 1, fists: 2 } // 'fists' not in list, stick to main 9
            },
            {
                text: "Charge them head-on! My fury is my weapon, even if I lose control.",
                weights: { blood_angels: 5, space_wolves: 3, sisters: 1 }
            },
            {
                text: "Fortify our position with heavy weapons and massed infantry. Hold the line at all costs.",
                weights: { guard: 5, ultramarines: 2, sisters: 2 }
            },
            {
                text: "Analyze the enemy's weakness with cold logic. Calculate the most efficient kill solution.",
                weights: { admech: 5, necrons: 0, ultramarines: 2, inquisition: 3 }
            },
            {
                text: "I fight alone or with my elite brothers. We are worth a thousand of their number.",
                weights: { custodes: 5, grey_knights: 0, space_wolves: 2 } // grey_knights not in list yet
            }
        ]
    },
    {
        id: 2,
        text: "What is your view on the Codex Astartes (or the rules of engagement)?",
        options: [
            {
                text: "It is the holy scripture of war. To deviate is to invite disaster.",
                weights: { ultramarines: 5, sisters: 3 }
            },
            {
                text: "It has its uses, but a warrior must trust their instincts and the spirit of the pack.",
                weights: { space_wolves: 5, blood_angels: 2 }
            },
            {
                text: "Rules are for those who lack the will to do what is necessary to save the Imperium.",
                weights: { inquisition: 5, dark_angels: 3 }
            },
            {
                text: "My duty is written in my genetic code by the Emperor Himself. I need no book.",
                weights: { custodes: 5, blood_angels: 1 }
            },
            {
                text: "I follow the orders of the Omnissiah. Logic dictates my path.",
                weights: { admech: 5 }
            }
        ]
    },
    {
        id: 3,
        text: "A civilian population has been exposed to potential Warp corruption. What do you do?",
        options: [
            {
                text: "Exterminate them all. Innocence proves nothing. We cannot risk the spread.",
                weights: { inquisition: 5, dark_angels: 2, sisters: 2 }
            },
            {
                text: "Burn the heretics with holy fire, but spare the truly faithful... if any remain.",
                weights: { sisters: 5, inquisition: 3 }
            },
            {
                text: "Defend them! We are the shields of humanity, not its executioners.",
                weights: { space_wolves: 5, salamanders: 5, blood_angels: 2 } // salamanders traits align with wolves here
            },
            {
                text: "Assess the level of taint. Quarantine and study if possible, purge if necessary.",
                weights: { ultramarines: 3, admech: 2 }
            }
        ]
    },
    {
        id: 4,
        text: "What is your greatest secret or shame?",
        options: [
            {
                text: "I have none. My loyalty is absolute and transparent.",
                weights: { ultramarines: 4, custodes: 5, sisters: 3, guard: 3 }
            },
            {
                text: "A terrible rage lurks within my blood. I struggle to keep the beast at bay.",
                weights: { blood_angels: 5, space_wolves: 2 }
            },
            {
                text: "We do not talk about the past. To ask is to invite death. (Hunt the Fallen)",
                weights: { dark_angels: 5, inquisition: 2 }
            },
            {
                text: "I forbid you to investigate my research. Knowledge is mine alone.",
                weights: { admech: 4, inquisition: 1 }
            }
        ]
    },
    {
        id: 5,
        text: "How do you view the Emperor?",
        options: [
            {
                text: "He is a God. I worship Him with every breath and bullet.",
                weights: { sisters: 5, guard: 4, ultramarines: 2, inquisition: 3 }
            },
            {
                text: "He is the Allfather, the greatest warrior. I honor Him through deeds, not prayer.",
                weights: { space_wolves: 5 }
            },
            {
                text: "He is the Omnissiah, the motive force of the universe.",
                weights: { admech: 5 }
            },
            {
                text: "He is my creator and my charge. I failed Him once; I will never fail Him again.",
                weights: { custodes: 5, blood_angels: 2 }
            },
            {
                text: "He is the master of mankind. We serve his will, even in the shadows.",
                weights: { inquisition: 4, dark_angels: 3, ultramarines: 3 }
            }
        ]
    },
    {
        id: 6,
        text: "Choose a weapon.",
        options: [
            {
                text: "Bolter and Chainsword. The tools of an Astartes.",
                weights: { ultramarines: 3, dark_angels: 3, blood_angels: 3, space_wolves: 3 }
            },
            {
                text: "Flamer and Melta. Purge it with holy fire.",
                weights: { sisters: 5, salamanders: 4 }
            },
            {
                text: "Guardian Spear or Sentinel Blade. Mastercrafted perfection.",
                weights: { custodes: 5 }
            },
            {
                text: "Arc Rifle and Omnissian Axe. Technology is the ultimate weapon.",
                weights: { admech: 5 }
            },
            {
                text: "Lasgun and Bayonet. Quantity has a quality all its own.",
                weights: { guard: 5 }
            },
            {
                text: "My mind and my authority. I wield the power of the Imperium itself.",
                weights: { inquisition: 5 }
            }
        ]
    },
    {
        id: 7,
        text: "The battle is lost. Reinforcements are impossible. What do you do?",
        options: [
            {
                text: "Fight until the last drop of blood! For Sanguinius!",
                weights: { blood_angels: 5 }
            },
            {
                text: "Hold the line! The Planet broke before the Guard did!",
                weights: { guard: 5 }
            },
            {
                text: "Initiate the scorched earth protocol. If we can't have it, no one can. Exterminatus.",
                weights: { inquisition: 5, dark_angels: 2 }
            },
            {
                text: "Make a tactical withdrawal to a more advantageous position to counter-attack.",
                weights: { ultramarines: 5, custodes: 2 }
            },
            {
                text: "Unleash the Wulfen. Go down fighting in a pile of corpses.",
                weights: { space_wolves: 5 }
            },
            {
                text: "Pray for a miracle. The Emperor protects.",
                weights: { sisters: 5 }
            }
        ]
    }
];
