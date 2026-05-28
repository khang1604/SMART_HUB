const dataPages = [
    {
        imgSrc: "../photo/index_01.jpg",
        title: "Bận rộn mỗi ngày?",
        desc:"Thời gian quý giá, đừng lãng phí vào việc lên kế hoạch."
    },
    {
        imgSrc: "../photo/index_02_home_01.jpg",
        title: "Trải nghiệm trọn gói",
        desc:"Smart Hub lo tất cả - bạn chỉ cần tận hưởng"
    },
    {
        imgSrc: "../photo/index_03.jpg",
        title: "Gợi ý cá nhân hóa",
        desc:"Lịch trình hoàn hảo dành riêng cho bạn"
    },
    {
        imgSrc: "../photo/index_04_home_05.jpg",
        title: "Tận hưởng ngay",
        desc:"Staycation cao cấp tại Vinhomes - chỉ trong vài chạm"
    }
];

window.addEventListener('DOMContentLoaded', ()=>{
    const Screen = document.getElementById('loadScreen');
    setTimeout(()=>{
        Screen.classList.add('hidden');
    },3000);
});
let currIndex = 0;
const bgImage = document.getElementById('bg-image');
const mainTitle = document.getElementById('main-title');
const mainDesc = document.getElementById('main-desc');
const nextBtn = document.getElementById('next-btn');
const text = document.getElementById('text')
const dots = document.querySelectorAll('.btn > button');
const skip = document.getElementById('skip');

function updatePage(index){
    bgImage.src = dataPages[index].imgSrc;
    mainTitle.innerText = dataPages[index].title;
    mainDesc.innerText = dataPages[index].desc;

    if(index === dataPages.length-1){
        text.innerText = "Bắt đầu ";
    }else{
        text.innerText = "Tiếp tục "
    }

    dots.forEach((dot,i) =>{
        if(i === index){
            dot.style.width = "30px";
            dot.style.borderRadius = "5px";
            dot.style.opacity = "1";
        }else{
            dot.style.width = "10px";
            dot.style.borderRadius = "50%";
            dot.style.opacity = "0.5";
        }
    });
}

skip.addEventListener('click',()=>{
    window.location.href = "home.html";
});

nextBtn.addEventListener('click',() =>{
    if(currIndex === dataPages.length-1){
        window.location.href = "home.html";
    }else{
        currIndex++;
        updatePage(currIndex);
    }
});

dots.forEach((dot, index)=>{
    dot.addEventListener('click', ()=>{
        currIndex=index;
        console.log(currIndex);
        updatePage(currIndex);
    });
});