javascript:(function() {    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');    link.type = 'image/x-icon';    link.rel = 'shortcut icon';    link.href = 'https://ssl.gstatic.com/classroom/favicon.png';    document.title='Classroom';    console.log(document.title);    document.getElementsByTagName('head')[0].appendChild(link);})();

// *goes to classroom* HUUH WHY IS THIS A GAMING CENTER??? DID I INSERT THE WRONG LINK 
