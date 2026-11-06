// Mini UX analizi başvurularını (Sheet1) ve iletişim formu mesajlarını (Iletisim) Google Sheet'e satır olarak ekler.
// Kurulum: tabloda Extensions → Apps Script → bu kodu yapıştır, SECRET'ı değiştir,
// Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
// Çıkan /exec adresi UX_AUDIT_WEBHOOK_URL, SECRET değeri UX_AUDIT_WEBHOOK_SECRET olur.
const SECRET = "BURAYA_UZUN_RASTGELE_BIR_DEGER";
const SPREADSHEET_ID = "1_GdnUAS76E8qq9WyStlzpzLIHaMGyo9Kow7x---kNBg";
const SHEET_NAME = "Sheet1";
const CONTACT_SHEET_NAME = "Iletisim";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, reason: "secret" });

    if (data.type === "contact") return addContact(data);

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) return json({ ok: false, reason: "sheet" });
    if (sheet.getLastRow() === 0) sheet.appendRow(["Gönderim Tarihi", "Website"]);
    sheet.appendRow([data.submittedAt, data.websiteUrl]);
    return json({ ok: true });
  } catch (err) {
    console.error(String(err));
    return json({ ok: false, reason: "exception" });
  }
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

// Sheets "=", "+", "-", "@" ile başlayan metni formül sayar; başına ' koyarak düz metin kalmasını sağlar.
function plain(value) {
  const text = String(value == null ? "" : value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function addContact(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(CONTACT_SHEET_NAME) || ss.insertSheet(CONTACT_SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Gönderim Tarihi", "Ad", "E-posta", "Şirket", "Website", "Proje Türü", "Bütçe", "Pazarlama İzni", "Mesaj"]);
  }
  sheet.appendRow([
    data.submittedAt,
    plain(data.name),
    plain(data.email),
    plain(data.company),
    plain(data.website),
    plain(data.projectType),
    plain(data.budget),
    data.marketingConsent ? "Evet" : "Hayır",
    plain(data.message),
  ]);
  return json({ ok: true });
}
