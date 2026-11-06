/**
 * Geçici kampanya anahtarları.
 *
 * 29 Ekim Cumhuriyet Bayramı içeriği (anasayfa bandı, açılır pencere ve
 * /:lang/29-ekim sayfası) kapalıyken sitede görünmez; kod silinmedi. Tekrar
 * göstermek için true yap (ve public/sitemap.xml'deki yorum içindeki 29-ekim
 * kayıtlarını geri aç).
 */
export const SHOW_REPUBLIC_CAMPAIGN = false;

/**
 * 10 Kasım Atatürk'ü Anma Günü: anasayfa bandı yalnızca 10 Kasım'da, anma
 * sayfası (/:lang/10-kasim) Atatürk Haftası boyunca (10-16 Kasım) açıktır.
 * Tarih, ziyaretçinin saatine değil İstanbul saatine göre belirlenir.
 * Geliştirme sunucusunda ve *.vercel.app önizleme adreslerinde ?anma=1 ile önizlenebilir
 * (www.uxipek.com'da çalışmaz).
 */
function istanbulMonthDay(): { month: number; day: number } {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Istanbul", month: "numeric", day: "numeric" }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find(p => p.type === type)?.value);
  return { month: get("month"), day: get("day") };
}

const previewAnma = () =>
  typeof window !== "undefined" &&
  (import.meta.env.DEV || window.location.hostname.endsWith(".vercel.app")) &&
  new URLSearchParams(window.location.search).has("anma");

export const showAnmaBanner = (): boolean => {
  if (previewAnma()) return true;
  const { month, day } = istanbulMonthDay();
  return month === 11 && day === 10;
};

export const showAnmaPage = (): boolean => {
  if (previewAnma()) return true;
  const { month, day } = istanbulMonthDay();
  return month === 11 && day >= 10 && day <= 16;
};
