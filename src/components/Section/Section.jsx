import './Section.css'

const Section = () =>{
return(
<div className="section">
    <div className="section-left">
        <h2 className="section-name">
            MaxWay Magic City
        </h2>
        <p className="section-map">
            Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан
        </p>
        <p className="section-time">
            Часы работы: 10:00-03:00
        </p>
        <span className="section-span">
            <p className='section-time'>Номер телефона:</p>
            <a className="section-links" href="tel:+998931487733">+998 93 451 04 31</a>
        </span>
        <p className="section-orientr">
            Ориентир: Magic City
        </p>

        <img src="https://maxway.uz/images/Rectangle/max-way.png" alt="" className="section-thumb" />
    </div>
    <div className="section-right">
        <iframe className="section-iframe" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1"
            allowfullscreen="true"></iframe>
    </div>
</div>
)
}

export default Section