import assetPrefix from "~/config/assetPrefix"

export interface ProjectSettings {
  titleText: string
  svgUrl: string
  svgAlt: string
  copy: string
  linkText: string
  linkUrl: string
}

const settings: ProjectSettings = {
  titleText: 'Some projects I have worked on',
  copy: `
  <p>I\'ve worked on a range of stuff including:</p>
    <ul>
      <li>Migrating infrastructure between AWS regions</li>
      <li>Serverless architectures and microservices with Expressjs</li>
      <li>Event based services on AWS</li>
      <li>Breaking up of monoliths</li>
      <li>Microfrontend implementations</li>
      <li>Working with and developing static site generators</li>
      <li>Contributing to SEO through optimising page speed and content</li>
      <li>Contributing to continuous integration techniques and processes</li>
      <li>Developing and maintaining single page apps with React</li>
      <li>Building and maintaining REST and GraphQL APIs</li>
      <li>Working with Git and Github</li>
      <li>Writing tests using libraries such as Jest, Mocha and Enzyme</li>
    </ul>
  `,
  svgUrl: `${assetPrefix}/img/svg/portfolio.svg`,
  svgAlt: 'Image of projects in a folder',
  linkText: 'See example projects',
  linkUrl: '/project'
}

export default settings
