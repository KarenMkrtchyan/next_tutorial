import { Inter, Lusitana } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"], // ✅ Add this line
  weight: "400",
  preload: false,
});
