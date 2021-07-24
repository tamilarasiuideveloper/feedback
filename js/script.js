$(document).ready(function(){
//highlight	
var addclass = 'color';
var $cols = $('.ans-div').click(function(e) {
    $cols.removeClass(addclass);
    $(this).addClass(addclass);
});

//left sidebar

	 $(function() {
  var href = window.location.href;
  $('nav a').each(function(e,i) {
    if (href.indexOf($(this).attr('href')) >= 0) {
		$("li a").removeClass('active');
      $(this).addClass('active');
  
    }
  });
});

//datatable

//left-menu 

$('.mobile-Menu').click(function() {
      $(".sidebar-menu.left-admin").toggle( );
});

var open = 'http://localhost/recruitment/assets/images/menubar.png';
var close = 'http://localhost/recruitment/assets/images/close.png';

$('.mobile-Menu').click(function() {
  if ($('.mobile-menubar').attr('src') === open) {
    $('.mobile-menubar').attr('src', close);
  } else {
    $('.mobile-menubar').attr('src', open)
  }
})

//prev-next
  //appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});

});


$(document).ready(function() {
    $('.table, #table1').DataTable( {
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Details for '+data[0]+' '+data[1];
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table',
					"responsive": true
                } )
            }
        }
    } );
} );

