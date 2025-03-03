// JavaScript Document
$(document).ready(function(){
	
//	setTimeout(function(){
//		alert("This will trigger after 5 Seconds")
//	},5000)
	
	$('.button').click(function(){
		//alert("This click alert")
		//console.log("This click console")
		
		$('.content').html("This is a paragraph after a click")
		setTimeout(function(){
			$('.content').hide();// Hides Element
			$('.content').empty(); // Cleares the html/ text element inside the dom element
			$('.content').remove(); // Removes the element from the html page
		},3000)
	})
	
	
	var navItems = ["Home", "About Us", "Contact Us", "Careers"]
	
	//console.log("Items of Navigations: " + navItems.length)
	
	//console.log("Third Navigation: "+ navItems[2])
	
	//console.log("Index of Careers: "+ navItems.indexOf("Careers"))
	
	
	for(i=0; i<navItems.length; i++){
		//console.log(navItems[i])
		var listItem = $('<li>').text(navItems[i]);
		
		$('#nav').append(listItem)
	}
	
	
	
	$('#nav li').click(function(){
		//alert("Clicked on a Navigation Element")
		
		alert($(this).text())
	})
	
	
	$('#save').click(function(){
		alert($('input[name=fname]').val())
	})
	
	
	$('input[name=fname]').change(function(){
		console.log("Change: " + $(this).val())
	})
	
	$('input[name=fname]').blur(function(){
		console.log("Blur: " + $(this).val())
	})
	
	
	$('input[name=fname]').keyup(function(){
		console.log("Keyup: "+ $(this).val())
	})
	
	
	
	$( "#datepicker" ).datepicker({
		'showAnim':'slideDown',
		'changeYear': true,
		'minDate': new Date(),
	});
	
	
	
	
});


$(function(){
	
	var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
		alert(getDate( this ))
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
	
	
	function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

})



