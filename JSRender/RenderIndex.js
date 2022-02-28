import streets from './data/street.js'
import table from './data/table.js'
import activities from './data/activities.js'

const app = {
    renderStreets: function() {
        const arr = Object.values(streets()).sort((a,b) => b.quantity - a.quantity)
        const html = arr.map((item) => {
            return `
                    <a target="_blank" rel="noopener noreferrer" href=${item.href}>
                        <li class="content__place-item">
                            <img data-lazy="${item.img}" alt="">
                            <div class="content__place-item--text">
                                <span>Có ${item.quantity} nhà trọ</span>
                            </div>
                        </li>
                    </a>
            `
        })
        document.querySelector('.content__place-list').innerHTML = html.join('')
    },
    renderTable: function() {
        const html = Object.values(table()).map((item, index) => {
            return `
                <div class="table-row">
                    <div class="table-data">${index + 1}</div>
                    <div class="table-data">${item.name}</div>
                    <div class="table-data">${item.state}</div>
                </div>
            `
        })
        document.querySelector('.table-content').innerHTML = html.join('')
    },

    renderActvitiesList: function() {
        const html = Object.values(activities()).map((item) => {
            return `
            <div class="col l-4 m-4 c-5">
                <div class="content__activities-item">
                    <img src=${item.img}>
                    <a href=${item.link}>${item.content}</a>
                </div>
            </div>
            `
        })
        document.querySelector('.content__activities-list').innerHTML = html.join('')
    },

    start: function() {
        this.renderStreets()
        this.renderTable()
        this.renderActvitiesList()
    }
}

app.start();