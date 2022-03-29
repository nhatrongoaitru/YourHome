import TP_DiAn from './TP_DiAn/homes.js'
import PhuongLinhDong from './PhuongLinhDong/homes.js'
import PhuongLinhTrung from './PhuongLinhTrung/homes.js'

var  quantity_DiAn = Object.values(TP_DiAn()).length
var  quantity_PhuongLinhDong = Object.values(PhuongLinhDong()).length
var  quantity_PhuongLinhTrung = Object.values(PhuongLinhTrung()).length


function streets() {
    return streets =
    [
        {
            quantity: quantity_DiAn,
            img: "./img/Street/DangVanBi.jpg",
            href: "./html/TP_DiAn.html"
        },
        {
            quantity: quantity_PhuongLinhDong,
            img: "./img/Street/DangVanBi.jpg",
            href: "./html/PhuongLinhDong.html"
        },
        {
            quantity: quantity_PhuongLinhTrung,
            img: "./img/Street/DangVanBi.jpg",
            href: "./html/PhuongLinhTrung.html"
        },
    ]
}

export default streets;