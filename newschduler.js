
var exec=require ('child_process').exec;

//var interval;

function data(a,b,c){
var time=a*1000+b*60*1000+c*60*60*1000;   //milisec,sec,hr
var stop=new Date().getTime();
var utc=stop+time;
  while(new Date().getTime()< utc)
  exec("sudo ./backup.sh  ", function (err,stdin,stdout){
 if (err) throw err;
 console.log('stdin'+stdin);
console.log('stdout'+stdout);
});
  console.log("backup started");
}

  while(1)
  {
  data(process.argv[2],process.argv[3],process.argv[4]);
//data();
  }
