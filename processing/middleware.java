import processing.serial.*;
import java.awt.Robot;
import java.awt.event.KeyEvent;

Serial porta;
Robot robot;

void setup() {

  size(400,200);

  println(Serial.list());

  porta = new Serial(this, "COM12", 115200);

  porta.bufferUntil('\n');

  try{
    robot = new Robot();
  }
  catch(Exception e){
    e.printStackTrace();
  }
}

void draw(){
  background(40);
  fill(255);
  text("Aguardando gestos...",20,30);
}

void serialEvent(Serial p){

  String comando = trim(p.readString());

  println(comando);

  if(comando.equals("LEFT")){
    pressiona(KeyEvent.VK_LEFT);
  }

  if(comando.equals("RIGHT")){
    pressiona(KeyEvent.VK_RIGHT);
  }

  if(comando.equals("UP")){
    pressiona(KeyEvent.VK_UP);
  }

  if(comando.equals("DOWN")){
    pressiona(KeyEvent.VK_DOWN);
  }
}

void pressiona(int tecla){

  robot.keyPress(tecla);
  robot.keyRelease(tecla);

}