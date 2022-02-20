import homes from './homes.js'

var  arrHomes = Object.values(homes())
const room_avail = [];
const room_unavail = [];


const app = {
    start: function() {
        arrHomes.map((item) => {
            if (item.state) {
                room_avail.push(`
                    <div class="col c-6">
                    <div class="street-item">
                    <div class="address-and-map">
                    <div class="address">
                    <h2>${item.address} (cách trường ${item.distance} km)</h2>
                    </div>
                    <a href="" style="text-decoration: none;" class="btn-map"><i class="fas fa-map-marked-alt"></i></a>
                    </div>
                        <div class="info-home">
                        <div class="list-img">
                        <img src="${item.img_phong.img1}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                        <img src="${item.img_phong.img2}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                        <img src="${item.img_phong.img3}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                    </div>
                                <div class="item-content">
                                <div class="info-home-detail">
                                <ul>
                                <li><i class="fas fa-home"></i><span>Giá phòng: </span>${item.info.giaphong} đồng/tháng</li>
                                <li><i class="fas fa-bolt"></i><span>Điện: </span>${item.info.dien} đồng/kí</li>
                                        <li><i class="fas fa-tint"></i><span>Nước: </span>${item.info.nuoc}</li>
                                        <li><i class="fas fa-motorcycle"></i><span>Gửi xe: </span> ${item.info.xe}</li>
                                        <li><i class="fas fa-wifi"></i><span>Wifi: </span>${item.info.wifi}</li>
                                        <li><i class="fas fa-wind"></i><span>Máy lạnh: </span> ${item.info.maylanh}</li>
                                        <li><i class="fas fa-recycle"></i><span>Rác: </span>{item.info.rac}</li>
                                        
                                       
                                        <br>
                                        <li style="color: #408E9D; font-weight: 700;">Mô tả về nhà trọ: </li>
                                        <li style="padding-left: 10px;">đâsđâs</li>
                                        <li style="padding-left: 10px;">đâsđâs</li>
                                        <li style="padding-left: 10px;">đâsđâs</li>
                                        <li style="padding-left: 10px;">đâsđâs</li>
                                        <li style="padding-left: 10px;">đâsđâs</li>
                                        
                                    </ul>
                                    </div>
                            </div>
                            </div>
                            <div class="avatar">
                            <div class="info-admin">
                                <div class="name"><i class="far fa-address-card"></i>${item.name_chu}</div>
                                <div class="phone"><i class="fas fa-phone-alt"></i>${item.phone_chu}</div>
                                </div>
                        </div>
                        </div>
                </div>  
                `)
            } else {
                room_unavail.push(`
                <div class="col c-6">
                <div class="street-item">
                <div class="address-and-map">
                <div class="address">
                <h2>${item.address} (cách trường ${item.distance} km)</h2>
                </div>
                <a href="" style="text-decoration: none;" class="btn-map"><i class="fas fa-map-marked-alt"></i></a>
                </div>
                    <div class="info-home">
                    <div class="list-img">
                        <img src="${item.img_phong.img1}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                        <img src="${item.img_phong.img2}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                        <img src="${item.img_phong.img2}" style="width: 100%; height: 448px; margin-top: 15px; border-radius: 5px" alt="">
                    </div>
                            <div class="item-content">
                            <div class="info-home-detail">
                            <ul>
                            <li><i class="fas fa-home"></i><span>Giá phòng: </span>${item.info.giaphong} đồng/tháng</li>
                            <li><i class="fas fa-bolt"></i><span>Điện: </span>${item.info.dien} đồng/kí</li>
                                    <li><i class="fas fa-tint"></i><span>Nước: </span>${item.info.nuoc}</li>
                                    <li><i class="fas fa-motorcycle"></i><span>Gửi xe: </span> ${item.info.xe}</li>
                                    <li><i class="fas fa-wifi"></i><span>Wifi: </span>${item.info.wifi}</li>
                                    <li><i class="fas fa-wind"></i><span>Máy lạnh: </span> ${item.info.maylanh}</li>
                                    <li><i class="fas fa-recycle"></i><span>Rác: </span>{item.info.rac}</li>
                                    
                                   
                                    <br>
                                    <li style="color: #408E9D; font-weight: 700;">Mô tả về nhà trọ: </li>
                                    <li style="padding-left: 10px;">đâsđâs</li>
                                    <li style="padding-left: 10px;">đâsđâs</li>
                                    <li style="padding-left: 10px;">đâsđâs</li>
                                    <li style="padding-left: 10px;">đâsđâs</li>
                                    <li style="padding-left: 10px;">đâsđâs</li>
                                    
                                </ul>
                                </div>
                        </div>
                        </div>
                        <div class="avatar">
                        <div class="info-admin">
                            <div class="name"><i class="far fa-address-card"></i>${item.name_chu}</div>
                            <div class="phone"><i class="fas fa-phone-alt"></i>${item.phone_chu}</div>
                            </div>
                    </div>
                    </div>
            </div>  
            `)
            }
            
        })
        document.querySelector('.street-list-availble').innerHTML = room_avail.join('')
        document.querySelector('.street-list-unavailble').innerHTML = room_unavail.join('')
        document.querySelector('.quantity-availble').innerHTML = room_avail.length
        document.querySelector('.quantity-unavailble').innerHTML = room_unavail.length

    },
}

app.start();

function slick() {
    $(document).ready(function(){
        $('.list-img').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 600,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i style='font-size: 30px;' class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i style='font-size: 30px;' class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
    });
}

function loader() {
    $('body').addClass('stop-scrolling')
    document.getElementById("loader-wapper").classList.add("displayFlex")
    setTimeout(() => {
        document.getElementById("loader-wapper").classList.remove("displayFlex")
        $('body').removeClass('stop-scrolling')
    }, 2000)
}
document.getElementById("sort-giaphong").addEventListener("click", function () {
    window.scrollTo(0, 0);
    const arrHomesSorted = arrHomes.sort((a,b) => a.info.giaphong - b.info.giaphong)
    arrHomes = arrHomesSorted;
    slick();
    loader();
    app.start();
})   

document.getElementById("sort-khoangcach").addEventListener("click", function () {
    window.scrollTo(0, 0);
    const arrHomesSorted = arrHomes.sort((a,b) => a.distance - b.distance)
    arrHomes = arrHomesSorted;
    slick();
    loader();
    app.start();
})  