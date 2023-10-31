import { ManorCalculatorByLevel } from "@/components/manor-calculator/level"
import { ManorCalculatorByMaterial } from "@/components/manor-calculator/material"
import { ManorCalculatorProvider } from "@/components/manor-calculator/useManorCalculator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="container pt-8 text-left sm:max-w-2xl">
      <section className="space-y-4 pb-8">
        <h1 className="cursor-default text-center text-2xl font-semibold tracking-tight text-muted-foreground">
          Manor Calculator
        </h1>

        <ManorCalculatorProvider>
          <Tabs defaultValue="level" className="flex flex-col items-center">
            <TabsList>
              <TabsTrigger value="level">Level</TabsTrigger>
              <TabsTrigger value="material">Material</TabsTrigger>
            </TabsList>
            <TabsContent value="level">
              <ManorCalculatorByLevel />
            </TabsContent>
            <TabsContent value="material">
              <ManorCalculatorByMaterial />
            </TabsContent>
          </Tabs>
        </ManorCalculatorProvider>
      </section>
    </main>
  )
}
