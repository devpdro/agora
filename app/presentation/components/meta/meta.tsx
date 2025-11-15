import Head from 'next/head'

export type MetaProps = {
  title?: string
  description?: string
  keywords?: string
  image?: string
  canonical?: string
  ogType?: string
  ogSiteName?: string
  twitterCard?: string
  twitterSite?: string
}

const DEFAULT_TITLE = 'Transforme recebíveis em capital imediato | Confia Capital'
const DEFAULT_DESCRIPTION = 'Securitização de recebíveis com liquidação em até 48h. Operações estruturadas que transformam duplicatas e contratos em capital sem impactar o balanço.'
const DEFAULT_KEYWORDS = 'securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro, securitizadora CVM, liquidez empresarial, certificados de recebíveis, CRI CRA, operações estruturadas, transformar recebíveis em dinheiro'
const DEFAULT_IMAGE = 'http://confiacapital.com.br/og-home.png'
const DEFAULT_OG_TYPE = 'website'
const DEFAULT_OG_SITE_NAME = 'Confia Capital'
const DEFAULT_TWITTER_CARD = 'summary_large_image'
const DEFAULT_TWITTER_SITE = '@confiacapital'

const Meta = ({
  title,
  description,
  keywords,
  image,
  canonical,
  ogType,
  ogSiteName,
  twitterCard,
  twitterSite,
}: MetaProps) => {
  const router = typeof window !== 'undefined' ? window.location : undefined
  const url = canonical || (router ? router.href : '')
  const pageTitle = title || DEFAULT_TITLE
  const metaDescription = (description && description.length > 160)
    ? description.slice(0, 157) + '...'
    : (description || DEFAULT_DESCRIPTION)

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords || DEFAULT_KEYWORDS} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image || DEFAULT_IMAGE} />
      <meta property="og:type" content={ogType || DEFAULT_OG_TYPE} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={ogSiteName || DEFAULT_OG_SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard || DEFAULT_TWITTER_CARD} />
      <meta name="twitter:site" content={twitterSite || DEFAULT_TWITTER_SITE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image || DEFAULT_IMAGE} />
    </Head>
  )
}

export default Meta