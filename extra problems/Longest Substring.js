/* نعمل تابع اول شي بشيل كلشي تكرارات بال string بعدين بنعرف متغير بنزيده ضمن حلقة for 
و لحتى نقدر نحذف المتكرر لازم نتعامل مع كل حرف لحال مو كسلسلة نصية كاملة ء
*/


const LongestSubstring = (str) => {
let letters = str.split("");
let word ="";
let num = 0 ;
for (let i = 0; i < letters.length; i++) {
        let count = 0;
        for (let j = 0; j < letters.length; j++) {
            if (letters[j] === letters[i]) {
             count = count + 1
            }
        }
        if (count == 1)
             {
            word = word + letters[i]   // if it shows only once add to word directly // 
        }
        else if (count > 1) // if it shows more than once check if it's not added before to newarr add it //
            {
            if (!word.includes(letters[i])) {
               word = word+ letters[i];
            }
        }
    }
     word.trim(" "); 
    for (let k =0 ; k<word.length ; k++){
      num = num +1;
    }
    return num ;
}


console.log(LongestSubstring("abcdefabc"))