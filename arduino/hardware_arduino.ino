#include "Adafruit_APDS9960.h"

Adafruit_APDS9960 apds;

void setup() {

  Serial.begin(115200);

  if (!apds.begin()) {
    Serial.println("ERRO");
    while (1);
  }

  apds.enableProximity(true);
  apds.enableGesture(true);
}

void loop() {

  uint8_t gesture = apds.readGesture();

  switch (gesture) {

    case APDS9960_UP:
      Serial.println("UP");
      break;

    case APDS9960_DOWN:
      Serial.println("DOWN");
      break;

    case APDS9960_LEFT:
      Serial.println("LEFT");
      break;

    case APDS9960_RIGHT:
      Serial.println("RIGHT");
      break;
  }

  delay(100);
}