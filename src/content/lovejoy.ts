/**
 * Destinations published on lovejoy.health.
 * Patient app: https://lovejoy.health/download/patient
 * The Porch is entered from the patient app or the patient portal.
 * LoveJoy does not publish a separate URL for a Mike James community.
 */
export const LOVEJOY_IOS_URL: string | null = "https://apps.apple.com/us/app/lovejoy-patient/id6535655626";
export const LOVEJOY_ANDROID_URL: string | null = "https://play.google.com/store/apps/details?id=health.lovejoy.patient";
export const LOVEJOY_WEB_URL: string | null = "https://patients.lovejoy.health/";
export const MIKE_JAMES_COMMUNITY_URL: string | null = "https://patients.lovejoy.health/";

export type AppScreen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Patient-app and Porch screens are LoveJoy example interfaces,
 * not a live view of Mike James' community.
 */
export const lovejoyScreens: {
  patientApp: AppScreen | null;
  community: AppScreen | null;
} = {
  patientApp: {
    src: "/brand/lovejoy-patient-app.png",
    alt: "Example LoveJoy patient app screen with a mood check-in, an upcoming visit, and a short list for the day.",
    width: 864,
    height: 1611,
  },
  community: {
    src: "/brand/lovejoy-porch.png",
    alt: "The Porch in the LoveJoy patient app, where people join communities. The circles on screen are sample communities.",
    width: 340,
    height: 800,
  },
};
