import {
  BellIcon,
  HelpCircleIcon,
  LogOutIcon,
  SettingsIcon,
  TerminalIcon,
  UserIcon,
} from 'lucide-react'

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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'

export const loader = (_: Route.LoaderArgs) => {
  return {
    message: 'React router - Shadcn',
    title: 'Create New Post',
    description: 'Share your thoughts with the community',
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
            <Button variant="outline">Alert Dialog</Button>
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

        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Dialog</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{loaderData.title}</DialogTitle>
              <DialogDescription>{loaderData.description}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <Form id="dialog" />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Publish Post</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Drawer</Button>
          </DrawerTrigger>

          <DrawerContent>
            <div className="mx-auto w-full max-w-md">
              <DrawerHeader>
                <DrawerTitle>{loaderData.title}</DrawerTitle>
                <DrawerDescription>{loaderData.description}</DrawerDescription>
              </DrawerHeader>

              <div className="grid gap-4 p-4">
                <Form id="drawer" />
              </div>

              <DrawerFooter>
                <Button>Publish Post</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Dropdown Menu</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Tiesen</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {menuItems.map((i, idx) => (
                <>
                  {idx === 3 && <DropdownMenuSeparator />}
                  <DropdownMenuItem key={i.label}>
                    <i.icon className="mr-2 size-4" />
                    {i.label}
                  </DropdownMenuItem>
                </>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet</Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>{loaderData.title}</SheetTitle>
              <SheetDescription>{loaderData.description}</SheetDescription>
            </SheetHeader>

            <div className="grid gap-4 px-4">
              <Form id="sheet" />
            </div>

            <SheetFooter className="gap-4">
              <Button>Publish Post</Button>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
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

        {([...variants, 'ghost', 'link'] as const).map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </section>

      <section className="my-4 flex flex-wrap items-start gap-4">
        <Typography variant="h2" className="basis-full">
          Card
        </Typography>

        <Card className="min-w-1/3">
          <CardHeader>
            <CardTitle>{loaderData.title}</CardTitle>
            <CardDescription>{loaderData.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Form id="card" />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Publish Post</Button>
          </CardFooter>
        </Card>

        {(['default', 'pressable'] as const).map((v) => (
          <Card key={v} variant={v}>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
              <CardDescription>Get unlimited access to all features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>✓ Unlimited projects</p>
              <p>✓ Priority support</p>
              <p>✓ Advanced analytics</p>
              <p>✓ Custom integrations</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
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

const Form: React.FC<{ id: string }> = ({ id }) => (
  <>
    <Label htmlFor={`${id}_title`} className="flex flex-col gap-2">
      Title
      <Input
        id={`${id}_title`}
        name={`${id}_title`}
        placeholder="Enter a descriptive title"
      />
    </Label>

    <Label htmlFor={`${id}_content`} className="flex flex-col gap-2">
      Content
      <Textarea
        id={`${id}_content`}
        name={`${id}_content`}
        placeholder="Write your post content here..."
        className="min-h-[120px]"
      />
    </Label>

    <Label htmlFor={`${id}_category`} className="flex flex-col gap-2">
      Category
      <Select name={`${id}_category`}>
        <SelectTrigger id={`${id}_category`}>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((c) => (
            <SelectItem key={c.value} value={c.value}>
              {c.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>

    <Label htmlFor={`${id}_public`} className="flex items-center gap-2">
      <Checkbox id={`${id}_public`} name={`${id}_public`} defaultChecked />
      <div className="space-y-1">
        <p className="font-medium">Make public</p>
        <p className="text-muted-foreground text-sm">
          This post will be visible to all community members
        </p>
      </div>
    </Label>

    <Label htmlFor={`${id}_notify`} className="flex items-center gap-2">
      <Checkbox id={`${id}_notify`} name={`${id}_notify`} />
      <div className="space-y-1">
        <p className="font-medium">Send notifications</p>
        <p className="text-muted-foreground text-sm">
          Notify followers when this post is published
        </p>
      </div>
    </Label>

    <Label htmlFor={`${id}_featured`} className="flex items-center gap-2">
      <Switch id={`${id}_featured`} name={`${id}_featured`} />
      <div className="space-y-1">
        <p className="font-medium">Featured Post</p>
        <p className="text-muted-foreground text-sm">
          Show this post at the top of the feed
        </p>
      </div>
    </Label>
  </>
)

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
]

const menuItems = [
  { icon: UserIcon, label: 'View Profile' },
  { icon: SettingsIcon, label: 'Settings' },
  { icon: BellIcon, label: 'Notifications' },
  { icon: HelpCircleIcon, label: 'Help & Support' },
  { icon: LogOutIcon, label: 'Log Out' },
]
