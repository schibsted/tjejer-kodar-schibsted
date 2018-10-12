/**
 * Generates list content
 * <br>
 * @param {Object} data - An array contents multiple articles
 * @returns {String} Returns a list text
 */
function list(data) { 
    console.log(data);
    console.log('test'+' '+'hey');
    var text='';
    $.each(data, function(index, value) {
        text = text+'<p class="text"><img class="resize" src="'+value.image+'"><br><a href="./index.html?article='+index+'">'+value.title+'</a></p>';
        console.log(index, value.image);
    });
    return text;
    
} 

