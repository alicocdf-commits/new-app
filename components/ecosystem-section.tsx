import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Coins, TrendingUp, Users, Building, Gamepad2 } from "lucide-react"

const ecosystemApps = [
  {
    icon: Wallet,
    title: "CosmosWallet",
    description: "Secure multi-chain wallet with built-in DeFi features",
    category: "Wallet",
    color: "text-primary",
  },
  {
    icon: Coins,
    title: "DeFi Exchange",
    description: "Decentralized trading with advanced liquidity pools",
    category: "DeFi",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Yield Farming",
    description: "Maximize returns with automated yield strategies",
    category: "DeFi",
    color: "text-chart-3",
  },
  {
    icon: Users,
    title: "Social Network",
    description: "Decentralized social platform with token rewards",
    category: "Social",
    color: "text-chart-2",
  },
  {
    icon: Building,
    title: "Enterprise Suite",
    description: "Blockchain solutions for business applications",
    category: "Enterprise",
    color: "text-chart-4",
  },
  {
    icon: Gamepad2,
    title: "Gaming Platform",
    description: "Play-to-earn games with NFT integration",
    category: "Gaming",
    color: "text-chart-5",
  },
]

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Thriving{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Discover a rich ecosystem of applications, tools, and services built on our blockchain platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemApps.map((app, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <app.icon className={`h-6 w-6 ${app.color}`} />
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">{app.category}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{app.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">{app.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Explore All Applications
          </Button>
        </div>
      </div>
    </section>
  )
}
