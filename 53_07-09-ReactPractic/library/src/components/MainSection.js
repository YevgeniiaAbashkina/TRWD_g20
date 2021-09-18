import { getLibrary } from "../store/store";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";



export default function Section(){
    return(
        <section>
            <LeftPart books={getLibrary()}/>
            <RightPart books={getLibrary()}/>
            
        </section>
    )
}