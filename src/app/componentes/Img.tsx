/*Recebe na prop o endereço de um imagem*/

interface propImg{
    fonte:string ;
    func: ()=> void;
    id:number;
}

const Img = ({fonte, func, id}:propImg)=>{
    return(<>
            <img src={fonte} onClick={func} key={id}/>
    </>)
}

export default Img

