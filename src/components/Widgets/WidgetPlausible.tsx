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
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJ9JDVSZSK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RJ9JDVSZSK');
    </script>
  )
}
