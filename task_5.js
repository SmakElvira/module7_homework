class Device {
constructor (name, included, power){
  this.name = name,
  this.included = included || 'off',
  this.power = power
  }
  powerConsumption = function (included, power){
     if (included === "да") 
     {console.log(power)}
     else {console.log(0)}
  }
}

const teapot = new Device('Чайник', 'да', 1024);
teapot.volume = 2000;

const microwave = new Device('Микроволновка', 'да', 524);
microwave.color = 'Silver';

teapot.powerConsumption('да', 1024)
microwave.powerConsumption('да', 524)

