import type { ImageAsset } from "./types";

/**
 * IMAGE SLOTS
 * Photographs of Mike James use the `mj-` files. Swap a file in /public/images
 * or change `src` when a higher-resolution original is available.
 * Other files are supporting images for youth, schools, and community concepts.
 * Do not point those supporting images at copy that calls the person Mike James.
 *
 * Not used: a watermarked Pistons game photo. It needs a licensed file
 * before it can go on the site.
 */

export const images = {
  hero: {
    src: "/images/mj-rockets.jpg",
    alt: "Mike James smiling in a Houston Rockets jersey during his NBA career.",
    slot: "home.hero",
    objectPosition: "center 18%",
  },
  story: {
    src: "/images/mj-hornets.jpg",
    alt: "Mike James in a New Orleans Hornets jersey during an NBA game.",
    slot: "home.story",
    objectPosition: "center top",
  },
  pillarMind: {
    src: "/images/coach-player.jpg",
    alt: "A coach speaking closely with a basketball player at courtside.",
    slot: "pillar.mental-health",
    objectPosition: "center 30%",
  },
  pillarYouth: {
    src: "/images/youth-huddle.jpg",
    alt: "A coach and young players stack their hands together at center court.",
    slot: "pillar.youth",
    objectPosition: "center center",
  },
  pillarBasketball: {
    src: "/images/mj-wizards.jpg",
    alt: "Mike James dribbles in a Washington Wizards jersey.",
    slot: "pillar.basketball",
    objectPosition: "32% 42%",
  },
  pillarCommunity: {
    src: "/images/mj-hoodies.jpg",
    alt: "Mike James, at right, with community members wearing Hoodies 4 Healing shirts.",
    slot: "pillar.community",
    objectPosition: "92% 22%",
  },
  mind: {
    src: "/images/coach-circle.jpg",
    alt: "A coach talking with young players gathered in a close circle.",
    slot: "program.mind-of-a-champion",
    objectPosition: "center 30%",
  },
  partnership: {
    src: "/images/timeout.jpg",
    alt: "Coaches speaking with a team during a timeout.",
    slot: "home.partnership",
    objectPosition: "center 35%",
  },
  camp: {
    src: "/images/mj-wizards.jpg",
    alt: "Mike James dribbles in a Washington Wizards jersey.",
    slot: "program.basketball-experience",
    objectPosition: "30% 40%",
  },
  community: {
    src: "/images/mj-hoodies.jpg",
    alt: "Mike James, at right, at a Hoodies 4 Healing community gathering.",
    slot: "program.mike-james-day",
    objectPosition: "62% 28%",
  },
  quote: {
    src: "/images/hands-in.jpg",
    alt: "Players reach their hands into the center of a team huddle.",
    slot: "home.quote",
    objectPosition: "center center",
  },
  cta: {
    src: "/images/arena.jpg",
    alt: "A packed basketball arena seen from above, lights low over the court.",
    slot: "home.final-cta",
    objectPosition: "center center",
  },
  about: {
    src: "/images/mj-timberwolves.jpg",
    alt: "Mike James, at right holding a basketball, with Minnesota Timberwolves teammates.",
    slot: "about.hero",
    objectPosition: "58% 18%",
  },
  brotherhood: {
    src: "/images/mj-timberwolves.jpg",
    alt: "Archival photograph of Mike James with Minnesota Timberwolves teammates.",
    slot: "about.brotherhood",
    objectPosition: "center 20%",
  },
  world: {
    src: "/images/mj-africa.jpg",
    alt: "Mike James with a host on open grassland, rhinoceroses in the distance.",
    slot: "about.world",
    objectPosition: "68% center",
  },
  portrait: {
    src: "/images/mj-rockets.jpg",
    alt: "Mike James smiling in a Houston Rockets jersey.",
    slot: "about.portrait",
    objectPosition: "center 20%",
  },
  court: {
    src: "/images/outdoor-ball.jpg",
    alt: "A basketball resting on the painted line of an outdoor court.",
    slot: "shared.court",
    objectPosition: "center center",
  },
  ballArm: {
    src: "/images/ball-arm.jpg",
    alt: "Close view of a basketball held at a player's side.",
    slot: "shared.detail",
    objectPosition: "center center",
  },
  ballNet: {
    src: "/images/ball-net.jpg",
    alt: "A basketball sitting in the net of an outdoor rim.",
    slot: "shared.net",
    objectPosition: "center center",
  },
  sideline: {
    src: "/images/sideline.jpg",
    alt: "A high-school team huddled together along the sideline.",
    slot: "program.camp.sideline",
    objectPosition: "center 40%",
  },
  classroom: {
    src: "/images/classroom.jpg",
    alt: "Students seated in a classroom, listening to a teacher.",
    slot: "program.schools",
    objectPosition: "center center",
  },
  youthCircle: {
    src: "/images/youth-circle.jpg",
    alt: "Young people sitting in a wide circle on an outdoor court.",
    slot: "shared.youth-circle",
    objectPosition: "center center",
  },
  runners: {
    src: "/images/runners.jpg",
    alt: "Three athletes running toward a low sun.",
    slot: "shared.motion",
    objectPosition: "center center",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
