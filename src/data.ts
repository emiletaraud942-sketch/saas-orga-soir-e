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
    dotColor: '#c67139',
    colorA: '#c67139',
    colorB: '#8c491a',
  },
  {
    time: '21h00',
    emoji: '🍜',
    title: 'Chez Naka',
    desc: 'Ramen bar animé à 4 min à pied, parfait avant de continuer la soirée.',
    distance: '350m',
    price: '€€',
    dotColor: '#7a8a5e',
    colorA: '#7a8a5e',
    colorB: '#56633f',
  },
  {
    time: '22h30',
    emoji: '🎱',
    title: 'Le Comptoir Général',
    desc: 'Bar à billard et jeux, ambiance décontractée pour digérer.',
    distance: '600m',
    price: '€',
    dotColor: '#d67f48',
    colorA: '#d67f48',
    colorB: '#8c491a',
  },
  {
    time: '00h00',
    emoji: '🪩',
    title: 'Concrete Club',
    desc: 'Pour finir en dansant jusqu\'au bout de la nuit.',
    distance: '1.2km',
    price: '€€€',
    dotColor: '#728157',
    colorA: '#728157',
    colorB: '#3d472b',
  },
];

export const FRIENDS: Friend[] = [
  { name: 'Léa', initial: 'L', color: '#c67139', status: 'A validé le plan', reaction: '✅' },
  { name: 'Tom', initial: 'T', color: '#7a8a5e', status: 'A validé le plan', reaction: '✅' },
  { name: 'Nina', initial: 'N', color: '#d67f48', status: 'Propose 21h à la place', reaction: '🤔' },
  { name: 'Max', initial: 'M', color: '#728157', status: "N'a pas encore répondu", reaction: '⏳' },
];
