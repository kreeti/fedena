// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

//= require jquery
//= require jquery_ujs
//= require jquery-ui

//= require prototype
//= require prototype_ujs
//= require prototype_ujs.document
//= require effects
//= require dragdrop
//= require controls

document.observe("dom:loaded", function() {
    $$('object').each(function(obj){
        a  = document.createElement('param');
        a.name = 'wmode';
        a.value = 'transparent';
        obj.appendChild(a);
    });

    load_menu_from_plugins();
});

$jq = jQuery.noConflict()

$jq(function() {
  $jq("#datepicker").datepicker();
  $jq("#datepicker1").datepicker();
});

$jq(function (){
	var dateInput = $jq("#datepicker");
	var format = 'yy-mm-dd';
	dateInput.datepicker({dateFormat: format});
	dateInput.datepicker('setDate', $jq.datepicker.parseDate(format, dateInput.val()));
});
