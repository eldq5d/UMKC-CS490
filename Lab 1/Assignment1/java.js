function onOff(obj) {
    var n;
    for(n=1;n<=1;n++){
        document.getElementById('cat'+n).style.display = 'none';
    }
    for(n=1;n<=4;n++){
        if (n == obj) {
            document.getElementById('time'+n).style.display = 'block';
        } else {
            document.getElementById('time'+n).style.display = 'none';
        }
    }
    return false;
}
function timeOnOff(obj){
    var n;
    for(n=1;n<=12;n++){
        if (n == obj) {
            document.getElementById('cat'+n).style.display = 'block';
        } else {
            document.getElementById('cat'+n).style.display = 'none';
        }
    }
    return false;
}