const ctx = document.getElementById("kpiChart");

new Chart(ctx, {

type:"bar",

data:{
labels:[
"PHU",
"Green Viability",
"Capital Formation",
"EMR Adoption"
],

datasets:[{

label:"Performance %",
data:[100,93,33,82]

}]

},

options:{
responsive:true
}

});


const ctx2 = document.getElementById("budgetChart");

new Chart(ctx2, {

type:"pie",

data:{
labels:[
"PHU",
"Green Tool",
"Capital Dev",
"EMR System"
],

datasets:[{

data:[
10415200,
45000000,
265000000,
3160000
]

}]

}

});