import { RedNoticeDetails, SexId } from "next-learn-red-notice-api";
import Image from "next/image";
import styles from "../styles/CriminalComponent.module.css"
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
*/

const CriminalComponent = (criminal: RedNoticeDetails): JSX.Element => {
    return <div className={styles.wrapper}>
        <div className={styles.one}>
            <h1>{criminal.name}, {criminal.forename}</h1>
            <p>Geschlecht: {sexIdToString(criminal.sex_id)}</p>
            {criminal.date_of_birth && <p>Geburtsdatum: {criminal.date_of_birth} </p>}
            {criminal.place_of_birth && criminal.country_of_birth_id ? <p>{`Geburtsort: ${criminal.place_of_birth}, Land: ${criminal.country_of_birth_id}`}</p> : <p>Genauer Geburtsort unbekannt</p>}
            {criminal.nationalities && <div><p>Staatsbürgerschaften</p> <ul>{criminal.nationalities.map(nat => <li>{nat}</li>)}</ul> </div> }

            {criminal.height && <p>Größe: {criminal.height}</p> }
            {criminal.weight &&  <p>Gewicht: {criminal.weight} kg</p> }
            {criminal.hairs_id &&  <div><p>Haarfarben</p> <ul>{criminal.hairs_id.map(hair => <li>{hair}</li>)}</ul> </div> }
            {criminal.eyes_colors_id &&  <div><p>Augenfarben</p> <ul>{criminal.eyes_colors_id.map(eye => <li>{eye}</li>)}</ul> </div> }
            {criminal.languages_spoken_ids &&  <div><p>Sprachkenntnisse</p> <ul>{criminal.languages_spoken_ids.map(ls => <li>{ls}</li>)}</ul> </div> }
        </div>
        <div className={styles.two}>
            <h2>Profilbild</h2>
            {criminal._links.thumbnail?.href && <Image src={criminal._links.thumbnail?.href} width={300} height={300} /> }
            {criminal.distinguishing_marks && <p>Besondere Merkmale: {criminal.distinguishing_marks}</p> }
        </div>
        <div className={styles.three}>
            <h2>Straftaten</h2>
            {criminal.arrest_warrants &&  <table width="100%"> <thead> <tr>
                <th scope="col">Anklageland</th>
                <th scope="col">Anklage</th>
            </tr></thead> <tbody>{criminal.arrest_warrants.map(warrant =><tr> <td>{warrant.issuing_country_id}</td> <td>{warrant.charge}</td></tr>)}</tbody> </table> }
        </div>
    </div>
}

export default CriminalComponent;

const sexIdToString = (id: SexId): string => {
    switch (id) {
        case "M": return "Männlich"
        case "F": return "Weiblich"
        default: return "Divers"
    }
}
