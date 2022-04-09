import { StepConfig } from '../types';

// images
export const blender = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/blender.png',
  width: 70,
};
export const concealer = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/concealer.png',
  width: 100,
};
export const foundation = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/foundation.png',
  width: 60,
};
export const powder = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/powder.png',
  width: 180,
};
export const puff = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/puff.png',
  width: 140,
};
export const cloudpaint = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/cloudpaint.jpeg',
  width: 140,
};
export const bronzer = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/bronzer.png',
  width: 200,
};
export const browPencil = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/brow.png',
  width: 140,
};
export const browGel = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/boybrow.jpeg',
  width: 140,
};
export const primer = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/primer.png',
  width: 80,
};
export const eyeshadow = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/naked3.jpeg',
  width: 200,
};
export const eyeliner = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/eyeliner.png',
  width: 140,
};
export const lashPrimer = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/lash_primer.png',
  width: 65,
};
export const mascara = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/mascara.png',
  width: 70,
};
export const settingSpray = {
  src: 'https://github.com/dorothychang15/personal-website/raw/master/public/makeup/spray.png',
  width: 60,
};
  
// content
export const makeupContent: StepConfig[] = [
  {
    title: 'base makeup',
    body: 'Base makeup varies quite a bit depending on your skin type and what kind of coverage you need. For example, for pores or textured scarring, you might want to use a primer to even out your skin texture. For dark circles or hyperpigmentation, concealer will help build additional coverage. In most cases though, you can just apply a layer of medium to high coverage foundation all over, and that will get the job done. I recommend using a beauty blender to apply concealer/foundation: probably any sponge would work, but my favorite is the original beauty blender.',
    recs: ['Applicator: Original BeautyBlender Makeup Sponge', 'Concealer: Tarte Shape Tape Concealer', 'Foundation: Lancôme Teint Idole Ultra 24H Long Wear Matte Foundation'],
    imgs: [blender, concealer, foundation],
    centerRecs: true,
  },
  {
    title: 'setting powder',
    body: 'For setting powder, I’ve tried a bunch of these as well, and the Laura Mercier powder is by far the best. Most powders will create a smooth, matte finish, but eventually wear off throughout the day, resulting in oily patches and uneven coverage. The Laura Mercier powder is the only one I’ve tried that keeps my makeup in place all day (from early morning to late at night). It works best when applied with the velour puff that it’s made to go with. To apply, dump some of the powder onto the puff, and fold the puff inwards in different directions to ensure that the puff absorbs the powder. Then, using the puff, gently press the places you want to set, slowly working the product in.',
    recs: ['Powder: Laura Mercier Translucent Loose Setting Powder', 'Puff: Laura Mercier Velour Puff'],
    imgs: [powder, puff],
    centerRecs: true,
  },
  {
    title: 'blush',
    body: 'I find that liquid blush is the easiest to apply and blend. After applying concealer/foundation, apply a small dot on each cheek and blend out with your fingers. Then, after you apply setting powder over this, your blush will look more natural, as if the color is coming from under your skin instead of sitting on top of it.',
    recs: ['Glossier Cloud Paint'],
    imgs: [cloudpaint],
    centerRecs: true,
  },
  {
    title: 'bronzer',
    body: 'I haven’t tried many bronzers other than the Benefit Hoola, but for what it’s worth, I’ve used it for over ten years now and haven’t really found any reason to switch. I use the brush it comes with, and I apply it from my temples all the way down to my jawline. I also apply it from my jawline down to my chin, and sometimes I’ll apply some on the sides of my nose to contour that area a bit as well.',
    recs: ['Benefit Hoola Bronzer'],
    imgs: [bronzer],
    centerRecs: true,
  },
  {
    title: 'brows',
    body: 'For brows, I think pretty much any brow pencil will do, since you’re just filling in sparse areas and drawing in the shape you want. Just make sure to use a brow pencil one shade lighter than your natural hair color (so if you have black hair, use a dark brown pencil). Then, use the spooly on the end of the brow pencil to blend out any harsh lines, and finish up with a brow gel to keep your brow hairs in place.',
    recs: ['Brow pencil: Colourpop Precision Brow Pencil', 'Brow gel: Glossier Boy Brow'],
    imgs: [browPencil, browGel],
    centerRecs: true,
  },
  {
    title: 'eye primer',
    body: 'Eye primer is important for two reasons: it gives your eye makeup a smooth canvas to apply on, so your eyeliner and eyeshadow will apply more easily and you’ll also get better color payoff from your eyeshadow. Primer also helps ensure that your eye makeup stays in place for longer (this is especially important for oily skin types).',
    recs: ['Eye primer: Urban Decay Eyeshadow Primer Potion'],
    imgs: [primer],
    centerRecs: true,
  },
  {
    title: 'eyeshadow',
    body: 'Start by applying a light, neutral color (like beige or taupe) all over the lid. This evens out the skin tone and creates a smooth canvas for color eyeshadows. Then, take a slightly darker shade, and blend it into the bottom half of your eyelid. For a more dramatic look, you can build the darker shade outwards, or for a lighter look, take a light, sparkly shade, and use your finger to gently tap it onto the center of your lid.',
    recs: ['Eyeshadow: Urban Decay Naked 3 Palette'],
    imgs: [eyeshadow],
    centerRecs: true,
  },
  {
    title: 'eyeliner',
    body: 'Start by filling in your lash line: this will make your lashes look longer and also makes your eyeliner look more natural. Then, draw a small line from your inner corner to the middle of your eyelid. Draw another small line from the outside of your eyelid to the middle, making both lines meet at the middle, and then smooth out the line from beginning to end if necessary. To add a cat wing, at the end of your eyelid, draw a thin line to extend your eyeliner slightly upwards and outwards. Then, draw a triangle from the end of that line to your original eyeliner, so that you have a uniform line that ends in a sharp point at the end.',
    recs: ['Eyeliner: Kat Von D Tattoo Liner'],
    imgs: [eyeliner],
    centerRecs: true,
  },
  {
    title: 'mascara',
    body: 'First, curl your lashes in three steps: start by holding your lash curler as close to your lash line as you can, and press gently. Do this two more times, each time moving your lash curler slowly outwards, so that you eventually curl each part of your lashes. Then, apply a mascara primer, and before the primer dries, apply mascara. For both primer and mascara, scrape off any excess product on the tube, then hold the applicator to your lash line, slowly wiggling it through your lashes outwards. This ensures that your lashes stay separated and that the product applies evenly to each lash.',
    recs: ['Lash primer: Lancôme Cils Booster XL Super-Enhancing Mascara Primer', 'Mascara: Lash Idôle Lash-Lifting & Volumizing Waterproof Mascara'],
    imgs: [lashPrimer, mascara],
    centerRecs: true,
  },
  {
    title: 'setting spray',
    body: 'Setting spray is the last step, after all of your face and eye makeup has been applied. If you applied mascara, wait a few minutes before applying setting spray, to avoid smudging your mascara before it dries. To apply setting spray, hold it 8-10 inches away from your face, close your eyes, and spray in an X shape, and then in a T shape.',
    recs: ['Urban Decay All Nighter Long-Lasting Makeup Setting Spray'],
    imgs: [settingSpray],
    centerRecs: true,
  }
];