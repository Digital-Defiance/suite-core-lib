/**
 * Mapping from BCP-47 language codes to FlagCDN flag codes
 * Based on Flagpedia.net flag codes
 */

export const BCP47_TO_FLAG_CDN: Record<string, string> = {
  // Major languages with country flags
  'en-US': 'us',
  'en-GB': 'gb',
  en: 'gb',
  fr: 'fr',
  'fr-FR': 'fr',
  es: 'es',
  'es-ES': 'es',
  de: 'de',
  'de-DE': 'de',
  'zh-CN': 'cn',
  zh: 'cn',
  ja: 'jp',
  'ja-JP': 'jp',
  uk: 'ua',
  'uk-UA': 'ua',

  // All ISO 3166-1 alpha-2 codes from the HTML
  af: 'af', // Afghanistan
  ax: 'ax', // Åland Islands
  al: 'al', // Albania
  dz: 'dz', // Algeria
  as: 'as', // American Samoa
  ad: 'ad', // Andorra
  ao: 'ao', // Angola
  ai: 'ai', // Anguilla
  aq: 'aq', // Antarctica
  ag: 'ag', // Antigua and Barbuda
  ar: 'ar', // Argentina
  am: 'am', // Armenia
  aw: 'aw', // Aruba
  au: 'au', // Australia
  at: 'at', // Austria
  az: 'az', // Azerbaijan
  bs: 'bs', // Bahamas
  bh: 'bh', // Bahrain
  bd: 'bd', // Bangladesh
  bb: 'bb', // Barbados
  by: 'by', // Belarus
  be: 'be', // Belgium
  bz: 'bz', // Belize
  bj: 'bj', // Benin
  bm: 'bm', // Bermuda
  bt: 'bt', // Bhutan
  bo: 'bo', // Bolivia
  ba: 'ba', // Bosnia and Herzegovina
  bw: 'bw', // Botswana
  bv: 'bv', // Bouvet Island
  br: 'br', // Brazil
  io: 'io', // British Indian Ocean Territory
  bn: 'bn', // Brunei
  bg: 'bg', // Bulgaria
  bf: 'bf', // Burkina Faso
  bi: 'bi', // Burundi
  kh: 'kh', // Cambodia
  cm: 'cm', // Cameroon
  ca: 'ca', // Canada
  cv: 'cv', // Cape Verde
  bq: 'bq', // Caribbean Netherlands
  ky: 'ky', // Cayman Islands
  cf: 'cf', // Central African Republic
  td: 'td', // Chad
  cl: 'cl', // Chile
  cn: 'cn', // China
  cx: 'cx', // Christmas Island
  cc: 'cc', // Cocos Islands
  co: 'co', // Colombia
  km: 'km', // Comoros
  cg: 'cg', // Republic of the Congo
  cd: 'cd', // DR Congo
  ck: 'ck', // Cook Islands
  cr: 'cr', // Costa Rica
  ci: 'ci', // Côte d'Ivoire
  hr: 'hr', // Croatia
  cu: 'cu', // Cuba
  cw: 'cw', // Curaçao
  cy: 'cy', // Cyprus
  cz: 'cz', // Czechia
  dk: 'dk', // Denmark
  dj: 'dj', // Djibouti
  dm: 'dm', // Dominica
  do: 'do', // Dominican Republic
  ec: 'ec', // Ecuador
  eg: 'eg', // Egypt
  sv: 'sv', // El Salvador
  gq: 'gq', // Equatorial Guinea
  er: 'er', // Eritrea
  ee: 'ee', // Estonia
  sz: 'sz', // Eswatini
  et: 'et', // Ethiopia
  fk: 'fk', // Falkland Islands
  fo: 'fo', // Faroe Islands
  fj: 'fj', // Fiji
  fi: 'fi', // Finland
  gf: 'gf', // French Guiana
  pf: 'pf', // French Polynesia
  tf: 'tf', // French Southern and Antarctic Lands
  ga: 'ga', // Gabon
  gm: 'gm', // Gambia
  ge: 'ge', // Georgia
  gh: 'gh', // Ghana
  gi: 'gi', // Gibraltar
  gr: 'gr', // Greece
  gl: 'gl', // Greenland
  gd: 'gd', // Grenada
  gp: 'gp', // Guadeloupe
  gu: 'gu', // Guam
  gt: 'gt', // Guatemala
  gg: 'gg', // Guernsey
  gn: 'gn', // Guinea
  gw: 'gw', // Guinea-Bissau
  gy: 'gy', // Guyana
  ht: 'ht', // Haiti
  hm: 'hm', // Heard Island and McDonald Islands
  hn: 'hn', // Honduras
  hk: 'hk', // Hong Kong
  hu: 'hu', // Hungary
  is: 'is', // Iceland
  in: 'in', // India
  id: 'id', // Indonesia
  ir: 'ir', // Iran
  iq: 'iq', // Iraq
  ie: 'ie', // Ireland
  im: 'im', // Isle of Man
  il: 'il', // Israel
  it: 'it', // Italy
  jm: 'jm', // Jamaica
  jp: 'jp', // Japan
  je: 'je', // Jersey
  jo: 'jo', // Jordan
  kz: 'kz', // Kazakhstan
  ke: 'ke', // Kenya
  ki: 'ki', // Kiribati
  kp: 'kp', // North Korea
  kr: 'kr', // South Korea
  xk: 'xk', // Kosovo
  kw: 'kw', // Kuwait
  kg: 'kg', // Kyrgyzstan
  la: 'la', // Laos
  lv: 'lv', // Latvia
  lb: 'lb', // Lebanon
  ls: 'ls', // Lesotho
  lr: 'lr', // Liberia
  ly: 'ly', // Libya
  li: 'li', // Liechtenstein
  lt: 'lt', // Lithuania
  lu: 'lu', // Luxembourg
  mo: 'mo', // Macau
  mg: 'mg', // Madagascar
  mw: 'mw', // Malawi
  my: 'my', // Malaysia
  mv: 'mv', // Maldives
  ml: 'ml', // Mali
  mt: 'mt', // Malta
  mh: 'mh', // Marshall Islands
  mq: 'mq', // Martinique
  mr: 'mr', // Mauritania
  mu: 'mu', // Mauritius
  yt: 'yt', // Mayotte
  mx: 'mx', // Mexico
  fm: 'fm', // Micronesia
  md: 'md', // Moldova
  mc: 'mc', // Monaco
  mn: 'mn', // Mongolia
  me: 'me', // Montenegro
  ms: 'ms', // Montserrat
  ma: 'ma', // Morocco
  mz: 'mz', // Mozambique
  mm: 'mm', // Myanmar
  na: 'na', // Namibia
  nr: 'nr', // Nauru
  np: 'np', // Nepal
  nl: 'nl', // Netherlands
  nc: 'nc', // New Caledonia
  nz: 'nz', // New Zealand
  ni: 'ni', // Nicaragua
  ne: 'ne', // Niger
  ng: 'ng', // Nigeria
  nu: 'nu', // Niue
  nf: 'nf', // Norfolk Island
  mk: 'mk', // North Macedonia
  mp: 'mp', // Northern Mariana Islands
  no: 'no', // Norway
  om: 'om', // Oman
  pk: 'pk', // Pakistan
  pw: 'pw', // Palau
  ps: 'ps', // Palestine
  pa: 'pa', // Panama
  pg: 'pg', // Papua New Guinea
  py: 'py', // Paraguay
  pe: 'pe', // Peru
  ph: 'ph', // Philippines
  pn: 'pn', // Pitcairn Islands
  pl: 'pl', // Poland
  pt: 'pt', // Portugal
  pr: 'pr', // Puerto Rico
  qa: 'qa', // Qatar
  re: 're', // Réunion
  ro: 'ro', // Romania
  ru: 'ru', // Russia
  rw: 'rw', // Rwanda
  bl: 'bl', // Saint Barthélemy
  sh: 'sh', // Saint Helena
  kn: 'kn', // Saint Kitts and Nevis
  lc: 'lc', // Saint Lucia
  mf: 'mf', // Saint Martin
  pm: 'pm', // Saint Pierre and Miquelon
  vc: 'vc', // Saint Vincent and the Grenadines
  ws: 'ws', // Samoa
  sm: 'sm', // San Marino
  st: 'st', // São Tomé and Príncipe
  sa: 'sa', // Saudi Arabia
  sn: 'sn', // Senegal
  rs: 'rs', // Serbia
  sc: 'sc', // Seychelles
  sl: 'sl', // Sierra Leone
  sg: 'sg', // Singapore
  sx: 'sx', // Sint Maarten
  sk: 'sk', // Slovakia
  si: 'si', // Slovenia
  sb: 'sb', // Solomon Islands
  so: 'so', // Somalia
  za: 'za', // South Africa
  gs: 'gs', // South Georgia
  ss: 'ss', // South Sudan
  lk: 'lk', // Sri Lanka
  sd: 'sd', // Sudan
  sr: 'sr', // Suriname
  sj: 'sj', // Svalbard and Jan Mayen
  se: 'se', // Sweden
  ch: 'ch', // Switzerland
  sy: 'sy', // Syria
  tw: 'tw', // Taiwan
  tj: 'tj', // Tajikistan
  tz: 'tz', // Tanzania
  th: 'th', // Thailand
  tl: 'tl', // Timor-Leste
  tg: 'tg', // Togo
  tk: 'tk', // Tokelau
  to: 'to', // Tonga
  tt: 'tt', // Trinidad and Tobago
  tn: 'tn', // Tunisia
  tr: 'tr', // Turkey
  tm: 'tm', // Turkmenistan
  tc: 'tc', // Turks and Caicos Islands
  tv: 'tv', // Tuvalu
  ug: 'ug', // Uganda
  ua: 'ua', // Ukraine
  ae: 'ae', // United Arab Emirates
  gb: 'gb', // United Kingdom
  us: 'us', // United States
  um: 'um', // United States Minor Outlying Islands
  uy: 'uy', // Uruguay
  uz: 'uz', // Uzbekistan
  vu: 'vu', // Vanuatu
  va: 'va', // Vatican City
  ve: 've', // Venezuela
  vn: 'vn', // Vietnam
  vg: 'vg', // British Virgin Islands
  vi: 'vi', // United States Virgin Islands
  wf: 'wf', // Wallis and Futuna
  eh: 'eh', // Western Sahara
  ye: 'ye', // Yemen
  zm: 'zm', // Zambia
  zw: 'zw', // Zimbabwe

  // UK constituent countries
  'en-GB-ENG': 'gb-eng', // England
  'en-GB-SCT': 'gb-sct', // Scotland
  'en-GB-WLS': 'gb-wls', // Wales
  'en-GB-NIR': 'gb-nir', // Northern Ireland
};

/**
 * Get FlagCDN flag code from BCP-47 language code
 */
export function getFlagCode(bcp47: string): string | undefined {
  if (!bcp47) return undefined;
  return BCP47_TO_FLAG_CDN[bcp47] || BCP47_TO_FLAG_CDN[bcp47.toLowerCase()];
}
