export default function DaisyModule() {
  // Daisy Animation
  $(document).ready(function () {
    if ($(".js-daisy").length) {
      $(".js-daisy").daisyjs({
        dotColor: "#fff",
        lineColor: "#fafafa",
      });
    }
  });
}
