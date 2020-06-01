import React from 'react'

import Alert from './_layout/alert'
import Header from './_layout/header'
import Footer from './_layout/footer'
import SEOHead from './_layout/meta/seo'
import PWAHead from './_layout/meta/pwa'
import FontsHead from './_layout/meta/fonts'

import FontsLinks from '../lib/load-fonts'

export default class Layout extends React.Component {
  componentDidMount() { FontsLinks() }
  render() {
    const { preview, children } = this.props;
    return (
      <>
        <FontsHead />
        <SEOHead />
        <PWAHead />

        <Alert preview={preview} />
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}
