// $(document).ready(function () {
//   const table = $("#pricingTable").DataTable({
//     responsive: true,
//     paging: false,
//     info: false,
//     searching: false,
//     pageLength: 8,
//     lengthChange: false,
//     order: [],
//     columnDefs: [
//       { orderable: true, targets: [1, 2] },
//       { orderable: false, targets: "_all" }
//     ],

//     language: {
//       url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json",
//     },
//   });
// });


$(document).ready(function () {
  $(".pricing-table").each(function () {
    $(this).DataTable({
      responsive: true,
      paging: false,
      info: false,
      searching: false,
      pageLength: 8,
      lengthChange: false,
      order: [],
      columnDefs: [
        { orderable: true, targets: 1 },
        { orderable: false, targets: "_all" }
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json",
      },
    });
  });
});
