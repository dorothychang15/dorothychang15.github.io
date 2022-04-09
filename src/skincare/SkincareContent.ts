import { StepConfig } from '../types';

// images
export const banila = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/banila.png',
  width: 120,
};
export const laneigeCleanser = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/laneige_cleanser.png',
  width: 100,
};
export const skii = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/skii.png',
  width: 70,
};
export const freshEssence = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/fresh_essence.png',
  width: 80,
};
export const vitaminc = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/vitaminc.png',
  width: 80,
};
export const retinol = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/retinol.png',
  width: 150,
};
export const caudalie = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/caudalie.png',
  width: 75,
};
export const laneigeCream = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/laneige_cream.png',
  width: 140,
};
export const laneigeSleeping = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/laneige_sleeping.png',
  width: 120,
};
export const laneigeLip = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/laneige_lip.png',
  width: 120,
};
export const shiseido = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/shiseido.png',
  width: 120,
};
export const drjart = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/drjart.png',
  width: 100,
};
export const pipette = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/skincare/pipette.png',
  width: 120,
};

// content
export const skincareContent: StepConfig[] = [
  {
    title: 'double cleansing',
    body: 'In the morning, cleaning is pretty simple, but at night, it’s important to double cleanse to make sure all traces of makeup/impurities are removed from the skin. Even if you only put on sunscreen, it’s often better to remove sunscreen separately before going in with your face wash, especially for thicker sunscreens that leave more residue.',
    recs: ['Makeup Remover: Banila Co Clean It Zero', 'Cleanser: Laneige Multi Deep-Clean Cleanser'],
    imgs: [banila, laneigeCleanser],
  },
  {
    title: 'toner/essence',
    body: 'This is the first step after cleansing, and the main purpose of this step is to prepare your skin for the serums/creams that will come next. Toner is often referred to as the last step of cleansing, so instead of applying it directly to the skin, some people will apply toner to a cotton pad and sweep it all over the face to pick up any leftover residue, but in general if you double cleanse thoroughly, this isn’t necessary. \n \n' +
    'Here, toner and essence are used interchangeably because most products labeled toner and essence tend to have the same watery consistency, and any gentle toner/essence will serve to moisturize and prep your skin. This step is important because it’s much easier for skin to absorb products when it’s slightly wet, rather than completely dry (similar to how you would wet a sponge before using it).',
    recs: ['Toner/essence: SK-II Facial Treatment Essence (Pitera Essence)', 'Alternate: Fresh Kombucha Antioxidant Facial Treatment Essence'],
    imgs: [skii, freshEssence],
  },
  {
    title: 'serum',
    body: 'Serums usually contain active ingredients that target specific skin problems or conditions, such as vitamin C for dark spots/hyperpigmentation, retinol for anti aging, and hyaluronic acid for hydration. this step is optional: depending on your skin and if there are any issues you want to target, you might not need to apply a serum in the morning, at night, or at all. \n \n' +
    'Vitamin C and retinol increase sun sensitivity, so when using these products, it’s especially important to apply sunscreen daily. In particular, retinol should only be applied at night. \n \n Vitamin C can be applied morning or night, but should be followed with a strong sunscreen when applied in the morning. ' +
    'Vitamin C serums should also be stored in cool, dark places because heat and light can cause vitamin C to break down and lose its efficacy.',
    recs: ['Vitamin C: iS Clinical Pro-Heal Serum Advance+', 'Retinol: SENTÉ Bio Complete Serum \n \n Retinol can be rather harsh and drying on the skin, so it’s often better to start with a gentler/weaker retinol and slowly work your way up. You can also start by applying retinol once a week, then once every 3 days, etc. until your skin can tolerate retinol more frequently. This serum is a great choice for your first retinol because it’s gentle enough for everyday use but still strong enough to be effective. After finishing this serum, I would recommend getting a prescription for a stronger retinol from a dermatologist.'],
    imgs: [vitaminc, retinol],
  },
  {
    title: 'eye cream',
    body: 'The skin around the eyes is very delicate and is prone to early signs of aging, so eye cream is important for early prevention of wrinkles and spots. Choosing an eye cream will depend on if you want to target puffiness, dark circles, dryness, or fine lines.',
    recs: ['Eye cream: Caudalie Resveratrol Lift Firming Eye Gel-Cream'],
    imgs: [caudalie],
    
  },
  {
    title: 'moisturizer',
    body: 'Similar to eye cream, moisturizers may differ depending on if your skin is oily, dry, or combination. Even for oily skin types, if you’re using retinol, which can be very drying, or if you live somewhere where it gets very dry in the summer/winter, then you might want to rotate between a lighter moisturizer in the morning and a more nourishing night cream.',
    recs: ['Moisturizer: Laneige Water Bank Hyaluronic Cream Moisturizer'],
    imgs: [laneigeCream],
  },
  {
    title: 'overnight mask',
    body: 'Overnight lip masks tend to be thicker than everyday lip balms and are great for preventing chapped lips during the day. \n \n For drier skin types, applying a hydrating overnight mask once or twice a week can help alleviate dry patches and flakiness.',
    recs: ['Overnight lip mask: Laneige Lip Sleeping Mask', 'Overnight mask: Laneige Water Sleeping Mask'],
    imgs: [laneigeLip, laneigeSleeping],
  }
];

export const suncareContent = {
  title: 'sunscreen',
  body: 'This probably goes without saying, but sun protection is the most important thing you can do to protect your skin health and prevent signs of aging. \n \n ' +
  'There are two kinds of sunscreen: chemical and physical. chemical sunscreen absorbs UV rays into the skin and neutralizes them, whereas physical sunscreen sits on top of the skin and UV rays bounce off of it. physical sunscreen, also known as mineral sunscreen, tends to leave more of a white cast, but i find that it’s more effective for sun protection. the easiest way to identify a physical sunscreen is to look for zinc oxide as an active ingredient. titanium dioxide is also a common active ingredient in physical sunscreens, but it isn’t as effective on its own, so it should be combined with zinc oxide. look for a sunscreen that has 20-25% zinc oxide and titanium dioxide, and spf 50 or more. \n \n' +
  'Sunscreen should be applied 15 minutes before sun exposure, and reapplied every 2 hours while out in the sun. \n \n ' +
  'This Shiseido sunscreen isn’t as strong as I’d like, but it has a watery consistency that absorbs into the skin very easily and doesn’t leave any white cast or tacky feeling. It feels more like an essence than a sunscreen, so it’s a solid option for when you’re not going to be in the sun all day.',
  recs: [
    'Face sunscreen: Shiseido Urban Environment Oil-free UV Protector Broad Spectrum Face Sunscreen SPF 42',
    'Alternative face sunscreen: Dr. Jart+ Every Sun Day Mineral Sunscreen SPF 50+',
    'Body sunscreen: Pipette Mineral Sunscreen SPF 50'
  ],
  imgs: [shiseido, drjart, pipette],
};