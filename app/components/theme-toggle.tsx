import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useMounted } from '@/hooks/use-mounted'

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const isMounted = useMounted()

  if (!isMounted)
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 bottom-4 animate-pulse"
      />
    )

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed right-4 bottom-4"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
