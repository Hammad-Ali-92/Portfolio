import React, { Suspense } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";
import Starfield from "@/components/ui/starfield";
import { ThemeProvider } from "@/lib/theme";
import { useGoogleAnalytics } from "@/lib/analytics";

const Index: React.FC = () => {
  useGoogleAnalytics();

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Space-themed background with animated starfield */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Base space gradient - white in light mode, dark in dark mode */}
          <div className="absolute inset-0 space-gradient" />
          
          {/* Animated starfield - black stars in light mode, white in dark mode */}
          <Starfield className="opacity-80" starCount={200} />
          
          {/* Subtle overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10" />
          
          {/* Additional depth layers */}
          <div className="absolute inset-0 opacity-[0.02] [background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCQoLDA0OILzIAAABrklEQVQ4y4WTu27DMAxFBRt1W6Fuk7lAti6ZAnTuZiBrh8zZ6y1snaGAtiCt/v8HUpRkS0iGAQP28eXlkSIfGKEBjETQXyNeP+COgTW0xD68vD3OL8//5nUcxTXj3CMbVHRogQvnXmXjLadteWTPiXwmsHEWWDniAG+lNWGXZyf4oOzxLgNvyF7k6dDqXoPBOQi0gD0Xz7IJOh1uGBNugZ0jzEGwJvD9h9+gQPHZEU4RuP8PWER6AjcXEJ5HBIu7RxBhQYCFP4KYdQQJB8f4jCDx+oq/RZDKJ4J3BH4qjOAswTPCZGH2CIJF4BZBcnyCMAeCnuBbBGG2ixB2EZQbIwGhIghLAm+3iFsE8RYhty9TAEKHcEcQ2gh2EbwjvEeQtxH4jrD3COohwjPCZ4LwgDDNhsD3CHyLkMpHBDUTRPuMwAQ/RBBHguLGEaEiyIEgPyN8j/Atwmg2BBURdPuQhT9EKEtCfkZYRBgJlJcEFRGKjcBjhFkQVPuQhdURzDKCaxHsKJVHhLGJYGuCHQgsIOiM4F0T+G0EvScUBFLYp6Eu8/FwBRVy/wLwzlkk/YQP+gAAAABJRU5ErkJggg==)]" />
        </div>

        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="space-y-8 md:space-y-12">
            <About />
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              <Contact />
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;