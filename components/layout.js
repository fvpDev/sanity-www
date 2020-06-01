import React from 'react'
import Fonts from '../load/fonts'
import Alert from '../components/alert'
import Footer from '../components/footer'
import SEOHead from '../components/meta/seo'
import PWAHead from '../components/meta/pwa'
import FontsHead from '../components/meta/fonts'

export default class Layout extends React.Component {
  componentDidMount() { Fonts() }
  render() {
    const { preview, children } = this.props;
    return (
      <>
        <FontsHead />
        <SEOHead />
        <PWAHead />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }
}
