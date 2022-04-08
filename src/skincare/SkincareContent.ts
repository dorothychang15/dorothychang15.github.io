export type Content = {
    title: string;
    body: string;
    recs: string[];
}

export const skincareContent: Content[] = [
  {
    title: 'double cleansing',
    body: 'in the morning, cleaning is pretty simple, but at night, it’s important to double cleanse to make sure all traces of makeup/impurities are removed from the skin. even if you only put on sunscreen, it’s often better to remove sunscreen separately before going in with your face wash, especially for thicker sunscreens that leave more residue.',
    recs: ['makeup remover: banila co clean it zero', 'cleanser: laneige multi deep clean cleanser']
  },
  {
    title: 'toner/essence',
    body: 'this is the first step after cleansing, and the main purpose of this step is to prepare your skin for the serums/creams that will come next. toner is often referred to as the last step of cleansing, so instead of applying it directly to the skin, some people will apply toner to a cotton pad and sweep it all over the face to pick up any leftover residue, but in general if you double cleanse thoroughly, this isn’t necessary. \n \n here, toner and essence are used interchangeably because most products labeled toner and essence tend to have the same watery consistency, and any gentle toner/essence will serve to moisturize and prep your skin. this step is important because     it’s much easier for skin to absorb products when it’s slightly wet, rather than completely dry (similar to how you would wet a sponge before using it).',
    recs: ['toner/essence: sk-ii facial treatment essence', 'alternate: fresh kombucha antioxidant facial treatment essence']
  },
  {
    title: 'serum',
    body: 'serums usually contain active ingredients that target specific skin problems or conditions, such as vitamin c for dark spots/hyperpigmentation, retinol for anti aging, and hyaluronic acid for hydration. this step is optional: depending on your skin and if there are any issues you want to target, you might not need to apply a serum in the morning, at night, or at all. \n \n vitamin c and retinol increase sun sensitivity, so when using these products, it’s especially important to apply sunscreen daily. in particular, retinol should only be applied at night. vitamin c can be applied morning or night, but should be followed with a strong sunscreen if applied in the morning. vitamin c serums should also be stored in cool, dark places because heat and light can cause vitamin c to break down and lose its efficacy.',
    recs: ['vitamin c: is clinical super serum advance+', 'retinol: sente bio complete serum (or prescription from a dermatologist)']
  },
  {
    title: 'eye cream',
    body: 'the skin around the eyes is very delicate and is prone to early signs of aging, so eye cream is important for early prevention of wrinkles and spots. choosing an eye cream will depend on if you want to target puffiness, dark circles, dryness, or fine lines.',
    recs: ['eye cream: caudalie resveratrol lift firming eye gel-cream']
  },
  {
    title: 'moisturizer',
    body: 'similar to eye cream, moisturizers may differ depending on if your skin is oily, dry, or combination. even for oily skin types, if you’re using retinol, which can be very drying, or if you live somewhere where it gets very dry in the summer/winter, then you might want to rotate between a lighter moisturizer in the morning and a more nourishing night cream.',
    recs: ['moisturizer: laneige water bank hyaluronic cream moisturizer']
  },
  {
    title: 'overnight mask',
    body: 'overnight lip masks tend to be thicker than everyday lip balms and are great for preventing chapped lips during the day. \n \n for drier skin types, applying a hydrating overnight mask once or twice a week can help alleviate dry patches and flakiness.',
    recs: ['overnight lip mask: laneige lip sleeping mask', 'overnight mask: laneige water sleeping mask']
  },
  {
    title: 'sunscreen',
    body: 'this probably goes without saying, but sun protection is the most important thing you can do to protect your skin health and prevent signs of aging. \n \n ' +
    'there are two kinds of sunscreen: chemical and physical. chemical sunscreen absorbs UV rays into the skin and neutralizes them, whereas physical sunscreen sits on top of the skin and UV rays bounce off of it. physical sunscreen, also known as mineral sunscreen, tends to leave more of a white cast, but i find that it’s more effective for sun protection. the easiest way to identify a physical sunscreen is to look for zinc oxide as an active ingredient. titanium dioxide is also a common active ingredient in physical sunscreens, but it isn’t as effective on its own, so it should be combined with zinc oxide. look for a sunscreen that has 20-25% zinc oxide and titanium dioxide, and spf 50 or more. \n \n' +
    'sunscreen should be applied 15 minutes before sun exposure, and reapplied every 2 hours while out in the sun.',
    recs: [
      'face sunscreen: shiseido urban environment oil-free uv protector broad spectrum face sunscreen spf 42',
      'alternative face sunscreen: dr. jart+ every sun day mineral sunscreen spf 50+',
      'body sunscreen: pipette mineral sunscreen spf 50'
    ]
  }
];