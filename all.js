// nav 스크롤시 흰색 바탕
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('#header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 0);
  });
});


// 로그인 모달
const login=document.getElementsByClassName('login_btn');
const login_back=document.getElementsByClassName('login-back');
const login_page=document.getElementsByClassName('login-page');

login[0].addEventListener('click',function(){
    login_back[0].style.display='block';
    login_page[0].style.display='block';
});
login_back[0].addEventListener('click',function(){
    login_back[0].style.display='none';
    login_page[0].style.display='none';
});

// search
document.querySelector('.search').addEventListener('mouseenter', () => {
  document.querySelector('.search-input').focus();
});

// goTop
  const goTopBtn = document.getElementById("goTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });