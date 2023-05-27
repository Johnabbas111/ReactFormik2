import React from 'react'
import Input from './Input.jsx'
import Textarea from './Textarea.jsx'
import Select from './Select.jsx'
import Checkbox from './Checkbox.jsx'

import RadioButton from './RadioButtons.jsx'
import DatePicker from './DatePicker.jsx'
import LoginForm from './LoginForm.jsx'
import EnrolmentForm from './EnrolmentForm.jsx'


const FormikControl = (props) => {
    const {control,...rest}=props
    switch (control){
        case 'input': return <Input {...rest}/> 
        case 'textarea': return <Textarea {...rest}/>
        case 'select': return<Select {...rest}/>
        case 'radio': return <RadioButton {...rest}/>
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date': return <DatePicker {...rest}/>
        default : return null



    }

    
  
}

export default FormikControl