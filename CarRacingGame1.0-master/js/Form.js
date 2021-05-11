class Form{

  constructor(){
      this.input = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement('h3');
      this.title = createElement('h2');
  }

  hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  }

  display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2-50,0);
      
     
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      this.button.position(displayWidth/2+30,displayHeight/2);
      
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          PlayerCount+= 1;
          player.index = PlayerCount
          player.update();
          player.updateCount(PlayerCount);
          this.greeting.html("Hello " + player.name);
          this.greeting.position(displayWidth/2-40,displayHeight/4);
      })
  }
}