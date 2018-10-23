$('document').ready(function() {
  $("#mintingButton").click(function(){
    $(".how-content").removeClass("show");
    $("#mintingContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#mintingButton").addClass("selected");
  });

  $("#burningButton").click(function(){
    $(".how-content").removeClass("show");
    $("#burningContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#burningButton").addClass("selected");
  });

  $("#receiveButton").click(function(){
    $(".how-content").removeClass("show");
    $("#receiveContent").addClass("show");
    $(".btn-how").removeClass("selected");
    $("#receiveButton").addClass("selected");
  });

  var togglePartnerSelect = function(infoId, stackId) {
    $(".partner-desc").addClass("hidden");
    $(infoId).removeClass("hidden");
    $(".stack").removeClass("selected");
    $(stackId).addClass("selected");
  }

  $("#wbtcdaoInfo").click(function()  {
    togglePartnerSelect("#wbtcdaoInfo", "#stackThree");
  });

  $("#stackThree").click(function()  {
    togglePartnerSelect("#wbtcdaoInfo", "#stackThree");
  });

  $("#merchantsInfo").click(function()  {
    togglePartnerSelect("#merchantsInfo", "#stackTwo");
  });
  $("#stackTwo").click(function()  {
    togglePartnerSelect("#merchantsInfo", "#stackTwo");
  });

  $("#custodiansInfo").click(function()  {
    togglePartnerSelect("#custodiansInfo", "#stackOne");
  });
  $("#stackOne").click(function()  {
    togglePartnerSelect("#custodiansInfo", "#stackOne");
  });
});