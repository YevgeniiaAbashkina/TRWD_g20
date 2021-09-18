import Card from './Card';
import "../css/CardList.css"

const CardList=({cards})=>{
    return(
        <div className="cards-list">
            {cards.map((card,index)=>
                <Card key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    src={card.src}
                />)}
            
        </div>
    )
}

export default CardList;

/* export default function CardList(){
    return(
        <div className="cards-list">
            <Card title="Card-1"
                    subtitle="Subtitle-1"
                    text="some text-1, gfhgjf gfhgjf uo sdsew? Gfed edw hjgkgfkgjf."
            />
            <Card title="Card-2"
                    subtitle="Subtitle-2"
                    text="some text-2, gfhgjf gfhgjf uo sdsew? Gfed edw hjgkgfkgjf."
            />
            <Card title="Card-3"
                    subtitle="Subtitle-3"
                    text="some text-3, gfhgjf gfhgjf uo sdsew? Gfed edw hjgkgfkgjf."
            />
        </div>
    )
} */