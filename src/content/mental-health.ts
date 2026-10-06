import { images } from "./images";

export const mentalHealthPath = "/mental-health";

export const mentalHealth = {
  path: mentalHealthPath,
  title: "Mind of a Champion | Mike James Foundation × LoveJoy Health",
  description:
    "Mind of a Champion is the Mike James Foundation's mental-health work. Download the LoveJoy patient app and join Mike James' community on The Porch.",
  hero: {
    eyebrow: "Mind of a Champion",
    withPartner: "with LoveJoy Health",
    title: "Your mental health is part of your strength.",
    paragraphs: [
      "The Mike James Foundation starts the conversation. LoveJoy Health's patient app is how people take the next step.",
      "Download the app and join Mike James' community on The Porch.",
    ],
    image: images.portrait,
  },
  why: {
    eyebrow: "What Mike does",
    title: "A conversation, then a way forward.",
    paragraphs: [
      "Through Mind of a Champion, Mike makes room for honest talk about pressure, adversity, identity, and life beyond the game.",
      "The foundation does not provide therapy. LoveJoy is the care-access partner. Inside the patient app, The Porch is where people join Mike James' community.",
    ],
    note: "The app is not emergency care, and it is not a therapist. If you are in crisis, call or text 988 in the United States.",
  },
  next: {
    ios: "Download on the App Store",
    android: "Get it on Google Play",
    web: "Open the patient portal",
    pending: "Coming soon",
  },
};
