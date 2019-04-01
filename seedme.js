const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a New Product to add to the inventory
   let newProj = await prisma.createProject({
    title: 'My Project', description: 'MY Project Deseaf32sdcription', devtype: 'FULL_STACK', solo: true
   })

    newProj = await prisma.createProject({
    title: 'My Project', description: 'MY Prqwer3qr3qrwerWtion', devtype: 'FULL_STACK', solo: true
   })

   newProj = await prisma.createProject({
    title: 'Project3', description: 'Project3Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project4', description: 'Project4Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project5', description: 'Project5Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project6', description: 'Project6Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project7', description: 'Project7Description', devtype: 'FRONT_END', solo: false
   })
   newProj = await prisma.createProject({
    title: 'Project8', description: 'Project8Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project9', description: 'Project9Description', devtype: 'DESIGN', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project10', description: 'Project10Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project11', description: 'Project11Description', devtype: 'FULL_STACK', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project12', description: 'Project12Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project13', description: 'Project13Description', devtype: 'BACK_END', solo: true
   })

   newProj = await prisma.createProject({
    title: 'Project14', description: 'Project14Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project15', description: 'Project15Description', devtype: 'FULL_STACK', solo: true
   })

   newProj = await prisma.createProject({
    title: 'Project16', description: 'Project16Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project17', description: 'Project17Description', devtype: 'BACK_END', solo: true
   })

   newProj = await prisma.createProject({
    title: 'Project18', description: 'Project18Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project19', description: 'Project19Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project20', description: 'Project20Description', devtype: 'FRONT_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project21', description: 'Project21Description', devtype: 'FRONT_END', solo: true
   })

   newProj = await prisma.createProject({
    title: 'Project22', description: 'Project22Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project23', description: 'Project23Description', devtype: 'FRONT_END', solo: false
   })
   newProj = await prisma.createProject({
    title: 'Project24', description: 'Project24Description', devtype: 'BACK_END', solo: false
   })

   newProj = await prisma.createProject({
    title: 'Project25', description: 'Project25Description', devtype: 'FRONT_END', solo: false
   })

   
   
}

main().catch(e => console.error(e))