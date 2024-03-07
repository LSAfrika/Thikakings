const fs=require('fs')
const path=require('path')


const playerstats=[

    { playername:'Francis "icy" Njoro',age:19,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Akol "Tono" Tong',age:23,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    // { playername:'Felix',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Calvince Junior',age:20,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'philip "Rolex" Otieno ',age:21,position:'LB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Alfred "Masai" Seleon',age:23,position:'LB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Peter Ouma',age:22,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Bonnie',age:0,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Benjamin Murigi',age:19,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Ian Wamichwe',age:22,position:'CB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Melisha Odhiambo',age:20,position:'RB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Paul',age:20,position:'RB',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Emanuel "Ras"',age:20,position:'DMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Michael "Chopo" Mutyang`a',age:24,position:'DMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Abdallah Juma',age:22,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Martin "cheza ngoma" Mwala',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Nyop Gathiang "Ox" Kuol Gal',age:0,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'partey',age:24,position:'AMF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Abdulhakim Abdukmalik',age:21,position:'LWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Frank Meso "messi" Moyi',age:22,position:'LWF',height:1,profileimage:'',fullimage:'',goals:2, assists:1,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Elvis Ian Odhiambo',age:24,position:'RWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Mike Mbuvi',age:20,position:'RWF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Jeremy "Doku" Kiprop',age:0,position:'CF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    { playername:'Peter omondi',age:24,position:'CF',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},


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

