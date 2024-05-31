
function addItem() {
    // ul#list 에 child li를 추가하는 함수
    // input#item의 value -> 정제
    let item = $("#item").val();
    console.log(item);

    if (item.length > 0) {
        //      li 생성 콘텐츠 설정
        let itemNode = $("<li>");
        itemNode.text(item);
        // ul#list에 child로 추가
        let toolbar = $("<div>");
        let btnDel = $("<button>");
        btnDel.text("삭제")
        toolbar.append(btnDel);
        itemNode.append(toolbar);
        $("#list").append(itemNode);
        $("#item").val("").focus();
        $("#list > li > div").css({ display: "inline", float: "right" });
        btnDel.on("click", event => {
            let removeItem = $(event.target.parentNode.parentNode);
            removeItem.remove();
        });
    }
}


$(document).ready(event => {
    // 목록 비우기
    $("#list > li").each(function () {
        this.remove();
    })
    $("#btn-add").on("click", addItem);
});
