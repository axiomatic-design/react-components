import Color from 'color';

const brand = Color('#4b5dff');
const secondary = Color('#A636FE');
const accent = Color('#4BC9FF');
const light = Color('#ffffff');
const dark = Color('#0C384B');

export const colors = {
  primary: brand.hex(),
  primaryHover: brand.darken(0.2).string(),
  primaryText: light.hex(),
  primaryTextHover: light.alpha(0.75).string(),
  outline: brand.alpha(0.4).string(),
  secondary: secondary.hex(),
  secondaryHover: secondary.darken(0.2).string(),
  secondaryText: light.hex(),
  secondaryTextHover: light.alpha(0.75).string(),
  headings: dark.hex(),
  copy: dark.alpha(0.85).string(),
  byline: dark.alpha(0.7).string(),
  iconDefault: dark.hex(),
  eyebrow: dark.alpha(0.5).string(),
  navLink: dark.hex(),
  selection: secondary.alpha(0.25).string(),
  disabled: dark.alpha(0.2).string(),
  disabledText: dark.alpha(0.5).string(),
  outlineButtonHover: brand.alpha(0.1).string(),
  tag: secondary.alpha(0.25).string(),
  tagText: secondary.darken(0.4).string(),
  navPill: secondary.alpha(0.75).string(),
  navPillText: light.hex(),
  cardDefault: accent.alpha(0.25).string(),
  imagePlaceholder: dark.alpha(0.1).string(),
  footer: dark.hex(),
};
