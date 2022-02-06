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
export interface Shade {
  id?: string;
  lib?: string;
  name?: string;
  hex?: string;
  rgb?: ColorRgb;
  LAB?: ColorLAB;
}

export interface LibData {
  name: string;
  slug: string;
  licence: string;
  colors: Shade[];
  website: string;
}
