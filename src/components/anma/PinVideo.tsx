import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Button } from "../republic/Button";

const PIN_ID = "1068690186577207244";
const PIN_URL = `https://www.pinterest.com/pin/${PIN_ID}/`;

// Pinterest's own embed. It is only loaded after the visitor asks for it, so no
// third-party cookies or requests happen on page load.
export function PinVideo() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section id="video" className="r-section border-t r-border">
      <div className="r-page-width grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="r-section-label">VİDEO</p>
          <h2 className="r-section-title">Anma videosu.</h2>
          <p className="r-muted mt-6 max-w-md">Video Pinterest üzerinden gösterilir; oynatmak için yükleyebilirsin. Yüklendiğinde Pinterest’in kendi oynatıcısı ve çerezleri devreye girer.</p>
          <a href={PIN_URL} target="_blank" rel="noopener noreferrer" className="r-muted r-tap mt-3 gap-2 text-small underline">Pinterest’te aç<ArrowUpRight size={16} aria-hidden /></a>
        </div>
        <div className="mx-auto w-full max-w-[450px]">
          {loaded ? (
            <iframe src={`https://assets.pinterest.com/ext/embed.html?id=${PIN_ID}&src=oembed`} title="10 Kasım anma videosu (Pinterest)" width={450} height={899} loading="lazy" allowFullScreen className="block h-[899px] max-h-[80vh] w-full border-0" />
          ) : (
            <div className="r-muted-bg flex aspect-[9/16] max-h-[80vh] w-full items-center justify-center border r-border">
              <Button size="lg" variant="outline" onClick={() => setLoaded(true)}><Play aria-hidden />Videoyu yükle</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
