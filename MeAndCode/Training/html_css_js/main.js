// JavaScript Document
//document.addEventListener("DOMContentLoaded",function(e){
//	document.getElementById('content').style.color = "#0099cc"
//})


$(document).ready(function(){	
	$('#content').css('color','#ff0000');
	
	$('.paratext').css('color','#ff9900');
	
	$('input[name=hobbies]').change(function(){
		console.log($(this).val())
	})
	
	
	$('input[name=hobbies]').eq(1).prop('checked',true);//checkbox checked
	$('input[name=hobbies]').eq(1).prop('disabled',true);//checkbox disabled
	
	
	
	$('input[name=gender]').change(function(){
		console.log($(this).val())
	})
	
	$('input[name=gender]').eq(1).prop('checked',true);// radio checked property
	
	
	
	$('select[name=countries]').change(function(){
		console.log($(this).val())
	})
	
	let office = new DataTable('#office',{
		//paging:false,
	});
		
 
	office.on('click', 'tbody tr', function () {
    	let data = office.row(this).data();
 
    	alert(data[0] + ' who works as ' +data[1] + ' in ' + data[2] + ' office');
	});
	
	
	 $('.countries').select2().on('select2:open',function(){
		 alert("Hey Select2 Opened")
	 })
	
	
	$('.countries').on('select2:select', function (e) {
	  // Do something
		
		alert($(this).val())
	});
	
//	setTimeout(function(){
//		$('.countries').select2('destroy');
//	},5000)
	
})