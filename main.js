function displayTime(){
    var time  = new Date();
    let hr= time.getHours();
    let m= time.getMinutes();
    let s= time.getSeconds();
    let session = document.getElementById('session');

    if(hr>=12){
        hr.innerHTML=hr-12;
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;

}
setInterval(displayTime);