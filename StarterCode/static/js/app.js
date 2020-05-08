let Tabledata = data;

let DataSetID = d3.select('#selDataSet');

function list (Tabledata){
    let dropdown = DataSetID.append('div');
    data.ForEach((name) => {
        let row = DataSetID.append('li');
    }) 
};