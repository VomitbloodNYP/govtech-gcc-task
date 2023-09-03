import { Box, LinearProgress, Typography } from '@mui/material'
import { FC } from 'react'

interface LoadingScreenProps {
  loadingText: string
}

const LoadingScreen: FC<LoadingScreenProps> = ({ loadingText }) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ mb: 2 }}>{loadingText}</Typography>
      <LinearProgress color="primary" sx={{ width: '80%' }} />
    </Box>
  )
}

export default LoadingScreen
