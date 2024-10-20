class AnimeSearch {
    constructor() {
        this.searchInput = document.getElementById('site-search');
        this.gridItems = document.getElementsByClassName('grid-item');
    }   

    search() {
        const input = this.searchInput.value.toLowerCase();
        
        Array.from(this.gridItems).forEach(item => {
            const shouldDisplay = item.innerText.toLowerCase().includes(input);
            item.style.display = shouldDisplay ? "block" : "none";
        });
    }
}

// Khởi tạo đối tượng AnimeSearch
const animeSearch = new AnimeSearch();

// Hàm searchAnime() được gọi khi người dùng nhập vào ô tìm kiếm
function searchAnime() {
    animeSearch.search();
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





































class AnimeGridItem {
    constructor(title, imageUrl, animeUrl, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.animeUrl = animeUrl;
        this.description = description;
    }s

    render() {
        return `
    <div class="grid-item" onmouseover="showPopup(this)" onmouseout="hidePopup(this)">
        <a href="${this.animeUrl}">
            <img src="${this.imageUrl}" alt="${this.title}">
            <strong><a><br>${this.title}<br></a></strong>
            <a href="${this.animeUrl}"><button>Xem Anime</button></a>
        </a>
        <div class="popup">
            ${this.description}
        </div>
    </div>
        `;
    }
}

// Sử dụng ví dụ:
const vivyAnime = new AnimeGridItem(
    "Vivy: Fluorite Eye's Song",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128546-UIwyhuhjxmL0.jpg",
    "https://huyenuiio.github.io/Vivy-Fluorite-Eye-s-Song",
    "Câu chuyện Vivy – Fluorite Eye's Song diễn ra ở \"Nearland\", một công viên giải trí AI, nơi \"ước mơ, hy vọng và khoa học\" cùng tồn tại. Công viên giải trí là nơi AI đầu tiên kiểu người tự động ra đời. Vivy là một AI hát trên sân khấu cho những người tham dự công viên mỗi ngày, vì chỉ thị của cô ấy là \"làm cho mọi người hạnh phúc qua những bài hát.\" Cô biểu diễn hết lòng vì những người tham dự trong công viên. Một ngày nọ, một AI tên là Matsumoto xuất hiện trước mặt cô, nói rằng anh đến từ 100 năm sau ở tương lai với chỉ thị \"làm việc với Vivy để sửa chữa lịch sử và ngăn chặn cuộc chiến giữa AI và con người nổ ra\". Hành trình cứu lấy 100 năm của nữ ca sĩ AI Vivy bắt đầu."
);
const MakeHeroinegaOosugiru = new AnimeGridItem(
    "Make Heroine ga Oosugiru!",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171457-Z8tZRk7LhcZk.jpg",
    "MakeHeroinegaOosugiru!/Tap1/eb81c57e.html",
    "Kazuhiko Nukumizu là một nam sinh trung học hài lòng với việc hòa nhập với đám đông xung quanh, cho đến khi anh chứng kiến ​​người bạn cùng lớp nổi tiếng hơn mình là Anna Yanami bị người bạn thời thơ ấu của cô ấy bỏ rơi. Anh cảm thấy mình phải cố gắng an ủi Yanami nhưng điều này lại khiến anh vướng vào những cô gái khác từng thất bại trong tình yêu?"
);

// Để sử dụng, bạn có thể thêm đoạn mã sau vào nơi bạn muốn hiển thị grid item:
document.getElementById('animeGrid').innerHTML += vivyAnime.render();
document.getElementById('animeGrid').innerHTML += MakeHeroinegaOosugiru.render();






























// Đợi cho tất cả tài nguyên (hình ảnh, font chữ, ...) tải xong
window.addEventListener('load', function(){
    // Lấy phần tử progeress
    const logoElement = document.querySelector('#loading .progress');
    // Ẩn phần loading sau một khoảng thời gian (ví dụ: 0,5 giây)
    setTimeout(function(){
       if (logoElement) {
           logoElement.style.opacity = 1;
           logoElement.style.width = "50%";
         
       }
     
    }, 500);
});
window.addEventListener('load', function(){
   // Lấy phần tử progeress
   const logoElement = document.querySelector('#loading .progress');
   // Ẩn phần loading sau một khoảng thời gian (ví dụ: 1 giây)
   setTimeout(function(){
      if (logoElement) {
           logoElement.style.width = "100%";
           logoElement.style.opacity = 0;  
          logoElement.style.transition = 'width .3s ease'; // 
          logoElement.style.transition = 'opacity .2s'; // Thêm 
        
      }
    
   }, 1000);
});

