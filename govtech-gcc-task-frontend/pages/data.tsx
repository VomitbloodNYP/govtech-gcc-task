import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'

interface DataItem {
  firstName: string
  lastName: string
  temperature: number | null
  symptoms: string[]
  closeContact: boolean | null
  timestamp: string
}

export default function Data() {
  // display loading screens until data is fetched
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<DataItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/retrieve')

        const result = await response.json()
        const data = [...result.data].sort((a, b) => {
          if (a.timestamp.seconds > b.timestamp.seconds) return -1
          if (a.timestamp.seconds < b.timestamp.seconds) return 1
          if (a.timestamp.nanoseconds > b.timestamp.nanoseconds) return -1
          if (a.timestamp.nanoseconds < b.timestamp.nanoseconds) return 1
          return 0
        })

        setData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <LoadingScreen loadingText="Loading..." />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          border: 'solid 1px grey',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          p: 4,
          maxHeight: '80vh',
          maxWidth: 1000,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb: 2,
          }}
        >
          <Button href="/">
            <ArrowBackIcon />
          </Button>
          <Typography sx={{ ml: 2 }} variant="h5">
            Declaration Records
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Symptoms</TableCell>
                <TableCell>Close contact?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((item: DataItem, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.temperature}°C</TableCell>
                    <TableCell>{item.symptoms.length > 0 ? item.symptoms.join(', ') : 'None'}</TableCell>
                    <TableCell>{item.closeContact ? 'Yes' : 'No'}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
