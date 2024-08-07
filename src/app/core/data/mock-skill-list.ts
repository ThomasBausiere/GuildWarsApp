import { Skill } from '../models/skill';

export const SKILLS: Skill[] = [
  {
    id: "0xA01",
    name: "Charge!",
    profession: "Warrior",
    statistic: "Tactics",
    campaign: "Core",
    description: "Elite Shout. (5...11...13 seconds.) Allies in earshot move 33% faster. Initial effect: these allies lose the Crippled condition."
  },
  {
    id: "0xA02",
    name: "Coward!",
    profession: "Warrior",
    statistic: "Tactics",
    campaign: "Factions",
    description: "Elite Shout. Causes knock-down if target foe is moving."
  },
  {
    id: "0xA03",
    name: "Victory Is Mine!",
    profession: "Warrior",
    statistic: "Tactics",
    campaign: "Prophecies",
    description: "Elite Shout. You gain 10...56...68 Health and 3...6...7 Energy for each condition on target foe."
  },
  {
    id: "0xA04",
    name: "You're All Alone!",
    profession: "Warrior",
    statistic: "Tactics",
    campaign: "Nightfall",
    description: "Elite Shout. Inflicts Cripple and Weakness conditions (8 seconds). No effect if target foe is near one of its allies."
  },
  {
    id: "0xA05",
    name: "Auspicious Parry",
    profession: "Warrior",
    statistic: "Tactics",
    campaign: "Factions",
    description: "Elite Stance. (8 seconds.) Blocks one attack. End effect: you gain 1...3...4 strike[s] of adrenaline."
  },
  {
    id: "0xA06",
    name: "Backbreaker",
    profession: "Warrior",
    statistic: "Hammer Mastery",
    campaign: "Prophecies",
    description: "Elite Hammer Attack. Deals +1...16...20 damage. Causes knockdown. Knockdown lasts 4 seconds with Strength 8 or higher."
  },
  {
    id: "0xA07",
    name: "Battle Rage",
    profession: "Warrior",
    statistic: "Strength",
    campaign: "Core",
    description: "Elite Stance. (5...17...20 seconds.) You move 33% faster and gain double adrenaline from your attacks. Ends if you use any non-adrenal skills."
  },
  {
    id: "0xA08",
    name: "Bull's Charge",
    profession: "Warrior",
    statistic: "Strength",
    campaign: "Prophecies",
    description: "Elite Stance. (5...10...11 seconds.) You move 33% faster. Causes knock-down if you hit a moving foe in melee. Ends if you use a skill."
  },
  {
    id: "0xA09",
    name: "Charging Strike",
    profession: "Warrior",
    statistic: "Strength",
    campaign: "Nightfall",
    description: "Elite Stance. (1...8...10 second[s].) You move 33% faster and deal +10...34...40 damage with your next melee hit. Ends when you hit or if you use a skill."
  },
  {
    id: "0xA10",
    name: "Cleave",
    profession: "Warrior",
    statistic: "Axe Mastery",
    campaign: "Core",
    description: "Elite Axe Attack. Deals +10...26...30 damage."
  }
];
