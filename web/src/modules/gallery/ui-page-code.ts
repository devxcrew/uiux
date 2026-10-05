import type { UiPageDoc } from './ui-pages'

export function createUiPageCode(page: UiPageDoc) {
  if (page.family.id === 'login') {
    return `import { LoginPage } from '@devxcrew/ui/blocks/auth'

export function ApplicationLogin() {
  return (
    <LoginPage
      variant="${page.variantId}"
      onSubmit={(identifier, password) => authenticate({ identifier, password })}
    />
  )
}`
  }
  if (page.family.id === 'register') {
    return `import { RegisterPage } from '@devxcrew/ui/blocks/auth'

export function ApplicationRegister() {
  return (
    <RegisterPage
      variant="${page.variantId}"
      onSubmit={(name, email, password, username, mobile) =>
        register({ name, email, password, username, mobile })
      }
    />
  )
}`
  }
  if (page.family.id === 'forgot-password') {
    return `import { PasswordForgotPage } from '@devxcrew/ui/blocks/auth'

export function ApplicationPasswordRecovery() {
  return <PasswordForgotPage backHref="/login" onSubmit={requestPasswordReset} />
}`
  }
  return `import { NotificationCenterPage } from '@devxcrew/ui/blocks/notifications'

export function ApplicationNotifications() {
  return (
    <NotificationCenterPage
      items={notifications}
      onMarkAllRead={markAllNotificationsRead}
    />
  )
}`
}
