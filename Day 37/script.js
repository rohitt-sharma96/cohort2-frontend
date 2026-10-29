// function abcd(a,b,c,d){
// agar aapne parameter banaye and aapne unme arguments nhi bejhi to fir wo value parameter ki undefined ho jayegi
// }

function abcd(name, greet = "welcome",) {
    console.log(`${greet} here ${name}`)
}

abcd('rahul');
abcd('rahul');
abcd('rahul');
abcd('rahul');
abcd('rohit');
abcd('rohit');
abcd('rohit');
abcd('rohit');