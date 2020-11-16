// Prevents error: https://spectrum.chat/testing-library/help-react/getting-typeerror-mutationobserver-is-not-a-constructor-on-async-tests~75107b85-d058-4e73-b554-3c070cdbd244
import 'mutationobserver-shim'

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
