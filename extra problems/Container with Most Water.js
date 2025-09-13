/*  مساحة التخزين space = width*hieght  
width = deffrence between 2 elements and hieght is the smallest elements between those tow 
يعني بدنا نجرب كل عنصرين نشوف المسافة يلي بينن و ناخد  الاصغر بينن لتكون الطول و نطلع المساحة 
بعدين نقارن بين المساحات يلي طلعت معنا و نكتب المساحة الاكبر 
كل مساحةرح تطلع رح نخزنها ضمن متغير مشان نرجع نقارنا مع المساحة يلي رح تطلع بعدا و ناخد الاكبر بينن 
*/

const ContainerwithMostWater =( arr ) => {
   let width ;
   let hieght ; 
   let s ;
   let max_s =0 ;
   for ( let i=0 ; i<arr.length ; i++ ){
    for ( let j = i+1 ; j<arr.length ; j++ ){
        width = arr[i] - arr[j] ; 
        hieght = Math.min ( arr [i] , arr[j]);
        s = width*hieght ;
        max_s = Math.max(max_s , s )
    }
   }
   return max_s;
}




console.log (ContainerwithMostWater([1,5,4,3]))