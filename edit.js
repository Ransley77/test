const gallery = [
    {
        file: "download.png",
        title: "INDONESIA",
        text: "Negara kepulauan terbesar di dunia.",
        subContent: [
            { 
                img: "download.png", 
                subTitle: "Peta Nusantara", 
                desc: "Indonesia memiliki lebih dari 17.000 pulau yang terbentang dari Sabang sampai Merauke." 
            },
            { 
                img: "licensed-image.jpg", 
                subTitle: "Bhinneka Tunggal Ika", 
                desc: "Semboyan bangsa yang berarti 'Berbeda-beda tetapi tetap satu jua'." 
            },
            { 
                img: "icon.jpg", 
                subTitle: "Garuda Pancasila", 
                desc: "Lambang negara Indonesia dengan perisai yang memuat lima sila dasar negara." 
            }
        ]
    },
    {
        file: "apaj.jpg",
        title: "SEJARAH BALI",
        text: "Dari masa kerajaan hingga kolonial.",
        subContent: [
            { img: "apaj.jpg", subTitle: "Kerajaan Bali Kuno", desc: "Sejarah wangsa Warmadewa dan peninggalan prasasti kuno." },
            { img: "unnamed.jpg", subTitle: "Perang Puputan", desc: "Semangat perlawanan habis-habisan rakyat Bali melawan penjajah." },
            { img: "licensed-image.jpg", subTitle: "Bergabung NKRI", desc: "Pada tahun 1958, Bali resmi ditetapkan sebagai provinsi otonom." }
        ]
    },
    {
        file: "icon.jpg", 
        title: "BAHASA & SASTRA",
        text: "Sistem tingkatan bahasa yang unik.",
        subContent: [
            { img: "licensed-image.jpg", subTitle: "Basa Alus", desc: "Bahasa halus yang digunakan untuk berbicara kepada orang suci." },
            { img: "ok.jpg", subTitle: "Basa Madya", desc: "Bahasa pergaulan sehari-hari yang sopan." },
            { img: "oke.jpg", subTitle: "Basa Kasar", desc: "Bahasa untuk situasi emosional atau hewan." }
        ]
    },
    {
        file: "ok.jpg",
        title: "AKSARA BALI",
        text: "Hanacaraka warisan leluhur.",
        subContent: [
            { img: "ok.jpg", subTitle: "Wreastra", desc: "18 huruf utama (Hanacaraka)." },
            { img: "download.png", subTitle: "Lontar", desc: "Media tulis tradisional dari daun pohon siwalan." },
            { img: "apaj.jpg", subTitle: "Aksara Modre", desc: "Aksara suci dan magis." }
        ]
    },
    {
        file: "oke.jpg",
        title: "SENI & TRADISI",
        text: "Tari, upacara, dan ritual sakral.",
        subContent: [
            { img: "oke.jpg", subTitle: "Tari Kecak", desc: "Tarian unik tanpa alat musik." },
            { img: "unnamed.jpg", subTitle: "Ngaben", desc: "Upacara pembakaran jenazah." },
            { img: "icon.jpg", subTitle: "Ogoh-Ogoh", desc: "Patung raksasa simbol Bhuta Kala." },
            { img: "download.png", subTitle: "Tari Barong", desc: "Simbol kebajikan melawan kejahatan." },
            { img: "apaj.jpg", subTitle: "Nyepi", desc: "Hari raya keheningan total." }
        ]
    },
    {
        file: "unnamed.jpg",
        title: "TOKOH & PAHLAWAN",
        text: "Pahlawan pemberani dari Bali.",
        subContent: [
            { img: "unnamed.jpg", subTitle: "I Gusti Ngurah Rai", desc: "Pahlawan Nasional pemimpin pasukan Ciung Wanara." },
            { img: "apaj.jpg", subTitle: "I Gusti Ketut Jelantik", desc: "Patih Kerajaan Buleleng yang terkenal." },
            { img: "licensed-image.jpg", subTitle: "Nama Khas Bali", desc: "Sistem urutan kelahiran Wayan, Made, Nyoman, Ketut." }
        ]
    },
    {
        file: "icon.jpg",
        title: "WISATA BALI",
        text: "Surga dunia yang memukau mata.",
        subContent: [
            { img: "icon.jpg", subTitle: "Tanah Lot", desc: "Pura suci di atas batu karang." },
            { img: "download.png", subTitle: "GWK Cultural Park", desc: "Patung Garuda Wisnu Kencana." },
            { img: "oke.jpg", subTitle: "Pantai Kuta", desc: "Pantai paling populer di Bali." },
            { img: "ok.jpg", subTitle: "Ubud", desc: "Pusat seni dan budaya Bali." }
        ]
    }
];

let currIdx = 0;
let lock = false;

const el = {
    centerContainer: document.querySelector('.center-container'),
    imageHolder: document.getElementById('image-holder'),
    img: document.getElementById('img-display'),
    title: document.getElementById('txt-title'),
    desc: document.getElementById('txt-desc'),
    infoBox: document.querySelector('.info-box'),
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('card-overlay'),
    overlayTitle: document.getElementById('overlay-title'),
    menuGrid: document.getElementById('menu-grid'),
    detailView: document.getElementById('detail-view'),
    detailImg: document.getElementById('detail-img'),
    detailTitle: document.getElementById('detail-title'),
    detailDesc: document.getElementById('detail-desc')
};

function toggleMenu() {
    el.sidebar.classList.toggle('active');
}

function bukaCard() {
    if(lock) return;
    
    el.centerContainer.classList.add('zoom-active');
    el.infoBox.classList.add('hide');

    setTimeout(() => {
        const item = gallery[currIdx];
        el.overlayTitle.innerText = item.title;
        
        el.menuGrid.style.display = 'grid';
        el.detailView.classList.remove('active');
        el.menuGrid.innerHTML = "";

        item.subContent.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <img src="${sub.img}" class="menu-img" alt="${sub.subTitle}">
                <div class="menu-title">${sub.subTitle}</div>
            `;
            card.onclick = () => bukaDetail(sub);
            el.menuGrid.appendChild(card);
        });

        el.overlay.classList.add('active');
    }, 800);
}

function bukaDetail(data) {
    el.menuGrid.style.display = 'none';
    el.detailView.classList.add('active');
    
    el.detailImg.src = data.img;
    el.detailTitle.innerText = data.subTitle;
    el.detailDesc.innerText = data.desc;
}

function backToMenu() {
    el.detailView.classList.remove('active');
    setTimeout(() => {
        el.menuGrid.style.display = 'grid';
    }, 300);
}

function tutupCard() {
    el.overlay.classList.remove('active');
    
    setTimeout(() => {
        el.centerContainer.classList.remove('zoom-active');
        el.infoBox.classList.remove('hide');
    }, 500);
}

function moveSlide(dir) {
    if (lock) return;
    lock = true;

    el.imageHolder.classList.add('anim-out');
    el.title.style.opacity = 0;
    el.desc.style.opacity = 0;
    
    setTimeout(() => {
        currIdx += dir;
        if (currIdx >= gallery.length) currIdx = 0;
        if (currIdx < 0) currIdx = gallery.length - 1;
        
        refreshView(); 

        el.imageHolder.classList.remove('anim-out');
        el.title.style.opacity = 1;
        el.desc.style.opacity = 1;

        setTimeout(() => { lock = false; }, 500);
    }, 250);
}

function refreshView() {
    const item = gallery[currIdx];
    el.img.src = item.file; 
    el.title.innerText = item.title;
    el.desc.innerText = item.text;
}