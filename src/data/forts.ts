/* =========================================================
   MARCH OF EMPIRE — Historical Forts & Fortifications Database
   Verified from historical sources. Estimates clearly marked.
   ========================================================= */

import { Fort } from "../types";

export const FORTS: any[] = [
  /* ================= MARATHA FORTS ================= */
  {
    id: "raigad", name: "Raigad Fort", era: "maratha",
    location: "Raigad district, Maharashtra, India",
    coordinates: { lat: 18.235, lng: 73.446 },
    elevation: "~820 m (2,700 ft)",
    built: "Originally built by Chandrarao More; fortified extensively by Chhatrapati Shivaji Maharaj from 1656",
    significance: "Capital of the Maratha Empire from 1674. Site of Shivaji Maharaj's coronation as Chhatrapati on 6 June 1674.",
    history: "Raigad served as the sovereign capital of the Maratha Empire. Shivaji Maharaj chose this imposing hill fortress in the Sahyadri range for its near-impregnable natural defences — steep cliffs on all sides rising over 1,400 feet above the surrounding terrain. He commissioned the architect Hiroji Indulkar to rebuild and expand the fort, adding grand audience halls (the Nagarkhana), a main market, multiple water cisterns, fortified gateways, and the Jagdishwar temple. The coronation ceremony of 1674 established the Maratha state as a sovereign kingdom. Raigad remained the capital until its capture by the Mughals in 1689 after a prolonged siege following the death of Sambhaji Maharaj.",
    architecture: "Machi (fortified plateau), Hirakani Buruj (bastion), Takmak Tok (cliff used as execution point), Meghadambari (queen's quarters), Jagdishwar Mandir, Nagarkhana (drum house), Hatti Talav (elephant lake), multiple reinforced gateways.",
    relatedBattles: [],
    relatedCommanders: ["shivaji"],
    militaryPurpose: "Sovereign capital fortress; administrative and military command centre of the Maratha Empire."
  },
  {
    id: "rajgad", name: "Rajgad Fort", era: "maratha",
    location: "Pune district, Maharashtra, India",
    coordinates: { lat: 18.248, lng: 73.684 },
    elevation: "~1,395 m (4,577 ft)",
    built: "Originally known as Murumdev; captured and fortified by Shivaji Maharaj around 1646",
    significance: "Served as the capital of the Maratha state for approximately 26 years (c. 1648–1674) before the capital shifted to Raigad.",
    history: "Rajgad (literally 'King's Fort') was Shivaji Maharaj's first major capital. Its three machis — Padmavati Machi, Suvela Machi, and Sanjivani Machi — along with the central Bale Killa (citadel) created a vast fortified complex. The fort witnessed numerous important events in early Maratha history, including the planning of campaigns against the Bijapur Sultanate and the Mughals. It is said that Shivaji Maharaj spent more time at Rajgad than at any other fort.",
    architecture: "Bale Killa (inner citadel), Padmavati Machi, Suvela Machi, Sanjivani Machi, Pali Darwaza (main entrance), Chor Darwaza (secret passage gate), Padmavati Temple, extensive water cisterns.",
    relatedBattles: [],
    relatedCommanders: ["shivaji"],
    militaryPurpose: "Primary administrative capital; strategic command centre controlling routes between the Konkan coastal strip and the Deccan plateau."
  },
  {
    id: "pratapgad", name: "Pratapgad Fort", era: "maratha",
    location: "Satara district, Maharashtra, India",
    coordinates: { lat: 17.934, lng: 73.579 },
    elevation: "~1,080 m (3,543 ft)",
    built: "Constructed in 1656 by Shivaji Maharaj; architect: Moropant Trimbak Pingle",
    significance: "Site of the famous Battle of Pratapgad (10 November 1659) where Shivaji Maharaj defeated and killed Afzal Khan, the Bijapur Sultanate's general.",
    history: "Pratapgad was purpose-built by Shivaji Maharaj to control the strategically vital Jawali forest region between the Konkan and the inland Deccan. The battle fought at its base in 1659 became one of the defining moments in Maratha history. The Bijapur Sultanate had dispatched Afzal Khan with a large army to suppress Shivaji Maharaj. Their famous meeting at the foot of the fort, during which Afzal Khan was killed, triggered a Maratha assault that routed the Bijapur force, establishing Maratha military credibility against a major regional power.",
    architecture: "Double fortification structure — upper fort (Bale Killa) and lower fort. Mahadev Temple, Afzal Khan's tomb at the base, reinforced bastions, concealed approach paths.",
    relatedBattles: ["pratapgad"],
    relatedCommanders: ["shivaji"],
    militaryPurpose: "Strategic fortress controlling the Jawali forest pass between the Konkan coast and the Deccan interior."
  },
  {
    id: "sinhagad", name: "Sinhagad Fort", era: "maratha",
    location: "Pune district, Maharashtra, India",
    coordinates: { lat: 18.367, lng: 73.756 },
    elevation: "~1,312 m (4,304 ft)",
    built: "Ancient fortress; known previously as Kondhana. Captured and renamed by the Marathas.",
    significance: "Site of the legendary Battle of Sinhagad (4 February 1670) where Tanaji Malusare led a daring night assault to recapture the fort from Mughal control, sacrificing his life in the process.",
    history: "Sinhagad (literally 'Lion's Fort') was renamed after the heroic night assault by Tanaji Malusare and his force of Maval warriors. The fort had been ceded to the Mughals under the Treaty of Purandar (1665) and its recapture was strategically vital as it overlooked Pune. Tanaji's men scaled the steep cliff face at night using ropes. According to tradition, upon hearing of Tanaji's death in the victorious battle, Shivaji Maharaj famously said: 'Gad aala pan Sinha gela' ('The fort is won, but the lion is lost'), and renamed the fort from Kondhana to Sinhagad.",
    architecture: "Pune Darwaza, Kalyan Darwaza, Tanaji memorial, Rajaram's tomb, Devtake (water cistern), steep cliff defences on all sides.",
    relatedBattles: ["sinhagad"],
    relatedCommanders: ["shivaji", "tanaji"],
    militaryPurpose: "Critical defensive position overlooking the city of Pune and controlling access routes in the surrounding Sahyadri hills."
  },
  {
    id: "purandar", name: "Purandar Fort", era: "maratha",
    location: "Pune district, Maharashtra, India",
    coordinates: { lat: 18.278, lng: 73.978 },
    elevation: "~1,387 m (4,551 ft)",
    built: "Ancient origin; fortified by Yadava dynasty; captured by Marathas under Shivaji Maharaj",
    significance: "Site of the Treaty of Purandar (1665) between Shivaji Maharaj and the Mughal general Jai Singh I. Birthplace of Shivaji Maharaj's son Sambhaji.",
    history: "Purandar is a twin-fort complex consisting of Purandar (the main fort) and the adjacent Vajragad (Rudramal). In 1665, the Mughal general Mirza Raja Jai Singh I besieged Purandar with a large force. The heroic defence was led by Murarbaji Deshpande, who fought to the death defending the outer fortification of Vajragad. Despite this brave resistance, the overwhelming Mughal strength forced Shivaji Maharaj to negotiate the Treaty of Purandar, under which 23 forts were ceded to the Mughals. This treaty was later repudiated as the Marathas recaptured most of these forts.",
    architecture: "Twin fort complex — Purandar (main) and Vajragad. Dilli Darwaza, Bini Darwaza, Murarbaji's memorial, Kedareshwar temple, extensive water reservoirs.",
    relatedBattles: ["purandar"],
    relatedCommanders: ["shivaji"],
    militaryPurpose: "Major defensive fortress in the Pune region; controlled southeastern approaches to the Maratha heartland."
  },
  {
    id: "panhala", name: "Panhala Fort", era: "maratha",
    location: "Kolhapur district, Maharashtra, India",
    coordinates: { lat: 16.812, lng: 74.109 },
    elevation: "~977 m (3,205 ft)",
    built: "Originally built by Bhoja II of the Shilahara dynasty (c. 1178–1209 CE); later held by various powers",
    significance: "One of the largest and most strategically important forts in the Deccan. Site of the famous monsoon siege of 1660 and Shivaji Maharaj's dramatic escape.",
    history: "Panhala's vast extent — its walls stretch roughly 7 km in circumference — made it one of the most significant fortresses in the Deccan. In 1660, Siddi Johar of the Bijapur Sultanate besieged Shivaji Maharaj inside Panhala with a large force. During the ensuing escape, the legendary rearguard action at Ghod Khind (later renamed Pavan Khind — 'Sacred Pass') was fought by Baji Prabhu Deshpande and a small force of 300 Bandal soldiers, who held the narrow mountain pass against thousands to allow Shivaji Maharaj to reach the safety of Vishalgad Fort.",
    architecture: "Teen Darwaza (triple gateway), Char Darwaza, Andhar Bavadi (hidden well), Sajja Kothi, Ambarkhana (granary with capacity for years of grain storage), extensive ramparts stretching ~7 km.",
    relatedBattles: ["pavan-khind"],
    relatedCommanders: ["shivaji"],
    militaryPurpose: "Major administrative and military base in the southern Maratha territories; granary fortress capable of withstanding prolonged sieges."
  },
  {
    id: "sindhudurg", name: "Sindhudurg Fort", era: "maratha",
    location: "Sindhudurg district, Maharashtra, India (island fort in Arabian Sea)",
    coordinates: { lat: 16.040, lng: 73.465 },
    elevation: "Sea level — built on Kurte island",
    built: "Constructed 1664–1667 by Chhatrapati Shivaji Maharaj",
    significance: "A masterwork of Maratha naval architecture. Built on a rocky island off the Malvan coast, it served as the principal base for the Maratha naval fleet. Never captured by any enemy.",
    history: "Sindhudurg (literally 'Fort of the Ocean') was constructed on Kurte island, approximately 1.5 km offshore, using an innovative technique of pouring molten lead into the underwater rock bed to anchor the foundation. The construction reportedly involved 3,000 workers over three years. The fort served as the headquarters of the Maratha navy (Armada) and was later further developed under Admiral Kanhoji Angre. It contains one of the few temples in India with a handprint and footprint impression attributed to Shivaji Maharaj.",
    architecture: "Ramparts built directly from the sea rock, 42 bastions, main entrance designed with a zigzag approach to prevent direct assault, Shivaji Maharaj temple with palm and foot impressions, sweet-water wells inside a sea fort (an engineering achievement), multiple watch towers.",
    relatedBattles: [],
    relatedCommanders: ["shivaji", "kanhoji-angre"],
    militaryPurpose: "Primary naval base and headquarters of the Maratha Armada; coastal defence and control of the Konkan coast trade routes."
  }
];
