import React, { useState } from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"
import { response } from "layout/theme"

import ContactFormSection from "components/sections/ContactFormSection"
import ContactInformations from "components/sections/ContactInformations"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;

  @media ${response.phone} {
    padding: 80px 50px 50px;
  }

  @media ${response.tablet} {
    padding: 140px 150px 100px;
  }

  @media ${response.desktop} {
    padding: 150px 250px 100px;
  }

  @media ${response.bigDesktop} {
    display: flex;
    padding: 0 200px;
    height: 90vh;
    align-items: center;
    justify-content: space-between;
  }

  @media ${response.huge} {
    padding: 0 300px;
  }
`

const ContactPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth)
  })

  return (
    <MainLayout absoluteFooter={windowWidth >= 1439}>
      <StyledContainer>
        <ContactInformations />
        <ContactFormSection />
      </StyledContainer>
    </MainLayout>
  )
}

export default ContactPage
