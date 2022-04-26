// function
function playM(musicName){
    let audio = new Audio('/audio/'+musicName+'.mp3')
    audio.play();
}
function randomMusic(){
    const randomM = Math.floor(Math.random() * 2 + 1)
    if(randomM == 1) return "win";
    if(randomM == 2) return "win2";
}
function randomKeterangan(){
    const randomKet = Math.floor(Math.random() * 7 + 1)
    if(randomKet == 1) return 'is your princess'
    if(randomKet == 2) return 'is your future girlfriend'
    if(randomKet == 3) return 'adalah ayang kamu'
    if(randomKet == 4) return 'adalah bebeb kamu'
    if(randomKet == 5) return 'is yours'
    if(randomKet == 6) return 'is your lover'
    if(randomKet == 7) return 'is your soulmates'}
function randomTitle(){
    const randomtitle = Math.floor(Math.random() * 8 + 1)
    if(randomtitle == 1) return "CIEEE<i class="+"'fa-regular fa-face-grin-tongue-wink'"+"></i> ";
    if(randomtitle == 2) return "EEAAA<i class="+"'fa-regular fa-face-grin-tongue-squint'"+"></i> ";
    if(randomtitle == 3) return "UwU :3"
    if(randomtitle == 4) return "Uhuk Uhuk.."
    if(randomtitle == 5) return "OMAYGATT<i class="+"'fa-regular fa-face-flushed'"+"></i> ";
    if(randomtitle == 6) return "Ehemmm<i class="+"'fa-regular fa-face-kiss-beam'"+"></i> ";
    if(randomtitle == 7) return "Apah Betul<i class="+"'fa-regular fa-face-surprise'"+"></i> ";
    if(randomtitle == 8) return "Anjayy<i class="+"'fa-regular fa-face-grin-stars'"+"></i> ";
}
function randomKamu(){
    const randomBang = Math.floor(Math.random() * 5 + 1)
    if(randomBang == 1) return "Auja"
    if(randomBang == 2) return "Ami"
    if(randomBang == 3) return "Ajmi"
    if(randomBang == 4) return "Jiun"
    if(randomBang == 5) return "Nanad"
}
function putar(){
    const imgComp = document.querySelector(".img")
    let gambar = ['Auja','Ami','Ajmi','Jiun','Nanad']
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 3000){
            clearInterval;
            return
        }        
        playM("spin")
        imgComp.setAttribute("src","/img/"+gambar[i++]+".jpg")
        if(i == gambar.length){
            i = 0;
        }
    },100)
}
// tombol
const buttons = document.querySelectorAll(".button")
let i = 0;
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // mengambil elemen html dan membuat variabel
    const link = document.querySelector(".button2 a")
    const link2 = document.querySelector(".button3 a")
    const randomLuwh = randomKamu();
    const randemTitle = randomTitle();
    const randomket = randomKeterangan();
    const randommusic = randomMusic();
    const myGambar = document.querySelector(".img");
    const nama = document.querySelector(".container h5 .nama");
    const h2 = document.querySelector(".container h2");
    const kata = document.querySelector(".container .kata");
    const button1 = document.querySelector(".back1");
    const button1Real = document.querySelector(".button1")
    const button2 = document.querySelector(".back2");
    const button3 = document.querySelector(".back3");
    const button3Real = document.querySelector(".button3");
    const Ket = document.querySelector(".keterangan");
        // soundEffect click
    playM('click')
       // Button 1 event 
    if(e.target.classList.contains("button1")){     
        i++;
        // buttons
        button1.style.display = "none"
        button1.style.transform = "scale(0)"
        button2.style.display = "none"
        button2.style.transform = "scale(0)"
        button3.style.display = "none"
        button3.style.transform = "scale(0)"
        // judul dam kata
        h2.style.display = "none"
        h2.style.transform = "scale(0)"
        kata.style.display = "none"
        kata.style.transform = "scale(0)"
        // display
        myGambar.style.transform = "scale(1)"
        myGambar.style.borderRadius = "20px"
        myGambar.classList.add("inImg")
        // function putar
        putar()
        // event yang akan terjadi setelah function putar dijalankan atau 3 detik setelah button di klik   
        setTimeout(function(){
            playM(randommusic)
            myGambar.setAttribute("src","/img/"+randomLuwh+".jpg")
            nama.innerHTML = randomLuwh;
            h2.innerHTML = randemTitle;
            Ket.innerHTML = randomket;
            // search.innerHTML = "cari yang lain"
            button1Real.innerHTML = "nyari lagi &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> ";
            myGambar.classList.remove("inImg")
            myGambar.style.transform = "scale(.8)"
            myGambar.style.borderRadius = "150px"
            myGambar.classList.add("showImg")

            kata.classList.add("show")
            kata.classList.add("show")
            h2.classList.add("show")
            h2.style.display = "block"
            kata.style.display = "block"
            button1.style.display = "inline"
            button3.style.display = "inline"
            button2.style.display = "inline"
                     
            button1.classList.add("show")
            button2.classList.add("show")
            button3.classList.add("show")
            if(i >= 5 && i < 10){
                button1Real.innerHTML = "nyari lagi nieh &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "ayoo tembak cuy&nbsp;<i class="+"'fa-solid fa-face-grin-hearts'"+"></i>" ;
            }
            if(i >= 10 && i < 16){
                button1Real.innerHTML = "teruss nyari &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "tembak cepett&nbsp;<i class="+"'fa-solid fa-face-grin-hearts'"+"></i>" ;
            }
            if(i >= 16){
                button1Real.innerHTML = "lanjutt nyari &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "tembakk ayoo &nbsp;<i class="+"'fa-solid fa-face-grin-hearts'"+"></i>" ;
            }
            // link ig sama wa banh      
             switch(randomLuwh){
                 case 'Auja':  link.setAttribute("href","https://www.instagram.com/1rubyelrn/");
                               link2.setAttribute("href","https://wa.me/6289501915965/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                               break;
                 case 'Ami'  : link.setAttribute("href","https://www.instagram.com/najmiptr/");
                               link2.setAttribute("href","https://wa.me/6285884859360/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                               break;   
                 case 'Ajmi' : link.setAttribute("href","https://www.instagram.com/derrymiw_/");
                               link2.setAttribute("href","https://wa.me/62895331320673/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                               break;    
                 case 'Nanad': link.setAttribute("href","https://www.instagram.com/adelextraice/");
                               link2.setAttribute("href","https://wa.me/628888369516/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                               break;   
                 case 'Jiun' : link.setAttribute("href","https://www.instagram.com/zev4seesh/");
                               link2.setAttribute("href","https://wa.me/6289691410502/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                               break;   
             }                                                                                                        
        },3000)
    }
    })
})