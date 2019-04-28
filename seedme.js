const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a New Product to add to the inventory
   let newProj = await prisma.createProject({
    title: 'RESTFUL Node API', description: 'I constructed a RESTful API with full CRUD capabilities using node, mongodb, and mongoose.'
    , devtype: 'BACK_END', solo: true, imgurl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png'
   })

    newProj = await prisma.createProject({
    title: 'GraphQL API', description: 'A Graphql API using a docker-based PostgreSQL database and Prisma', devtype: 'BACK_END', solo: true,
    imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'jQuery Mobile App', description: 'A mobile app using jQuery Mobile and Adobe Phonegap', devtype: 'FRONT_END', solo: true,
    imgurl: 'http://docs.phonegap.com/images/browser-support/browser-debug.png'
   })

   newProj = await prisma.createProject({
    title: 'Amazon Echo Dot Design Audit', description: 'Full Audit of Amazons Echo Dot, including onboarding, design decisions, etc.', devtype: 'DESIGN', solo: false
    ,imgurl: 'https://icdn4.digitaltrends.com/image/amazon-echo-dot-2018-3rd-gen-press-1200x630-c-ar1.91.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project5', description: 'Project5Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'VueJS App', description: 'Created a Pokemon website using the popular front-end tool, VueJS', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project7', description: 'Project7Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png'
   })
   newProj = await prisma.createProject({
    title: 'Project8', description: 'Project8Description', devtype: 'BACK_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project9', description: 'Project9Description', devtype: 'DESIGN', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project10', description: 'Project10Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project11', description: 'Project11Description', devtype: 'FULL_STACK', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project12', description: 'Project12Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project13', description: 'Project13Description', devtype: 'BACK_END', solo: true
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project14', description: 'Project14Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project15', description: 'Project15Description', devtype: 'FULL_STACK', solo: true
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project16', description: 'Project16Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project17', description: 'Project17Description', devtype: 'BACK_END', solo: true
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project18', description: 'Project18Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project19', description: 'Project19Description', devtype: 'BACK_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project20', description: 'Project20Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project21', description: 'Project21Description', devtype: 'FRONT_END', solo: true
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project22', description: 'Project22Description', devtype: 'BACK_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   newProj = await prisma.createProject({
    title: 'Project23', description: 'Project23Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })
   newProj = await prisma.createProject({
    title: 'Project24', description: 'Project24Description', devtype: 'BACK_END', solo: false
    ,imgurl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png'
   })

   newProj = await prisma.createProject({
    title: 'Project25', description: 'Project25Description', devtype: 'FRONT_END', solo: false
    ,imgurl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg'
   })

   
   
}

main().catch(e => console.error(e))