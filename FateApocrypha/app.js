var vid = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");
var timeline = document.getElementById("timeline");

vid.ontimeupdate = function() {updateTimeline()};

function playPauseVid() { 
    if (vid.paused) {
        vid.play();
        playPauseBtn.innerHTML = "Pause";
    } else {
        vid.pause();
        playPauseBtn.innerHTML = "Play";
    }
} 

function increaseVol() {
    if(vid.volume < 1) vid.volume += 0.1;
}

function decreaseVol() {
    if(vid.volume > 0) vid.volume -= 0.1;
}

function toggleFullscreen() {
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) { /* Firefox */
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) { /* IE/Edge */
        vid.msRequestFullscreen();
    }
}

function updateTimeline() {
    var value = (100 / vid.duration) * vid.currentTime;
    timeline.value = value;
}

timeline.oninput = function() {
    var currentTime = this.value * vid.duration / 100;
    vid.currentTime = currentTime;
}

const player = new Plyr('#myVideo', {
    quality: { default: '1080', options: ['1080', '720'] }
});


// _____________________________________________Ham-danh-cho-cac-phim-co-poster-dep___________________________________________________________________________________________________________________________
// let listVideo = document.querySelectorAll('.video-list .vid');
// let mainVideo = document.querySelector('.main-video video');
// let title   = document.querySelector('.main-video .title');
    
// listVideo.forEach(video =>{
//     video.onclick = () => {
//         listVideo.forEach(vid => vid.classList.remove('active'));
//         video.classList.add('active');
//         if(video.classList.contains('active')){
//             let src = video.children[0].getAttribute('src');
//             let poster = video.children[0].getAttribute('poster'); // Lấy đường dẫn poster
//             mainVideo.src = src;
//             mainVideo.poster = poster; // Đặt thuộc tính poster của video chính
//             let text = video.children[1].innerHTML;
//             title.innerHTML = text;
//         };
//     };
// });

// -----------------------------------------------------su-kien-ghi-nho-video----------------------------------------------------------------------------------------------------



// Khi một video được chọn
// document.querySelectorAll('.vid').forEach(function(vid) {
//     vid.addEventListener('click', function() {
//         // Lưu trữ URL video và tiêu đề vào localStorage
//         var videoUrl = this.querySelector('video').getAttribute('src');
//         var title = this.querySelector('.title').textContent;
//         localStorage.setItem('lastSelectedVideo', JSON.stringify({url: videoUrl, title: title}));
//     });
// });

// // Khi tải lại trang web
// window.addEventListener('DOMContentLoaded', function() {
//     var lastSelectedVideo = JSON.parse(localStorage.getItem('lastSelectedVideo'));
//     if (lastSelectedVideo) {
//         // Tìm video tương ứng và đặt nó thành video được chọn
//         document.querySelectorAll('.vid').forEach(function(vid) {
//             var videoUrl = vid.querySelector('video').getAttribute('src');
//             if (videoUrl === lastSelectedVideo.url) {
//                 vid.classList.add('active');
//                 // Cập nhật tiêu đề
//                 document.querySelector('.title').textContent = lastSelectedVideo.title;
//                 // Kích hoạt sự kiện click chuột
//                 vid.click();
//             } else {
//                 vid.classList.remove('active');
//             }
//         });
//     }
// });



//--------------------------------------------------phan ghi nho thoi gian video-----------------------------------------------------------------------

// Lấy tham chiếu đến video
var video = document.getElementById('myVideo');

// Khi video được tải, kiểm tra xem có thời điểm xem cuối cùng không
video.addEventListener('loadedmetadata', function() {
    var lastWatchedTime = localStorage.getItem('lastWatchedTime');
    if (lastWatchedTime) {
        video.currentTime = lastWatchedTime;
    }
});

// Khi video bị tạm dừng (ví dụ: khi người xem đóng trang web)
video.addEventListener('pause', function() {
    localStorage.setItem('lastWatchedTime', video.currentTime);
});
//---------------------------------------------------------end----------------------- ---------------------------------------------------------






































class listep {
    constructor(video, img, title,) {
        this.video = video;
        this.img = img;
        this.title = title;
       
    }

    render() {
        return `
             <div class="vid ">
                <video src="${this.video}" poster="${this.img}"></video>
            <h3 class="title">${this.title}</h3>
            </div>
        `;
    }
}
const EP1 = new listep(
    "https://content.jwplatform.com/videos/xWPiqtCU-1920.mp4",
    "https://s199.imacdn.com/vg/2017/07/03/396eefe807b025d4_16c50f62e0e9c1cd_10650314990519016118684.jpg",
    "Tập 1 - Apocrypha: Cuộc Thánh chiến Vĩ đại",
);
const EP2 = new listep(
    "https://content.jwplatform.com/videos/3COnCzxj-1920.mp4",
    "https://s199.imacdn.com/vg/2017/07/09/aa8f5a0a034857b3_a89357aa937e0dfb_23109149960989799674.jpg",
    "Tập 2 - Thánh nữ khởi hành",
);
const EP3 = new listep(
    "https://content.jwplatform.com/videos/LnQDYvTn-1920.mp4",
    "https://s199.imacdn.com/vg/2017/07/16/a66761b918a6622e_81dc221db1bfcd0b_24568150019920589674.jpg",
    "Tập 3 - Arukidasu Unmei",
);
const EP4 = new listep(
    "https://content.jwplatform.com/videos/3jbz0I5J-1920.mp4",
    "https://s199.imacdn.com/vg/2017/07/24/e29224e626a08af7_001a01d8b9237e64_2194015009017091118684.jpg",
    "Tập 4 - Cái giá của sinh mệnh, chuộc lại từ cái chết",
);
const EP5 = new listep(
    "https://content.jwplatform.com/videos/GPmR6v8v-1920.mp4",
    "https://s199.imacdn.com/vg/2017/07/31/3532080832bcf111_8b05e814ae122ac4_2087015015051018118684.jpg",
    "Tập 5 - Ý chí của Thiên đường",
);
const EP6 = new listep(
    "https://content.jwplatform.com/videos/hv8QMOZZ-1920.mp4",
    "https://s199.imacdn.com/vg/2017/08/10/6cae428efc09171c_fb8550aab747192f_9670715023465299118684.jpg",
    "Tập 6 - Hiệp sĩ nổi loạn",
);
const EP7 = new listep(
    "https://content.jwplatform.com/videos/1QMX4UZj-1920.mp4",
    "https://s199.imacdn.com/vg/2017/08/15/11f1170d839ccf2d_236f972cbf0c3af7_9284115027326897118684.jpg",
    "Tập 7 - Ý nghĩa của Tự do",
);
const EP8 = new listep(
    "https://content.jwplatform.com/videos/E8JHGhrX-1920.mp4",
    "https://s199.imacdn.com/vg/2017/08/21/fe58acfde8fefe8f_79a6ad4f75d52eb2_9365615033209322118684.jpg",
    "Tập 8 - Ngọn lửa chiến tranh",
);
const EP9 = new listep(
    "https://content.jwplatform.com/videos/z5DaWQID-1920.mp4",
    "https://s199.imacdn.com/vg/2017/08/28/d97ba7874e3d641f_3d54ba7b85040573_10764315039379897118684.jpg",
    "Tập 9 - Bách hỏa và bách hoa",
);
const EP10 = new listep(
    "https://content.jwplatform.com/videos/V6vznyfN-1920.mp4",
    "https://s199.imacdn.com/vg/2017/09/07/9f8b366319d54a7b_eda8b64ddb0ce465_9463315047935043118684.jpg",
    "Tập 10 - Rơi cùng hoa",
);

document.getElementById('listep').innerHTML += EP1.render();
document.getElementById('listep').innerHTML += EP2.render();
document.getElementById('listep').innerHTML += EP3.render();
document.getElementById('listep').innerHTML += EP4.render();
document.getElementById('listep').innerHTML += EP5.render();
document.getElementById('listep').innerHTML += EP6.render();
document.getElementById('listep').innerHTML += EP7.render();
document.getElementById('listep').innerHTML += EP8.render();
document.getElementById('listep').innerHTML += EP9.render();
document.getElementById('listep').innerHTML += EP10.render();




// Select elements
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

// Define event handling logic
listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');

        let src = video.querySelector('video').getAttribute('src');
        let poster = video.querySelector('video').getAttribute('poster');
        let text = video.querySelector('.title').innerHTML;

        if (mainVideo && title) {
            mainVideo.src = src;
            mainVideo.poster = poster;
            title.innerHTML = text;
        } else {
            console.error('Main video or title element not found');
        }

        // Store video URL and title in localStorage
        localStorage.setItem('lastSelectedVideo', JSON.stringify({ url: src, title: text }));
    };
});

// Restore last selected video on page load
window.addEventListener('DOMContentLoaded', function () {
    let lastSelectedVideo = JSON.parse(localStorage.getItem('lastSelectedVideo'));
    if (lastSelectedVideo) {
        listVideo.forEach(function (vid) {
            let videoUrl = vid.querySelector('video').getAttribute('src');
            if (videoUrl === lastSelectedVideo.url) {
                vid.classList.add('active');
                if (title) {
                    title.textContent = lastSelectedVideo.title;
                }
                vid.click(); // Simulate click to load the video
            }
        });
    }
});











































//ham click cuon len tren
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
   }


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

















class relations_oop {
    constructor(url, img,relationship, status,title) {
        this.url = url;
        this.img = img;
        this.relationship = relationship;
        this.status = status;
        this.title = title;
       
    }

    render() {
        return `
            <div     data-v-6dc78144         class="media-preview-card">
    <div  data-v-6dc78144       class="cover"   data-html-file="${this.url}"    lazy="loaded"       style="background-image: url(${this.img});"  > 
        <div    data-v-6dc78144 class="image-text">
        <div    data-v-4650c4e0 >${this.relationship}</div>    
       </div>
    </div>
    <div data-v-6dc78144   class="content">
        <div data-v-6dc78144 class="info-header">                       
                <div   data-v-4650c4e0   data-v-6dc78144 >${this.relationship}</div>
        </div>
            <div  data-v-6dc78144   data-html-file="${this.url}" class="title">${this.title}</div>
        <div data-v-6dc78144 class="info">${this.status}</div>
    </div>
</div>
        `;
    }
}
const step1 = new relations_oop(
    "https://www.typemoon.com/products/tmbooks/apocrypha/index.html",
    "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/33005.jpg",
    "Nguồn",
    "Light Novel · Đã kết thúc",
    "Fate/Apocrypha",
);
const step2 = new relations_oop(
    "##",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx356-mTpMvtillumS.png",
    "Thay thế",
    "TV · Hoàn thành",
    "Fate/stay night",
);
const step3 = new relations_oop(
    "##",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6922-g3hsIYOWGXL8.jpg",
    "Thay thế",
    "Movie · Hoàn thành",
    "Fate/stay night: Unlimited Blade Works (Movie)",
);
const step4 = new relations_oop(
    "##",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19603-ZIwcXJeIJV3H.jpg",
    "Thay thế",
    "TV · Hoàn thành",
    "Fate/stay night: Unlimited Blade Works",
);
const step5 = new relations_oop(
    "##",
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20791-6Ktwmvm5v2Wf.png",
    "Thay thế",
    "Movie · Hoàn thành",
    "Fate/stay night [Heaven's Feel] I. presage flower",
);
const step6 = new relations_oop(
    "##",
    "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87251-B1GLDEoQSLCS.jpg",
    "Thay thế",
    "Manga · Hoàn thành",
    "Fate/Apocrypha",
);

document.getElementById('relations_oop').innerHTML += step1.render();
document.getElementById('relations_oop').innerHTML += step2.render();
document.getElementById('relations_oop').innerHTML += step3.render();
document.getElementById('relations_oop').innerHTML += step4.render();
document.getElementById('relations_oop').innerHTML += step5.render();
document.getElementById('relations_oop').innerHTML += step6.render();



//ham thuc hien hanh dong click and su dung data-html-file thay thế cho the a
document.addEventListener('DOMContentLoaded', function() {
    // Gắn sự kiện click cho tất cả các phần tử có class 'title' và 'cover'
    document.querySelectorAll('.title, .cover').forEach(function(element) {
        element.addEventListener('click', navigateToHtmlFile);
    });

    function navigateToHtmlFile(event) {
        let targetElement;
        // Kiểm tra nếu phần tử được click là .cover hoặc .title
        if (event.target.classList.contains('cover')) {
            targetElement = event.target.querySelector('.title') || event.target.closest('.media-preview-card').querySelector('.title');
        } else if (event.target.classList.contains('title')) {
            targetElement = event.target;
        }

        if (targetElement) {
            const htmlFile = targetElement.getAttribute('data-html-file');
            if (htmlFile) {
                window.location.href = htmlFile;
            }
        }
        // Ngăn chặn sự kiện lan truyền nếu không muốn hành vi mặc định xảy ra
        event.stopPropagation();
    }
});