import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Globe, Code, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CryptoBackground } from "./crypto-background"

const features = [
  {
    icon: Zap,
    title: "دوره ساخت شبکه در بلاکچین",
    description: "آموزش کامل ساخت شبکه بلاکچین از صفر تا صد با جدیدترین تکنولوژی‌ها",
    color: "text-yellow-400",
  },
  {
    icon: Shield,
    title: "دوره امنیت در وب 3",
    description: "یادگیری اصول امنیت در دنیای وب 3 و محافظت از دارایی‌های دیجیتال",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "دوره ساخت پل بین شبکه های بلاکچین",
    description: "آموزش ساخت پل‌های ارتباطی بین شبکه‌های مختلف بلاکچین",
    color: "text-accent",
  },
  {
    icon: Code,
    title: "دوره جامع برنامه نویسی در وب 3",
    description: "یادگیری برنامه‌نویسی در اکوسیستم وب 3 با ابزارها و فریمورک‌های مدرن",
    color: "text-chart-3",
  },
  {
    icon: Layers,
    title: "آموزش جامع NFT",
    description: "آموزش کامل ساخت، فروش و مدیریت NFT در بازارهای مختلف",
    color: "text-chart-2",
  },
  {
    icon: Code,
    title: "دوره آموزش جامع سالیدیتی",
    description: "یادگیری زبان برنامه‌نویسی سالیدیتی برای توسعه قراردادهای هوشمند",
    color: "text-chart-4",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <CryptoBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            دوره جامع وب 3{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ویدا آکادمی</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:-translate-y-2 group rounded-2xl"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 rounded-xl">
                  مشاهده توضیحات دوره
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
