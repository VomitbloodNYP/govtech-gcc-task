import { Box, Button } from '@mui/material'
import Link from 'next/link'

export default function Index() {
  return (
    <Box alignItems="center" display="flex" flexDirection="column" justifyContent="center" height="100vh">
      <h1>GovTech GCC Task</h1>
      <Box>
        <Link href="/form" passHref>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Form
          </Button>
        </Link>
        <Link href="/data" passHref>
          <Button variant="outlined">Data</Button>
        </Link>
      </Box>
      <h3>By Toh You Xuan</h3>
    </Box>
  )
}
