let users=[
    {
        name:"muhammad",
        role:"admin",
        status:true
    },
    {
        name:"abu bakr",
        role:"user",
        status:true
    },
    {
        name:"umar",
        role:"user",
        status:true
    },
    {
        name:"usman",
        role:"user",
        status:true
    },
    {
        name:"ali",
        role:"admin",
        status:true
    },
    {
        name:"hassan",
        role:"admin",
        status:true
    },
    {
        name:"waleed",
        role:"user",
        status:false
    },
    {
        name:"qasim",
        role:"user",
        status:false
    },
]

let activeUsers=users.filter(user=>user.status==true)
let nameActive=activeUsers.map(user=>user.name)
console.log("Names of Active Users:")
for(i=0;i<nameActive.length;i++){
    console.log(nameActive[i])
}
let admin=users.reduce((count,user)=>{
    if(user.role=="admin"){
        return count+1
    }
    else{
        return count
    }
},0)
console.log(`Total admins: ${admin}`)

