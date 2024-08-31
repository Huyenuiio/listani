
function showAlert(message) {
    document.getElementById('custom-alert-content').textContent = message;
    document.getElementById('custom-alert').style.display = 'flex';
}

document.getElementById('custom-alert-close').addEventListener('click', function() {
    document.getElementById('custom-alert').style.display = 'none';
});


 
document.addEventListener("DOMContentLoaded", function () {
    const playlistItems = document.querySelectorAll(".vid");

    playlistItems.forEach((item) => {
        item.addEventListener("click", function () {
            const title = item.getAttribute("data-title");
            // Lấy thông tin khác từ phần tử playlist (nếu cần)
            const birthday = item.querySelector(".birthday").textContent;
            const age = item.querySelector(".age").textContent;
            const gender = item.querySelector(".gender").textContent;
            const height = item.querySelector(".height").textContent;
            const abilities = item.querySelector(".abilities").textContent;

            // Hiển thị thông tin
            showAlert(`Thông tin nhân vật: ${title}\n- Ngày sinh: ${birthday}\n- Tuổi: ${age}\n- Giới tính: ${gender}\n- Chiều cao: ${height}\n- Câu Chuyện: ${abilities}`);
       
       
       
        });
    });
});






// // Tạo một hàm để ẩn phần loading
// function hideLoading() {
//     const loadingElement = document.getElementById('loading');
//     if (loadingElement) {
//         loadingElement.style.display = 'none';
//     }
// }

// // Gọi hàm hideLoading khi trang web tải xong
// window.addEventListener('load', hideLoading);


// Đợi cho tất cả tài nguyên (hình ảnh, font chữ, ...) tải xong
window.addEventListener('load', function() {
 
    // Lấy phần tử logo
    const logoElement = document.querySelector('#loading .logo');

    // const logooElement = document.querySelector();

    // Ẩn phần loading sau một khoảng thời gian (ví dụ: 0,5 giây)
    setTimeout(function() {
        // Ẩn phần loading
        // if (loadingElement) {
        //     loadingElement.style.display = 'none';

        // }

        // Hiển thị logo (nếu muốn) với hiệu ứng mượt mà
        if (logoElement) {
            logoElement.style.opacity = 1;
            logoElement.style.filter = 'blur(0)'; // Bỏ hiệu ứng blur
            // logoElement.style.transition = 'opacity 0.5s ease'; // Thêm transition
        }




    }, 500); // Thời gian chờ (0,5 giây)


});


// Đợi cho tất cả tài nguyên (hình ảnh, font chữ, ...) tải xong
window.addEventListener('load', function() {
    // Lấy phần tử logo
    const logoElement = document.querySelector('#loading .logo');

    // const logooElement = document.querySelector();

    // Ẩn phần loading sau một khoảng thời gian (ví dụ: 1,5 giây)
    setTimeout(function() {
        // Ẩn phần loading
        // if (loadingElement) {
        //     loadingElement.style.display = 'none';

        // }

        // Hiển thị logo (nếu muốn) với hiệu ứng mượt mà
        if (logoElement) {
            logoElement.style.opacity = 0;
            // logoElement.style.transition = 'opacity 0.5s ease'; // Thêm transition
            logoElement.style.transition = ' all 1s ease;'; // Thêm transition
        }



    }, 1500); // Thời gian chờ (1,5 giây)


});




// Đợi cho tất cả tài nguyên (hình ảnh, font chữ, ...) tải xong
window.addEventListener('load', function() {
    // Lấy phần tử loading
    const loadingElement = document.getElementById('loading');

    

    // Ẩn phần loading sau một khoảng thời gian (ví dụ: 2 giây)
    setTimeout(function() {
        // Ẩn phần loading
        if (loadingElement) {
            loadingElement.style.display = 'none';

        }

       

    }, 2000); // Thời gian chờ (2 giây)


});




// npm i hls.js
// import Hls from 'hls.js';
Artplayer.CONTEXTMENU = false;
function playM3u8(video, url, art) {
    if (Hls.isSupported()) {
        if (art.hls) art.hls.destroy();
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        art.hls = hls;
        art.on('destroy', () => hls.destroy());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
    } else {
        art.notice.show = 'Unsupported playback format: m3u8';
    }
}









var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/output.m3u8', 
    type: 'm3u8',
    title: 'Ep.1 ...',
    poster: 'https://raw.githubusercontent.com/Huyenuiio/MakeHeroinegaOosugiru/main/img/kv_visual06.jpg',
    volume: 0.5,
    isLive: false,                  //Sử dụng chế độ trực tiếp, chế độ này sẽ ẩn thanh tiến trình và thời gian phát lại
    muted: false,
    autoplay: true,
    pip: true,           //Mặc định: falseHiển thị Picture in Picturenút chuyển đổi trên thanh điều khiển phía dưới                                           
    autoSize: false,       //Kích thước của trình phát theo mặc định sẽ lấp đầy toàn bộ container, thường dẫn đến các thanh màu đen. Giá trị này có thể tự động điều chỉnh kích thước trình phát để ẩn các thanh màu đen, tương tự như css'sobject-fit: cover;
    autoMini: true,     //Tự động nhập mini modekhi người chơi cuộn ra khỏi khung nhìn của trình duyệt
    screenshot: true,      //Có hiển thị nút chụp ảnh màn hình hay không thì nó sẽ xuất hiện ở chức năng toolbarvà context menuDisplay Screenshotở thanh điều khiển phía dưới
    setting: true,
    loop: false,
    flip: true,           //Có hiển thị tính năng lật video hay không, hiện chỉ khả dụng trong Settings PanelvàContext Menu
    playbackRate: true,    //Có hiển thị tính năng tốc độ phát lại của video hay không, nó sẽ xuất hiện trong Settings PanelvàContext Menu
    aspectRatio: true,     //Hiển thị tính năng tỷ lệ khung hình của video, nó sẽ xuất hiện trong Settings PanelvàContext Menu
    fullscreen: true,
    fullscreenWeb: false,
    subtitleOffset: true,  //Độ lệch thời gian phụ đề, phạm vi là [-5s, 5s], xuất hiện trongSettings panel
    miniProgressBar: true,      //Thanh tiến trình nhỏ, chỉ xuất hiện khi người chơi mất tập trung và đang chơi
    mutex: false,            //Nếu có nhiều người chơi trên trang, thì chỉ nên cho phép một người chơi chơi cùng một lúc
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,          //Có hiển thị airplaynút hay không, hiện tại chỉ một số trình duyệt hỗ trợ tính năng này
    lock: true,             //Có nên hiển thị lock buttontrên thiết bị di động để ẩn phần dưới khôngcontrol bar
    fastForward: true,          //Có nên thêm chức năng tua nhanh bằng cách nhấn lâu vào video trên thiết bị di động không
    autoOrientation: true,          //Có xoay trình phát trên các trang web di động ở chế độ toàn màn hình hay không tùy theo kích thước video và kích thước khung nhìn
    hotkey: true,
    theme: '#23ade5',
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    settings: [
        {
            width: 200,
            html: 'Subtitle',
            tooltip: 'Vietnamese',
            icon: '<img width="22" heigth="22" src="https://github.com/zhw2590582/ArtPlayer/raw/master/docs/assets/img/subtitle.svg">',
            selector: [
                {
                    html: 'Display',
                    tooltip: 'Show',
                    switch: true,
                    onSwitch: function (item) {
                        item.tooltip = item.switch ? 'Hide' : 'Show';
                        art.subtitle.show = !item.switch;
                        return !item.switch;
                    },
                },
                {
                    default: true,
                    html: 'Vietnamese',
                    url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2001%20(480p)%20%5BFF6DDF71%5D.srt',
                },
                // {
                //     html: 'Tập 2 - Sự thất bại đã hứa hẹn',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP2/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2002%20(480p)%20%5B71BB81AC%5D.srt',
                // },
                // {
                //     html: 'Tập 3 - Thua trận trước khi chiến đấu',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP3/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2003%20(480p)%20%5BA184D16C%5D.srt',
                // },
                // {
                //     html: 'Tập 4 - Khi bạn nhìn chằm chằm...',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/MakeHeroinegaOosugiru/MakeHeroinegaOosugiruuEP4/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2004%20(480p)%20%5B93792959%5D.srt',
                // },
                // {
                //     html: 'Tập 5 - Asagumo Chihaya lạc lối',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP5/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2005%20(480p)%20%5B61869276%5D.srt',
                // },
                // {
                //     html: 'Tập 6 - Hãy để bất kỳ ai...',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP6/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2006%20(480p)%20%5B627DEA47%5D.srt',
                // },
                // {
                //     html: 'Tập 7 - Mặt khác của một kết thúc có hậu',
                //     url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP7/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2007%20(480p)%20%5BD0EE7683%5D.srt',
                // },
                 
                
                
            ],
            onSelect: function (item) {
                art.subtitle.switch(item.url, {
                    name: item.html,
                });
                return item.html;
            },
        },
        {
            html: 'Switcher',
            icon: '<img width="22" heigth="22" src="https://github.com/zhw2590582/ArtPlayer/raw/master/docs/assets/img/state.svg">',
            tooltip: 'OFF',
            switch: false,
            onSwitch: function (item) {
                item.tooltip = item.switch ? 'OFF' : 'ON';
                console.info('You clicked on the custom switch', item.switch);
                return !item.switch;
            },
        },
        {
            html: 'Slider',
            icon: '<img width="22" heigth="22" src="https://github.com/zhw2590582/ArtPlayer/raw/master/docs/assets/img/state.svg">',
            tooltip: '5x',
            range: [5, 1, 10, 0.1],
            onRange: function (item) {
                return item.range + 'x';
            },
        },
    ],
    // contextmenu: [
    //     {
    //         html: 'Custom menu',
    //         click: function (contextmenu) {
    //             console.info('You clicked on the custom menu');
    //             contextmenu.show = false;
    //         },
    //     },
    // ],
    
    contextmenu: [
        {
            name: 'your-menu',
            html: 'Your Menu',
            click: function (...args) {
                console.info(args);
                art.contextmenu.show = false;
            },
        },
    ],







    // layers: [
    //     {
    //         html: '<img width="100" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg">',
    //         click: function () {
    //             window.open('https://aimu.app');
    //             console.info('You clicked on the custom layer');
    //         },
    //         style: {
    //             position: 'absolute',
    //             top: '20px',
    //             right: '20px',
    //             opacity: '.9',
    //         },
    //     },
    // ],
    quality: [
        // {
        //     default: true,
        //     html: 'SD 480P',
        //     url: '#',
        // },
        // {
        //     html: 'HD 720P',
        //     url: '#',
        // },
        {
            html: 'FHD 1080P',
            url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/output.m3u8',
        },
   
    ],

    thumbnails: {
        url: '#',
        number: 60,
        column: 10,
    },
    subtitle: {
        url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Make%20Heroine%20ga%20Oosugiru!%20-%2001%20(480p)%20%5BFF6DDF71%5D.srt',
        type: 'srt',    
        style: {
            // color: 'white',
            // fontSize: '30px',
             //fontSize: '40px',
            //  fontSize: '48px',
            //  fontWeight: '700', // In đậm
            // fontSize: '35px' // cho màn hình 1366x768
           
        },
        encoding: 'utf-8',
    },
    highlight: [
        {
            time: 85,
            text: 'Opening',
        },
        {
            time: 173,
            text: 'Opening',
        },
        {
            time: 1400,
            text: 'Ending',
        },
        {
            time:1480,
            text:'Ending',
        }
        // {
        //     time: 60,
        //     text: 'こんなとこにあるはずもないのに',
        // },
        // {
        //     time: 75,
        //     text: '终わり',
        // },
    ],
    // controls: [
    //     {
    //         position: 'right',
    //         html: 'Control',
    //         index: 1,
    //         tooltip: 'Control Tooltip',
    //         style: {
    //             marginRight: '20px',
    //         },
    //         click: function () {
    //             console.info('You clicked on the custom control');
    //         },
    //     },
    // ],
    icons: {
        loading: '<img src="https://raw.githubusercontent.com/Huyenuiio/Data-src/main/image/ploading.gif">',
        state: '<img width="150" heigth="150" src="https://github.com/zhw2590582/ArtPlayer/raw/master/docs/assets/img/state.svg">',
        indicator: '<img width="16" heigth="16" src="https://github.com/zhw2590582/ArtPlayer/raw/master/docs/assets/img/indicator.svg">',
    },

    // plugins: [artplayerPlaylist({
    //     rebuildPlayer: false,
    //     onchanged: (art) => {
    //         console.log('Video Changed');
    //     },
    //     autoNext: true,
    //     showText: false,
    //     playlist: [
    //         {
    //             title: 'Tập 1 - Người bạn thời thơ ấu',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP1/output.m3u8',
               
               
    //         },
            
    //         {
    //             title: 'Tập 2 - Sự thất bại đã hứa hẹ',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP2/output.m3u8',
    
            
    //         },
    //         {
    //             title: 'Tập 3 - Thua trận trước khi chiến đấu',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/huyenndevv/MakeHeroinegaOosugiruEP3/output.m3u8'
    //         },
    //         {
    //             title: 'Tập 4 - Khi bạn nhìn chằm chằm...',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/MakeHeroinegaOosugiru/MakeHeroinegaOosugiruuEP4/output.m3u8'
              
    //         },
    //         {
    //             title: 'Tập 5 - Asagumo Chihaya bị dẫn dắt lạc lối',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP5/output.m3u8'
    //         },
    //         {
    //             title: 'Tập 6 - Hãy để bất kỳ ai...',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP6/output.m3u8'
    //         },
    //         {
    //             title: 'Tập 7 - Mặt khác của một kết thúc có hậu',
    //             url: 'https://raw.githubusercontent.com/Huyenuiio/gittesst2/thaoquyen/MakeEP7/output.m3u8'
    //         },
              
    //     ]
    // })],
    customType: {
        m3u8: playM3u8,
    },
});

art.on('ready', () => {
    console.info(art.hls);
});



// Danh sách các video trong playlist
var playlist = document.querySelectorAll('.playlist .vid');

// Lặp qua từng video trong playlist
for (let i = 0; i < playlist.length; i++) {
    // Thêm sự kiện click cho mỗi video
    playlist[i].addEventListener('click', function() {
        // Xóa class 'active' khỏi tất cả các video
        for (let j = 0; j < playlist.length; j++) {
            playlist[j].classList.remove('active');
        }

        // Thêm class 'active' cho video được chọn
        this.classList.add('active');

    });
}


const videoElement = document.querySelector('.art-video-player');

// Thiết lập thuộc tính style trực tiếp
videoElement.style.fontFamily = "'Quicksand', sans-serif";

// Đảm bảo kiểu CSS được ưu tiên cao nhất
videoElement.style.setProperty('font-family', "'Quicksand', sans-serif", 'important');








// // Hàm để cập nhật giá trị của biến CSS --art-subtitle-font-size
// function updateFontSize() {
//     var mq = window.matchMedia("(min-width: 1024px)");

//     if (mq.matches) {
//         // Nếu viewport có chiều rộng lớn hơn hoặc bằng 1024px
//         var videoPlayer = document.querySelector('.art-video-player');
//         if (videoPlayer) {
//             // Thay đổi giá trị của biến CSS --art-subtitle-font-size thành 42px
//             videoPlayer.style.setProperty('--art-subtitle-font-size', '42px');
//         }
//     } else {
//         // Nếu viewport có chiều rộng nhỏ hơn 1024px
//         var videoPlayer = document.querySelector('.art-video-player');
//         if (videoPlayer) {
//             // Xóa hoặc đặt lại giá trị của biến CSS --art-subtitle-font-size
//             videoPlayer.style.setProperty('--art-subtitle-font-size', ''); // Xóa giá trị hoặc đặt giá trị mặc định khác
//         }
//     }
// }

// // Gọi hàm khi trang web tải xong
// updateFontSize();

// // Lắng nghe sự kiện thay đổi kích thước của viewport
// window.addEventListener('resize', updateFontSize);















function updateFontSize() {
    const videoPlayer = document.querySelector('.art-video-player');
    if (!videoPlayer) return; // Exit if video player element is not found

    const width = window.innerWidth;
    let fontSize = '24px'; // Default font size

    // Define breakpoints and corresponding font sizes
    const breakpoints = {
        359: '14px',
        360:'14px',
        375:'14px',
        412:'15px',
        480:'16px',
        640:'17px',
        768:'18px',
        800:'18px',
        1024:'28px',
        1280:'30px',
        1366:'35px',
        1440:'55px',
        1920:'65px',


      
        // Add more breakpoints as needed
    };

    // Find the appropriate font size for the current width
    for (let breakpoint in breakpoints) {
        if (width <= parseInt(breakpoint)) {
            fontSize = breakpoints[breakpoint];
            break; // Exit the loop once a match is found
        }
    }

    // Update the CSS variable
    videoPlayer.style.setProperty('--art-subtitle-font-size', fontSize);
}

// Initial call to set the font size
updateFontSize();

// Update the font size on resize
window.addEventListener('resize', updateFontSize);




// function updateFontSize() {
//     const videoPlayer = document.querySelector('.art-video-player');
//     if (!videoPlayer) return; // Exit if video player element is not found

//     const width = window.innerWidth;
//     let fontSize = '24px'; // Default font size

//     // Define breakpoints and corresponding font sizes
//     const breakpoints = {
//         359: '14px',
//         360: '14px',
//         375: '14px',
//         412: '15px',
//         480: '16px',
//         640: '17px',
//         768: '18px',
//         800: '18px',
//         1024: '18px', // Default size for 1024px and above
//         1280: '30px',
//         1366: '35px',
//         1440: '55px',
//         1920: '65px',
//         // Add more breakpoints as needed
//     };

//     // Determine the font size based on the current width
//     for (let breakpoint in breakpoints) {
//         if (width <= parseInt(breakpoint)) {
//             fontSize = breakpoints[breakpoint];
//             break; // Exit the loop once a match is found
//         }
//     }

//     // Check if the video player is in fullscreen mode
//     const isFullscreen = document.fullscreenElement === videoPlayer || 
//                          document.webkitFullscreenElement === videoPlayer || 
//                          document.mozFullScreenElement === videoPlayer || 
//                          document.msFullscreenElement === videoPlayer;

//     // Apply a different font size if in fullscreen mode and width is 1024px or more
//     if (width >= 1024 && isFullscreen) {
//         fontSize = '28px';
//     }

//     // Update the CSS variable
//     videoPlayer.style.setProperty('--art-subtitle-font-size', fontSize);
// }

// // Initial call to set the font size
// updateFontSize();

// // Update the font size on resize
// window.addEventListener('resize', updateFontSize);

// // Update the font size when entering or exiting fullscreen mode
// document.addEventListener('fullscreenchange', updateFontSize);
// document.addEventListener('webkitfullscreenchange', updateFontSize);
// document.addEventListener('mozfullscreenchange', updateFontSize);
// document.addEventListener('MSFullscreenChange', updateFontSize);



// hàm chuyển đổi trang html khi nhấn vào playlist
function navigateToHtmlFile(element) {
    const videoItem = element.closest('.vid');
    const htmlFile = videoItem.getAttribute('data-html-file');
    if (htmlFile) {
        window.location.href = htmlFile;
    }
}

document.querySelectorAll('.vid .img, .vid .title').forEach(element => {
    element.addEventListener('click', function() {
        navigateToHtmlFile(this);
    });
});