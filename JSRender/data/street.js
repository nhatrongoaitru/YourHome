import dangvanbi from './dangvanbi/homes.js'
import hiepbinh from './hiepbinh/homes.js'
import hoangdieu2 from './hoangdieu2/homes.js'
import huunghi from './huunghi/homes.js'
import levanchi from './levanchi/homes.js'
import levanviet from './levanviet/homes.js'
import tovinhdien from './tovinhdien/homes.js'


var  arrHomes_DangVanBi = Object.values(dangvanbi()).length
var  arrHomes_HiepBinh = Object.values(hiepbinh()).length
var  arrHomes_HoangDieu2 = Object.values(hoangdieu2()).length
var  arrHomes_HuuNghi = Object.values(huunghi()).length
var  arrHomes_LeVanChi = Object.values(levanchi()).length
var  arrHomes_LeVanViet = Object.values(levanviet()).length
var  arrHomes_ToVinhDien = Object.values(tovinhdien()).length



function streets() {
    return streets =
    [
        {
            name: "Đặng Văn Bi",
            quantity: arrHomes_DangVanBi,
            img: "./img/Street/DangVanBi.jpg",
            href: "./html/dangvanbi.html"
        },
        {
            name: "Hoàng Diệu 2",
            quantity: arrHomes_HoangDieu2,
            img: "./img/Street/HoangDieu2.jpg",
            href: "./html/hoangdieu2.html"
        },
        {
            name: "Hữu Nghị",
            quantity: arrHomes_HuuNghi,
            img: "./img/Street/HuuNghi.jpg",
            href: "./html/huunghi.html",
        },
        {
            name: "Lê Văn Chí",
            quantity: arrHomes_LeVanChi,
            img: "./img/Street/LeVanChi.jpg",
            href: "./html/levanchi.html"
        },
        {
            name: "Lê Văn Việt",
            quantity: arrHomes_LeVanViet,
            img: "./img/Street/LeVanViet.jpg",
            href: "./html/levanviet.html"
        },
        {
            name: "Tô Vĩnh Diện",
            quantity: arrHomes_ToVinhDien,
            img: "./img/Street/ToVinhDien.jpg",
            href: "./html/tovinhdien.html"
        },
        {
            name: "Hiệp Bình",
            quantity: arrHomes_HiepBinh,
            img: "./img/Street/HiepBinh.jpg",
            href: "./html/hiepbinh.html"
        }
    ]
}

export default streets;