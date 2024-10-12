const homePage = document.querySelector(`.homePage`);

const posts = [
  {
    pfp: "JohnKhant.jpg",
    name: "John Khant",
    time: "5 hours ago",
    caption: "kfkldfjls",
    postimg: "JohnKhant.jpg",
    reactions: {
      Like: 0,
      Love: 2,
      Care: 0,
      Haha: 0,
      Wow: 0,
      Sad: 0,
      Angry: 0,
      total() {
        return (
          this.Like +
          this.Love +
          this.Care +
          this.Haha +
          this.Wow +
          this.Sad +
          this.Angry
        );
      },
    },
    comments: [
      {
        pfp: "pic/JohnKhant.jpg",
        name: "John Khant",
        comment: "Awesome work!",
        time: "5m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Sarah Lee",
        comment: "I totally agree with this.",
        time: "8m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Mark Dawson",
        comment: "Where can I find more info?",
        time: "10m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Emily Clark",
        comment: "Wow, thats impressive!",
        time: "15m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "David Kim",
        comment: "Lets catch up soon.",
        time: "20m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Lisa Nguyen",
        comment: "Thanks for sharing this.",
        time: "25m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Tom Harris",
        comment: "This made my day!",
        time: "30m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Rachel Green",
        comment: "Looks great! Keep it up.",
        time: "35m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Oliver James",
        comment: "How do I get started?",
        time: "40m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Sophia Adams",
        comment: "I cant believe this!",
        time: "45m",
      },
    ],
    shares: 1,
  },

  {
    pfp: "JohnKhant.jpg",
    name: "Jack",
    time: "5 hours ago",
    caption: "Gimme those booties gurls",
    postimg: "JohnKhant.jpg",
    reactions: {
      Like: 1,
      Love: 0,
      Care: 0,
      Haha: 1,
      Wow: 0,
      Sad: 1,
      Angry: 1,
      total() {
        return (
          this.Like +
          this.Love +
          this.Care +
          this.Haha +
          this.Wow +
          this.Sad +
          this.Angry
        );
      },
    },
    comments: [
      {
        pfp: "pic/JohnKhant.jpg",
        name: "John Khant",
        comment: "That's hilarious!",
        time: "2m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Chris Evans",
        comment: "Can’t wait to try this.",
        time: "4m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Jessica Roberts",
        comment: "This is so helpful!",
        time: "6m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Jake Paul",
        comment: "Totally worth it.",
        time: "9m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Megan Turner",
        comment: "Incredible work!",
        time: "11m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Oliver King",
        comment: "This is gold.",
        time: "13m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Sophia White",
        comment: "Just what I needed.",
        time: "16m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Daniel Garcia",
        comment: "Keep it coming!",
        time: "18m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Ethan Brooks",
        comment: "I’m saving this.",
        time: "20m",
      },
      {
        pfp: "pic/JohnKhant.jpg",
        name: "Isabella Taylor",
        comment: "This looks amazing!",
        time: "23m",
      },
    ],
    shares: 1,
  },
];
const AddPosts = () => {
  let html = "";
  posts.map((post, i) => {
    html = ` <div class="post">
        <div class="postCreator">
            <img src="pic/${post.pfp}" alt="">
        <div class="nameTime">
            <p class="creator">${post.name}</p>
            <p class="postTime">${post.time}</p>

        </div>
        </div>
        <div class="caption">
            <p>${post.caption}</p>
        </div>
        <div class="postImg">
            <img src="pic/${post.postimg}" alt="">
        </div>
        <div class="reaches">
    
            <div class="reacts">
            <div class="reactIcons${i}" style="z-index:1; padding-right:5px">
            <div class="reactIconGp${i}" style="position: relative">
            </div>
            </div>
            
            <div class="reactsnum">
            ${post.reactions.total()}
            </div>
            
            </div>
        <div class="commentNshares">
            <p class="shares">${post.shares} Shares</p>
            <p class="comments">${post.comments.length} Comments</p>
            
        </div>  
        </div>

        <div class='react-hidden-${i} ' style='display:none;'>
        <div class="reactions">
            <div class="like"><img src="pic/Like.png" alt=""></div>
            <div class="love"><img src="pic/Love.png" alt=""></div>
            <div class="care"><img src="pic/Care.png" alt=""></div>
            <div class="haha"><img src="pic/Haha.png" alt=""></div>
            <div class="wow"><img src="pic/Wow.png" alt=""></div>
            <div class="sad"><img src="pic/Sad.png" alt=""></div>
            <div class="angry"><img src="pic/Angry.png" alt=""></div>
        </div>
        </div>
        <div class="postBtns">
       
            <div><button class="likebtn" value="false" name="" ><i class="fa fa-thumbs-up"></i> Like</button>  
            
        </div>
            <div class="commentbtn"><button><i class="fa fa-comment"></i> Comment</button></div>
            <div class="sharebtn"><button><i class="fa fa-share"></i> Share</button></div>
        </div>
        
    </div>`;

    homePage.insertAdjacentHTML("afterbegin", html);
  });
};
AddPosts(); //Adding posts from the Object array.
const likes = document.querySelectorAll(".like");
const loves = document.querySelectorAll(".love");
const cares = document.querySelectorAll(".care");
const wows = document.querySelectorAll(".wow");
const hahas = document.querySelectorAll(".haha");
const sads = document.querySelectorAll(".sad");
const angrys = document.querySelectorAll(".angry");

const likebtns = document.querySelectorAll(".likebtn");
const reactNum = document.querySelectorAll(".reactsnum");
const reactIcons = document.querySelectorAll(".reactIcons");
const cmtbtn = document.querySelectorAll(".commentbtn");
const cmtplace = document.querySelector(".comment_popup");
const cmtBackground = document.querySelector(".commentBoxBackground");
const cmtNum = document.querySelectorAll(".comments");
console.log(cmtNum);

const reactIconAdd = (post, index) => {
  let currentReactIcon = document.querySelector(`.reactIcons${index}`);
  let cr = document.querySelector(`.reactIconGp${index}`);

  const reacts = Object.entries(post.reactions).sort((a, b) => b[1] - a[1]);
  reacts.splice(3);
  let html = "";
  let left = -20;
  let width = 5;

  reacts.forEach((react, i) => {
    if (react[1] > 0) {
      html += `<img style="z-index:${3 - i}; left:${(left += 15)}px"src="pic/${
        react[0]
      }.png">`;
      currentReactIcon.style.width = `${(width += 15)}px`;
    }
  });

  cr.innerHTML = html;
};

posts.map((post, i) => {
  reactIconAdd(post, i);
}); // adding reaction icons

const LikeButtonFunc = () => {
  likebtns.forEach((btn, i) => {
    let currentClass = document.querySelector(
      `.react-hidden-${posts.length - 1 - i}`
    );
    btn.addEventListener("mouseenter", () => {
      hoverTimeout = setTimeout(() => {
        currentClass.style.position = "absolute";
        currentClass.style.display = "flex";
      }, 2000);
    });
    btn.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
    });
    document.body.addEventListener("click", () => {
      currentClass.style.display = "none";
    });

    btn.addEventListener("click", () => {
      if (btn.value == "true") {
        btn.innerHTML = `<i class="fa fa-thumbs-up"></i> Like`;
        btn.value = false;
        let currentReact = btn.getAttribute("name");
        posts[posts.length - 1 - i].reactions[currentReact] -= 1;
        btn.setAttribute("name", "");
      } else {
        btn.innerHTML = `<img src="pic/Like.png" alt=""> Like`;
        btn.value = true;
        posts[posts.length - 1 - i].reactions.Like += 1;
        btn.setAttribute("name", "Like");
      }

      reactNum[i].textContent = posts[posts.length - 1 - i].reactions.total();
      reactIconAdd(posts[posts.length - 1 - i], posts.length - 1 - i);
    });
  });
};

LikeButtonFunc(); // Adding functionalities to the like buttons

const reacts = (likes, Like) => {
  likes.forEach((like, i) => {
    like.addEventListener("click", () => {
      likebtns[i].innerHTML = `<img src="pic/${Like}.png" alt="">${Like}`;

      if (likebtns[i].value == "false") {
        posts[posts.length - 1 - i].reactions[Like] += 1;

        likebtns[i].value = true;
        likebtns[i].setAttribute("name", Like);
      } else {
        posts[posts.length - 1 - i].reactions[
          likebtns[i].getAttribute("name")
        ] -= 1;
        posts[posts.length - 1 - i].reactions[Like] += 1;
        likebtns[i].setAttribute("name", Like);
      }
      reactNum[i].textContent = posts[posts.length - 1 - i].reactions.total();
      reactIconAdd(posts[posts.length - 1 - i], posts.length - 1 - i);
    });
  });
};

reacts(loves, "Love");
reacts(likes, "Like");
reacts(cares, "Care");
reacts(wows, "Wow");
reacts(hahas, "Haha");
reacts(sads, "Sad");
reacts(angrys, "Angry"); //adding functionalities to the react buttons

const cmtBoxDisplay = () => {
  cmtbtn.forEach((btn, i) => {
    let currentPost = posts[posts.length - 1 - i];
    btn.addEventListener("click", () => {
      cmtplace.innerHTML = `<div class="commentBox">
    <div class="creatorPost">
        <p>${currentPost.name.split(" ")[0]}'s Post</p>
    </div>
    <div class="commentSort">
        Most relevant ▼
    </div>
    <div class="commentSection">
        
    </div>
    <div class="commentTextBox">
        <div class="profilePic">
            <img src="pic/JohnKhant.jpg" alt="">
        </div>
        <div class="textBox">
            <input class="cmtInput" type="text" placeholder="Write a comment...">
            <div class="textBoxIcons">
            <div class="cmtCamera"><img src="pic/camera-solid.svg" alt="camera"></div>
            <div class="cmtEmoji"><img src="pic/face-smile-regular.svg" alt="emoji"></div>
            <div class="cmtSticker"><img src="pic/note-sticky-regular.svg" alt="sticker"></div>
            <div class="cmtSendBtn"><img src="pic/paper-plane-solid.svg" alt="send"></div>
            </div>
        </div>

    </div>
</div>`;

      const addCmts = (post) => {
        const cmtSection = document.querySelector(".commentSection");
        let html = "";

        post.comments.map((cmt) => {
          html = `<div class="commentBlock">
            <div class="userNcomment">
            <div class="cmtPfp"><img src="${cmt.pfp}" alt=""></div>
            <div class="comment">
                <p><b>${cmt.name}</b></p>
                <p>${cmt.comment}</p>
            </div>
            </div>
            <div class="cmtLikeReply">
                <div class="cmtTime">${cmt.time}</div>
                <div class="cmtLike">Like</div>
                <div class="cmtReply">Reply</div>
            </div>

        </div>`;
          cmtSection.insertAdjacentHTML("afterbegin", html);
        });
      };

      addCmts(currentPost);

      cmtBackground.style.display = "flex";
      document.body.style.overflow = "hidden";

      cmtBackground.addEventListener("click", () => {
        cmtplace.innerHTML = "";
        cmtBackground.style.display = "none";
        document.body.style.overflowY = "auto";
      });
      const postCmt = (post) => {
        const comment = document.querySelector(".cmtInput");
        const cmtSendbtn = document.querySelector(".cmtSendBtn");

        cmtSendbtn.addEventListener("click", () => {
          if (comment.value.trim() === "") {
          } else {
            newCmt = {
              pfp: "pic/JohnKhant.jpg",
              name: "John Khant",
              comment: comment.value,
              time: "just now",
            };
            post.comments.push(newCmt);
            addCmts(post);
            comment.value = "";
            cmtNum[
              posts.length - 1 - posts.indexOf(post)
            ].textContent = `${post.comments.length} Comments`;
          }
        });
      };
      postCmt(currentPost);
    });
  });
};

cmtBoxDisplay();
