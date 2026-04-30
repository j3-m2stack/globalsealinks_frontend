import { DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});
export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});