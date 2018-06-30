// Select color input
// Select size input
var height, width, color

$('#sizePicker').submit(function (event){
    event.preventDefault();
    let height = $('#height').val();
    let width = $('#width').val();

// When size is submitted by the user, call makeGrid()

    makeGrid(height, width);
});


function makeGrid(x, y) {
    
    // Your code goes here!
    for (let i = 0; i < x; i++) {
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (let j = 0; j < y; j++) {
            $('#table' + i).append('<td></td>');
        }
    } 

    // add color to cell
    $('td').click(function addColor() {
        let color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } 
        else 
        {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}



