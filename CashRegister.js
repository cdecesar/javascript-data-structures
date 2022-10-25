function calculateCid(cid) {
    var result = 0;
    for (let i = 0; i < cid.length; i++){
      result += cid[i][1];
    }
    return result
}
  
function calculateChange(change, cid) {
  
    var result = [];
    var change_ = change;
    
    var data = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100,
    }
    var total = 0;
    for (let i = cid.length - 1; i >= 0; i--){
      let m = cid[i];
      if (change_ >= data[m[0]] && change_ != 0 && m[1] != 0) {
        let counter = 0;
        while (counter * data[m[0]] < m[1]) {
          change_ = Math.round(change_ * 100) / 100
          
          let c = Math.floor(change_ / data[m[0]])
          if (c != 0){
            counter += 1;
            change_ -= data[m[0]];
          } else {
            break
          }
        }
        result.push([m[0], counter * data[m[0]]])
        total += counter * data[m[0]]
      } 
    }
    return {'result': result, 'total':total}
}
  
function addjustClosed(result) {
    var data = [
      "PENNY",
      "NICKEL",
      "DIME",
      "QUARTER",
      "ONE",
      "FIVE",
      "TEN",
      "TWENTY",
      "ONE HUNDRED"
    ]
    var r = [];
    for (let i = 0; i < data.length; i++){
      let m = data[i];
      let inList = false;
      let indexJ;
      for (let j = 0; j < result.length; j++){
        if (result[j][0] == m) {
          inList = true;
          indexJ = j
          break
        }
      }
      if (inList == false) {
        r.splice(i, 0, [m, 0]);
      } else {
        r.splice(indexJ, 0, result[indexJ]);
      }
    }
    return r
}
  
function checkCashRegister(price, cash, cid) {
    var money = calculateCid(cid)
    var changeDue = cash - price;
    // check if there is enough money to pay back the change
    if (price > cash || money < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    // calculation of the change that is due
    var changeArragement = calculateChange(changeDue, cid)
  
    if (changeArragement.total < changeDue) {
      // not able to pay back the change
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else{
      if (changeArragement.total == changeDue && changeDue == money) {
        // just enough money to pay back the change
        return {status: "CLOSED", change: addjustClosed(changeArragement.result)}
      }
      else {
        // more than enough money available
        return {status: "OPEN", change: changeArragement.result}
      } 
    }
}