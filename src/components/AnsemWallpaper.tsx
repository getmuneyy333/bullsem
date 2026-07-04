import Image from "next/image";
import { assetPath } from "@/lib/utils";

type Face = {
  top: string;
  left: string;
  size: number;
  rotate: number;
  opacity: number;
};

const FACES: Face[] = [
  { top: "3%", left: "2%", size: 100, rotate: -18, opacity: 0.22 },
  { top: "7%", left: "18%", size: 64, rotate: 12, opacity: 0.18 },
  { top: "5%", left: "42%", size: 72, rotate: -8, opacity: 0.2 },
  { top: "4%", left: "68%", size: 90, rotate: 15, opacity: 0.19 },
  { top: "9%", left: "86%", size: 58, rotate: -22, opacity: 0.17 },
  { top: "16%", left: "8%", size: 52, rotate: 20, opacity: 0.16 },
  { top: "20%", left: "30%", size: 80, rotate: -14, opacity: 0.21 },
  { top: "14%", left: "55%", size: 48, rotate: 8, opacity: 0.15 },
  { top: "18%", left: "76%", size: 74, rotate: -10, opacity: 0.2 },
  { top: "26%", left: "4%", size: 66, rotate: 16, opacity: 0.18 },
  { top: "30%", left: "90%", size: 84, rotate: -20, opacity: 0.19 },
  { top: "36%", left: "14%", size: 54, rotate: -6, opacity: 0.16 },
  { top: "40%", left: "40%", size: 44, rotate: 18, opacity: 0.14 },
  { top: "34%", left: "62%", size: 92, rotate: -12, opacity: 0.2 },
  { top: "38%", left: "80%", size: 50, rotate: 10, opacity: 0.15 },
  { top: "50%", left: "6%", size: 76, rotate: -16, opacity: 0.19 },
  { top: "53%", left: "24%", size: 46, rotate: 22, opacity: 0.14 },
  { top: "48%", left: "50%", size: 62, rotate: -8, opacity: 0.17 },
  { top: "52%", left: "72%", size: 70, rotate: 14, opacity: 0.18 },
  { top: "56%", left: "92%", size: 52, rotate: -24, opacity: 0.15 },
  { top: "66%", left: "10%", size: 58, rotate: 8, opacity: 0.16 },
  { top: "70%", left: "34%", size: 86, rotate: -18, opacity: 0.21 },
  { top: "64%", left: "58%", size: 48, rotate: 12, opacity: 0.14 },
  { top: "68%", left: "82%", size: 68, rotate: -10, opacity: 0.18 },
  { top: "80%", left: "4%", size: 54, rotate: 20, opacity: 0.15 },
  { top: "76%", left: "22%", size: 78, rotate: -14, opacity: 0.19 },
  { top: "82%", left: "46%", size: 50, rotate: 6, opacity: 0.14 },
  { top: "78%", left: "66%", size: 88, rotate: -16, opacity: 0.2 },
  { top: "86%", left: "86%", size: 60, rotate: 15, opacity: 0.17 },
  { top: "90%", left: "28%", size: 70, rotate: -20, opacity: 0.18 },
  { top: "92%", left: "52%", size: 42, rotate: 10, opacity: 0.13 },
  { top: "24%", left: "48%", size: 38, rotate: -5, opacity: 0.12 },
  { top: "60%", left: "38%", size: 56, rotate: 9, opacity: 0.16 },
  { top: "44%", left: "8%", size: 40, rotate: -11, opacity: 0.13 },
  { top: "72%", left: "48%", size: 36, rotate: 14, opacity: 0.12 },
];

export default function AnsemWallpaper() {
  return (
    <div className="ansem-wallpaper pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {FACES.map((face, i) => (
        <div
          key={i}
          className="ansem-face absolute"
          style={{
            top: face.top,
            left: face.left,
            width: face.size,
            height: face.size,
            opacity: face.opacity,
            transform: `rotate(${face.rotate}deg)`,
          }}
        >
          <Image
            src={assetPath("/images/bullsemtransparent.png")}
            alt=""
            width={face.size}
            height={face.size}
            className="h-full w-full object-contain"
            priority={i < 6}
          />
        </div>
      ))}
    </div>
  );
}
