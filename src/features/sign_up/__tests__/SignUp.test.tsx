/* eslint-disable @typescript-eslint/consistent-type-assertions */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { render, screen, userEvent, waitFor } from 'testUtils'
import SignUp from '../SignUp'

const find = {
  submitButton: async () => screen.findByRole('button', { name: 'signUp:form_submit' }),
  heading: async () => screen.findByText('signUp:heading'),
  emailInput: async () => screen.findByRole('textbox', { name: 'signUp:form_email_label' }),
  passwordInput: async () => screen.findByPlaceholderText('signUp:form_password_placeholder'),
  emailError: async () => screen.findByText('signUp:form_email_error'),
  passwordError: async () => screen.findByText('signUp:form_password_error'),
}

const query = {
  emailError: () => screen.queryByText('signUp:form_email_error'),
  passwordError: () => screen.queryByText('signUp:form_password_error'),
}

describe('Sign up', () => {
  it('renders the component', async () => {
    render(<SignUp />)

    expect(await find.heading()).toBeInTheDocument()
    expect(await find.emailInput()).toBeInTheDocument()
    expect(await find.passwordInput()).toBeInTheDocument()
    expect(await find.submitButton()).toBeInTheDocument()
  })
  it('on submit, shows error if email is empty', async () => {
    render(<SignUp />)

    await waitFor(() => {
      expect(query.emailError()).toBeNull()
    })
    expect(((await find.emailInput()) as HTMLInputElement).value).toBe('')
    userEvent.click(await find.submitButton())
    expect(await find.emailError()).toBeInTheDocument()
  })
  it('on submit, shows error if email is invalid', async () => {
    const invalidEmail = 'some-invalid@email'

    render(<SignUp />)

    await waitFor(() => {
      expect(query.emailError()).toBeNull()
    })
    const emailInput = (await find.emailInput()) as HTMLInputElement
    expect(emailInput.value).toBe('')
    await userEvent.type(emailInput, invalidEmail)
    expect(emailInput.value).toBe(invalidEmail)
    userEvent.click(await find.submitButton())
    expect(await find.emailError()).toBeInTheDocument()
  })
  it('on submit, shows error if password is empty', async () => {
    render(<SignUp />)

    await waitFor(() => {
      expect(query.passwordError()).toBeNull()
    })
    expect(((await find.passwordInput()) as HTMLInputElement).value).toBe('')
    userEvent.click(await find.submitButton())
    expect(await find.passwordError()).toBeInTheDocument()
  })
  it('on submit, shows error if password is invalid', async () => {
    const invalidPassword = '2Short'

    render(<SignUp />)

    await waitFor(() => {
      expect(query.passwordError()).toBeNull()
    })
    const passwordInput = (await find.passwordInput()) as HTMLInputElement
    expect(passwordInput.value).toBe('')
    await userEvent.type(passwordInput, invalidPassword)
    expect(passwordInput.value).toBe(invalidPassword)
    userEvent.click(await find.submitButton())
    expect(await find.passwordError()).toBeInTheDocument()
  })
})
