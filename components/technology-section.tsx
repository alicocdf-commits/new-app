import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Network, Cpu } from "lucide-react"

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Revolutionary{" "}
              <span className="bg-gradient-to-r from-accent to-chart-3 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Our innovative consensus mechanism and advanced cryptographic protocols deliver unprecedented performance
              while maintaining the highest security standards.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quantum-Resistant Cryptography</h3>
                  <p className="text-muted-foreground">
                    Future-proof security with post-quantum cryptographic algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Network className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adaptive Consensus</h3>
                  <p className="text-muted-foreground">
                    Dynamic consensus that adjusts to network conditions in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Parallel Processing</h3>
                  <p className="text-muted-foreground">Multi-threaded transaction processing for maximum throughput.</p>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Technical Whitepaper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <Card className="relative bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-card-foreground">
                  Network Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50,000</div>
                    <div className="text-sm text-muted-foreground">TPS Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">0.3s</div>
                    <div className="text-sm text-muted-foreground">Block Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-chart-3 mb-2">$0.001</div>
                    <div className="text-sm text-muted-foreground">Avg Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-chart-2 mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Network Activity</span>
                    <span className="text-sm font-medium text-primary">Live</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-4/5 network-animation"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
