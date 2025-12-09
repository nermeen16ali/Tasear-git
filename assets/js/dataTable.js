$(document).ready(function () {
  const table = $("#competitionTable").DataTable({
    responsive: true,
    paging: true,
    info: false,
    pageLength: 8,
    lengthChange: false,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json",
    },
  });

  // Custom search
  $("#tableSearch").on("keyup", function () {
    table.search(this.value).draw();
  });
});
