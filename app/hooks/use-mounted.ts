import * as React from 'react'

export const useMounted = () => {
  const [isMounted, setMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return isMounted
}
