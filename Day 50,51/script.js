const reels = [
    {
        username: "code_journey",
        isMuted: true,
        likeCount: 540,
        isLiked: false,
        commentCount: 21,
        caption: "Everyone starts somewhere ✨",
        video: "./reels/video1.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 18,
        isFollowed: false
    },
    {
        username: "frontend_freak",
        isMuted: true,
        likeCount: 1640,
        isLiked: false,
        commentCount: 87,
        caption: "CSS animations are underrated 🔥",
        video: "./reels/video2.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1688497831081-836510928186?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 60,
        isFollowed: false
    },
    {
        username: "bug_fixer",
        isMuted: true,
        likeCount: 390,
        isLiked: true,
        commentCount: 12,
        caption: "Fixed a bug after 3 hours 😅",
        video: "./reels/video3.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1668485967915-5b5ddd065a78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 9,
        isFollowed: false
    },
    {
        username: "learn_with_me",
        isMuted: true,
        likeCount: 980,
        isLiked: true,
        commentCount: 44,
        caption: "React hooks explained simply 🧠",
        video: "./reels/video4.mp4",
        userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 51,
        isFollowed: true
    },
    {
        username: "dev_lifestyle",
        isMuted: true,
        likeCount: 760,
        isLiked: false,
        commentCount: 33,
        caption: "Coffee + Code = ❤️",
        video: "./reels/video5.mp4",
        userProfile: "https://images.unsplash.com/photo-1629374029669-aab2f060553b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 27,
        isFollowed: false
    },
    {
        username: "ai_explorer",
        isMuted: true,
        likeCount: 2890,
        isLiked: true,
        commentCount: 210,
        caption: "AI is changing everything 🤖",
        video: "./reels/video6.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 180,
        isFollowed: true
    },
    {
        username: "student_coder",
        isMuted: true,
        likeCount: 450,
        isLiked: false,
        commentCount: 19,
        caption: "Day 15 of learning DSA 📚",
        video: "./reels/video7.mp4",
        userProfile: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 14,
        isFollowed: false
    },
    {
        username: "rahul_dev",
        isMuted: true,
        likeCount: 1240,
        isLiked: true,
        commentCount: 98,
        caption: "Late night coding vibes 💻🌙",
        video: "./reels/video8.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1682096515837-81ef4d728980?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 45,
        isFollowed: true
    },
    {
        username: "tech_with_anu",
        isMuted: true,
        likeCount: 875,
        isLiked: false,
        commentCount: 64,
        caption: "JavaScript tips you should know 🚀",
        video: "./reels/video9.mp4",
        userProfile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 32,
        isFollowed: false
    },
    {
        username: "daily_ui",
        isMuted: true,
        likeCount: 2130,
        isLiked: true,
        commentCount: 156,
        caption: "Minimal login screen design 🎨",
        video: "./reels/video10.mp4",
        userProfile: "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        shareCount: 120,
        isFollowed: true
    }
];

let allReels = document.querySelector('.all-reels')


function addData() {
    let sum = '';

    reels.forEach((elem, idx) => {
        sum += ` <div class="reel">
                    <video autoplay ${elem.isMuted ? 'muted' : ''} loop src="${elem.video}"></video>
                    <div id="${idx}" class="mute">
                    ${elem.isMuted? '<i class="ri-volume-mute-fill"></i>': '<i class="ri-volume-up-fill"></i>'}
                
            </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h2>${elem.username}</h2>
                            <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line">'}</i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-message-2-line"></i></h4>
                            <h6>73</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></h4>
                           
                        </div>
                    </div>
                </div>`



    })


    allReels.innerHTML = sum;

}

addData();

allReels.addEventListener('click', (dets) => {

    if (dets.target.className === 'like') {
        if (reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        } else {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
        }
        addData()
    }



    if (dets.target.className === 'follow') {
        if (reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = false;
        } else {
            reels[dets.target.id].isFollowed = true;
        }
        addData()
    }

    console.log(dets.target);
    

    if (dets.target.className === 'mute') {
        

        if (reels[dets.target.id].isMuted) {
            reels[dets.target.id].isMuted = false;
        }
        else {
            reels[dets.target.id].isMuted = true;
        }
        addData();
    }



})