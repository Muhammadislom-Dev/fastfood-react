import './Section.css'

const Section = () =>{
    return(
        <div className="section">
            <div className="container">
                <div className="section-page">
                    <Link className="section-link" to="/filialcard">
                       <div className="section-left">
                           <h2 className='section-name'>MaxWay Magic City</h2>
                           <p className="section-text">Magic City.ул. Бабура, 174 Ташкент, Узбекистан</p>
                       </div>
                       <div className="section-right">
                           <p className="section-names">Часы работы</p>
                           <p className="section-number">10:00-03:00</p>
                       </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Section