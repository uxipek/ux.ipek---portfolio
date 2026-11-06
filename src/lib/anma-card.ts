import { dimensions, limitMessage, limitName, wrapText, cardBlob, type CardFormat, type CardTheme } from "./republic-souvenir";

export { limitMessage, limitName, cardBlob };
export type { CardFormat, CardTheme };

export const anmaMessages = {
  Saygı: "Cumhuriyetin kurucusunu saygıyla anıyorum.",
  Minnet: "Bize bıraktığı Cumhuriyet için minnettarım.",
  Özlem: "Özlemle, sevgiyle ve saygıyla anıyorum.",
  Vefa: "Onu anmak, ilkelerini yaşatmakla başlar.",
};
export type AnmaValue = keyof typeof anmaMessages;

export async function drawAnmaCard(canvas: HTMLCanvasElement, data: { name: string; profession: string; message: string; value: AnmaValue; format: CardFormat; theme: CardTheme }) {
  await Promise.all([document.fonts.load('600 72px "Playfair Display"'), document.fonts.load('400 36px "DM Sans"')]);
  await document.fonts.ready;
  const [width, height] = dimensions[data.format];
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Kart oluşturulamadı.");
  const css = getComputedStyle(document.documentElement);
  const color = (token: string) => css.getPropertyValue(token).trim();
  const night = data.theme === "night";
  const background = color(night ? "--anma-black" : "--anma-paper");
  const ink = color(night ? "--anma-paper" : "--anma-black");
  const gold = color("--anma-gold");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = ink;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, width - 72, height - 72);
  ctx.globalAlpha = 1;
  ctx.fillStyle = gold;
  ctx.fillRect(80, 85, 64, 6);
  const text = (value: string, x: number, y: number, size: number, serif = false, italic = false) => {
    ctx.font = `${italic ? "italic " : ""}${serif ? "600" : "400"} ${size}px "${serif ? "Playfair Display" : "DM Sans"}"`;
    ctx.fillStyle = ink;
    ctx.fillText(value, x, y);
  };
  const story = data.format === "story";
  text("10 KASIM", 80, 158, 36);
  text("Ebediyete intikalinin 88. yılı", 80, 213, 30);
  text("09.05", 65, story ? 700 : 470, story ? 300 : 220, true);
  const valueY = story ? 960 : 615;
  text(data.value, 80, valueY, story ? 88 : 62, true, true);
  const fitLines = (value: string, initial: number, maxHeight: number) => {
    let size = initial;
    let lines: string[] = [];
    while (size >= 20) {
      ctx.font = `400 ${size}px "DM Sans"`;
      lines = wrapText(value, t => ctx.measureText(t).width, 900);
      if (lines.length * size * 1.4 <= maxHeight) break;
      size -= 2;
    }
    return { size, lines };
  };
  const message = fitLines(limitMessage(data.message), story ? 48 : 32, story ? 320 : 110);
  message.lines.forEach((line, i) => text(line.trim(), 80, valueY + 82 + i * message.size * 1.4, message.size));
  const name = fitLines(limitName(data.name), 32, 60);
  name.lines.forEach((line, i) => text(line.trim(), 80, height - 275 + i * name.size * 1.4, name.size));
  const profession = fitLines(limitName(data.profession), 26, 40);
  const professionY = data.name.trim() ? height - 220 : height - 275;
  ctx.globalAlpha = 0.75;
  profession.lines.forEach((line, i) => text(line.trim(), 80, professionY + i * profession.size * 1.4, profession.size));
  ctx.globalAlpha = 1;
  ctx.strokeStyle = gold; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(80, height - 180); ctx.lineTo(1000, height - 180); ctx.stroke();
  text("UXipek — Design with kindness", 80, height - 120, 29);
  text("www.uxipek.com", 80, height - 76, 25);
}
