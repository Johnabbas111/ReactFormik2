import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import formikControl from './FormikControl'

const LoginForm = () => {
    const initialValues={
        email:'',
        password:'',

    }
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid email format').required('Required'),
        password:Yup.string().required('Required')

    })
    const onSubmit=(values)=>{
        console.log('form data',values)

    }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {
            formik=>{
                console.log('formik props',formik)
                return(
                    <Form>
                        <formikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'

                        />
                        <formikControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password'/>
                        <button type='submit' disabled={!formik.isValid}></button>

                    </Form>
                )
                
            }
        }

    </Formik>
   

    
  )
}

export default LoginForm

