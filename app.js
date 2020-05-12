// Add names into dropdown
function init() {
    d3.json('samples.json').then((d) => {
        var names = d.names;
        var sel_id = d3.select('#selDataset')
        // console.log(names);
    
        names.forEach((n) => {
            // console.log(n);
            sel_id
                .append('option')
                .text(n)
                .property('value', n);
            });    
})}

nameID = 940;
d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged () {
    var ddMenu = d3.select("#selDataset");
    var nameID = ddMenu.property("value");
    d3.json('samples.json').then((d) => {
        var data = d.metadata;
        var sample = d.samples;
        var metadata = data.filter(data => data.id == nameID);
        var samples = sample.filter(data => data.id == nameID);
    });    
}

function table (metadata) {

}

init();