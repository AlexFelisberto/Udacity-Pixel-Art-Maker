// Select color input
const table = $("#pixel_canvas");
// Select size input
const row = "<tr></tr>";
const column= "<td id='addColor'></td>"
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
  event.preventDefault();
  makeGrid();
});

// Your code goes here!
function makeGrid() {

    let rowNum = $('#input_height').val();
    let columnNum = $('#input_width').val();

    table.children().remove();

    for (var n = 1; n <= rowNum; n++){
		    $("#pixel_canvas").append(row); //add row
		      for (var m = 1; m <= columnNum; m++){
			         $("#pixel_canvas").children().last().append(column) //add column
		}
	};

};

table.on('click', '#addColor', function() {
   let colores = $('#colorPicker').val();

   if($(this).attr('style')){ //check if an attr has been assign already

      $(this).removeAttr('style'); //clears the attr
        } else {
          $(this).css('background-color', colores); //add new attr
    }
 });
