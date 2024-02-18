import { Html } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Linkbrary</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Linkbrary" />
        <meta
          name="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta name="twitter:site" content="https://jobible.netlify.app/" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:image" content="/images/index/landing-image.webp" />

        {/* Open Graph general (Facebook, Pinterest) */}
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta property="og:url" content="https://jobible.netlify.app//" />
        <meta property="og:site_name" content="Linkbrary" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/index/landing-image.webp" />
      </head>
      <body />
    </Html>
  )
}
