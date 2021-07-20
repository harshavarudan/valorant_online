const express = require('express')
const index = express()
const port = process.env.PORT||5000


const time=5000
const Valorant = require('@liamcottle/valorant.js');
const valorantApi = new Valorant.API(Valorant.Regions.AsiaPacific);
let state="LOADING";
function currentTime(){
    let options = {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
    return new Intl.DateTimeFormat([], options).format(new Date());
}

class player{
    constructor(username,password) {
        this.username=username
        this.password=password
        this.state="LOADING"
        this.lastSeen="OFFLINE"
    }

}
playersCreds=[

    new player("harshavarudan","!NubdaBoi"),
    new player("NotAproBro1","smurfkadu1"),
    new player("ShtWhoCares","warfarekesh9658669999"),
    new player("WARFARExKESH","warfarekesh9658669999"),
    new player("DirtyTrio","Lambo12@"),
    new player("WARFARExCSK","Lambo12@"),
    new player("aagambaa","kvsp1234"),
    new player("funnypeacock","@gamerarya"),
    new player("NotAproBro2","smurfkadu3"),
    new player("sujith","-"),
    new player("dheerajuday","Dheeraj@1")
]




// auth with valorant apis

    function IsOnline(user) {
    valorantApi.authorize(user.username, user.password).then( () => {
              valorantApi.getPartyByPlayer(valorantApi.user_id).then( () => {
                 user.state= "ONLINE"
                  user.lastSeen=currentTime();

            }).catch(() => {
                user.state= "OFFLINE"

            })
        }) .catch(()=> {
           user.state= "TOO MANY REQUESTS TRY LATER OR CREDS WRRONG"
       });
}

for(let i=0 ; i<playersCreds.length; i++){
    if(playersCreds[i].password==="-"){
        playersCreds[i].lastSeen="DUMBASS DIDNT GIVE PASSWORD"
        continue;
    }
    setTimeout( (user)=> {

        setInterval(IsOnline,Math.max(3600,time*playersCreds.length) ,user)
    },time*i,playersCreds[i])
}
    index.get('/',(re,rs)=>{
        rs.send("HELLO")

    })
     index.get('/playerinfo',  (req, res) => {

         //setTimeout(function (){res.send({players})},time*players.length)
        //
         let players=playersCreds.map(user=>{
            return {
                username:user.username,
                state:user.state,
                lastSeen:user.lastSeen
             }

         })
          res.send({players})


     })


index.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
/*

git add .
git commit -am "changes made to the project"
git push heroku master

 *
 *
 */
