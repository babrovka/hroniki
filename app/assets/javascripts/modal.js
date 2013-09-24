$(document).ready(function() {
	
	$("#suggest_hronik").on('click', function () {
		$(".wrapper, .footer").addClass("blur");
		$("#modal").show();
	});
	
	$(".close_modal").on('click', function () {
		$(".wrapper, .footer").removeClass("blur");
		$("#modal").hide();
	});

/*file_input*/	

	var wrapper = $('<div/>').css({height:0,width:0,'overflow':'hidden'});
	var fileInput = $(':file').wrap(wrapper);

	fileInput.change(function(){
	    $this = $(this);
	    $('#file').text($this.val());
	})

	$('#file').click(function(){
	    fileInput.click();
	}).show();
	
/*---*/

	
	
	$("#suggest_submit").on('click', function () {
		$("#new_suggest").submit();
	});
	
	$('#new_suggest').on('ajax:success', function(data, response, xhr) {
    if (response.status == 'ok') {
      scroll(0,0)
	  $(".wrapper, .footer").removeClass("blur");
	  $("#modal").hide();
      $('#suggest_sent').show().fadeOut(4000);
    }
    });


	$(".wrapper, .footer").addClass("blur");
	$("#modal").show();
	
/*date-picker*/
	
	$(function() {
	    $('#alt_date').datepicker({
		    altField: "#suggest_date",
			onSelect: function(dateText, inst) 
			  {
			  datePieces = dateText.split('.');
			  number = datePieces[0];
			  month = datePieces[1];
		      $("#number").html(number);
			  $("#month").html(month);
			  }
			
		});
		
	    $('#date').click(function() {
	        $('#alt_date').datepicker('show');
	    });
	
	});
	
	$('#suggest_comment').maxlength({   
    events: [], // Array of events to be triggerd    
    maxCharacters: 80, // Characters limit   
    status: false, // True to show status indicator bewlow the element    
    statusClass: "status", // The class on the status div  
    statusText: "character left", // The status text  
    notificationClass: "notification",	// Will be added when maxlength is reached  
    showAlert: false, // True to show a regular alert message    
    alertText: "You have typed too many characters.", // Text in alert message   
    slider: false // True Use counter slider    
  });
	
	
});

jQuery(function($){
        $.datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3c;Пред',
                nextText: 'След&#x3e;',
                currentText: 'Сегодня',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Января','Февраля','Марта','Апреля','Мая','Июня',
                'Июля','Августа','Сентября','Октября','Ноября','Декабря'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                weekHeader: 'Не',
                dateFormat: 'dd.M.yy',
				altFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['ru']);
});

/*esc*/

$(document).keyup(function(e) {
  if (e.keyCode == 27) { 
	$(".wrapper, .footer").removeClass("blur");
	$("#modal").hide();
	 }   // esc
});