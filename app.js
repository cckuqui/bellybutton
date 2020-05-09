// let dropDown = d3.select('#selDataSet');

// function optionChanged (Tabledata){
//     Tabledata.ForEach((number) => {
//         let options = DataSetID.append('option');
//     }) 
// };
// Open Json file with data.
d3.json('../samples.json').then((data) =>{
    console.log(data);
    var d = data;
});