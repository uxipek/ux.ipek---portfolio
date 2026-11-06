// Mini UX analizi başvurularını Google Sheet'e satır olarak ekler.
// Kurulum: tabloda Extensions → Apps Script → bu kodu yapıştır, SECRET'ı değiştir,
// Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
// Çıkan /exec adresi UX_AUDIT_WEBHOOK_URL, SECRET değeri UX_AUDIT_WEBHOOK_SECRET olur.
const SECRET = "BURAYA_UZUN_RASTGELE_BIR_DEGER";
const SPREADSHEET_ID = "1_GdnUAS76E8qq9WyStlzpzLIHaMGyo9Kow7x---kNBg";
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, reason: "secret" });

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
