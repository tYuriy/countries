export interface Country {
  name: Name
  tld?: string[]
  cca2: string
  ccn3?: string
  cca3: string
  cioc?: string
  independent?: boolean
  status: string
  unMember: boolean
  currencies?: Currencies
  idd: Idd
  capital?: string[]
  altSpellings: string[]
  region: string
  subregion?: string
  languages?: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms?: Demonyms
  flag: string
  maps: Maps
  population: number
  gini?: Gini
  fifa?: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode?: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName?: NativeName
}

export interface NativeName {
  [key: string]: Language;
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string
  symbol: string
}

export interface Languages {
  [key: string]: string;
}

interface Language {
    official: string
    common: string
}

export interface Translations {
  [key: string]: TranslationType;
}

interface TranslationType {
  official: string;
  common: string;
}

export interface Idd {
  root?: string
  suffixes?: string[]
}

export interface Demonyms {
  eng: Demonym
  fra?: Demonym
}

export interface Demonym {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  [key: string]: number
}

export interface Car {
  signs?: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export interface CoatOfArms {
  png?: string
  svg?: string
}

export interface CapitalInfo {
  latlng?: number[]
}

export interface PostalCode {
  format: string
  regex?: string
}
