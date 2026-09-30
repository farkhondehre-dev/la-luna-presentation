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
  positioning: "La Luna brings thoughtful fabric care into a more emotional, elevated space. It pairs reliable performance with the quiet reassurance of softness, light and lasting comfort.",
  conceptTitle: "A ritual of care, lit by the moon.",
  concept: "The name suggests calm, tenderness and a subtle European sensibility. The identity should feel polished enough for the shelf, yet gentle enough to live in the home.",
  colors: [
    { name: "Moonlit Blue", hex: "#8EA5C8", usage: "Primary brand colour" },
    { name: "Soft Lavender", hex: "#C9C4DC", usage: "Gentle accent" },
    { name: "Warm Cream", hex: "#F5F0E7", usage: "Base surface" },
    { name: "Silver Mist", hex: "#C7CCD4", usage: "Secondary neutral" },
    { name: "Midnight Ink", hex: "#253044", usage: "Typography & contrast" }
  ],
  typography: {
    display: "Cormorant Garamond",
    body: "Manrope",
    note: "A refined editorial serif balanced with a calm, modern sans serif."
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
    { label: "Primary logo", file: "#", note: "Add SVG / PNG" },
    { label: "Brand assets", file: "#", note: "Add ZIP folder" }
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

window.brandContent = laLunaOne;
window.brandPresentations = { "1": laLunaOne, "2": laLunaTwo, "3": laLunaThree };
