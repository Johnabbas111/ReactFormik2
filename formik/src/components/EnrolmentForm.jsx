import React from 'react' 
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const EnrolmentForm = () => {
    const dropDownOptions=[
        {key:'Select your Course',value:''},
        {key:'React',value:'react'},
        {key:'Angular',value:'angular'},
        {key:'Vue',value:'vue'},

    ]
    const checkBoxOptions=[
       
        {key:'HTML',value:'html'},
        {key:'CSS',value:'css'},
        {key:'JAVASCRIPT',value:'javascript'},

    ]
    const initialValues={
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate:null
    }
    const validationSchema=Yup.object({
        email:Yup.string().email("Invalid email Format").required("Required"),
        bio:Yup.string().required('Required'),
        course:Yup.string().required('Required'),
        courseDate:Yup.date().required("Required").nullable()

    })
    const onSubmit=(values)=>{
        console.log("form values are",values)

    }
  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={onSubmit}>
        {
            formik=>{
                return <Form>
                    <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                    />
                     <FormikControl
                    control='textarea'
                    label='Bio'
                    name='bio'
                    />
                     <FormikControl
                    control='select'
                    label='Course'
                    name='course'
                    options={dropDownOptions}
                    />
                      <FormikControl
                    control='checkbox'
                    label='Your skillsets'
                    name='skills'
                    options={checkBoxOptions}
                    />
                      <FormikControl
                    control='date'
                    label='Course Date'
                    name='courseDate'
                   
                    />
                    <button type='submit'disabled={!formik.isValid}>Submit</button>


                </Form>
            }
        }

    </Formik>

    
  )
}

export default EnrolmentForm