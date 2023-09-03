import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface InputFormData {
  firstName: string
  lastName: string
  temperature: number | null
  symptoms: string[]
  closeContact: boolean | null
}

export default function Form() {
  const router = useRouter()

  const [formData, setFormData] = useState<InputFormData>({
    firstName: '',
    lastName: '',
    temperature: null,
    symptoms: [],
    closeContact: null,
  })

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://gcc-backend.mikoshi.foo/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      router.push('/data')
    } catch (error) {
      console.log(error)
    }
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
          maxWidth: 1000,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mb: 2,
          }}
        >
          <Button href="/">
            <ArrowBackIcon />
          </Button>
          <Typography sx={{ ml: 2 }} variant="h5">
            Health Declaration Form
          </Typography>
        </Box>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 1,
            }}
          >
            Personal details
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mb: 2,
            }}
          >
            <TextField
              required
              fullWidth
              id="first-name"
              label="First name"
              name="first-name"
              size="small"
              variant="outlined"
              sx={{
                mr: 2,
              }}
              value={formData.firstName}
              onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
            />
            <TextField
              required
              fullWidth
              id="last-name"
              label="Last name"
              name="last-name"
              size="small"
              variant="outlined"
              value={formData.lastName}
              onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              id="temperature"
              InputProps={{
                endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                inputProps: { min: 0, max: 100, step: 0.1 },
              }}
              label="Temperature"
              name="temperature"
              size="small"
              type="number"
              variant="outlined"
              value={formData.temperature}
              onChange={(e) => {
                const temperature = parseFloat(e.target.value)
                setFormData((prev) => ({ ...prev, temperature: temperature }))
              }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormGroup>
              <FormLabel>Do you have any of the following symptoms now or within the last 14 days?</FormLabel>
              <FormLabel>Please indicate even if the symptoms are mild.</FormLabel>
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-cough"
                label="Cough"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Cough'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Cough') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-impairment"
                label="Smell/test impairment"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Smell/test impairment'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Smell/test impairment') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-fever"
                label="Fever"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Fever'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Fever') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-breathing-difficulties"
                label="Breating difficulties"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Breating difficulties'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Breating difficulties') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-body-aches"
                label="Body aches"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Body aches'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Body aches') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-headaches"
                label="Headaches"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Headaches'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Headaches') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-fatigue"
                label="Fatigue"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Fatigue'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Fatigue') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-sore-throat"
                label="Sore throat"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Sore throat'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Sore throat') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-diarrhea"
                label="Diarrhea"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Diarrhea'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Diarrhea') }))
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                name="symptoms"
                id="symptoms-runny-nose"
                label="Runny nose"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement
                  if (target.checked) {
                    setFormData((prev) => ({ ...prev, symptoms: [...prev.symptoms, 'Runny nose'] }))
                  } else {
                    setFormData((prev) => ({ ...prev, symptoms: prev.symptoms.filter((symptom) => symptom !== 'Runny nose') }))
                  }
                }}
              />
            </FormGroup>
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormGroup>
              <FormLabel>Have you been in contact with anyone who is suspected to have/has been diagnosed with Covid-19 within the last 14 days?</FormLabel>
              <RadioGroup
                id="covid-contact"
                name="covid-contact"
                row
                value={formData.closeContact}
                onChange={(e) => setFormData((prev) => ({ ...prev, closeContact: e.target.value === 'true' ? true : false }))}
              >
                <FormControlLabel control={<Radio id="covid-contact-yes" required />} name="covid-contact" label="Yes" value="true" />
                <FormControlLabel control={<Radio id="covid-contact-no" required />} name="covid-contact" label="No" value="false" />
              </RadioGroup>
            </FormGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <LoadingButton type="submit" variant="contained">
              Submit
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
