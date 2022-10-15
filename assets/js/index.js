$("#add_user").submit((e) => {
  //   e.preventDefault();
  alert("Data Inserted Successfully!");
});

$("#update_user").submit((e) => {
  e.preventDefault();

  var unindexed_array = $("#update_user").serializeArray();
  var data = {};

  $.map(unindexed_array, (item, index) => {
    data[item["name"]] = item["value"];
  });

  console.log(data);

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done((response) => {
    alert("Data Updated Succesfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click((e) => {
    var id = $(this).attr("dataId");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm(`Do you really want to delete this record? with id ${id}`)) {
      $.ajax(request).done((response) => {
        alert("Data Deleted Succesfully!");
        location.reload();
      });
    }
  });
}
