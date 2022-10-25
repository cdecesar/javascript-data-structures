function telephoneCheck(str) {
    // 555 555 5555
    let repeatRegex1 = /\d{3} \d{3} \d{4}/;
    // 1 555 555 5555
    let repeatRegex2 = /1 \d{3} \d{3} \d{4}/;
    // 5555555555
    let repeatRegex3 = /\d{10}/;
    // (555)555-5555
    let repeatRegex4 = /\(\d{3}\)\d{3}\-\d{4}/;
    // (555) 555-5555
    let repeatRegex5 = /\(\d{3}\) \d{3}\-\d{4}/;
    // me pilla 555-555-5555
    let repeatRegex6 = /\d{3}\-\d{3}\-\d{4}/;
    // 1 555-555-5555
    let repeatRegex7 = /1 \d{3}-\d{3}-\d{4}/;
    // 1 (555) 555-5555
    let repeatRegex8 = /1 \(\d{3}\) \d{3}-\d{4}/;
    // 1(555)555-5555
    let repeatRegex9 = /1\(\d{3}\)\d{3}-\d{4}/;
    
    let t = repeatRegex1.test(str); 
  
    if (t) {
      if (str.length == 12) {
        return true
      } 
    } if (repeatRegex2.test(str)) {
      if (str.length == 14) {
        return true
      } 
    } if (repeatRegex3.test(str)) {
      if (str.length == 10) {
        return true
      } 
    } if (repeatRegex4.test(str)) {
      if (str.length == 13) {
        return true
      } 
    } if (repeatRegex5.test(str)) {
      if (str.length == 14) {
        return true
      } 
    } if (repeatRegex6.test(str)) {
      if (str.length == 12) {
        return true
      } 
    } if (repeatRegex7.test(str)) {
      console.log('ey')
      if (str.length == 14) {
        return true
      } 
    } if (repeatRegex8.test(str)) {
      console.log('ey')
      if (str.length == 16) {
        return true
      } 
    } if (repeatRegex9.test(str)) {
      console.log('ey')
      if (str.length == 14) {
        return true
      } 
    }
    return false
}