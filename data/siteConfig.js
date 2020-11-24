module.exports = {
  siteTitle: 'Hi! I\'m Steven',
  siteDescription: `Steven Lee Website Credited to Francisco Santos `,
  keyWords: ['gatsbyjs', 'react', 'curriculum','portfolio'],
  authorName: 'Lee Soon Fatt "Steven"',
  twitterUsername: 'none',
  githubUsername: 'stevenleesf',
  authorAvatar: '/images/steven.jpg',
  authorDescription: `Junior Developer, passionate about what I do. Always interested in how the sites were made and also interested in Machine Learning system.
  Back in 2017 I started my college life majoring in Software Engineering.
  I currently interested in Full-Stack Development and mainly work in React.js and Node.js. 
  beside that, i also started learning tensorflow and started build my first ever Machine Learning Chatbot. `,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 70
    },
    {
      name: 'Javascript',
      level: 40
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 65
    },
    {
      name: 'Git',
      level: 50
    },
    {
      name: 'TensorFlow',
      level: 40
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "UOWM KDU Education Portal",
      begin: {
        month: 'Oct',
        year: '2020'
      },
      duration: '1month',
      occupation: "Full-Stack Developer",
      description: "I was task to build a education portal website for my college, whereby i took this opportunity to build it using React.js and Node.js "
  
    },  {
      company: "IT Helpdesk Chatbot",
      begin: {
        month: 'Jan',
        year: '2020'
      },
      duration: '1yr',
      occupation: "Developer",
      description: "Develop an machine learning chatbot using tensorFlow and also dataset from kaggle"
  
    }, {
      company: "UOWM KDU",
      begin: {
        month: 'dec',
        year: '2017'
      },
      duration: '4 yr',
      occupation: "Student",
      description: "Learn the fundemental of programming"
    }, 
  ],
  portifolio: [
    {
      image: "/images/web1.png",
      description: "IT Helpdesk Chatbot",
      url: "https://github.com/stevenleesf/IT-Helpdesk-Chatbot"
    },
    {
      image: "/images/web2.png",
      description: "UOWM KDU Portal",
      url: "https://github.com/stevenleesf/UOWMReact/tree/gh-pages"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: null,
    linkedin: "https://www.linkedin.com/in/steven-lee-soon-fatt-51870110b/",
    github: "https://github.com/stevenleesf",
    email: "lee.soonfatt98@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/back.jpg',
  googleAnalyticsId: null,
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#25303B",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}