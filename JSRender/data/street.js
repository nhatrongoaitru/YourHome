import TP_DiAn from './TP_DiAn/homes.js'
import PhuongLinhDong from './PhuongLinhDong/homes.js'
import PhuongLinhTrung from './PhuongLinhTrung/homes.js'
import PhuongLinhChieu from './PhuongLinhChieu/homes.js'
import PhuongTangNhonA from './PhuongTangNhonPhuA/homes.js'
import PhuongTanPhu from './PhuongTanPhu/homes.js'
import PhuongBinhTho from './PhuongBinhTho/homes.js'
import PhuongHiepPhu from './PhuongHiepPhu/homes.js'
import PhuongTruongTho from './PhuongTruongTho/homes.js'







var  quantity_DiAn = Object.values(TP_DiAn()).length
var  quantity_PhuongLinhDong = Object.values(PhuongLinhDong()).length
var  quantity_PhuongLinhTrung = Object.values(PhuongLinhTrung()).length
var  quantity_PhuongLinhChieu = Object.values(PhuongLinhChieu()).length
var  quantity_PhuongTanNhonPhuA = Object.values(PhuongTangNhonA()).length
var  quantity_PhuongTanPhu = Object.values(PhuongTanPhu()).length
var  quantity_PhuongBinhTho = Object.values(PhuongBinhTho()).length
var  quantity_PhuongHiepPhu = Object.values(PhuongHiepPhu()).length
var  quantity_PhuongTruongTho = Object.values(PhuongTruongTho()).length








function streets() {
    return streets =
    [
        {
            quantity: quantity_DiAn,
            img: "./img/Street/TenDuong/DiAn.png",
            href: "./html/TP_DiAn.html"
        },
        {
            quantity: quantity_PhuongLinhDong,
            img: "./img/Street/TenDuong/LinhDong.png",
            href: "./html/PhuongLinhDong.html"
        },
        {
            quantity: quantity_PhuongLinhTrung,
            img: "./img/Street/TenDuong/LinhTrung.png",
            href: "./html/PhuongLinhTrung.html"
        },
        {
            quantity: quantity_PhuongLinhChieu,
            img: "./img/Street/TenDuong/LinhChieu.png",
            href: "./html/PhuongLinhChieu.html"
        },
        {
            quantity: quantity_PhuongTanNhonPhuA,
            img: "./img/Street/TenDuong/TangNhoPhuA.png",
            href: "./html/PhuongTangNhonPhuA.html"
        },
        {
            quantity: quantity_PhuongTanPhu,
            img: "./img/Street/TenDuong/TanPhu.png",
            href: "./html/PhuongTangNhonPhuA.html"
        },
        {
            quantity: quantity_PhuongBinhTho,
            img: "./img/Street/TenDuong/BinhTho.png",
            href: "./html/PhuongBinhTho.html"
        },

        {
            quantity: quantity_PhuongHiepPhu,
            img: "./img/Street/TenDuong/HiepPhu.png",
            href: "./html/PhuongHiepPhu.html"
        },

        {
            quantity: quantity_PhuongTruongTho,
            img: "./img/Street/TenDuong/TruongTho.png",
            href: "./html/PhuongTruongTho.html"
        },
    ]
}

export default streets;