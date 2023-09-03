import { Box, Button } from '@mui/material'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Box alignItems="center" display="flex" flexDirection="column" justifyContent="center" height="100vh">
      <h1>404: Page Not Found</h1>
      <p>Whoops! Looks like you&apos;re lost. The page you&apos;re looking for does not exist.</p>
      <Link href="/" passHref>
        <Button variant="outlined">Back to home</Button>
      </Link>
    </Box>
  )
}
