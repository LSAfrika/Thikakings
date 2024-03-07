const fs=require('fs')
const path=require('path')


const playerstats=[

    { playername:'Njoro',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Tono',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Felix',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Junior',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'philip',age:0,position:'LB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Masai',age:0,position:'LB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Peter',age:0,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Bonnie',age:0,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Benjamin',age:0,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Wamichwe',age:0,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Malisia',age:0,position:'RB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'',age:0,position:'RB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Ras',age:0,position:'DMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Chopo',age:0,position:'DMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Juma',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Mato',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Ox',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Marto',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Abdul',age:0,position:'LWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Frank',age:0,position:'LWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Ian',age:0,position:'RWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Mbuvi',age:0,position:'RWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Doku',age:0,position:'CF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Peter',age:0,position:'CF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},


]

genegratejson(playerstats)
function genegratejson(data) {

    let playerstats=JSON.stringify(data,null,2)

    if(fs.existsSync('playerstats.json'))fs.unlinkSync('playerstats.json')
   fs.writeFileSync('playerstats.json',playerstats,(err)=>{
    if(err) return console.log('error occured: ',err);
    console.log('file written successfully'); 
   })

    // console.log(playerstats);
    
}

