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
    if(randomKet == 1) return 'adalah calon pasanganmu'
    if(randomKet == 2) return 'is your future boyfriend'
    if(randomKet == 3) return 'adalah ayang kamu'
    if(randomKet == 4) return 'adalah bebeb kamu'
    if(randomKet == 5) return 'is yours'
    if(randomKet == 6) return 'adalah milikmu'
    if(randomKet == 7) return 'adalah jodohmu'}
function randomQuotes(){
    const randomAnjay = Math.floor(Math.random() * 9 + 1)
    if(randomAnjay == 1) return '"'+'Laki-laki lebih mudah jatuh cinta daripada perempuan'+'"';
    if(randomAnjay == 2) return '"'+'Pria dan perempuan merasakan cinta dengan cara berbeda. Pria akan mengedepankan logika saat jatuh cinta sementara perempuan mengedepankan perasaan.'+'"';
    if(randomAnjay == 3) return '"'+'Semakin kamu mengabaikan orang yang kamu sukai, semakin kamu jatuh cinta padanya'+'"';
    if(randomAnjay == 4) return '"'+'Bergandengan tangan akan meredakan stres, kecemasan, dan ketakutan'+'"';
    if(randomAnjay == 5) return '"'+'Laki-laki lebih mudah jatuh cinta daripada perempuan'+'"';
    if(randomAnjay == 6) return '"'+'Jatuh cinta sama adiktifnya dengan kokaina atau nikotin'+'"';
    if(randomAnjay == 7) return '"'+'Waktu rata-rata cewek mampu memegang sebuah rahasia adalah 47 jam 15 menit, selebihnya...'+'"';
    if(randomAnjay == 8) return '"'+'Orang yang selalu berusaha menyenangkan orang lain sebenarnya adalah orang yang paling butuh dihibur dan sering merasa sendiri.'+'"';
    if(randomAnjay == 9) return '"'+'Sendirian dalam waktu yang lama sampai merasa sangat kesepian sama buruknya dengan menghisap rokok 15 batang per hari.'+'"';
    
}
function randomTitle(){
    const randomtitle = Math.floor(Math.random() * 8 + 1)
    if(randomtitle == 1) return "CIEEE..."
    if(randomtitle == 2) return "Ehem Ehem.."
    if(randomtitle == 3) return "Afah Betul.."
    if(randomtitle == 4) return "Uhuk Uhuk.."
    if(randomtitle == 5) return "OMAYGATT"
    if(randomtitle == 6) return "Demmm:D"
    if(randomtitle == 7) return "ril cuy"
    if(randomtitle == 8) return "Ara Ara~"}
function randomKamu(){
    const randomBang = Math.floor(Math.random() * 13 + 1)
    if(randomBang == 1) return "bima"
    if(randomBang == 2) return "Pojan"
    if(randomBang == 3) return "Jaka"
    if(randomBang == 4) return "Agi"
    if(randomBang == 5) return "aul"
    if(randomBang == 6) return "Varrian"
    if(randomBang == 7) return "Rajan"
    if(randomBang == 8) return "Patir"
    if(randomBang == 9) return "Nayan"
    if(randomBang == 10) return "Jidan"
    if(randomBang == 11) return "Maul"
    if(randomBang == 12) return "Daoa"
    if(randomBang == 13) return "Epan"
}
function putar(){
    const imgComp = document.querySelector(".img")
    let gambar = ['bima','aul','Pojan','Jaka','Epan','Daoa','Jidan','Rajan','Varrian','Patir','Maul','Nayan','Agi']
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
console.log(window.innerWidth)
// tombol
const container = document.querySelector(".container")
const buttons = document.querySelectorAll(".button")
let i = 0
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // declare variabel
    const link = document.querySelector(".button2 a")
    const link2 = document.querySelector(".button3 a")
    const randomLuwh = randomKamu();
    const randemTitle = randomTitle();
    const randomQuot = randomQuotes();
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
    const headQuot = document.querySelector(".headQuot");
    const quotes = document.querySelector(".quotes");
    const Ket = document.querySelector(".keterangan");
   
    playM('click')
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
        myGambar.classList.add("inShow")

        

        // quotes
        headQuot.style.display = "none"
        quotes.style.display = "none"
        putar()       
        setTimeout(function(){
            playM(randommusic)
            myGambar.setAttribute("src","/img/"+randomLuwh+".jpg")
            nama.innerHTML = randomLuwh;
            h2.innerHTML = randemTitle;
            Ket.innerHTML = randomket;
            // search.innerHTML = "cari yang lain"
            button1Real.innerHTML = "cari yang lain &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> ";
            myGambar.classList.remove("inShow")
            myGambar.style.transform = "scale(.8)"
            myGambar.classList.add("show")

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
            
            
            if(i > 1){
            headQuot.style.display = "block"
            quotes.style.display = "block"
            headQuot.classList.add("show")
            quotes.classList.add("show")
            // headQuot.classList.remove("hilang")
            // quotes.classList.remove("hilang")
            quotes.innerHTML = randomQuot
            } if(i >= 5 && i < 10){
                button1Real.innerHTML = "lanjut nyari &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "ayoo tembak&nbsp;<i class="+"'fa-solid fa-face-kiss-wink-heart'"+"></i>" ;
            }
            if(i >= 10 && i < 16){
                button1Real.innerHTML = "nyari lagii &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "tembak laa&nbsp;<i class="+"'fa-solid fa-face-kiss-wink-heart'"+"></i>" ;
            }
            if(i >= 16){
                button1Real.innerHTML = "nyari teross &nbsp;<i class="+"'fa-solid fa-magnifying-glass'"+"></i> "; 
                button3Real.innerHTML = "kuyy tembak &nbsp;<i class="+"'fa-solid fa-face-kiss-wink-heart'"+"></i>" ;
            }
            // link ig sama wa banh 
             switch(randomLuwh){
                 case 'bima': link.setAttribute("href","https://www.instagram.com/bimapn000/");
                              link2.setAttribute("href","https://wa.me/6285156928537/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku? ");
                              break;
                 case 'Pojan': link.setAttribute("href","https://www.instagram.com/zht.ta/");
                              link2.setAttribute("href","https://wa.me/6283895280084/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Jaka': link.setAttribute("href","https://www.instagram.com/hxroshii193/");
                              link2.setAttribute("href","https://wa.me/6281385002860/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Varrian':  link.setAttribute("href","https://www.instagram.com/astronaut.016/");
                              link2.setAttribute("href","https://wa.me/6281218405989/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Rajan': link.setAttribute("href","https://www.instagram.com/r_azan._1410/");
                              link2.setAttribute("href","https://wa.me/6283805861632/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Daoa': link.setAttribute("href","https://www.instagram.com/xx_dav__/");
                              link2.setAttribute("href","https://wa.me/6289506985641/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Maul':  link.setAttribute("href","https://www.instagram.com/mtryfauzi._/");
                              link2.setAttribute("href","https://wa.me/6285216970636/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Jidan':  link.setAttribute("href","https://www.instagram.com/dan_zida_n/");
                              link2.setAttribute("href","https://wa.me/6289622077474/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Epan':  link.setAttribute("href","https://www.instagram.com/efanhqma/");
                              link2.setAttribute("href","https://wa.me/6281572479741/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Nayan': link.setAttribute("href","https://www.instagram.com/ubbaayyyyy/");
                              link2.setAttribute("href","https://wa.me/6289506985981/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'aul':  link.setAttribute("href","https://www.instagram.com/oh.my.rin_/");
                              link2.setAttribute("href","https://wa.me/6281297715884/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Patir':  link.setAttribute("href","https://www.instagram.com/muhammadalhafizzy/");
                              link2.setAttribute("href","https://wa.me/6285861021494/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                 case 'Agi':
                              link2.setAttribute("href","https://wa.me/6285793735553/?text=Haloo,aku%20mau%20ngomong%20sesuatu%20nih...%0AKamu%20mau%20gak%20jadi%20pacar%20aku?");
                              break;
                              
             }                                                      
        },3000)
    }
    })
})