export interface TimelineItem {
  time: string;
  emoji: string;
  title: string;
  desc: string;
  distance: string;
  price: string;
  dotColor: string;
  colorA: string;
  colorB: string;
}

export interface Friend {
  name: string;
  initial: string;
  color: string;
  status: string;
  reaction: string;
}

export const PLACE = {
  name: 'Le Perchoir Marais',
  address: 'Paris 4e — rooftop',
  vibe: 'cocktails & vue',
};

export const BUDGETS = ['€ (< 20€)', '€€ (20-40€)', '€€€ (40€+)'];

export const VIBES = [
  { e: '🔥', l: 'Énergique' },
  { e: '🌙', l: 'Chill' },
  { e: '💃', l: 'Dansant' },
  { e: '🍸', l: 'Classe' },
];

export const TIMES = ['19h', '20h', '21h'];

export const TIMELINE: TimelineItem[] = [
  {
    time: '19h30',
    emoji: '🍸',
    title: 'Le Perchoir Marais',
    desc: 'Apéro rooftop avec vue sur les toits de Paris.',
    distance: 'point de départ',
    price: '€€',
    dotColor: '#8b7cf6',
    colorA: '#6c5ce7',
    colorB: '#2e2266',
  },
  {
    time: '21h00',
    emoji: '🍜',
    title: 'Chez Naka',
    desc: 'Ramen bar animé à 4 min à pied, parfait avant de continuer la soirée.',
    distance: '350m',
    price: '€€',
    dotColor: '#5b8def',
    colorA: '#3f6fd8',
    colorB: '#1c2a5e',
  },
  {
    time: '22h30',
    emoji: '🎱',
    title: 'Le Comptoir Général',
    desc: 'Bar à billard et jeux, ambiance décontractée pour digérer.',
    distance: '600m',
    price: '€',
    dotColor: '#c88bf0',
    colorA: '#9d5ce0',
    colorB: '#3a1f66',
  },
  {
    time: '00h00',
    emoji: '🪩',
    title: 'Concrete Club',
    desc: "Pour finir en dansant jusqu'au bout de la nuit.",
    distance: '1.2km',
    price: '€€€',
    dotColor: '#7c6cf0',
    colorA: '#5541d6',
    colorB: '#1a1440',
  },
];

export const FRIENDS: Friend[] = [
  { name: 'Léa', initial: 'L', color: '#6c5ce7', status: 'A validé le plan', reaction: '✅' },
  { name: 'Tom', initial: 'T', color: '#3f6fd8', status: 'A validé le plan', reaction: '✅' },
  { name: 'Nina', initial: 'N', color: '#9d5ce0', status: 'Propose 21h à la place', reaction: '🤔' },
  { name: 'Max', initial: 'M', color: '#5541d6', status: "N'a pas encore répondu", reaction: '⏳' },
];
