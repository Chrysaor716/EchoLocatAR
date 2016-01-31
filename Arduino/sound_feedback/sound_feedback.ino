/*  
 *  Function: If the sound sensor senses a sound that is up to the threshold you set in the code, the LED is on for 200ms.
 *  Hardware: Arduino Uno, Base Shield v2.0, Grove - Sound Sensor v1.6, Grove - LED
 */

/*macro definitions of the sound sensor and the LED*/
#define LEFT_SENSOR A0
#define MID_SENSOR A1
#define RIGHT_SENSOR A2
#define LED 3      // Test LED that lights up when sound reaches a threshold

//#define THRESHOLD_VALUE 800 // Threshold to turn on LED: 800.00*5/1024 = ~3.9v
void setup() 
{
    Serial.begin(9600);
    pins_init();
}
 
void loop() 
{
  int leftSensorValue = analogRead(LEFT_SENSOR); // Get electrical signal readings from A0
  int midSensorValue = analogRead(MID_SENSOR); // Get electrical signal readings from A1
  int rightSensorValue = analogRead(RIGHT_SENSOR); // Get electrical signal readings from A2

  //  Print to terminal
//  Serial.print("Left sensor value: ");
//  Serial.println(leftSensorValue);
  Serial.print("Middle sensor value: ");
  Serial.println(midSensorValue);
  delay(3000);
//  Serial.print("Right sensor value: ");
//  Serial.println(rightSensorValue);
}

void pins_init()
{
  pinMode(LED, OUTPUT);
  pinMode(LEFT_SENSOR, INPUT);
  pinMode(MID_SENSOR, INPUT);
  pinMode(RIGHT_SENSOR, INPUT);
}
void turnOnLED()
{
  digitalWrite(LED, HIGH);
}
void turnOffLED()
{
  digitalWrite(LED, LOW);
}
