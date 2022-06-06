import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import { getCssText, reset } from 'styles/stitches.config'

export default class Doc extends Document {
  getInitialProps = async (ctx: DocumentContext) => {
    // render page
    const results = await ctx.defaultGetInitialProps(ctx)
    // get the css for the current rendering cycle
    const stitchesCssString = getCssText()
    // reset the styles between renders
    reset()

    return {
      ...results,
      styles: (
        <>
          {results.styles}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: stitchesCssString }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            id="icon32"
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={'/favicon-32x32.png'}
          />
          <link
            id="icon16"
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={'/favicon-16x16.png'}
          />
          <link id="ico" rel="shortcut icon" href={'/favicon.ico'} />
          <link rel="manifest" href={'.webmanifest'} />
          <link rel="apple-touch-icon" href={'/apple-touch-icon.png'} />
          <link
            rel="android-chrome-192x192"
            href={'/android-chrome-192x192.png'}
          />
          <link
            rel="android-chrome-256x256"
            href={'/android-chrome-256x256.png'}
          />
          <link rel="mask-icon" href={'/safari-pinned-tab.svg'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
