import images from './images';

const wines = [
  {
    title: 'Château Margaux',
    price: '256€',
    tags: 'FR | Bouteille',
  },
  {
    title: 'Château Clarke',
    price: '160€',
    tags: 'FR | Bouteille',
  },
  {
    title: 'La Vieille Rose',
    price: '44€',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '31€',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '26€',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '20€',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '16€',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '10€',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '31€',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '26€',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'La Fourchette',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Trip Advisor',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'ZenChef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Guide Michelin',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
