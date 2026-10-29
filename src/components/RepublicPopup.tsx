import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

const STORAGE_KEY = "republic-29-ekim-2026-popup";

function seen() {
  try { return localStorage.getItem(STORAGE_KEY) === "1"; } catch { return false; }
}
function markSeen() {
  try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* storage unavailable */ }
}

export function RepublicPopup({ lang }: { lang: "en" | "tr" }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (seen()) return;
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => { markSeen(); setOpen(false); };

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); previous?.focus?.(); };
  }, [open]);

  return (
    <MotionConfig reducedMotion="user">
    <AnimatePresence>
    {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-primary/60 p-4 backdrop-blur-sm" onClick={close}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="republic-popup-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[2rem] bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} onClick={close} aria-label={lang === "en" ? "Close" : "Kapat"} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-text-primary shadow hover:bg-white">
          <X className="h-5 w-5" aria-hidden />
        </button>
        <img src="/images/ataturk-portre.jpg" alt="" width={736} height={920} className="h-56 w-full object-cover object-top" />
        <div className="p-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-transformation">
            {lang === "en" ? "29 October · 103rd year" : "29 Ekim · 103. yıl"}
          </p>
          <h2 id="republic-popup-title" className="mt-3 text-3xl font-medium tracking-tight text-text-primary">
            Cumhuriyet Bayramımız kutlu olsun.
          </h2>
          <p className="mt-4 text-text-primary/70">
            {lang === "en"
              ? "A digital gift from UXipek for the Republic's 103rd year: explore the story and create your own keepsake card. (Page in Turkish.)"
              : "Cumhuriyet’in 103. yılına UXipek’ten dijital bir armağan: hikâyeyi keşfet ve sana özel hatıra kartını oluştur."}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to={`/${lang}/29-ekim`} onClick={close} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-transformation px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-transformation/20 hover:bg-brand-transformation/90">
              {lang === "en" ? "Visit the page" : "Sayfayı keşfet"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <button onClick={close} className="text-sm font-medium text-text-primary/60 hover:text-text-primary">
              {lang === "en" ? "Maybe later" : "Sonra"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>}
    </AnimatePresence>
    </MotionConfig>
  );
}
