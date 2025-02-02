const maindiv = document.querySelector(".t50");
let brojac3 = 0;
function addTA50(image, name, desc1, desc2, desc3, avgscore) {
    brojac3++;
    const anime = document.createElement("div");
    anime.classList.add("an");
    anime.classList.add(`anime${brojac3}`);

    const rbr = document.createElement("p");
    rbr.classList.add("rbr");
    rbr.textContent = brojac3;
    anime.appendChild(rbr);
    const apic = document.createElement("div");
    apic.classList.add("anpicdiv");

    const pic = document.createElement("img");
    pic.classList.add("pic");
    pic.classList.add(`pic${brojac3}`);
    pic.src = image;
    apic.appendChild(pic);
    anime.appendChild(apic);

    const nad = document.createElement("div");
    nad.classList.add("nameanddesc");
    nad.classList.add(`nameanddesc${brojac3}`)
    const aname = document.createElement("p");
    aname.classList.add("name");
    aname.classList.add(`name${brojac3}`);
    aname.textContent = name;
    nad.appendChild(aname);

    const desc = document.createElement("div");
    desc.classList.add("descs");
    desc.classList.add(`descs${brojac3}`);

    const descc1 = document.createElement("p");
    descc1.classList.add("desc1");
    descc1.classList.add(`desc1${brojac3}`);
    descc1.textContent = desc1;
    desc.appendChild(descc1);
    const descc2 = document.createElement("p");
    descc2.classList.add("desc2");
    descc2.classList.add(`desc2${brojac3}`);
    descc2.textContent = desc2;
    desc.appendChild(descc2);
    const descc3 = document.createElement("p");
    descc3.classList.add("desc3");
    descc3.classList.add(`desc3${brojac3}`);
    descc3.textContent = desc3;
    desc.appendChild(descc3);
    nad.appendChild(desc);

    anime.appendChild(nad);
    
    const status = document.createElement("div");
    status.classList.add("status");
    status.classList.add(`status${brojac3}`);
    status.textContent = "Dodaj u Listu";
    anime.appendChild(status);

    const avgsc = document.createElement("div");
    avgsc.classList.add("avgscore");
    avgsc.classList.add(`avgscore${brojac3}`);
    avgsc.textContent = avgscore;
    anime.appendChild(avgsc);

    maindiv.appendChild(anime);

}
addTA50("images/fma.jpg", "Fullmetal Alchemist: Brotherhood", "TV (64 eps)", "Apr 2009 - Jul 2010", "2,622,263 members", "9.16");
addTA50("images/gintama.jpg", "Gintama°", "TV (51 eps)", "Apr 2015 - Mar 2016", "472,000 members", "9.11");
addTA50("images/aots3.jpg", "Shingeki no Kyojin Season 3 Part 2", "TV (10 eps)", "Apr 2019 - Jul 2019", "1,533,815 members", "9.10");
addTA50("images/sg.jpg", "Steins;Gate", "TV (24 eps)", "Apr 2011 - Sep 2011", "2,051,968 members", "9.10");
addTA50("images/fnb.jpg", "Fruits Basket: The Final", "TV (13 eps)", "Apr 2021 - Jun 2021", "258,186 members", "9.08");
addTA50("images/ginta2.jpg", "Gintama'", "TV (51 eps)", "Apr 2011 - Mar 2012", "420,510 members", "9.06");
addTA50("images/hxh.jpg", "Hunter x Hunter (2011)", "TV (148 eps)", "Oct 2011 - Sep 2014", "2,093,957 members", "9.06");
addTA50("images/ginga.jpg", "Ginga Eiyuu Densetsu", "OVA (110 eps)", "Jan 1988 - Mar 1997", "258,734 members", "9.05");
addTA50("images/ginench.jpg", "Gintama': Enchousen", "TV (13 eps)", "Oct 2012 - Mar 2013", "255,727 members", "9.04");
addTA50("images/gintatacka.jpg", "Gintama.", "TV (12 eps)", "Jan 2017 - Mar 2017", "240,649 members", "8.99");
addTA50("images/gintamathefinal.jpg", "Gintama: The Final", "Movie (1 eps)", "Jan 2021 - Jan 2021", "73,639 members", "8.99");
addTA50("images/3l.jpg", "3-gatsu no Lion 2nd Season", "TV (22 eps)", "Oct 2017 - Mar 2018", "317,761 members", "8.98");
addTA50("images/kimi.jpg", "Koe no Katachi", "Movie (1 eps)", "Sep 2016 - Sep 2016", "1,732,822 members", "8.97");
addTA50("images/cla.jpg", "Clannad: After Story", "TV (24 eps)", "Oct 2008 - Mar 2009", "1,011,110 members", "8.95");
addTA50("images/g1.jpg", "Gintama", "TV (201 eps)", "Apr 2006 - Mar 2010", "868,650 members", "8.95");
addTA50("images/gm2.jpg", "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare", "Movie (1 eps)", "Jul 2013 - Jul 2013", "192,370 members", "8.94");
addTA50("images/aotf1.jpg", "Shingeki no Kyojin: The Final Season", "TV (16 eps)", "Dec 2020 - Mar 2021", "1,286,929 members", "8.92");
addTA50("images/owa.jpg", "Owarimonogatari 2nd Season", "TV (7 eps)", "Aug 2017 - Aug 2017", "317,094 members", "8.91");
addTA50("images/cd1.jpg", "Code Geass: Hangyaku no Lelouch R2", "TV (25 eps)", "Apr 2008 - Sep 2008", "1,442,442 members", "8.91");
addTA50("images/kimino.jpg", "Kimi no Na wa.", "Movie (1 eps)", "Aug 2016 - Aug 2016", "2,113,908 members", "8.90");
addTA50("images/gish.jpg", "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen", "TV (14 eps)", "Jul 2018 - Oct 2018", "141,969 members", "8.88");
addTA50("images/shig.jpg", "Shiguang Dailiren", "ONA (11 eps)", "Apr 2021 - Jul 2021", "113,557 members", "8.88");
addTA50("images/vem.jpg", "Violet Evergarden Movie", "Movie (1 eps)", "Sep 2020 - Sep 2020", "304,285 members", "8.87");
addTA50("images/gs.jpg", "Gintama.: Shirogane no Tamashii-hen", "TV (12 eps)", "Jan 2018 - Mar 2018", "155,112 members", "8.82");
addTA50("images/mp2.jpg", "Mob Psycho 100 II", "TV (13 eps)", "Jan 2019 - Apr 2019", "1,063,479 members", "8.82");
addTA50("images/haik.jpg", "Haikyuu!!: Karasuno Koukou vs. Shiratorizawa Gakuen Koukou", "TV (10 eps)", "Oct 2016 - Dec 2016", "915,870 members", "8.81");
addTA50("images/kizu.jpg", "Kizumonogatari III: Reiketsu-hen", "Movie (1 eps)", "Jan 2017 - Jan 2017", "363,794 members", "8.81");
addTA50("images/kajbucu.jpg", "Monster", "TV (74 eps)", "Apr 2004 - Sep 2005", "743,534 members", "8.80");
addTA50("images/odd.jpg", "Odd Taxi", "TV (13 eps)", "Apr 2021 - Jun 2021", "186,846 members", "8.80");
addTA50("images/sen.jpg", "Sen to Chihiro no Kamikakushi", "Movie (1 eps)", "Jul 2001 - Jul 2001", "1,459,661 members", "8.80");
addTA50("images/mono.jpg", "Monogatari Series: Second Season", "TV (26 eps)", "Jul 2013 - Dec 2013", "568,011 members", "8.78");
addTA50("images/cowb.jpg", "Cowboy Bebop", "TV (26 eps)", "Apr 1998 - Apr 1999", "1,444,995 members", "8.77");
addTA50("images/f.jpg", "Fate/stay night Movie: Heaven's Feel - III. Spring Song", "Movie (1 eps)", "Aug 2020 - Aug 2020", "219,427 members", "8.76");
addTA50("images/sho.jpg", "Shouwa Genroku Rakugo Shinjuu: Sukeroku Futatabi-hen", "TV (12 eps)", "Jan 2017 - Mar 2017", "157,352 members", "8.76");
addTA50("images/mush2.jpg", "Mushishi Zoku Shou 2nd Season", "TV (10 eps)", "Oct 2014 - Dec 2014", "220,768 members", "8.75");
addTA50("images/haji.jpg", "Hajime no Ippo", "TV (75 eps)", "Oct 2000 - Mar 2002", "435,727 members", "8.74");
addTA50("images/juju.jpg", "Jujutsu Kaisen (TV)", "TV (24 eps)", "Oct 2020 - Mar 2021", "1,439,548 members", "8.74");
addTA50("images/saga.jpg", "Vinland Saga", "TV (24 eps)", "Jul 2019 - Dec 2019", "914,305 members", "8.73");
addTA50("images/rur.jpg", "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen", "OVA (4 eps)", "Feb 1999 - Sep 1999", "243,503 members", "8.72");
addTA50("images/eva.jpg", "Evangelion: 3.0+1.0 Thrice Upon a Time", "Movie (1 eps)", "Mar 2021 - Mar 2021", "227,386 members", "8.72");
addTA50("images/ds.jpg", "Kimetsu no Yaiba Movie: Mugen Ressha-hen", "Movie (1 eps)", "Oct 2020 - Oct 2020", "808,997 members", "8.72");
addTA50("images/cg2.jpg", "Code Geass: Hangyaku no Lelouch", "TV (25 eps)", "Oct 2006 - Jul 2007", "1,820,881 members", "8.71");
addTA50("images/ms2.jpg", "Mushishi Zoku Shou", "TV (10 eps)", "Apr 2014 - Jun 2014", "251,354 members", "8.71");
addTA50("images/mia1.jpg", "Made in Abyss", "TV (13 eps)", "Jul 2017 - Sep 2017", "1,016,417 members", "8.70");
addTA50("images/mia2.jpg", "Made in Abyss Movie 3: Fukaki Tamashii no Reimei", "Movie (1 eps)", "Jan 2020 - Jan 2020", "273,665 members", "8.70");
addTA50("images/gto.jpg", "Great Teacher Onizuka", "TV (43 eps)", "Jun 1999 - Sep 2000", "664,738 members", "8.69");
addTA50("images/monoh.jpg", "Mononoke Hime", "Movie (1 eps)", "Jul 1997 - Jul 1997", "999,341 members", "8.69");
addTA50("images/yrl.jpg", "Shigatsu wa Kimi no Uso", "TV (22 eps)", "Oct 2014 - Mar 2015", "1,743,597 members", "8.69");
addTA50("images/ormus.jpg", "Mushishi", "TV (26 eps)", "Oct 2005 - Jun 2006", "688,225 members", "8.68");
addTA50("images/an2.jpg", "Ashita no Joe 2", "TV (47 eps)", "Oct 1980 - Aug 1981", "36,136 members", "8.68");

/* ADDING ANIME TO YOUR LIST */

const status1 = document.querySelectorAll(".status");
const cover = document.querySelector(".coverall");
let atoadd = "";
let imgtoadd = "";
let nametoadd = "";
let desc1toadd = "";
let desc2toadd = "";
let desc3toadd = "";
let epstoadd = "";
const show = document.querySelector(".adding");
status1.forEach(element => {
    element.addEventListener("click", () => {
        for (let i = 1; i <= 50; i++) {
            if (element.classList.contains(`status${i}`)) {
                atoadd = document.querySelector(`.anime${i}`);
                imgtoadd = document.querySelector(`.pic${i}`);
                nametoadd = document.querySelector(`.name${i}`);
                desc1toadd = document.querySelector(`.desc1${i}`);
                desc2toadd = document.querySelector(`.desc2${i}`);
                desc3toadd = document.querySelector(`.desc3${i}`);


                epstoadd = desc1toadd.textContent.substr(desc1toadd.textContent.indexOf('(') + 1, desc1toadd.textContent.length - desc1toadd.textContent.indexOf('(') - 2);

                const add1 = document.querySelector(`.name${i}`);
                const toaddto = document.querySelector(".aname");
                toaddto.textContent = add1.textContent;

                show.style.zIndex = "5";
                show.style.opacity = "100%";
                cover.style.opacity = "80%";
                cover.style.zIndex = "3";
            }
        }
    });
});

const drpmenu = document.querySelector(".dropcontent");
const dropbtn = document.querySelector(".dropbtn");
let brojac5 = 0;
function showMenu() {
    brojac5++;
    if (brojac5 % 2 !== 0) {
        drpmenu.style.display = "block";
    }
    else {
        drpmenu.style.display = "none";
    }
}

const drp1 = document.querySelector(".drp1");
const drp2 = document.querySelector(".drp2");
const drp3 = document.querySelector(".drp3");
const drp4 = document.querySelector(".drp4");
const drp5 = document.querySelector(".drp5");

drp1.addEventListener("click", () => {
    dropbtn.textContent = drp1.textContent;
    drpmenu.style.display = "none";
    brojac5++;
});
drp2.addEventListener("click", () => {
    dropbtn.textContent = drp2.textContent;
    drpmenu.style.display = "none";
    brojac5++;
});
drp3.addEventListener("click", () => {
    dropbtn.textContent = drp3.textContent;
    drpmenu.style.display = "none";
    brojac5++;
});
drp4.addEventListener("click", () => {
    dropbtn.textContent = drp4.textContent;
    drpmenu.style.display = "none";
    brojac5++;
});
drp5.addEventListener("click", () => {
    dropbtn.textContent = drp5.textContent;
    drpmenu.style.display = "none";
    brojac5++;
});

let maldiv = document.querySelector(".divlist");
let brojac10 = 0;
let addedanimes = [];
function addToMAL(image, name, desc1, desc2, desc3, episodess, ystatus) {
    brojac10++;
    const anime = document.createElement("div");
    anime.classList.add("an");
    anime.classList.add(`anime${brojac10}`);

    const rbr = document.createElement("p");
    rbr.classList.add("rbr");
    rbr.textContent = brojac10;
    anime.appendChild(rbr);

    const apic = document.createElement("div");
    apic.classList.add("anpicdiv");

    const pic = document.createElement("img");
    pic.classList.add("pic");
    pic.src = image;
    apic.appendChild(pic);
    anime.appendChild(apic);

    const nad = document.createElement("div");
    nad.classList.add("nameanddesc");

    const aname = document.createElement("p");
    aname.classList.add("name");
    aname.classList.add(`name${brojac10}`);
    aname.textContent = name;
    nad.appendChild(aname);

    const desc = document.createElement("div");
    desc.classList.add("descs");

    const descc1 = document.createElement("p");
    descc1.classList.add("desc1");
    descc1.textContent = desc1;
    desc.appendChild(descc1);
    const descc2 = document.createElement("p");
    descc2.classList.add("desc2");
    descc2.textContent = desc2;
    desc.appendChild(descc2);
    const descc3 = document.createElement("p");
    descc3.classList.add("desc3");
    descc3.textContent = desc3;
    desc.appendChild(descc3);
    nad.appendChild(desc);

    anime.appendChild(nad);

    const episodes = document.createElement("div");
    episodes.classList.add("episodes");
    episodes.textContent = `0/${episodess}`;
    anime.appendChild(episodes);

    const score = document.createElement("p");
    score.classList.add("yscore");
    score.classList.add(`yscoremal${brojac10}`);
    score.classList.add("yscoremal");
    score.textContent = "N/A";
    anime.appendChild(score);

    const status = document.createElement("div");
    status.classList.add("status");
    status.classList.add("statusmal");
    status.classList.add(`status${brojac10}`);
    status.textContent = ystatus;
    anime.appendChild(status);

    maldiv.appendChild(anime);

}
let brojac6 = 0;
let brojac7 = 0;
let animen = "";
let alist = [];
function addToList() {
    if (dropbtn.textContent != "Status") {

        if (brojac6 > 0) {
            alist = JSON.parse(window.localStorage.getItem("alist"));
            brojac6 = JSON.parse(window.localStorage.getItem("brojac6"));
        }
        if (JSON.parse(window.localStorage.getItem("brojac6")) === null) {
            brojac7 = 1;
        }
        else {
            alist = JSON.parse(window.localStorage.getItem("alist"));
            brojac6 = JSON.parse(window.localStorage.getItem("brojac6"));
        }
        brojac6++;
        show.style.zIndex = "-5";
        show.style.opacity = "0%";

        cover.style.opacity = "0%";
        cover.style.zIndex = "-2";
        animen = {
            image: imgtoadd.src,
            name: nametoadd.textContent,
            desc1: desc1toadd.textContent,
            desc2: desc2toadd.textContent,
            desc3: desc3toadd.textContent,
            episodess: epstoadd,
            ystatus: dropbtn.textContent,
        }
        alist[brojac6 - 1] = JSON.stringify(animen);
        window.localStorage.setItem("alist", JSON.stringify(alist));
        window.localStorage.setItem("brojac6", JSON.stringify(brojac6));
    }
    else {
        alert("Potrebno je izabrati Status pre dodavanja u listu!");
    }
}
window.onload = function () {
    let alistol;
    let trying = JSON.parse(window.localStorage.getItem("brojac6"));
    if (trying > 0) {
        alistol = JSON.parse(window.localStorage.getItem("alist"));
        alistol.forEach(element => {
            element = JSON.parse(element);
            addToMAL(element.image, element.name, element.desc1, element.desc2, element.desc3, element.episodess, element.ystatus);
        });
    }
    window.localStorage.setItem("brojac6", JSON.stringify(trying));
};
function exit() {
    show.style.zIndex = "-5";
    show.style.opacity = "0%";
    cover.style.opacity = "0%";
    cover.style.zIndex = "-2";
    dropbtn.textContent = "Status";
}
const addbtnn = document.querySelector(".addCustom");
const bgadd = document.querySelector(".coverallmal");
const showadd = document.querySelector(".showAdd");
addbtnn.addEventListener("click", () => {
    showadd.style.zIndex = "5";
    showadd.style.opacity = "100%";
    bgadd.style.opacity = "80%";
    bgadd.style.zIndex = "3";
});
const imglink = document.querySelector(".imginp");
const namelink = document.querySelector(".nameinp");
const epslink = document.querySelector(".epinp");
function exit2() {
    showadd.style.zIndex = "-1";
    showadd.style.opacity = "0%";
    bgadd.style.opacity = "0%";
    bgadd.style.zIndex = "-3";
    imglink.value="";
    namelink.value="";
    epslink.value="";
}
function addToList2() {
    if (imglink.value != "" && namelink.value != "" && epslink.value != "") {
        showadd.style.zIndex = "-1";
        showadd.style.opacity = "0%";
        bgadd.style.opacity = "0%";
        bgadd.style.zIndex = "-3";
        if (brojac6 > 0) {
            alist = JSON.parse(window.localStorage.getItem("alist"));
            brojac6 = JSON.parse(window.localStorage.getItem("brojac6"));
        }
        if (JSON.parse(window.localStorage.getItem("brojac6")) === null) {
            brojac7 = 1;
        }
        else {
            alist = JSON.parse(window.localStorage.getItem("alist"));
            brojac6 = JSON.parse(window.localStorage.getItem("brojac6"));
        }
        brojac6++;
        animen = {
            image: imglink.value,
            name: namelink.value,
            desc1: "Added",
            desc2: "Custom",
            desc3: "Anime",
            episodess: epslink.value + " eps",
            ystatus: "Status",
        }
        alist[brojac6 - 1] = JSON.stringify(animen);
        window.localStorage.setItem("alist", JSON.stringify(alist));
        window.localStorage.setItem("brojac6", JSON.stringify(brojac6));
        location.reload();
    }
}