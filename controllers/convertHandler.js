/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let unit = input.match(/[a-zA-Z]+/)[0]
    let result = unit.split(unit)[0]
    let matchSlash = Boolean(result.match(/[/]/))
    
    if(unit === result) {
      return 1
    }
    
    if(matchSlash) {
      let firstNumber = result.split('/')[0]
      let secondNumber = result.split('/')[1]
      
      if(result.split('/')[2]) {
        return 'invalid number'
      }
      
      if(firstNumber.length === 0 || secondNumber.length === 0) {
         return 'invalid number'
      } else {
        return (Number(firstNumber) / Number(secondNumber))
      }
    }
    
    return Number(result);   
    
  };
  
  this.getUnit = function(input) {
    
    let listedUnits = ['gal','l','mi','km','lbs','kg']
    let unit = input.match(/[a-zA-Z]+/)[0].toLowerCase()
    
    let isValidUnit = listedUnits.some(item => {
      return item === unit
    })
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg']
    var expect = ['l','gal','km','mi','kg','lbs']    
    return expect[input.indexOf(initUnit)]
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg']
    var expect = ['gallons','liters','miles','kilometers','pounds','kilograms']    
    return expect[input.indexOf(unit)]
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const kgToLbs = 2.20462;
    const lToGal = 0.26417;
    const kmToMi = 0.62137;
    
    var input = ['gal','l','mi','km','lbs','kg'];
    var convert = [galToL,lToGal,miToKm,kmToMi,lbsToKg,kgToLbs];
    
    return initNum*convert[input.indexOf(initUnit)];
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitFull   = this.spellOutUnit(initUnit);
    let returnUnitFull = this.spellOutUnit(returnUnit);
    
    return `${initNum} ${initUnitFull} converts to ${returnNum} ${returnUnitFull}`;
  }.bind(this);
  
}

module.exports = ConvertHandler;
