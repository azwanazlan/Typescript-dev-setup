class Program {
    isPalindrome(x: number): boolean {

        const input = x.toString();
        const reverseInput = input.split('').reverse().join('');

        if (reverseInput === input) {
            return true;
        } else {
            return false;
        }
    };
}

const prog = new Program();
const isPalindrome = prog.isPalindrome(121);

if(isPalindrome){
    console.log('This is a Palindrome');
} else {
    console.log('This is NOT a Palindrome');
}
