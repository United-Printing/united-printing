export interface PresetText {
  accent: boolean
  text: string
}

export interface Preset {
  title: PresetText[]
  background: string
  rings: boolean
  veteran: boolean
  supplementaryText: string
}

export const PRESET_TIMING = 7000

export const SUBTEXTS: PresetText[][] = [
  [
    { accent: false, text: 'Serving' },
    { accent: false, text: 'clients' },
    { accent: true, text: 'across' },
    { accent: true, text: 'the' },
    { accent: true, text: 'nation' },
  ],
  [
    { accent: false, text: 'Veteran' },
    { accent: false, text: 'owned' },
    { accent: true, text: 'and' },
    { accent: true, text: 'operated' },
  ],
]

export const PRESETS: Preset[] = [
  {
    title: [
      { accent: true, text: "Charlotte's" },
      { accent: false, text: 'top' },
      { accent: false, text: 'commercial' },
      { accent: true, text: 'printer' },
    ],
    background: 'printing',
    rings: false,
    veteran: false,
    supplementaryText: 'Established in 1996, United Printing Company was built on a timeless foundation—the latest technology, best-in-class customer service, and superior logistics.',
  },
  {
    title: [
      { accent: false, text: 'Dedicated' },
      { accent: false, text: 'to' },
      { accent: true, text: 'sustainability' },
    ],
    background: 'aerial-forest',
    rings: false,
    veteran: false,
    supplementaryText: 'By making environmental consciousness fundamental to our production, we work to ensure that future generations will enjoy a healthy, biodiverse planet.',
  },
  {
    title: [
      { accent: false, text: 'A' },
      { accent: false, text: 'history' },
      { accent: false, text: 'of' },
      { accent: true, text: 'productive' },
      { accent: false, text: 'relationships' },
    ],
    background: 'gradient',
    rings: true,
    veteran: false,
    supplementaryText: 'Community has always been at the heart of our operation. Partners across the nation expect that same local care and world-class efficiency we first cultivated in Charlotte, North Carolina.',
  },
  {
    title: [
      { accent: true, text: 'Veteran' },
      { accent: false, text: 'owned' },
      { accent: false, text: 'and' },
      { accent: true, text: 'operated' },
    ],
    background: 'veteran',
    rings: false,
    veteran: true,
    supplementaryText: 'By maintaining a thriving, cohesive unit within the workplace, Team United\'s veteran leadership ultimately serves to amplify the experience and success of our clients.',
  },
]
