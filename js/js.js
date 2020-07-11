setInterval(function () {
	$('#VIP').toggleClass("vip");
}, 400);
$('#click').on('click', function(event) {
	$('.div_drop').toggle(200);
});
function opentab(evt,id) {
	var tabcontent,active;
	tabcontent = document.getElementsByClassName("input_login");
	for (var i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	active = document.getElementsByClassName("opentab");
	for (var i = 0; i < active.length; i++) {
		active[i].className = active[i].className.replace("btn_border"," ");
	}
	document.getElementById(id).style.display = 'block';
	evt.currentTarget.className+= " btn_border";
}
if (document.getElementById("opened")) {
	document.getElementById("opened").click();
}
$('.layout').on('click', function(event) {
	$(this).addClass('hidden');
});
$('.layer').on('click',function(event) {
	$('.modal_popup').addClass('hidden');
});
$('.btn_modal').on('click', function(event) {
	$('.modal_popup').removeClass('hidden');
});