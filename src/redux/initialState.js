const INITIALSTATE = {
    htmlCode: '<!--\n\tBased on a pen from Nooray Yemon.\n\thttps://codepen.io/yemon/pen/erJjOJ\n\n\tTry your own code!\n-->\n\n<div>Made with ❤ and React.</div>\n',
    cssCode: 'html, body {\n\theight: 100%;\n\tmargin: 0;\n}\n\nbody {\n\tbackground: #2D2D2D;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 2.4em;\n\tfont-family: "Monoton", cursive;\n}\n\ndiv {\n\tposition: relative;\n}\n\nspan {\n\tdisplay: inline-block;\n\ttransition: all ease 0.9s;\n\topacity: 0;\n\tmin-width: 10px;\n}\n',
    jsCode: 'function _(x) {\n\treturn document.querySelectorAll(x);\n}\n\nfunction r(min=0,max=0) {\n\treturn min + Math.round(Math.random() * (max-min));\n}\n\n_(\'div\')[0].innerHTML = (\'<span>\' +  _(\'div\')[0].innerHTML.trim().split(\'\').join(\'</span><span>\') + \'</span>\');\n\nvar frame = 0;\n\nsetInterval(function() {\n\tif (frame%4 === 0)\n\t\tfor (var i = 0; i < _(\'span\').length; i++) {\n\t\t\t_(\'span\')[i].style.opacity = 0;\n\t\t\t_(\'span\')[i].style.color = \'#\' + r(3,9) + r(3,9) + r(3,9);\n\t\t\t_(\'span\')[i].style.transform = \'translate3d(\' + r(-150) + \'px, \' + r(-150) + \'px, 0px) rotate(\' + r(-30,30) + \'deg)\';\n\t\t}\n\n\telse if (frame%4 === 3)\n\t\tfor(var j = 0; j < _(\'span\').length; j++) {\n\t\t\t_(\'span\')[j].style.opacity = 0;\n\t\t\t_(\'span\')[j].style.transform = \'translate3d(\' + r(150) + \'px, \' + r(150) + \'px, 0px) rotate(\' + r(-30,30) + \'deg)\';\n\t\t}\n\n\telse\n\t\tfor (var k = 0; k < _(\'span\').length; k++) {\n\t\t\t_(\'span\')[k].style.transform = \'\';\n\t\t\t_(\'span\')[k].style.opacity = 1;\n\t\t}\n\tframe++;\n}, 1250);\n',
    externalCssArray: [[0, 'https://fonts.googleapis.com/css?family=Monoton']],
    externalCssArrayIndex: 1,
    externalJsArray: [],
    externalJsArrayIndex: 0,
    isLightThemeSelected: false,
    selectedLayout: 'twoAndTwo',
};

export default INITIALSTATE;
