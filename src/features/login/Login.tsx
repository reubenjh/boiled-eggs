/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useI18n } from 'i18n/I18nContext'
import { Text, Page, Button } from 'shared/components'
import { Card } from 'shared/components/Card'

const LoginPage = () => {
  const { t } = useI18n({
    translationNamespace: 'login',
  })

  return (
    <Page title={t('heading')}>
      <Card title={'Title'} subtitle={'Subtitle'}>
        <Text>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        </Text>
        <Text>
          {
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        </Text>
        <Button variant="primary">{'View'}</Button>
      </Card>
    </Page>
  )
}

export default LoginPage
