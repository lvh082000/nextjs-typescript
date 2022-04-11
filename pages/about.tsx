import React from 'react'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'

const AboutPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

AboutPage.Layout = MainLayout

export default AboutPage
