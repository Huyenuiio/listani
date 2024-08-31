function searchAnime() {
    // Lấy giá trị từ thanh tìm kiếm
    var input = document.getElementById('site-search').value;
    input = input.toLowerCase(); // Chuyển đổi thành chữ thường để tìm kiếm không phân biệt hoa thường

    // Lấy tất cả các mục trong lưới
    var gridItems = document.getElementsByClassName('grid-item');

    // Duyệt qua từng mục
    for (var i = 0; i < gridItems.length; i++) {
        // Nếu mục không chứa nội dung từ thanh tìm kiếm, ẩn nó
        if (!gridItems[i].innerText.toLowerCase().includes(input)) {
            gridItems[i].style.display = "none";
        } else {
            gridItems[i].style.display = "block";
        }
    }
}




// Hiển thị popup
function showPopup(item) {
var popup = item.getElementsByClassName('popup')[0];
popup.style.display = 'block';
}

// Ẩn popup
function hidePopup(item) {
var popup = item.getElementsByClassName('popup')[0];
popup.style.display = 'none';
}

