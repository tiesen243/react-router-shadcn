import { TerminalIcon } from 'lucide-react'

import type { Route } from './+types/_index'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
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

        <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3">
          {variants
            .filter((v) => v !== 'outline')
            .map((v) => (
              <Alert key={v} variant={v}>
                <TerminalIcon className="h-4 w-4" />
                <AlertTitle className="capitalize">{v}</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            ))}
        </div>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Dialog
        </Typography>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Dont lick me</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Aspect ratio
        </Typography>

        <div className="w-1/3">
          <AspectRatio ratio={16 / 9} className="bg-muted"></AspectRatio>
        </div>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Avatar
        </Typography>

        <Avatar>
          <AvatarImage src="https://github.com/tiesen243.png" />
          <AvatarFallback>Ti</AvatarFallback>
        </Avatar>

        <AvatarGroup>
          {Array.from({ length: 10 }).map((_, i) => (
            <Avatar key={i}>
              <AvatarImage src="https://github.com/tiesen243.png" />
              <AvatarFallback>Ti</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
      </section>

      <section className="my-4 flex flex-wrap items-center gap-4">
        <Typography variant="h2" className="basis-full">
          Badge
        </Typography>

        {variants.map((v) => (
          <Badge key={v} variant={v} rounded="full">
            {v}
          </Badge>
        ))}
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

const variants = [
  'default',
  'secondary',
  'success',
  'info',
  'warning',
  'destructive',
  'outline',
] as const
