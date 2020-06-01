// import myApi from './myApi.js'
import { createForm, createFactory, createField } from 'micro-form'

const Form = createForm(({ state, valid, validateForm, getPayload, resetForm }) => (
  <form onSubmit={e => {
    e.preventDefault()

    if (validateForm()) {
      // myApi(getPayload()).then(() => {
        resetForm()
      // })
    }
  }}>
    {children}
  </form>
))

const Input = createFactory(({ name, value, valid, validateField, updateField, ...userDefinedProps }) => (
  <div>
    <label htmlFor={name}>{userDefinedProps.label}</label>
    <input name={name} value={value} type={userDefinedProps.type} onChange={e => {
      updateField(e.target.value)
      validate()
    }} />
  </div>
))

const Email = createField({
  name: 'email',
  initialValue: ''
})(({ name, value, valid, updateField, validateField, ...userDefinedProps }) => (
  <div>
    <label htmlFor={name}>Email</label>
    <input name={name} value={value} type='email' onChange={e => {
      updateField(e.target.value)
      validate()
    }} />
  </div>
))

const App = props => (
  <Form>
    <Input
      name='name'
      type='text'
      initialValue='Eric Bailey'
      validate={val => val !== ''}
      label='Name' />
    <Email />
  </Form>
)
