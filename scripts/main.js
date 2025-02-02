let brojac = 0;
let brojac2 = 0;
const div1 = document.querySelector(".taa1");
const div2 = document.querySelector(".taa2");
const div3 = document.querySelector(".taa3");
const div4 = document.querySelector(".tua1");
const div5 = document.querySelector(".tua2");
const div6 = document.querySelector(".tua3");
function createTA(div, piclink, name, desc) {
    brojac = brojac + 1;
    brojac2 = brojac2 + 1;

    const divbr = document.createElement("div");
    divbr.classList.add("br1");
    const divp = document.createElement("p");
    divp.classList.add("rbr1");
    divp.textContent = brojac;
    divbr.appendChild(divp);
    div.appendChild(divbr);

    const divimg = document.createElement("div");
    divimg.classList.add("apic1");
    const img1 = document.createElement("img");
    img1.classList.add("tp1pic");
    img1.classList.add(`img${brojac2}`);
    img1.src = piclink;
    divimg.appendChild(img1);
    div.appendChild(divimg);

    const divnid = document.createElement("div");
    divnid.classList.add("nid");

    const divname = document.createElement("div");
    divname.classList.add("aname1");
    divname.textContent = name;
    const divdetail = document.createElement("div");
    const divdetailh = document.createElement("h3");
    divdetail.classList.add("adetail1");
    divdetailh.classList.add("desc1");
    divdetailh.textContent = desc;
    divdetail.appendChild(divdetailh);
    divnid.appendChild(divname);
    divnid.appendChild(divdetail);
    div.appendChild(divnid);

}
createTA(div1, "images/ta1.jpg", "Mo Dao Zu Shi: Wanjie Pian", "ONA, 12 eps, scored 8.63");
createTA(div2, "images/Volume_97.png", "ONE PIECE", "TV, 992 eps, scored 8.59");
createTA(div3, "images/hng.jpg", "Holo no Graffiti", "ONA, unknown eps, scored 8.48");
brojac = 0;
createTA(div4, "images/rotsh.jpg", "The Rising of the Shield Hero 2", "TV, unknown eps, scored N/A, 332,631 members");
createTA(div5, "images/aotfsp2.jpg", "Attack on Titan: Final Season Part 2", "TV, unknown eps, scored N/A, 313,941 members");
createTA(div6, "images/chm.jpg", "Chainsaw Man", "TV, unknown eps, scored N/A, 232,414 members");