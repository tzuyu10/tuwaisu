import Card from "../components/Card";
import nayeonImg from "../assets/nayeon.jpg"
import jeongyeonImg from "../assets/jeongyeon.jpg"
import momoImg from "../assets/momo.jpg"
import sanaImg from "../assets/sana.jpg"
import jihyoImg from "../assets/jihyo.jpg"
import minaImg from "../assets/mina.jpg"
import dahyunImg from "../assets/dahyun.jpg"
import chaeyongImg from "../assets/chaeyoung.jpg"
import tzuyuImg from "../assets/tzuyu.jpg"
import "../css/Home.css"
import TopBar from "../components/TopBar";

function Home (){

    const members = [
        {id: 1, name: "Nayeon", real_name: "Im Na-yeon", img: nayeonImg},
        {id: 2, name: "Jeongyeon", real_name: "Yoo Jeong-yeon", img: jeongyeonImg},
        {id: 3, name: "Momo", real_name: "Hirai Momo", img: momoImg},
        {id: 4, name: "Sana", real_name: "Minatozaki Sana", img: sanaImg},
        {id: 5, name: "Jihyo", real_name: "Park Ji-hyo", img: jihyoImg},
        {id: 6, name: "Mina", real_name: "Myoui Mina", img: minaImg},
        {id: 7, name: "Dahyun", real_name: "Kim Da-hyun", img: dahyunImg},
        {id: 8, name: "Chaeyoung", real_name: "Son Chae-young", img: chaeyongImg},
        {id: 9, name: "Tzuyu", real_name: "Chou Tzuyu", img: tzuyuImg}
    ];
    
    return (
        
        
        <div className = "home">
            <TopBar> </TopBar>
            <div className = "members-grid"> 
                {members.map(member => ( 
                    <Card member={member} key={member.id}/>
                    ))}
            </div>
        </div>
    );
}
export default Home