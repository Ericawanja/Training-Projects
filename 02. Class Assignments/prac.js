const {data} = require('./data')

 data.forEach(item=>{
    delete item.id
})
//console.log(data[0].company)

/***************Log the name of person who works at ‘Robel-Corkery” company**************** */
const worksAtRobel_index = data.findIndex(item=>{
    return item.company.name =='Robel-Corkery'
})
//console.log(data[worksAtRobel_index].name)

/*******Sort users by username****** */

data.sort((a,b)=> a.name.localeCompare(b.name))

//console.log(data)


const lat_over_zero = data.filter(item=> item.address.geo.lat > 0)


//console.log(lat_over_zero.length)

/***adding property */

data.forEach(item => item.image ='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png')


//console.log(data[6].image)


/**************delete user */
const index = data.findIndex(details=> details.username =='Elwyn.Skiles' )
delete data[index]

//console.log(index)