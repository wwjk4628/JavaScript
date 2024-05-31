    // 페이지 초기화
    // window.addEventListener("load", callback)
    $(document).ready(event => {

      function testAttribute() {
        // #main-image 요소 선택
        let mainImage = $("#main-image");
        console.log(mainImage);

        //  속성 목록 확인 : getAttributeNames
        //  jQuery 포장 Urwrapping
        console.log(mainImage[0].getAttributeNames());

        // title 속성 조회
        console.log("title", mainImage.attr("title"));

        $("#main-image").attr("title", `제품: ${$("#main-image").attr("title")}`);

        $(".sub-image").each(function () {
          $(this).attr("title", `제품: ${$(this).attr("title")}`)
        });
        console.log($("#main-image").attr("src"));
      }
      // testAttribute();
      console.log($("#main-image").attr("title"));

      $("#keyword").change(function () {
        $("#btn-search").text($(this).val() + " 검색");
        $(this).val("");
        $("#keyword").focus();
      });

      // $("#btn-search").click(function () {
      //   $("#btn-search").text($("#keyword").val() + " 검색");
      //   $("#keyword").val("");
      //   $("#keyword").focus();

      // });

      // $("#main-image").click(function (event) {
      $("#main-image").click(event => {
        // JavaScript 함수의 this는 해당 함수를 호출한 객체를 의미
        // let mainImage = this; //  jQuery 이벤트 핸들러의 this == event.target
        let mainImage = event.target;
        console.log(mainImage);

        alert("메인 이미지 클릭");
      })

      // 집합 객체도 루프를 돌리지 않고 이벤트를 연결하면 하위 요소들에 공통적으로 연결
      // $(".sub-image").click(function () {
      //   $("#main-image").attr("src", $(this).attr("src"));
      //   $("#main-image").attr("title", $(this).attr("title"));
      //   $("h2").text($(this).attr("title"));
      // })
      $(".sub-image").on("click", event => {
        $("#main-image").attr({ src: $(event.target).attr("src"), title: $(event.target).attr("title") });

        $("#product-info > h2").text($(event.target).attr("title"));
      })


    })
