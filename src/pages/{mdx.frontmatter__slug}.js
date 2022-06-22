import React from "react"
import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import GithubLink from '../components/githubLink'
import SimpleIcon from '../components/simpleIcon'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const ProjectPage = ({ data }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="blog-post-container"> 
        <div className="blog-post prose">
          <div className="info flex flex-row mb-10 justify-items-center">

            <div className="flex flex-row gap-2 mr-auto bg-slate-100 rounded-full px-4 py-1" >
              <SimpleIcon className="w-4 flex justify-items-center" icon={data.mdx.frontmatter.icon} />
              <div className="capitalize">{data.mdx.frontmatter.icon}</div>
            </div>
          
            <div className="py-1">
              <GithubLink to={data.mdx.slug}>Comment on GitHub</GithubLink>
            </div>
          </div>


          <MDXRenderer>{data.mdx.body}</MDXRenderer>

        </div>
      </div>
    </Layout>
  )
  
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      slug
      body
      frontmatter {
        date
        title
        icon
      }
    }
  }
`

export default ProjectPage 