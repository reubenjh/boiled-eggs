/** @jsx jsx */
import { jsx } from '@emotion/core'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import { forwardRef, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLIonCardElement> {
  title?: string
  subtitle?: string
}

export const Card = forwardRef<HTMLIonCardElement, CardProps>(
  ({ title, subtitle, children, ...props }, ref) => {
    return (
      <IonCard ref={ref} {...props}>
        {(!!title || !!subtitle) && (
          <IonCardHeader>
            {!!title && <IonCardTitle>{title}</IonCardTitle>}
            {!!subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
          </IonCardHeader>
        )}
        <IonCardContent>{children}</IonCardContent>
      </IonCard>
    )
  }
)
