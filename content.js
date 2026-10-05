/*
  LA LUNA CONTENT
  Change the values in this file, then republish the site.
  Replace the placeholder image paths with your own files when they are ready.
*/
const laLunaOne = {
  presentationLabel: "Logo presentation · 01",
  name: "La Luna",
  nativeName: "ЛА ЛУНА",
  tagline: "Care Beyond Clean",
  intro: "Specialist fabric care with a softer point of view.",
  conceptLabel: "CORE CONCEPT",
  positioning: "The logo balances precision with softness, reflecting effective yet gentle fabric care.",
  conceptTitle: "Refined Expertise",
  concept: "Its flowing curves echo the natural movement and folds of fabric, bringing softness and tactility to a confident, expert identity.",
  colors: [
    { name: "Midnight Navy", hex: "#18213D", usage: "Primary", group: "primary" },
    { name: "Moonlight Blue", hex: "#AFC9DB", usage: "Primary", group: "primary" },
    { name: "Warm White", hex: "#F6F4EF", usage: "Primary", group: "primary" },
    { name: "Soft Lavender", hex: "#CBC6D8", usage: "Secondary", group: "secondary" },
    { name: "Soft Cream", hex: "#EAE4D8", usage: "Secondary", group: "secondary" },
    { name: "Silver Grey", hex: "#C5C7C9", usage: "Secondary", group: "secondary" }
  ],
  colourLanguage: {
    title: "Softness with authority.",
    primary: "Balances confidence, care and calm, creating a foundation that feels both expert and gentle.",
    secondary: "Adds warmth, softness and flexibility, allowing the identity to expand across products while staying consistent."
  },
  typography: {
    display: "Georgia",
    body: "Gotham",
    title: "Character with clarity.",
    georgiaLead: "Warm. Familiar. Refined.",
    georgiaDescription: "Georgia’s expressive serifs and generous proportions bring warmth to the identity. Used for headlines, it gives La Luna a confident voice with a gentle character.",
    gothamLead: "Clear. Balanced. Practical.",
    gothamDescription: "Gotham’s geometric forms provide a clean counterpoint to Georgia. Used for product information and supporting copy, it creates a clear hierarchy and keeps communication direct.",
    note: "Georgia adds character; Gotham brings structure. Together, they balance softness with fabric-care expertise."
  },
  logoSystem: {
    wordmarks: {
      title: "LOGOMARK",
      subtitle: "Refined. Distinctive. Confident.",
      description: "A custom wordmark designed to balance fabric-care expertise with softness, creating a sophisticated identity without entering beauty or fashion territory.",
      marks: [
        { name: "Cyrillic wordmark", file: "d01-wordmark-cyrillic.svg" },
        { name: "Latin wordmark", file: "d01-wordmark-latin.svg" }
      ]
    },
    lockups: {
      title: "LOGOMARK & ARC",
      subtitle: "A controlled lunar cue.",
      description: "The Arc connects La Luna to its lunar meaning without using a literal moon symbol, adding recognition while keeping the identity refined and credible.",
      marks: [
        { name: "Cyrillic lockup", file: "d01-cyrillic-lockup.svg" },
        { name: "Latin lockup", file: "d01-latin-lockup.svg" }
      ]
    }
  },
  applications: [
    { title: "Moonlit Clean", description: "Liquid laundry detergent. A soft white bottle with a crescent-led form language.", image: "la-luna-detergent.png" },
    { title: "Softness in Bloom", description: "Fabric softener. Lavender, silver and delicate florals make care feel elevated.", image: "la-luna-softener.png" },
    { title: "Care at Home", description: "A calm, sensory product world for packaging, retail and campaign application.", image: "la-luna-laundry-scene.png" }
  ],
  lifestyle: [
    { title: "The Linen Moment", description: "Fresh fabric, gently held close.", image: "la-luna-linen-moment.png" },
    { title: "Softness That Stays", description: "Comfort that follows you into the evening.", image: "la-luna-sleeping.png" },
    { title: "Made for the Laundry Room", description: "Care, within reach when it matters.", image: "la-luna-laundry-placement.png" },
    { title: "Placed with Purpose", description: "A considered product moment in the laundry space.", image: "la-luna-bedroom-placement.png" }
  ],
  downloads: [
    { label: "Cyrillic logo", file: "LaLuna_D01_Cyrillic.pdf", note: "PDF" },
    { label: "Latin logo", file: "LaLuna_D01_Latin.pdf", note: "PDF" }
  ]
};

/*
  Each object below is a complete, independent presentation.
  Edit the text, colours, image paths and downloads inside La Luna 2 or 3
  when your other logo directions are ready. The current images are only
  shared placeholders, so every direction begins as a complete presentation.
*/
const clonePresentation = (content) => JSON.parse(JSON.stringify(content));
const laLunaTwo = clonePresentation(laLunaOne);
laLunaTwo.presentationLabel = "Logo presentation · 02";
laLunaTwo.tagline = "Care, in its softest form.";
laLunaTwo.intro = "A warm, tactile direction for specialist fabric care.";
laLunaTwo.positioning = "This direction lets La Luna feel more tactile and intimate, balancing dependable performance with a gently expressive everyday ritual.";
laLunaTwo.conceptTitle = "Care, softened into a daily ritual.";
laLunaTwo.concept = "Use this area to describe the second logo direction: its idea, personality and the distinctive choices behind it.";
laLunaTwo.colors = [
  { name: "Dusk Blue", hex: "#7790B5", usage: "Primary brand colour" },
  { name: "Lilac Haze", hex: "#B9B1D2", usage: "Gentle accent" },
  { name: "Porcelain", hex: "#F7F4EF", usage: "Base surface" },
  { name: "Pale Silver", hex: "#D8DCE1", usage: "Secondary neutral" },
  { name: "Deep Evening", hex: "#303A52", usage: "Typography & contrast" }
];
laLunaTwo.logoSystem = null;
laLunaTwo.downloads = [];

const laLunaThree = clonePresentation(laLunaOne);
laLunaThree.presentationLabel = "Logo presentation · 03";
laLunaThree.tagline = "Performance, wrapped in comfort.";
laLunaThree.intro = "A clearer, more confident direction for modern fabric care.";
laLunaThree.positioning = "This direction gives La Luna a crisper, more contemporary voice while preserving the softness and reassurance at the heart of the brand.";
laLunaThree.conceptTitle = "A brighter expression of thoughtful care.";
laLunaThree.concept = "Use this area to describe the third logo direction: its point of view, visual language and the feeling it is designed to create.";
laLunaThree.colors = [
  { name: "Lunar Blue", hex: "#6F92BD", usage: "Primary brand colour" },
  { name: "Cloud Lavender", hex: "#D3CEE4", usage: "Gentle accent" },
  { name: "Moon Milk", hex: "#FAF8F3", usage: "Base surface" },
  { name: "Silver Glow", hex: "#C9D0DA", usage: "Secondary neutral" },
  { name: "Night Blue", hex: "#1E3049", usage: "Typography & contrast" }
];
laLunaThree.logoSystem = null;
laLunaThree.downloads = [];

window.brandContent = laLunaOne;
window.brandPresentations = { "1": laLunaOne, "2": laLunaTwo, "3": laLunaThree };
