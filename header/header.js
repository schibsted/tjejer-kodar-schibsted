/**
 * Generates header content
 * 
 * @param {Object} newsItem - An array contents multiple articles
 * @returns {String} Returns a header text
 */
function header(newsItem) {   
    return  `<header>
    <h1>    
    <a href="./">DAILY NEWS</a>
    </h1>
        <h2>
        <a href="?category=inspiration">INSPIRATION</a>
        <a href="?category=technigo">TECHNIGO</a>
        <a href="?category=frontend">FRONT-END</a>
        </h2>  
    </header>`;
    
}




