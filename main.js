function formattedPhone(phone) {

  let a;

  for (let i = 0; i < phone.length; i++) {

    if (i === 2) {
      a += ' (';
    } else if (i === 5) {
      a += ') ';
    } else if (i === 8 || i === 10) {
      a += '-';
    }
    a += phone[i];
  }

  return a;

}

console.log(formattedPhone('+71234567890'));