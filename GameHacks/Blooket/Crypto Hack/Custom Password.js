javascript:(function()%7Bvar%20iframe%20%3D%20document.createElement('iframe')%3B%0Aiframe.style.display%20%3D%20'none'%3B%0Adocument.body.appendChild(iframe)%3B%0Awindow.prompt%20%3D%20iframe.contentWindow.prompt%3B%0A%0Avar%20hack%20%3D%20Object.values(document.querySelector('%23app%20%3E%20div%20%3E%20div'))%5B1%5D.children%5B1%5D%5B'_owner'%5D.stateNode%3B%0Avar%20pass%20%3D%20prompt(%22What%20password%3F%22%2C%20%22password%22)%3B%0A%0Ahack.setState(%7B%0A%09password%3A%20pass%0A%7D)%3B%7D)()%3B

// Time to  ruin everyone's day with this.
