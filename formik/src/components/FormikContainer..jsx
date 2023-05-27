import React from 'react'
import { Formik,Form } from 'formik'
import FormikControl from './FormikControl'
import *as Yup from "yup"
import { json } from 'react-router-dom';

const FormikContainer = () =>{



  const dropdownOptions=[
    {key:'select an option',value:''},
    {key:'option 1',value:'option1'},
    {key:'option 2',value:'option2'},
    {key:' option 3',value:'option3'}
  ]
  const radioOptions=[
    {key:'select an option',value:''},
    {key:'option 1',value:'roption1'},
    {key:'option 2',value:'roption2'},
    {key:' option 3',value:'roption3'}
  ]
  const checkboxOptions=[
    {key:'select an option',value:''},
    {key:'option 1',value:'coption1'},
    {key:'option 2',value:'coption2'},
    {key:' option 3',value:'coption3'}
  ]
  const initialValue={
    email:'',
    description:'',
    selectOption:'',
    radioOption:'',
    checkboxOption:[],
    birthDate:null

  }
  const validationSchema=Yup.object({
    email:Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOptions:Yup.array().required("Required"),
    birthDate:Yup.date.required("Required")
  })
  const onSubmit=(values)=>{
      console.log("Form data",values)
      console.log("saved data", JSON.parse(JSON.stringify(values)))
      //this convert over utf-8 format to string format then after parsing
      //At the time of parsing over date convert to string we want it in date format so we use json.date while parsing the data
  return(
    <Formik
    initialValues={initialValue}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {formik=>(
       
        <Form>
          <FormikControl control='input' type='email' label='Email' name='email'/>
          <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions}/>
          <FormikControl control='radio'  label='Radio Topic' name='radioOption' options={radioOptions}/>
          <FormikControl control='checkbox' label='picks option' name='checkboxOption' options={checkboxOptions}/>
          <FormikControl control='date'label='pick a date' name='birthDate' />
          

         
          <formikControl control='textarea' label="Description" name='description'/>
          <button type='submit'>Submit</button>
        </Form>

      )}

    </Formik>
  )    
}
}
export default FormikContainer
  
  

