$(function () {
  $('[data-toggle="modal"]').onClick(function () {
    var modalId = $(this).data("target");
    $(modalId).modal("show");
  });
});
