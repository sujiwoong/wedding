function dropdownRSVP(e) {
    let adult = document.getElementById("rsvp-adults")
    let kid = document.getElementById("rsvp-kids")
    if (e.value == "yes") {
        adult.disabled = false;
        kid.disabled = false;
    } else {
        adult.disabled = true;
        kid.disabled = true;
        adult.value = '0'; 
        kid.value = '0'; 
    }
}

function sendKakaoLink() {
    Kakao.Link.sendScrap({
    requestUrl: 'https://sujiwoong.github.io/wedding',
    templateId: 92087,
    templateArgs: {
        TITLE: '제목',
        DESC: '설명'
    },
    });
};

async function sendLink() {
    let websiteData = {
        title: '수지&지웅 결혼합니다',
        url: 'https://sujiwoong.github.io/wedding'
    };
    if (navigator.share) {
        navigator.share(websiteData)
    } else {
        alertMobile();
    }
}

function alertMobile() {
    console.log("alert")
    alert("모바일 전용 기능합니다.")
}

function alertCopied() {
    alert("복사되었습니다.")
}

function suzyPhone() {
    handleModal("suzy-phone")
}

function suzyBank() {
    handleModal("suzy-bank")
}

function suzyParentPhone() {
    handleModal("suzy-parent-phone")
}

function suzyParentBank() {
    handleModal("suzy-parent-bank")
}

function jiwoongPhone() {
    handleModal("jiwoong-phone")
}

function jiwoongBank() {
    handleModal("jiwoong-bank")
}

function jiwoongParentPhone() {
    handleModal("jiwoong-parent-phone")
}

function jiwoongParentBank() {
    handleModal("jiwoong-parent-bank")
}

function handleModal(elementId) {
    let modal = document.getElementById(elementId + "-modal");
    let overlay = document.getElementById('overlay');
    let close = document.getElementById(elementId + "-modal-close");
    let copy = document.getElementById(elementId + "-modal-copy");

    updateModal(false, overlay, modal);

    close.onclick = function() {
        updateModal(true, overlay, modal);
    }

    copy.onclick = function() {
        var copyText = document.getElementById(elementId + "-number");
        var hiddenField = document.getElementById(elementId + "-copy-number");
        hiddenField.value = copyText.innerHTML;
        hiddenField.select();
        navigator.clipboard.writeText(hiddenField.value);
        alertCopied();
    }
}

const updateModal = function(hide, overlay, modal) {
    if (hide == true) {
        overlay.classList.add("hidden");
        modal.classList.add("hidden");
    } else {
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    }
}

function insertPhoneModal(elementId, name, number) {
    let element = document.getElementById(elementId);
    let feed = document.createElement("div");
    feed.innerHTML = 
    "<div id='" + elementId + "-phone-modal' class='flex modal hidden'>" +
    "<div class='modal-content'>" +
    "<h2>" + name + "</h2>" +
    "<hr class='solid'>" +
    "<h3 id='" + elementId + "-phone-number'>" + number + "</h3>" +
    "<div class='hidden' style='opacity:0'>" + 
    "<input type='text' id='" + elementId + "-phone-copy-number' value=" + number + "/>" +
    "</div>" +
    "<button class='comment-button' id='" + elementId + "-phone-modal-copy' onclick='copy'>" + "복사하기" + "</button><button class='comment-button btn-close' id='" + elementId + "-phone-modal-close'>" + "닫기" + "</button>" +
    "</div>" +
    "</div>";
    element.append(feed);
}

function insertBankAccountModal(elementId, header, bankName, name, accountNumber) {
    let element = document.getElementById("suzy-parent");
    let feed = document.createElement("div");
    feed.innerHTML = 
    "<div id='" + elementId + "-bank-modal' class='flex modal hidden'>" +
    "<div class='modal-content'>" +
    "<h2>" + header + "</h2>" +
    "<hr class='solid'>" +
    "<h2>" + bankName + "</h2>" +
    "<h3 id='" + elementId + "-bank-number'>" + accountNumber + "</h3>" +
    "<div class='hidden' style='opacity:0'>" +
    "<input type='text' id='" + elementId + "-bank-copy-number'/>" +
    "</div>" +
    "<h2>" + "예금주: " + name + "</h2>" +
    "<button class='comment-button' id='" + elementId + "-bank-modal-copy'>" + "복사하기" + 
    "</button><button class='comment-button' id='" + elementId+ "-bank-modal-close'>" + "닫기" + "</button>" +
    "</div>" +
    "</div>"
    element.append(feed);
}

document.addEventListener("DOMContentLoaded", function(event) {
    // do something
    const overlay = document.querySelector(".overlay");
    insertPhoneModal("jiwoong", "김지웅", "010-5193-7978");
    insertPhoneModal("suzy", "김수지", "010-9552-9185");
    insertPhoneModal("jiwoong-parent", "채명숙", "010-3455-8312");
    insertPhoneModal("suzy-parent", "김종섭", "010-2336-2616");

    insertBankAccountModal("jiwoong", "신랑", "카카오뱅크", "김지웅", "3333048754783");
    insertBankAccountModal("suzy", "신부", "하나은행", "김수지", "33689038028007");
    insertBankAccountModal("jiwoong-parent", "신랑측 혼주", "국민은행", "채명숙", "820-21-0396-98");
    insertBankAccountModal("suzy-parent", "신부측 부모님", "하나은행", "김종섭", "149-890324-10205");

    const closeModal = function() {
        updateModal(true, overlay, modal);
    } 
    overlay.addEventListener("click", closeModal);
});

window.onload = function() {
    Kakao.init('9f6cd19252f35ef0f607f25f1e78b835');
}

