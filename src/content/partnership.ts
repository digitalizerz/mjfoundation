import { mentalHealthPath } from "./mental-health";

export const partnership = {
  path: mentalHealthPath,
  eyebrow: "Mental health & care access partner",
  title: "From conversation to care.",
  paragraphs: [
    "Talking about mental health is important. Making it easier for people to find and stay connected to support is just as important.",
    "LoveJoy Health is the care-access partner. The next step is the LoveJoy patient app.",
  ],
  paths: [{ label: "Download the patient app", href: `${mentalHealthPath}#download` }],
  partnerLabel: "Mental Health & Care Access Partner",
  partnerName: "LoveJoy Health",
  logo: {
    src: "/brand/lovejoy-health-light.png",
    alt: "LoveJoy Health",
    width: 981,
    height: 207,
  },
  cta: { label: "Explore mental health & wellness", href: mentalHealthPath },
};
