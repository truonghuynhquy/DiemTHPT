function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Xóa";
    deleteButton.addEventListener("click", function () {
        var li = this.parentElement;
        var ul = li.parentElement;
        ul.removeChild(li);
    });
    return deleteButton;
}

function examPointTHPT() {
    var scoreNV = parseFloat(document.getElementsByClassName("NV")[0].value);
    var scoreTA = parseFloat(document.getElementsByClassName("TA")[0].value);
    var scoreT = parseFloat(document.getElementsByClassName("T")[0].value);

    if (!isNaN(scoreNV) && !isNaN(scoreTA) && !isNaN(scoreT)) {
        var scoreSum = scoreNV * 2 + scoreTA + scoreT * 2;
        var scoreList = document.getElementById("scoreList");
        var li = document.createElement("li");
        li.innerHTML =
            "Ngữ Văn: " +
            scoreNV.toFixed(1) +
            ", " +
            " TA: " +
            scoreTA.toFixed(1) +
            ", " +
            " Toán: " +
            scoreT.toFixed(1) +
            ", " +
            "<span class='result'>Kết quả: " +
            scoreSum.toFixed(1) +
            "</span>";
        scoreList.appendChild(li);

        var deleteButton = createDeleteButton();
        li.appendChild(deleteButton);
    }
}
