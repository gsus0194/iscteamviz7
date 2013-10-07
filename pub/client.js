function client(){
	var u;
	d3.json("http://127.0.0.1:3000/RetrieveTeamPerformance",function(error,json){
   		if(error){alert(error)}
   		var TeamPerformance = json.teamperformance;
   		var EmployeeNames = d3.map(TeamPerformance,function(d){
   				alert(d);
   				alert(d.name);
   				return d.name;
   		});
   		u=EmployeeNames;
   	});
   	return u;
}	