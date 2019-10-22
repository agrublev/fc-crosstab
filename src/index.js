import "./styles.css";
import crosstab from "crosstab";
import $ from "jquery";

$(function() {
  $("#send").on("click", function() {
    crosstab.broadcast("test", { data: 52 }, null);
  });
  crosstab.on("test", function({ data }) {
    $("#msgs").append(`<li>${data.data}</li>`);
  });
});

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

`;
