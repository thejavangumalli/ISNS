
/*$("#btn_Submit").click(function(){

          alert("Please Invoke Me!!!"+ $("#username").val()+""+$("#password").val());
          $.ajax({
        	  type:        "POST",
              url:         "http://localhost:8080/isns/v1/users/login",
  		    contentType: "application/json; charset=utf-8",
  			data:        JSON.stringify({ username: $("#username").val(),
                                            password: $("#password").val()
                                            
                                          }),
              success:     function(){
                  alert("You are logged  in!");
              },
          error:function() 
			{
	  alert("You are not logged  in!");
			}
                                          
            });
        });
	  data:        JSON.stringify({ username: $("#username").val(),
        				password: $("#password").val()
		*/
$("#btn_Submit").click(function() {
    //var isbn = this.id;
	var user= $("#username").val();
	var pass=$("#password").val();
    $.ajax({
    url: "/v1/users/login",
    type: 'POST',
    async: 'false',
    data:'username='+user+'&password='+pass,
    contentType: 'application/x-www-form-urlencoded',
    success: function(response) {
    	//alert(response.username);
    	$('#usrnm').text(response.username);
    	$('#deptnm').text(response.department);
    	//alert("hell"+$('#usrnm').text()+"HELL"+$('#deptnm').text());
    	

    $("#Admin").show();
	 $("#login").hide();
	 if(location.port==9001)

	 {

	 $("#delete").hide();

	 }
	 
	fireWater();
	 fireWater2();
	 //storeListener();
	 
    },
    error: function(data,status,er){
    	    	
    	alert("You are Invalid User!!!Please enter Correct Credentials");
    	console.log("error ", data.error+""+status)}
    	
    });
});

$("#btn_Send").click(function() {
    $.ajax({
    url: "/v1/users/storeEmail",
    type: 'GET',
    async: 'false',
    contentType: 'application/json',
    success: function(response) {
    	 
    },
    error: function(data,status,er){
    }
    });
});
$("#deptbtn_Send").click(function() {
    var department= $("#txt_dept").val();
	$.ajax({
    url: "/v1/users/deptEmail",
    type: 'POST',
    async: 'false',
    data:'department='+department,
    contentType: 'application/x-www-form-urlencoded',
    success: function(response) {
    	 
    },
    error: function(data,status,er){
    }
    });
});
$("#personbtn_Send").click(function() {
    var username= $("#txt_person").val();
	$.ajax({
    url: "/v1/users/personEmail",
    type: 'POST',
    async: 'false',
    data:'username='+username,
    contentType: 'application/x-www-form-urlencoded',
    success: function(response) {
    	 
    },
    error: function(data,status,er){
    }
    });
});

