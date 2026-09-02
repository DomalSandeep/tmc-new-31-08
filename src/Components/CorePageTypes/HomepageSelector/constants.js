// constants.js
// All copy + data for the selector lives here, isolated from component logic,
// so a host project can override any of it via props without editing components.

export const QUESTIONS = ['size', 'photo', 'brightness'];

export const LABELS = {
  size: ['Small', 'Medium', 'Large'],
  photo: ['Limited', 'Moderate', 'Extensive'],
  brightness: ['Reserved', 'Balanced', 'Vibrant'],
};

export const QUESTION_META = {
  size: {
    title: 'How large is your institution?',
    subtitle: 'Think about your beds, your team, your departments, and how far people travel to reach you.',
    ariaLabel: 'Institution size',
  },
  photo: {
    title: 'How much photo content do you have?',
    subtitle: 'Think about how much high-quality photo or video content you have of your institution.',
    ariaLabel: 'Photo content availability',
  },
  brightness: {
    title: 'How bright would you like your colours to be?',
    subtitle: 'Think about how bright you want your colours to be on your website.',
    ariaLabel: 'Colour brightness preference',
  },
};

export const HELP = {
  size: [
    'Under 100 beds, fewer than 10 consultants, up to 5 departments, or a team of fewer than 25 people. One location, one city.',
    '100 to 700 beds, 10 to 75 consultants, 5 to 20 departments, or 4 to 8 programmes running across a district or a state.',
    'Over 700 beds, 75 or more consultants, 20 or more departments, or a national institute or a network across several states.',
  ],
  photo: [
    'Around 5–10 usable images, with few or no images suitable for large banners. Images are generally 1280 × 720 px or higher.',
    'Around 10–30 high-quality images, including 2–5 strong landscape images suitable for banners. Ideally 1920 × 1080 px or higher.',
    '30+ high-quality images and/or videos, including multiple professionally shot landscape images suitable for full-width banners.',
  ],
  brightness: [
    'Light and clean styling. Colour is used sparingly, for a calm and quiet feel.',
    'Clear, definite colours. Confident but not loud, and still light overall.',
    'Bright, uplifting colours. Warm and welcoming, noticed straight away.',
  ],
};

// Palette options, grouped by brightness tier. Colors reference CSS custom
// properties defined in HomepageSelector.css so a host project can retheme
// by overriding those variables instead of editing this file.
export const PALETTES = {
  reserved: [
    { name: 'Jade', c1: 'var(--ncc-jade)', c2: 'var(--ncc-jade-2)' },
    { name: 'Sky', c1: 'var(--ncc-sky)', c2: 'var(--ncc-sky-2)' },
    { name: 'Cotton', c1: 'var(--ncc-cotton)', c2: 'var(--ncc-cotton-2)' },
  ],
  balanced: [
    { name: 'Ocean', c1: 'var(--ncc-ocean)', c2: 'var(--ncc-ocean-2)' },
    { name: 'Azure', c1: 'var(--ncc-azure)', c2: 'var(--ncc-azure-2)' },
    { name: 'Apricot', c1: 'var(--ncc-apricot)', c2: 'var(--ncc-apricot-2)' },
  ],
  vibrant: [
    { name: 'Navy', c1: 'var(--ncc-navyP)', c2: 'var(--ncc-navyP-2)' },
    { name: 'Indigo', c1: 'var(--ncc-indigo)', c2: 'var(--ncc-indigo-2)' },
    { name: 'Rose', c1: 'var(--ncc-rose)', c2: 'var(--ncc-rose-2)' },
  ],
};

export const BRIGHTNESS_KEYS = ['reserved', 'balanced', 'vibrant'];

// PDFs are pre-generated and already stored at this path, following the
// naming convention `${size}-${photo}-${brightness}-${palette}.pdf`.
// Every one of the 3 x 3 x 3 x 3 = 81 possible combinations is expected to
// have a matching file in that folder — this just builds the path, it does
// not fake or generate data.

// export const DEFAULT_PDF_FOLDER = '/assets/themeimages/';
 export const DEFAULT_PDF_FOLDER = '/assets/pdf/';


export const DEFAULT_MOCK_CONTENT = {
  brandName: 'TATA MEMORIAL HOSPITAL',
  brandSubtitle: 'A Grant-in-Aid Institution',
  topLinks: ['Donate', 'Clinical Trials', 'News', 'Careers'],
  navLinks: ['Expertise', 'Patient Services', 'Education', 'Research', 'About Us'],
  navCta: 'Book an Appointment',
  heroKicker: "India's Premier Cancer Centre",
  heroTitle: 'Care built around every patient',
  heroBody:
    'Providing optimal care for every patient through multidisciplinary teams and evidence-based, individualised treatment.',
  heroPrimaryCta: 'Patient Support Centre',
  heroSecondaryCta: 'Donate Now',
  stats: [
    { value: '9.5 Lac', label: 'Patients treated annually' },
    { value: '35,000', label: 'New registrations annually' },
    { value: '33,000', label: 'Surgeries performed annually' },
  ],
  helpPrompt: 'How can we help you today?',
  helpPills: ['Patient', 'Doctor', 'Student', 'Researcher', 'Vendor'],
};
