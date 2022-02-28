export interface ColorRgb {
  r: number;
  g: number;
  b: number;
}
export interface ColorLAB {
  L: number;
  A: number;
  B: number;
}

export interface LooseObject {
  [key: string]: any;
}
export interface Shade {
  id: string;
  slug: string;
  name: string;
  hex: string;
  rgb: ColorRgb;
  LAB: ColorLAB;
  brightness: number;
  hsl: string;
}

export interface LibData {
  name: string;
  slug: string;
  licence: string;
  colors: Shade[];
  website: string;
}

export interface Lib {
  name: string;
  slug: string;
  website: string;
  colors: Shade[];
}
