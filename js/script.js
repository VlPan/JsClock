function onReady(){
    
    var clock = new Clock("clock",0,"UTC");
    var clock2 = new Clock("clock2",+180,"ETC");

}

function Clock(id,offset,label){
  
    offset = offset || 0;
    label = label || '';
     var d = new Date();
     this.offset = (offset + d.getTimezoneOffset() )*60*1000;
    this.id = id;
    this.label = label;
    
    



    var that = this;
    setInterval(function(){
        that.updateClock();},1000);
    
        this.updateClock();

   

   
         return this;
    
}

   Clock.prototype.updateClock = function(){
         var date = new Date();
             date = new Date(this.offset + date.getTime());
                
        var Hours = date.getHours();
        var Minutes = date.getMinutes();
        var Seconds = date.getSeconds();

        var clock = document.getElementById(this.id);
        clock.innerHTML =  this.formatDigits(Hours)+":"+this.formatDigits(Minutes)+":"+this.formatDigits(Seconds)
        +" "+this.label
    
};
    
    Clock.prototype.formatDigits = function (val){
        if(val<10) val = "0"+val;
        return val;
}



window.onload = onReady;