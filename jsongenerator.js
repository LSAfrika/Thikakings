const fs=require('fs')
const path=require('path')


const playerstats=[

    { playername:'Francis "icy" Njoro',age:19,position:'GK',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fnjoro%20profile.png?alt=media&token=13f1e843-d8ed-42ef-996b-efd4fd085e24',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fnjoro2.png?alt=media&token=e533acf5-6ef0-4152-bb34-9585311bc6f6',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
    { playername:'Akol "Tono" Tong',age:23,position:'GK',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Ftono%20profile.png?alt=media&token=a7980c3c-e464-4878-8634-ec2ed527d4f4',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Ftono2.png?alt=media&token=238856c0-cde8-4125-af03-11a2edf5fce2',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    // { playername:'Felix',age:0,position:'GK',height:1,profileimage:'',fullimage:'',goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
  
  
    { playername:'Calvince Junior',age:20,position:'GK',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fjunior%20profile.png?alt=media&token=fb021c34-a3ce-4180-a73e-048bb3bd8086',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fjunior1.png?alt=media&token=442a3c3b-15ee-4984-9c41-c047d13c205b',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    
    { playername:'philip "Rolex" Otieno ',age:21,position:'LB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fphilip%20profile.png?alt=media&token=2914bfd8-a604-4bcd-b753-0595135e403d',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fphilip2.png?alt=media&token=040e92b6-60e1-4764-9eb7-d49cc760dfba',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    { playername:'Alfred "Masai" Seleon',age:23,position:'LB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmasai%20profile.png?alt=media&token=d542fb1f-ece8-4833-94b7-9bdebabef6d9',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmasai2.png?alt=media&token=562a7484-6a64-468b-8bd4-418f02cbab80',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
    { playername:'Peter Ouma',age:22,position:'CB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fpeter2%20profile.png?alt=media&token=678310f5-036b-4b00-953a-a70a79181621',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fpeterouma1.png?alt=media&token=4cf90a12-e310-4512-b27a-2e7a9aa71d1a',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
    { playername:'Mike "Bonnie" Mutua',age:0,position:'CB',height:1,
      profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fbonnie%20profile.png?alt=media&token=f85b2958-0940-43dd-9f8b-18c5e3a081d8',
      fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fbonnie2.png?alt=media&token=6f3d0ab6-d06a-43ff-84de-4a4ef2182bd8',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'left'},
    
    
    { playername:'Benjamin Murigi',age:19,position:'CB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fbenjamin%20profile.png?alt=media&token=b532b719-58da-4dee-b6bd-794fd39fd293',
      fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fbenjamin2.png?alt=media&token=d8ba5ee3-16ed-4574-823f-481a978773af',
      goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
      { playername:'Ian Wamichwe',age:22,position:'CB',height:1,
      profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fwamichwe%20profile.png?alt=media&token=b7d8ee22-da4d-4c8d-83ca-ef52e24e9e17',
      fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fwamichwe2.png?alt=media&token=55e2145e-00ab-47bd-844f-767c66e0c31a',
      goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    
    { playername:'Melisha Odhiambo',age:20,position:'RB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmalisia%20profile.png?alt=media&token=1649f990-fb25-4cf0-bf08-031889226db9',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmalisia1.png?alt=media&token=74dbc4b9-00c1-4912-bf55-c5ef2f7ffc08',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    
    { playername:'Muthee',age:20,position:'RB',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmuthee%20profile.png?alt=media&token=79da01d8-9877-4f0c-a84e-ee70495b920f',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmuthee1.png?alt=media&token=32ed51a1-189d-435b-acb7-d948fda5f0a3',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    
    { playername:'Dickson "Ras" Asava',age:20,position:'CDM',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmbuvi%20profile.png?alt=media&token=be9f903c-b0c6-4e18-844d-10978495e5ee',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmbuvi1.png?alt=media&token=a37721dc-1200-4dec-b43d-1ba34778b0be',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
    { playername:'Michael "Chopo" Mutyang`a',age:24,position:'CDM',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fchoppo%20profile.png?alt=media&token=11d986cd-73a7-4a7a-9b44-27bcd5d31bfe',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fchopo1.png?alt=media&token=f5402a8f-dfa6-4e87-99a9-27e91f666e3f',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
   
   
    { playername:'Abdallah Juma',age:22,position:'AMF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fjuma%20profile.png?alt=media&token=b5f2ab84-1dc2-488c-bcd6-a86f4974e13e',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fjuma2.png?alt=media&token=e491a9df-bc13-4dda-ad4e-f9d3eb864a51',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
  
  
  
    { playername:'Martin "cheza ngoma" Mwala',age:0,position:'AMF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmartin%20profile.png?alt=media&token=cf21d6e2-5ceb-455f-be5b-e9d8709c6838',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmartinmati2.png?alt=media&token=91a5c5bf-c56b-4579-b022-a3ca8025d3f2',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
    { playername:'Nyop Gathiang "Ox" Kuol Gal',age:0,position:'AMF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fox%20profile.png?alt=media&token=05479310-308c-4fc0-a1d9-1221b9477d27',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fox2.png?alt=media&token=4f819a92-619c-47b1-ae5f-9905c3677f19',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    
    { playername:'Dennis "partey" Miruye',age:24,position:'AMF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fpartey%20profile.png?alt=media&token=ee51d049-6e7d-4c80-8561-9654084d4a40',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fpartey2.png?alt=media&token=fad9b7af-a071-4dcc-8ecd-83e8a8395f35',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
    { playername:'Abdulhakim Abdukmalik',age:21,position:'LWF',height:1,
      profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fabdulprofile.png?alt=media&token=00acbc2a-4317-4324-9e90-ce476b8cfe2b',
      fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fabdul2.png?alt=media&token=2a8b5bac-1c90-424a-ab9b-100d26fcbb4f',
      goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
      { playername:'Frank Meso "messi" Moyi',age:22,position:'LWF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Ffrank%20profile.png?alt=media&token=6e26539a-ea13-429f-83ca-623f6c4d132a',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Ffrank1.png?alt=media&token=78368454-1e7f-4fcc-8879-db5c3b812ec5',
    goals:2, assists:1,cleansheet:0,app:0,sub:0,foot:'right'},
    
    
    { playername:'Elvis Ian Odhiambo',age:24,position:'RWF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Felvis%20profile.png?alt=media&token=6d705a0e-b917-4c42-b296-cae118b03f1c',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Felvis2.png?alt=media&token=db3bfdf3-303d-4fdc-bb34-b40353beafe8',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
    

    { playername:'Mike Mbuvi',age:20,position:'RWF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fmbuvi%20profile.png?alt=media&token=be9f903c-b0c6-4e18-844d-10978495e5ee',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fmbuvi1.png?alt=media&token=a37721dc-1200-4dec-b43d-1ba34778b0be',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
   
    { playername:'Jeremy "Doku" Kiprop',age:0,position:'CF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fdoku%20profile.png?alt=media&token=52251d91-cf0e-4aa0-825e-937573345710',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fdoku1.png?alt=media&token=327bc423-7f5d-4789-b43b-ab1639b51fd9',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},
   
   
    { playername:'Peter omondi',age:24,position:'CF',height:1,
    profileimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/profile%2Fpetero1%20profile.png?alt=media&token=d5529fe0-5e02-4602-939b-7947a637665f',
    fullimage:'https://firebasestorage.googleapis.com/v0/b/thikakingss.appspot.com/o/full%2Fpeter1.png?alt=media&token=ce346d41-ee8b-43d4-8c72-0d94aed3e744',
    goals:0, assists:0,cleansheet:0,app:0,sub:0,foot:'right'},


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

