const student = {
    name : 'salo',
    class : ['11','12'],
    events : ['Science fair','Bijoy dibos','21 Feb'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top',
        }
    }
}
for(const val in student){
    console.log(val);
    // console.log(student[val]);
}
