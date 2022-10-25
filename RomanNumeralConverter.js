function thousands(c) {
    var result = '';
    for (let i = 0; i < c; i++){
      result += 'M'
    }
    return result
}
  
function hundreds(c) {
    var result = '';

    if (c <= 3){
        for (let i = 0; i < c; i++){
        result += 'C'
        }
        return result
    } else if (c == 4) {
        return 'CD'
    } else if (c == 9) {
        return 'CM'
    } else if (c == 5) {
        return 'D'
    } else {
        result += 'D'
        for (let i = 0; i < c - 5; i++){
        result += 'C'
        }
        return result
    }
}
  
function tenths(c) {
    var result = '';
    
    if (c <= 3){
      for (let i = 0; i < c; i++){
        result += 'X'
      }
      return result
    } else if (c == 4) {
      return 'XL'
    } else if (c == 9) {
      return 'XC'
    } else if (c == 5) {
      return 'L'
    } else {
      result += 'L'
      for (let i = 0; i < c - 5; i++){
        result += 'X'
      }
      return result
    }
}
  
function units(c) {
    var result = '';
    
    if (c <= 3){
      for (let i = 0; i < c; i++){
        result += 'I'
      }
      return result
    } else if (c == 4) {
      return 'IV'
    } else if (c == 9) {
      return 'IX'
    } else if (c == 5) {
      return 'V'
    } else {
      result += 'V'
      for (let i = 0; i < c - 5; i++){
        result += 'I'
      }
      return result
    }
}
  
function convertToRoman(num) {
    var result = '';
    var number = num;
    var c, r;
    let divider = 1000;
  
    // while loop that iterates through all posible combinations
    while (divider >= 1 && r != 0){
      c = Math.floor(number / divider);
      r = number % divider;
  
      if (c != 0) {
          // depending on the value of divider, some function will be called
          if (divider == 1000) {
            result += thousands(c);
          } else if (divider == 100) {
            result += hundreds(c);
          } else if (divider == 10) {
            result += tenths(c);
          } else {
            result += units(c);
          }
      }
      // values are updated for the next iteration of the loop
      number = r;
      divider /= 10;
    }
    return result;
}