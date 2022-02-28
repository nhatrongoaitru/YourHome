import dangvanbi from './dangvanbi/homes.js'



var  arrHomes_DangVanBi = Object.values(dangvanbi()).length


function streets() {
    return streets =
    [
        {
            name: "Đặng Văn Bi",
            quantity: arrHomes_DangVanBi,
            img: "./img/Street/DangVanBi.jpg",
            href: "./html/dangvanbi.html"
        },
    ]
}

export default streets;