var hash = window.location.hash.replace(/^#/, '');
var vars = hash.split('&');
window.aimole = {};
for(var i = 0, l = vars.length; i < l; i++) {
	var pair = vars[i].split('=');
	window.aimole[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
}
aimole.display = JSON.parse(aimole.display);
console.log('aimole', window.aimole);
