import React from 'react'
import styled from 'styled-components'
import typography from '../styles/typography.css'
import GlobalStyle from '../styles/globalStyle'
import Layout from './layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { erinRed } from '../styles/colors'


export const Bepis = styled.img`
    display: flex;
    width: 100%;
    margin: 20px 0px;
`

const CoverImage = styled.img`
    display: flex;
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin: 40px 0px;
`

const SummaryTable = styled.div`
    display: flex;
`

const SummaryCell = styled.div`
display: flex;
flex: 1;
flex-direction: column;

 p {
     padding: 0;
 }
`

const MarkdownStyle = styled.div`
 h2 {
     margin-top: 70px;
     margin-bottom: 8px;
     color: ${erinRed}
 }
`

const HorizontalFooter = styled.div`
 width: 180px;
 height: 4px;
 background-color: ${erinRed};
 margin-top: 70px;
 margin-bottom: 150px;

`

const PortfolioPage = ({location, children, pageContext}) => {
    const { title, subtitle, role, focus, result, resultLink, coverImage } = pageContext.frontmatter
    return (
      <Layout>
           <h1 style={{marginTop: '100px'}}>{title}</h1>
           <h2 style={{color: erinRed}}>{subtitle}</h2>
           <CoverImage src={coverImage}/>
           <SummaryTable>
               <SummaryCell>
                   <h3>Role</h3>
                   <p>
                       {role}
                   </p>
               </SummaryCell>
               <SummaryCell>
               <h3>Focus</h3>
                   <p>
                     {focus} 
                   </p>
                </SummaryCell>
                <SummaryCell>
                <h3>Result</h3>
                   <p>
                     <a href={resultLink}>{result}</a>
                   </p>
                </SummaryCell>
           </SummaryTable>
           <MarkdownStyle>
            {children}
            </MarkdownStyle>
            <HorizontalFooter/>
      </Layout>
    )
  }


export default PortfolioPage