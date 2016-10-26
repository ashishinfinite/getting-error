var puss=[
{
clickCount:0,
name:"jetty",
id:0,
imgsrc:"img/a.jpg",
status:"newly_borned",
names:[{values:"jetty"},{values:"shetty"}]

},

{
clickCount:0,
name:"sleppy",
id:1,
imgsrc:"img/b.jpg",
status:"newly_borned",
names:[{values:"sleppy"},{values:"hollow"}]
},

{
clickCount:0,	
name:"rowdy",
id:2,
imgsrc:"img/c.jpg",
status:"newly_borned",
names:[{values:"jonty"},{values:"chonty"}]
}]




var model=function(){
 var self=this;
 
 

 this.catsArray=ko.observableArray([]);
 
 puss.forEach(function(deco){

 self.catsArray().push(new Cat(deco));  


  
 });

//console.log(this);

this.cnt=ko.observable(1);
//console.log(this);
this.setcat=function(dae){


console.log(dae);
self.currentCat(dae);

}









this.currentCat=ko.observable(this.catsArray()[this.cnt()]);





this.incrementCounter=function(){
	
  
console.log(this);

	 this.clickCount(this.clickCount()+1);
	 if (this.clickCount()>5){
	 	this.status("Now became infant");
	 }

	  if (this.clickCount()>10){
	 	this.status("Now became Child");
	 }

	  if (this.clickCount()>15){
	 	this.status("Now became Adult");
	 }
	 
    
} 
   
}

var Cat=function(data){
   
	this.name=ko.observable(data.name);
	this.imgsrc=ko.observable(data.imgsrc);
	this.clickCount=ko.observable(data.clickCount);
	this.status=ko.observable(data.status);
	this.names=ko.observableArray(data.names);
	this.id=ko.observable(data.id);
}








ko.applyBindings(new model());
