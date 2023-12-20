const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  //https://www.youtube.com/watch?v=kueULgDkA5k
  //https://www.youtube.com/watch?v=KST4bGAH-8Y
  //a[0], b, c, d, e, f, g, h, i, j, k, l, m, n, o[1st + 14], p, q, r, s, t, u, v, w, x, y and z
    //message 'attacking tonight' ->key 'OCULORHINOLARINGOLOGY'-> message output 'ovnlqbpvt hznzouz'
    //based on alp;                   0->   14,2
    //1.-> idx +14 (a[i=0] ->o[i + 14])
    //2.-> letter + 2 (t[step 2, i=1] ->c[i + 2] )
    //3.
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');//The text returned by these methods must be uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();

    let res = '';
    let keyIdx = 0;//default 0
    for (let i = 0; i < message.length; i++) {
      const keyChar = key[keyIdx % key.length];
      const shift = alphabet.indexOf(keyChar);

      if (alphabet.includes(message[i])) {
        let charIndex = (alphabet.indexOf(message[i]) + shift) % 26;//modulo of pair
        res += alphabet[charIndex];
        keyIdx++;
      } else {
        res += message[i];
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');//The text returned by these methods must be uppercase
    key = key.toUpperCase();
    key = Array.from(key).map((char) => {
        let index = alphabet.indexOf(char);
        return alphabet[(alphabet.length - index) % 26];
      }).join('');

    return this.encrypt(message, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
