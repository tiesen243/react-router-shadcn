import { TerminalIcon } from 'lucide-react'

import type { Route } from './+types/_index'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const loader = (_: Route.LoaderArgs) => {
  return {
    message: 'React router - Shadcn',
  }
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container py-4">
      <Typography variant="h1">{loaderData.message}</Typography>

      <section className="my-4 space-y-4">
        <Typography variant="h2" className="basis-full">
          Accordion
        </Typography>

        <div className="grid w-full gap-4 md:grid-cols-2">
          <Accordion type="single" className="w-full" collapsible>
            {Array.from({ length: 3 }).map((_, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>Accordion {i}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="multiple" className="w-full">
            {Array.from({ length: 3 }).map((_, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>Accordion {i}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Alert
        </Typography>

        <Alert>
          <TerminalIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Button
        </Typography>
        {(
          ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'] as const
        ).map((v) => (
          <Button key={v} variant={v}>
            Lick me
          </Button>
        ))}
      </section>
    </main>
  )
}
