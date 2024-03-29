export const WidgetPlausible = () => {
  if (!process.env.ENABLE_PLAUSIBLE) {
    return null
  }

  return (
    <script
      defer
      data-domain="climateagency.net"
      src="https://plausible.io/js/plausible.js"
    />
  )
}
