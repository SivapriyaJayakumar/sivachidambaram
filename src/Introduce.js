import './App.css';
import './Introduce.css';
function Introduce() {
    return (
        <div className='topcontainer'>
            <div className='namediv'>Hello <span className='wave'>👋🏼</span>, I'm <div className='nameinbold'>Sivachidambaram!</div></div>
            <div className='generalintro'>
                <div className='genintro1'>A product designer with <span className='nameinsbold'>4+ years</span> experience of designing digital products for web and mobile. I've simplified complex problems and built scalable systems for various products.</div>
                <br></br>
                <br></br>
                <div className='workhistory'>Currently @ <a className='brand' target='_blank' href='https://plumhq.com/'>Plum</a> . Previously <a className='brand' target='_blank' href='https://kissflow.com/'>Kissflow</a>, <a className='brand' target='_blank' href='https://zoho.com'>Zoho</a>. I believe good design is simple. Good design means providing simple solutions to problems that really don't need to be so daunting. I seek out high impact driven teams and great culture.</div>
            </div>
        </div>
    )
}
export default Introduce;