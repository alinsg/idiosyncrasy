import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"
import { SlantedBorderElement } from "../common/slanted-borders-helpers"
import colors from "../common/colors"
import breakpoints from "../common/breakpoints"
import fonts from "../common/fonts"

const FooterElement = styled(SlantedBorderElement)`
  background: ${colors.backgrounds.footer};
  padding-bottom: 15px;
  padding-top: 62px;
  margin-top: -20px;
`

const PageElements = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const LinkTitle = styled(Link)`
  text-decoration: none;
  color: ${colors.typography.dark};
`

const SiteTitle = styled(Link)`
  text-decoration: none;
  color: ${colors.typography.dark};
  font-family: ${fonts.logoFont};
  font-size: 36px;
  font-weight: normal;
`

const PageElement = styled.div`
  display: inline-block;
  color: ${colors.typography.dark};
  margin: 10px;

  @media (min-width: ${breakpoints.tablet}px) {
    margin: 30px;
  }
`

const Footer = ({ siteTitle, pages }) => (
  <FooterElement as="footer">
    <InnerWrapper>
      <div>
        <PageElements>
          {pages.map(page => (
            <PageElement id={page}>
              <LinkTitle to={"/" + page}>
                <h4>{page}</h4>
              </LinkTitle>
            </PageElement>
          ))}
        </PageElements>
        <PageElements>
          <h4>
            <SiteTitle to="/">{siteTitle}</SiteTitle>
          </h4>
        </PageElements>
      </div>
    </InnerWrapper>
  </FooterElement>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
