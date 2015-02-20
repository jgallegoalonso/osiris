int numeroetapas = 5;

camello cam = new camello();
int[] etapas = new int[numeroetapas]; 

PImage camel;

void setup()
{
    
    size(500,300);
    etapas[0]=20;
    noStroke();
    frameRate(30);
    camel = loadImage("http://elportalibros.com/wp-content/uploads/2014/10/camellos3.jpg");
}


void draw(){
     background(#79d0e1);
     text("Utiliza las flechas para moverte ->,<- y para cargar y descargar bidones arriba y abajo", 10, 20,400,50);
    stroke(126);
    strokeWeight(4);
    line(10,200,390,200);
    
    
    for(int i=0;i<=numeroetapas; i++){
      stroke(126);
    strokeWeight(10);
      point(10+i*(380/numeroetapas),200);  
    }
   for(int i=0;i<=numeroetapas-1; i++){
      fill(0, 102, 153);
    text(etapas[i], 10+i*(380/numeroetapas), 230);
    }
     stroke(215);
     strokeWeight(10);
     point(10+(cam.x)*(380/numeroetapas),200); 
     image(camel,10+(cam.x)*(380/numeroetapas),150,50,50);
     text("Bidones cargados="+cam.bidones, 10, 100);
}



void keyPressed() {
  if (key == CODED) {
    if (keyCode == RIGHT) {
      cam.avanza();
      
    } else if (keyCode == LEFT) {
     cam.retrocede();
     
    } 
   else if (keyCode == UP){
    cam.cogebidon();
    
    
  } else if (keyCode == DOWN){
    cam.sueltabidon();
    
    
  }

}
if ((key=='r')||(key=='R')){
if(cam.vida==false){
cam.restart();}

}
  if(cam.vida==false){
    background(#e1ca79);
    fill(0, 102, 153);
    text("You are death, R para volver a jugar", 10, 60);
    noLoop();
    
    }
    if(cam.vida==true){
      loop();
    
    
    }
    
}





class camello  {
    int x;
    int bidones;
    boolean vida;
    
   
    
    camello()  {
        vida=true;
        x=0;
        bidones=0;
    }
    
    void cogebidon()  {
        if ((this.bidones<3) && (etapas[this.x]>0)){
        this.bidones=this.bidones+1;
        etapas[this.x]=etapas[this.x]-1;
        }
    }
   void sueltabidon() {
       if (this.bidones>0){
        bidones = bidones -1;
        etapas[this.x]=etapas[this.x]+1;
       }
     
   }
   void avanza(){
       if(this.x<numeroetapas){
       this.x=this.x+1;
       this.bidones = this.bidones -1;  
       if (this.bidones<0){
       this.vida=false;
       }   
       }
   }
   void retrocede (){
       if (this.x>0){
            this.x=this.x-1;  
            this.bidones = this.bidones -1;  
            if (this.bidones<0){
       this.vida=false;
       }  
               }
   }
   void restart(){
   this.x=0;
   this.vida=true;
   this.bidones=0;
   etapas[0]=20;
   for(int i=1;i<=numeroetapas-1; i++){
     etapas[i]=0;
     
    }
   
   
   
   }
   }

 


 
