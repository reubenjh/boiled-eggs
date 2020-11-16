/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, ComponentProps } from 'react'
import { IonButton } from '@ionic/react'
import { buttonVariants } from 'theme/variants'

export interface ButtonProps extends ComponentProps<typeof IonButton> {
  variant?: keyof typeof buttonVariants
}

export const Button = forwardRef<HTMLIonButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    const variantStyle = buttonVariants[variant ?? 'default']

    return (
      <IonButton
        ref={ref}
        css={{
          ...variantStyle,
          '--background-activated': '#000',
          '--ripple-color': '#000',
          '--background-focused': '#000',
          '--background-hover': '#000',
        }}
        {...props}
      />
    )
  }
)
