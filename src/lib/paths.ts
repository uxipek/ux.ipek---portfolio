// The Turkish UX audit page lives at a prefix-less, Turkish URL (/ux-analiz).
// Everything else on the site keeps the /:lang/... shape, so this is the one
// place that knows about the exception.
export const TR_UX_AUDIT_PATH = '/ux-analiz';

export function uxAuditPath(lang: 'en' | 'tr') {
  return lang === 'tr' ? TR_UX_AUDIT_PATH : '/en/ux-audit';
}

/** Maps the internal "/:lang/..." shape to the public URL shape. */
export function toPublicPath(path: string) {
  return path === '/tr/ux-audit' ? TR_UX_AUDIT_PATH : path;
}

/** Maps a public URL back to the internal "/:lang/..." shape. */
export function toInternalPath(path: string) {
  return path === TR_UX_AUDIT_PATH ? '/tr/ux-audit' : path;
}
