import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import formikControl from './formikControl'



const RegistrationForm = () => {
    const options=[
        {key:'Email',value:'emailmoc'},
        {key:'Telephone',value:'telephonemoc'}
    ]
    const initialValues={
        email:'',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
        
    }
    const validationSchema=Yup.object({
        email:Yup.string().email('Invalid Email Format').required("Required"),

        password:Yup.string().required('Required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required('Required'),
        modeOfContact:Yup.string().required("Required"),
        phone:Yup.string().when('modeOfContact',{
            is:'telephonemoc',
            then:Yup.string().required("Required")
        })
    })
  return (
    <div></div>
  )
}

export default RegistrationForm