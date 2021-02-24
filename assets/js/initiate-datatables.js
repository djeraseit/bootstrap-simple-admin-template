/*
var dataSet = $.getJSON("phone_history.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    //var dataSet = json;
    // return json;
});
*/
/*
fetch("./phone_history.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
*/

// Initiate datatables in roles, tables, users page
/*
$('#dataTables-callhistory').DataTable({
    responsive: true,
    pageLength: 20,
    lengthChange: false,
    searching: true,
    ordering: true,
    data: dataSet,
    columns: [
        {title: "Name"},
        {title: "Number"},
        {title: "Direction"},
        {title: "Date"},
        {title: "Time"},
        {title: "Events"}
            ]
});
*/
// Initiate datatables in roles, tables, users page

$('#dataTables-example').DataTable({
    responsive: true,
    pageLength: 20,
    lengthChange: false,
    searching: true,
    ordering: true  
});