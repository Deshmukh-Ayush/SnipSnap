import Link from "next/link";
import { ArrowRight, Zap, Shield, Smartphone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1">
              <Video className="h-6 w-6 text-primary-foreground" />
            </div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              SnipSnap
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-32 md:pt-32">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              New: Smart Compression Algorithm
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6">
              Video Compression, <br className="hidden md:inline" />
              Reimagined.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Reduce file size by up to 90% without losing visual quality.
              The intelligent way to manage your video library.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-base">
                  Start Compressing Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-muted/30 border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SnipSnap?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for creators, developers, and everyone in between.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Process gigabytes of video in seconds with our distributed cloud infrastructure."
                },
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  description: "Your content is encrypted at rest and in transit. You own your data, always."
                },
                {
                  icon: Smartphone,
                  title: "Mobile Optimized",
                  description: "Perfect playback on any device. We handle the transcoding formats for you."
                }
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary/90 p-1">
              <Video className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">SnipSnap</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SnipSnap. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
