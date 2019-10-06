function distFromAverage(){
    
    let sum;
    let newTab = [];

    for(i=1; 1<= tab.length;i++) {
        sum = sum + tab(i);
    }

    sum = sum/tab.length
    
    tab.forEach(el => {
        newTab.push(el-sum);
    })
    return(newTab);
}

let tab = [1,2,3,4,5,6,7]

distFromAverage(tab);

//zadanie 1 
var cost favouriteFruits = ['apple','orange','banana'];
console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.length - 1]);

for (var i = 0; i <= favouriteFruits.length; i++){
    console.log(favouriteFruits[i]);
}
//zadanie 3
var tab = [1,2,3,4]
function printTable(array){
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }

}
printTable(tab);