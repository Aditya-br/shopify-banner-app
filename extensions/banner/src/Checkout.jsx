import React from 'react'
import { Banner, reactExtension } from '@shopify/ui-extensions-react/checkout'

const BannerComponent = () => {
  return (
    <Banner
      title="🎉 Free Shipping on All Orders! 🎉"
      tone="info"
    />
  )
}

export default reactExtension('purchase.checkout.block.render', () => {
  return <BannerComponent />
})