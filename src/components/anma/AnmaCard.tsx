import { useEffect, useRef, useState } from "react";
import { Download, Share2, Check, Moon, Sun } from "lucide-react";
import { Button } from "../republic/Button";
import { anmaMessages, cardBlob, drawAnmaCard, limitMessage, limitName, type AnmaValue, type CardFormat, type CardTheme } from "../../lib/anma-card";

export function AnmaCard() {
  const [value, setValue] = useState<AnmaValue>("Saygı");
  const [message, setMessage] = useState<string>(anmaMessages.Saygı);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [format, setFormat] = useState<CardFormat>("story");
  const [theme, setTheme] = useState<CardTheme>("night");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let active = true;
    const temporary = document.createElement("canvas");
    void drawAnmaCard(temporary, { name, profession, message, value, format, theme }).then(() => {
      if (!active || !canvas.current) return;
      canvas.current.width = temporary.width; canvas.current.height = temporary.height;
      canvas.current.getContext("2d")?.drawImage(temporary, 0, 0);
    }).catch(() => { if (active) setStatus("Kart önizlemesi yüklenemedi."); });
    return () => { active = false; };
  }, [name, profession, message, value, format, theme]);

  const choose = (selected: AnmaValue) => { setValue(selected); setMessage(anmaMessages[selected]); };

  const exportCard = async (share: boolean) => {
    setBusy(true); setStatus("");
    try {
      const output = document.createElement("canvas");
      await drawAnmaCard(output, { name, profession, message, value, format, theme });
      const blob = await cardBlob(output);
      const filename = `10-kasim-${format === "story" ? "hikaye" : "kare"}.png`;
      const file = new File([blob], filename, { type: "image/png" });
      if (share && navigator.canShare?.({ files: [file] }) && navigator.share) {
        await navigator.share({ files: [file], title: "10 Kasım — Saygı ve özlemle" });
        setStatus("Kart paylaşıldı.");
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = filename; a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        setStatus(share ? "Bu cihaz dosya paylaşımını desteklemiyor; kart indirildi." : "Kart indirildi.");
      }
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) setStatus("Kart oluşturulamadı. Lütfen tekrar deneyin.");
    } finally { setBusy(false); }
  };

  return (
    <section id="anma-karti" className="r-section border-t r-border r-soft">
      <div className="r-page-width">
        <p className="r-section-label">ANMA KARTI</p>
        <h2 className="r-section-title">Anmak için<br /><span className="italic">kendi kartını hazırla.</span></h2>
        <p className="mt-6 max-w-2xl r-muted">Bir söz seç, istersen kendi cümleni yaz. Instagram hikâyesi ya da gönderisi için hazır bir kart oluştur.</p>
        <div role="group" aria-label="Anma sözü" className="mt-9 flex flex-wrap gap-3">
          {(Object.keys(anmaMessages) as AnmaValue[]).map(option => <Button key={option} size="lg" variant={value === option ? "default" : "outline"} aria-pressed={value === option} onClick={() => choose(option)}>{value === option && <Check aria-hidden />}{option}</Button>)}
        </div>
        <div className="mt-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
          <form onSubmit={event => event.preventDefault()} className="min-w-0 space-y-7">
            <div><label htmlFor="anma-name" className="mb-2 block font-semibold">Adın <span className="font-normal r-muted">(isteğe bağlı)</span></label><input id="anma-name" value={name} maxLength={40} onChange={e => setName(limitName(e.target.value))} className="r-field h-12" autoComplete="off" /></div>
            <div><label htmlFor="anma-profession" className="mb-2 block font-semibold">Mesleğin <span className="font-normal r-muted">(isteğe bağlı)</span></label><input id="anma-profession" value={profession} maxLength={40} onChange={e => setProfession(limitName(e.target.value))} className="r-field h-12" autoComplete="off" /></div>
            <div><label htmlFor="anma-message" className="mb-2 block font-semibold">Mesajın</label><textarea id="anma-message" value={message} maxLength={140} onChange={e => setMessage(limitMessage(e.target.value))} className="r-field min-h-32" aria-describedby="anma-count" /><p id="anma-count" className="mt-1 text-right text-small r-muted">{Array.from(message).length} / 140</p></div>
            <fieldset><legend className="mb-3 font-semibold">Format</legend><div className="flex flex-wrap gap-2">{(["story", "square"] as const).map(f => <Button key={f} variant={format === f ? "default" : "outline"} aria-pressed={format === f} onClick={() => setFormat(f)}>{f === "story" ? "Hikâye · 1080 × 1920" : "Gönderi · 1080 × 1080"}</Button>)}</div></fieldset>
            <fieldset><legend className="mb-3 font-semibold">Tema</legend><div className="flex gap-2"><Button variant={theme === "night" ? "default" : "outline"} aria-pressed={theme === "night"} onClick={() => setTheme("night")}><Moon aria-hidden />Siyah</Button><Button variant={theme === "paper" ? "default" : "outline"} aria-pressed={theme === "paper"} onClick={() => setTheme("paper")}><Sun aria-hidden />Kâğıt</Button></div></fieldset>
            <p className="text-small r-muted">Bilgilerin sunucuya gönderilmez; kartın bu cihazda oluşturulur.</p>
            <div className="flex flex-wrap gap-3"><Button size="lg" disabled={busy} onClick={() => void exportCard(false)}><Download aria-hidden />{busy ? "Hazırlanıyor…" : "Kartı indir"}</Button><Button size="lg" variant="outline" disabled={busy} onClick={() => void exportCard(true)}><Share2 aria-hidden />Paylaş</Button></div>
            <p role="status" className="min-h-6 text-small r-muted">{status}</p>
          </form>
          <div className="order-first min-w-0 md:order-none"><canvas ref={canvas} width={1080} height={1920} role="img" aria-label={`Anma kartı önizlemesi: ${value}. ${message}${name ? ` — ${name}` : ""}${profession ? `, ${profession}` : ""}`} className="r-souvenir-preview" /><p className="mt-4 text-center text-small r-muted">{format === "story" ? "1080 × 1920 px" : "1080 × 1080 px"} · {theme === "night" ? "Siyah" : "Kâğıt"}</p></div>
        </div>
      </div>
    </section>
  );
}
