import { MetaHelper } from "./components/MetaHelper";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { LanguageProvider, useLanguage } from "./components/layout/LanguageProvider";
import { Lock } from "lucide-react";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ServicesPage = lazy(() => import("./pages/Services").then(module => ({ default: module.ServicesPage })));
const UXAuditPage = lazy(() => import("./pages/UXAudit").then(module => ({ default: module.UXAuditPage })));
const ContactPage = lazy(() => import("./pages/Contact").then(module => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import("./pages/About").then(module => ({ default: module.AboutPage })));
const ProcessPage = lazy(() => import("./pages/Process").then(module => ({ default: module.ProcessPage })));
const PortfolioPage = lazy(() => import("./pages/Portfolio").then(module => ({ default: module.PortfolioPage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetail").then(module => ({ default: module.ProjectDetailPage })));

const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy").then(module => ({ default: module.PrivacyPolicyPage })));
const KVKKPage = lazy(() => import("./pages/KVKK").then(module => ({ default: module.KVKKPage })));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicy").then(module => ({ default: module.CookiePolicyPage })));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUse").then(module => ({ default: module.TermsOfUsePage })));
const NotFoundPage = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFoundPage })));

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-dark/5 flex items-center justify-center mb-6 text-dark/40">
        <Lock className="w-8 h-8" />
      </div>
      <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-dark mb-4">Coming Soon</h1>
      <p className="text-dark/60 max-w-md mx-auto">This area is currently under development. Check back later for updates on our new client dashboard and subscription services.</p>
    </div>
  );
}

function PageWrapper({ component: Component }: { component: any }) {
  const { lang } = useLanguage();
  return <Component lang={lang} />;
}

function AppLayout() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-base font-sans text-dark/90 selection:bg-pink/30 flex flex-col">
      <Nav lang={lang} setLang={setLang} />
      <main className="pt-20 flex-grow">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-dark/40"><Logo className="h-8 w-auto animate-pulse" /></div>}>
          <Routes>
            <Route path="/:lang" element={<PageWrapper component={Home} />} />
            <Route path="/:lang/services" element={<PageWrapper component={ServicesPage} />} />
            <Route path="/:lang/ux-audit" element={<PageWrapper component={UXAuditPage} />} />
            <Route path="/:lang/process" element={<PageWrapper component={ProcessPage} />} />
            <Route path="/:lang/contact" element={<PageWrapper component={ContactPage} />} />
            <Route path="/:lang/about" element={<PageWrapper component={AboutPage} />} />
            <Route path="/:lang/portfolio" element={<PageWrapper component={PortfolioPage} />} />
            <Route path="/:lang/projects/:id" element={<PageWrapper component={ProjectDetailPage} />} />
            
            <Route path="/:lang/dashboard" element={<ComingSoon />} />
            <Route path="/:lang/reports" element={<ComingSoon />} />
            <Route path="/:lang/monthly-ux" element={<ComingSoon />} />
            
            <Route path="/:lang/privacy-policy" element={<PageWrapper component={PrivacyPolicyPage} />} />
            <Route path="/:lang/kvkk" element={<PageWrapper component={KVKKPage} />} />
            <Route path="/:lang/cookie-policy" element={<PageWrapper component={CookiePolicyPage} />} />
            <Route path="/:lang/terms-of-use" element={<PageWrapper component={TermsOfUsePage} />} />
            
            <Route path="/:lang/*" element={<PageWrapper component={NotFoundPage} />} />
            <Route path="*" element={<PageWrapper component={NotFoundPage} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer lang={lang} />
      <CookieBanner lang={lang} />
      <MetaHelper lang={lang} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
