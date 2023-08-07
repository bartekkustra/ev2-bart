import { Box as MuiBox, Button, TextField, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { tokens } from '../../theme'

import Header from '../../components/Header'

const initialUserValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
}

const phoneRegExp = /\d*/

const userSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  contact: yup.string().matches(phoneRegExp, 'Phone number is invalid').required('Phone number is required'),
  address1: yup.string().required('Address is required'),
  address2: yup.string().required('Address is required'),
})

const Form = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const isNonMobile = useMediaQuery('(min-width:600px)')

  const handleFormSubmit = (values: any) => {
    console.log('submitted', values)
  }

  return (
    <MuiBox m='20px'>
      <Header title="Form" subtitle='The simple Form using formik and yup'/>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialUserValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MuiBox
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                '& > div': {
                  gridColumn: isNonMobile ? undefined : 'span 4',
                },
              }}
            >
              <TextField
                name='firstName'
                label='First Name'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                error={!!(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                name='lastName'
                label='Last Name'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                error={!!(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                name='email'
                label='Email'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                name='contact'
                label='Contact Number'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                error={!!(touched.contact && errors.contact)}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                name='address1'
                label='Address 1'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                error={!!(touched.address1 && errors.address1)}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                name='address2'
                label='Address 2'
                variant='filled'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                error={!!(touched.address2 && errors.address2)}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: 'span 4' }}
              />
            </MuiBox>
            <MuiBox>
              <Button type='submit' color='secondary' variant='contained' sx={{ mt: '30px' }}>Submit this form</Button>
            </MuiBox>
          </form>
        )}
      </Formik>
    </MuiBox>
  )
}

export default Form
