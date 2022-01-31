import { RedNoticeDetails, SexId } from "next-learn-red-notice-api";
import Image from "next/image";
/**  RedNoticeDetails
arrest_warrants: RedNoticeArrestWarrent[];
weight: number;
languages_spoken_ids: string[];
height: number;
sex_id: SexId;
country_of_birth_id: string;
distinguishing_marks: string;
eyes_colors_id: string[];
hairs_id: string[];
place_of_birth: string;
_links: RedNoticeLinks;

        <ul>{props.hairs_id.map(hair => <li>{hair}</li>)}</ul>

*/

const CriminalComponent = (props: RedNoticeDetails) : JSX.Element => {
    return <div>
        <p>{props.name}, {props.forename}</p>

        <p>Geschlecht: {sexIdToString(props.sex_id)}</p>
        <p>{props.place_of_birth}</p>
        <p>{props.distinguishing_marks}</p>
        <p>{props.height}</p>
       {props._links.thumbnail?.href ? <Image src={props._links.thumbnail?.href} width={300} height={300}/> : undefined}
        
    </div>
}

export default CriminalComponent;

const sexIdToString = (id:SexId ) : string => {
    switch(id){
        case "M": return "Männlich"
        case "F": return "Weiblich"
        default: return "Divers"
    }    
}