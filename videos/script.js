const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
  {
    id: "a1",
    title: "ProgramEase Overview",
    name: "ProgramEase_Overview.mp4",
    duration: "00:49",
  },
  {
    id: "a2",
    title: "ProgramEase Disputes",
    name: "ProgramEase_Disputes.mp4",
    duration: "01:50",
  },
  {
    id: "a3",
    title: "ProgramEase Reporting",
    name: "ProgramEase_Reporting.mp4",
    duration: "02:15",
  },

  {
    id: "a4",
    title: "Dashboard",
    name: "dashboard.mp4",
    duration: "01:29",
  },
  {
    id: "a5",
    title: "Invoicing Reconicliation",
    name: "InvoicingReconicliation.mp4",
    duration: "01:30",
  },
  {
    id: "a6",
    title: "Card Network Reconciliation",
    name: "CardNetworkReconciliation.mp4",
    duration: "00:44",
  },
  {
    id: "a7",
    title: "Card Balance Reconciliation",
    name: "cardBalanceReconciliation.mp4",
    duration: "00:56",
  },
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
