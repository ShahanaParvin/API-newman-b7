const newman = require('newman');

newman.run({
collection: require("./collection/APITest.json"),

reporters: 'htmlextra',
iterationCount: 1,
reporter: {
htmlextra:{
    export: './Reports/report.html',
}

}
}, function (err){
    if (err){ throw err;}
    console.log('collection run completed');
});