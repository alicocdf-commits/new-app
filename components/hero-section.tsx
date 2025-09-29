import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { CryptoBackground } from "./crypto-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      <CryptoBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 ltr:left-10 rtl:right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl network-node"></div>
        <div
          className="absolute top-40 ltr:right-20 rtl:left-20 w-24 h-24 bg-accent/20 rounded-full blur-lg network-node"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 ltr:left-1/4 rtl:right-1/4 w-40 h-40 bg-chart-3/20 rounded-full blur-2xl network-node"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 ltr:right-1/3 rtl:left-1/3 w-28 h-28 bg-chart-2/20 rounded-full blur-xl network-node"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Network lines effect */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <g className="network-animation">
            <line x1="100" y1="200" x2="300" y2="150" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="300" y1="150" x2="500" y2="250" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="500" y1="250" x2="700" y2="180" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="700" y1="180" x2="900" y2="220" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="200" y1="400" x2="400" y2="350" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="400" y1="350" x2="600" y2="450" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="600" y1="450" x2="800" y2="380" stroke="url(#lineGradient)" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
          سفری به آینده{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
            ویدا
          </span>{" "}
          آکادمی
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-relaxed">
          لذت سفر به اعماق آینده دنیای تکنولوژی را با ویدا تجربه کنید
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            شروع سفر
            <ArrowRight className="ltr:ml-2 rtl:mr-2 h-5 w-5 rtl:rotate-180" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg bg-transparent rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <Play className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
            ورود به آموزشگاه
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">فراغ التحصیلان</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">$50B+</div>
            <div className="text-muted-foreground">سرمایه ویداولت</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-chart-3 mb-2">1M+</div>
            <div className="text-muted-foreground">همسفران ما</div>
          </div>
        </div>
      </div>
    </section>
  )
}
