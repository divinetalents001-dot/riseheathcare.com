export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  qualification: string;
  bio: string;
  whatsappMessage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  secondaryImage?: string;
  staffName?: string;
  staffRole?: string;
  features: string[];
  ctaLabel: string;
  ctaAction: 'whatsapp' | 'call' | 'visit';
  whatsappMessage: string;
}

export interface CommunityProgram {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyDetails: string[];
  impactStats: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'facilities' | 'team' | 'equipment' | 'outreach';
  image: string;
  caption: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "RISE HEALTHCARE (U) Limited",
  brandName: "RISE HEALTH CARE",
  lugandaTitle: "EDDWALIRO",
  slogan: "You're Safe With Us!",
  location: "Ndejje Zanta, Entebbe Rd (Near Ndejje Health Centre 4), P.O. Box 119839, Wakiso-Kampala, Uganda",
  shortLocation: "Ndejje Zanta, Entebbe Rd, Wakiso-Kampala",
  coords: {
    lat: 0.2359,
    lng: 32.5801,
  },
  mapEmbedUrl: "https://www.google.com/maps?q=0.2359,32.5801&z=15&output=embed",
  directionsUrl: "https://www.google.com/maps?q=0.2359,32.5801",
  phone: "0705960182",
  phoneFormatted: "+256 705 960 182",
  telLink: "tel:+256705960182",
  whatsappLink: "https://wa.me/256705960182?text=Hello%20Rise%20Health%20Care",
  email: "risehealthcare.overseasourcing@gmail.com",
  emailLink: "mailto:risehealthcare.overseasourcing@gmail.com",
  hours: "24 HRS OPEN 7 Days Sundays Public Holidays Day & Night",
  licenseStatus: "Fully Licensed & Registered Medical Facility (Uganda Allied Health & Medical Practitioners Standards)",
};

import patientConsultationExam from '../assets/images/patient_consultation_exam_1793957020761.jpg';
import nurseBedsidePatient from '../assets/images/nurse_bedside_patient_1793957040919.jpg';
import maternityMotherBabyCare from '../assets/images/maternity_mother_baby_care_1793957054696.jpg';
import pediatricChildExam from '../assets/images/pediatric_child_exam_1793957069756.jpg';

// 12 Uploaded Photos - Exact Paths + Clinical Patient Care Action Photos
export const CLINIC_IMAGES = {
  // 1 Dr Musobya Bob white coat desk = Director
  drBob: "/assets/aistudio/bob.jpg_da9c60f7.jpeg",
  // 2 Dr Sarah green = Maternity
  drSarah: "/assets/aistudio/sarah.jpg_7ca221f7.jpeg",
  // 3 Dr Sharif computer lab kanzu = Lab Computer
  drSharif: "/assets/aistudio/sharif.jpg_5b4e2cb8.jpeg",
  // 4 Mr Reagan black suit = Secretary
  reagan: "/assets/aistudio/reagan__1__c6194adb.jpeg",
  // 5 Mr Shafic navy suit = Supervisor
  shafic: "/assets/aistudio/shafic.jpg_116239d8.jpeg",
  // 6 OFFICIAL LOGO blue/pink heart ECG RISE HEALTH CARE EDDWALIRO You're Safe With Us!
  logo: "/assets/aistudio/logo.png_aac97f12.jpeg",
  // 7 Reception 3 staff blue wall
  reception: "/assets/aistudio/reception.jpg_ebd62454.jpeg",
  // 8 Lab Microscope Dr Sharif working
  lab: "/assets/aistudio/lab.jpg_6b5b2442.jpeg",
  // 9 Beds Ward pink bed
  ward: "/assets/aistudio/ward.jpg_4d02137a.jpeg",
  // 10 Maternity Delivery Suite pink bed oxygen
  maternity: "/assets/aistudio/maternity_jpg_f52fa512.jpeg",
  // 11 Team Certificates 3 staff certificates clock Rise sign = Licensed Trust
  certificates: "/assets/aistudio/certificates.jpg_56a67418.jpeg",
  // 12 Community Outreach Vaccination & Wellness - African children, school uniforms, vaccine cold box, banner RISE HEALTH CARE EDDWALIRO COMMUNITY HEALTH OUTREACH
  community: "/assets/aistudio/community.jpg_cbf6d207.jpeg",

  // Patient Care In Action Photos
  patientConsultation: patientConsultationExam,
  nurseBedside: nurseBedsidePatient,
  maternityMotherBaby: maternityMotherBabyCare,
  pediatricExam: pediatricChildExam,
};

export const PATIENT_CARE_SCENES = [
  {
    id: "consultation-live",
    title: "Clinical Chest Auscultation & Examination",
    doctor: "Dr. Musobya Bob & Attending Clinician",
    department: "General Medicine & Outpatient",
    image: patientConsultationExam,
    caption: "Medical officer listening to patient's heart and lungs during thorough medical consultation",
    details: "Listening to breath sounds, evaluating vital parameters, and consulting closely in Luganda and English.",
    tag: "Physical Examination",
  },
  {
    id: "maternity-live",
    title: "Maternal Delivery & Newborn Wellness Check",
    doctor: "Dr. Sarah & Maternity Midwives",
    department: "Maternity & Delivery Suite",
    image: maternityMotherBabyCare,
    caption: "Midwife gently examining newborn baby while the mother rests safely on the maternity bed with clinical oxygen",
    details: "Gentle APGAR neonatal checks, thermal care, and breastfeeding encouragement in our equipped delivery ward.",
    tag: "Mother & Newborn",
  },
  {
    id: "inpatient-bedside",
    title: "Bedside IV Drip & Vital Sign Monitoring",
    doctor: "Senior Inpatient Nursing Officers",
    department: "Inpatient Recovery Ward",
    image: nurseBedsidePatient,
    caption: "Nurse adjusting IV fluid infusion and checking radial pulse for a patient on the pink inpatient bed",
    details: "Continuous fluid resuscitation, hourly vital tracking, and tranquil recovery under 24/7 observation.",
    tag: "Inpatient Ward Care",
  },
  {
    id: "pediatric-care",
    title: "Compassionate Pediatric Child Healthcare",
    doctor: "Pediatric Wellness Team",
    department: "Pediatrics & Child Wellness",
    image: pediatricChildExam,
    caption: "Clinician comforting and evaluating a young child accompanied by mother in outpatient consultation",
    details: "Early fever triage, growth monitoring, gentle physical examination, and mother guidance on nutrition.",
    tag: "Child Healthcare",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-musobya-bob",
    name: "Dr. Musobya Bob",
    role: "Medical Director & Lead Clinician",
    department: "Clinical Management & General Medicine",
    image: CLINIC_IMAGES.drBob,
    qualification: "Senior Medical Officer & Clinic Director",
    bio: "Guiding the clinical vision of Rise Healthcare with deep commitment to accessible, humane, and rapid clinical interventions in Ndejje Zanta and along the Entebbe corridor.",
    whatsappMessage: "Hello Dr. Musobya Bob, I would like to book a medical consultation at Rise Healthcare.",
  },
  {
    id: "dr-sarah",
    name: "Dr. Sarah",
    role: "Head of Maternity & Women's Health",
    department: "Maternity & Obstetric Care",
    image: CLINIC_IMAGES.drSarah,
    qualification: "Maternity & Reproductive Health Specialist",
    bio: "Dedicated to safe maternal deliveries, antenatal monitoring, ultrasound screenings, postnatal recovery, and compassionate neonatal care with 24-hour delivery suite access.",
    whatsappMessage: "Hello Dr. Sarah, I would like to inquire about Maternity Care and Antenatal Services at Rise Healthcare.",
  },
  {
    id: "dr-sharif",
    name: "Dr. Sharif",
    role: "Chief Laboratory Technologist",
    department: "Diagnostic Laboratory & Pathology",
    image: CLINIC_IMAGES.drSharif,
    qualification: "Senior Biomedical Laboratory Technologist",
    bio: "Directing high-precision diagnostic investigations utilizing automated equipment, clinical microscopy, and verified rapid tests for swift, accurate medical diagnosis.",
    whatsappMessage: "Hello Dr. Sharif, I would like to inquire about lab tests and diagnostic results at Rise Healthcare.",
  },
  {
    id: "mr-reagan",
    name: "Mr. Reagan",
    role: "Administrative Secretary",
    department: "Administration & Patient Admissions",
    image: CLINIC_IMAGES.reagan,
    qualification: "Healthcare Administration Specialist",
    bio: "Managing seamless patient admissions, billing transparency, documentation, and coordination between medical departments to guarantee frictionless patient journeys.",
    whatsappMessage: "Hello Mr. Reagan, I need administrative assistance and clinic info from Rise Healthcare.",
  },
  {
    id: "mr-shafic",
    name: "Mr. Shafic",
    role: "Operations Supervisor",
    department: "Clinic Operations, Logistics & Safety",
    image: CLINIC_IMAGES.shafic,
    qualification: "Healthcare Operations & Facility Supervisor",
    bio: "Overseeing facility hygiene, cold-chain preservation for vaccines, 24/7 power and oxygen systems, emergency preparedness, and outreach logistics across Wakiso.",
    whatsappMessage: "Hello Mr. Shafic, I have an inquiry regarding Rise Healthcare facility operations and services.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "general-consultation",
    title: "General Consultation & Clinical Diagnosis",
    shortDesc: "Comprehensive patient evaluation, chronic illness management, and personalized care by experienced medical doctors.",
    fullDesc: "Our general medicine department provides thorough examinations, prompt diagnosis, and treatment for both acute and chronic conditions. Under the leadership of Dr. Musobya Bob, patients receive thorough consultations with utmost dignity, privacy, and clinical thoroughness.",
    image: CLINIC_IMAGES.drBob,
    staffName: "Dr. Musobya Bob",
    staffRole: "Medical Director",
    features: [
      "In-depth physical examinations & diagnostic history",
      "Hypertension, diabetes, & lifestyle illness management",
      "Pediatric and geriatric care for family wellness",
      "Immediate prescription dispensing and follow-up plans",
    ],
    ctaLabel: "Book Consultation",
    ctaAction: "whatsapp",
    whatsappMessage: "Hello Rise Health Care, I want to book a General Consultation with Dr. Musobya.",
  },
  {
    id: "maternity-delivery",
    title: "Maternity & Delivery Suite",
    shortDesc: "Equipped labor room with specialized pink delivery beds, clinical oxygen, ultrasound support, and compassionate maternal care.",
    fullDesc: "Safe motherhood is the heartbeat of Eddwaliro. Our dedicated Maternity and Delivery Suite features clean pink delivery beds, continuous medical oxygen supply, fetal heartbeat monitors, and round-the-clock obstetric standby led by Dr. Sarah.",
    image: CLINIC_IMAGES.maternity,
    secondaryImage: CLINIC_IMAGES.drSarah,
    staffName: "Dr. Sarah",
    staffRole: "Maternity Specialist",
    features: [
      "Dedicated delivery suite with medical oxygen & resuscitation gear",
      "Comprehensive antenatal (ANC) visits & fetal heart checks",
      "Postnatal recovery ward with warm infant care",
      "24/7 emergency midwife & obstetrician availability",
    ],
    ctaLabel: "Book Maternity Care",
    ctaAction: "whatsapp",
    whatsappMessage: "Hello Dr. Sarah, I would like to book Maternity & Antenatal care at Rise Healthcare.",
  },
  {
    id: "laboratory-services",
    title: "Diagnostic Laboratory Services",
    shortDesc: "Fast, accurate blood tests, clinical microscopy, malaria, typhoid, liver function, and comprehensive panels.",
    fullDesc: "Accurate diagnosis precedes effective treatment. Our in-house laboratory, overseen by Dr. Sharif, is equipped with high-grade optical microscopes and digital analysis systems to deliver fast, verified test results within minutes.",
    image: CLINIC_IMAGES.lab,
    secondaryImage: CLINIC_IMAGES.drSharif,
    staffName: "Dr. Sharif",
    staffRole: "Chief Laboratory Technologist",
    features: [
      "Malaria BS, typhoid, and infectious disease diagnostics",
      "Full blood count (CBC), blood grouping & crossmatch",
      "Urinalysis, stool analysis, & clinical microscopy",
      "Fast turnarounds with confidential results archiving",
    ],
    ctaLabel: "Book Lab Test",
    ctaAction: "whatsapp",
    whatsappMessage: "Hello Dr. Sharif, I would like to schedule a Laboratory Test at Rise Healthcare.",
  },
  {
    id: "inpatient-emergency",
    title: "Inpatient Ward & 24HRS Emergency",
    shortDesc: "Clean, comfortable inpatient beds with pink linens, IV drip therapy, vitals monitoring, and 24/7 nursing supervision.",
    fullDesc: "When continuous medical observation is required, our inpatient admission ward provides a peaceful, sterile, and monitored recovery environment. Available day and night for emergencies, pediatric admissions, and post-surgery care.",
    image: CLINIC_IMAGES.ward,
    staffName: "Clinical Nursing Team",
    staffRole: "24/7 Emergency & Inpatient Care",
    features: [
      "24/7 prompt triage and trauma stabilization",
      "Sanitized patient ward beds with patient privacy curtains",
      "Intravenous fluid therapy, pain control, & antibiotic courses",
      "Emergency oxygen and standby standby power supply",
    ],
    ctaLabel: "Emergency Call 0705960182",
    ctaAction: "call",
    whatsappMessage: "EMERGENCY: I need urgent admission / medical assistance at Rise Healthcare.",
  },
  {
    id: "reception-patient-care",
    title: "Reception & Patient Admissions Care",
    shortDesc: "Welcoming front desk, streamlined triage, courteous patient registration, and zero unnecessary waiting times.",
    fullDesc: "From the moment you step through our doors into our blue-accented reception hall, you are met with respect, warmth, and prompt triage. Our professional reception staff guides each patient seamlessly to the appropriate clinic doctor or lab station.",
    image: CLINIC_IMAGES.reception,
    staffName: "Patient Care Team",
    staffRole: "Front Desk & Triage Officers",
    features: [
      "Friendly, compassionate Luganda and English speaking staff",
      "Quick vital signs assessment (BP, temperature, pulse, SPO2)",
      "Transparent fee structure with zero surprise charges",
      "Patient records privacy and rapid file retrieval",
    ],
    ctaLabel: "Visit Us",
    ctaAction: "visit",
    whatsappMessage: "Hello Rise Health Care, I am planning a visit to the clinic and would like directions.",
  },
  {
    id: "child-immunization",
    title: "Child Immunization & Family Wellness",
    shortDesc: "Cold-chain preserved UNEPI vaccines, developmental growth checks, infant deworming, and maternal-child health.",
    fullDesc: "Protecting Uganda's youngest generation from preventable illnesses is a core pillar of Rise Healthcare. We administer WHO/UNEPI approved vaccines strictly maintained at 2-8°C in validated cold boxes, both inside our clinic and during school outreaches.",
    image: CLINIC_IMAGES.community,
    staffName: "Community Health Team",
    staffRole: "Vaccination & Child Wellness Officers",
    features: [
      "Strict cold-chain vaccine preservation (2°C - 8°C cold boxes)",
      "Routine infant immunization (BCG, Polio, Pentavalent, Measles)",
      "Vitamin A supplementation and pediatric deworming",
      "Growth monitoring and nutritional counseling for mothers",
    ],
    ctaLabel: "Book Immunization",
    ctaAction: "whatsapp",
    whatsappMessage: "Hello Rise Health Care, I want to book child immunization / vaccination.",
  },
];

export const COMMUNITY_PROGRAMS: CommunityProgram[] = [
  {
    id: "school-healthcare",
    title: "School Children Health Care & Screenings",
    shortDesc: "Direct on-campus health outreaches to primary and secondary schools across Ndejje and Wakiso.",
    fullDesc: "We take medical care directly to school campuses. Our medical officers examine school children in their uniforms, check vision and hearing, treat skin infections, administer routine immunizations, and provide essential first-aid training to school staff.",
    image: CLINIC_IMAGES.community,
    keyDetails: [
      "School-wide deworming and dental check-ups",
      "Early detection of infectious conditions and skin ailments",
      "Vaccination compliance reviews in partnership with parents and teachers",
      "Health hygiene and sanitation education workshops",
    ],
    impactStats: "Over 2,500+ school pupils reached in Wakiso District",
  },
  {
    id: "community-give-away",
    title: "Community Medical Give-Away & Free Camps",
    shortDesc: "Free general consultations, hypertension screenings, blood sugar tests, and essential hygiene packs.",
    fullDesc: "Rise Healthcare periodically hosts open-access community wellness camps at Ndejje Zanta and neighboring villages. We offer free blood pressure checks, diabetes testing, distribution of maternal delivery kits (Mama Kits), and medical counseling to elderly and low-income residents.",
    image: CLINIC_IMAGES.reception,
    keyDetails: [
      "Free non-communicable disease (NCD) screening camps",
      "Mama Kit giveaways to expecting mothers in financial need",
      "Community health sensitization in both Luganda and English",
      "Free medical referrals to our 24/7 clinic facility",
    ],
    impactStats: "1,200+ vulnerable families assisted annually",
  },
  {
    id: "immunization-drives",
    title: "Child Immunization Drives (Cold-Chain 2-8°C)",
    shortDesc: "Field vaccination drives utilizing certified mobile vaccine cold boxes to protect African children against preventable diseases.",
    fullDesc: "Vaccine potency requires unbroken cold-chain preservation. Our field nurses deploy certified portable cold storage boxes maintaining strict temperatures between 2°C and 8°C, bringing lifesaving childhood immunizations right to community centers, churches, and villages.",
    image: CLINIC_IMAGES.community,
    keyDetails: [
      "Rigorous cold-chain protocol with temperature loggers (2-8°C)",
      "UNEPI schedule compliance for infants and toddlers",
      "Community follow-up to ensure booster shots are completed",
      "Partnership with local LC1 leaders and community village health teams (VHTs)",
    ],
    impactStats: "100% cold-chain compliance across all outreach operations",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Welcoming Reception & Triage Hall",
    category: "facilities",
    image: CLINIC_IMAGES.reception,
    caption: "3-staff front desk greeting patients in our blue branded triage hall",
    description: "Our calm, organized reception area where patients are welcomed with warmth, registered without delays, and immediately assessed by triage nurses.",
  },
  {
    id: "gal-2",
    title: "Diagnostic Microscopy & Lab Testing",
    category: "equipment",
    image: CLINIC_IMAGES.lab,
    caption: "Dr. Sharif operating the precision optical microscope for rapid diagnostics",
    description: "High-grade optical microscopy in our clean laboratory facility ensuring rapid detection of malaria parasites, bacterial infections, and hematological anomalies.",
  },
  {
    id: "gal-3",
    title: "Comfortable Inpatient Recovery Ward",
    category: "facilities",
    image: CLINIC_IMAGES.ward,
    caption: "Pink bed linens, IV infusion stand, and hygienic admission ward",
    description: "Sterile, comfortable inpatient ward beds designed for prompt post-emergency stabilization, recovery, and 24-hour medical and nursing supervision.",
  },
  {
    id: "gal-4",
    title: "Maternity & Delivery Suite",
    category: "facilities",
    image: CLINIC_IMAGES.maternity,
    caption: "Dedicated delivery bed with clinical medical oxygen cylinder and sterile supplies",
    description: "The Rise Healthcare maternity delivery suite equipped with life-saving oxygen cylinders, sterile delivery kits, and gentle lighting for comfortable childbirth.",
  },
  {
    id: "gal-5",
    title: "Licensed Healthcare Facility & Staff Credentials",
    category: "team",
    image: CLINIC_IMAGES.certificates,
    caption: "Registered medical certificates and licenses displayed on the official clinic wall",
    description: "Proof of clinical excellence and official Ugandan licensing. Our medical credentials, professional registration certificates, and compliance standards displayed with pride.",
  },
  {
    id: "gal-6",
    title: "Eddwaliro Community Health Outreach",
    category: "outreach",
    image: CLINIC_IMAGES.community,
    caption: "School children vaccination drive with cold-box storage and official outreach banner",
    description: "Our dedicated outreach team in the field providing vital childhood vaccinations, pediatric care, and health education to school students in Wakiso.",
  },
  {
    id: "gal-7",
    title: "Clinical Leadership - Dr. Musobya Bob",
    category: "team",
    image: CLINIC_IMAGES.drBob,
    caption: "Medical Director at his clinical desk reviewing patient diagnosis",
    description: "Dr. Musobya Bob providing compassionate, ethical, and expert medical leadership to the clinical team at Rise Healthcare Ndejje Zanta.",
  },
  {
    id: "gal-8",
    title: "Maternity Care Lead - Dr. Sarah",
    category: "team",
    image: CLINIC_IMAGES.drSarah,
    caption: "Dr. Sarah in clinical scrubs dedicated to maternal and infant wellness",
    description: "Dedicated to the health of mothers and babies, Dr. Sarah oversees antenatal clinics, delivery procedures, and pediatric post-birth monitoring.",
  },
  {
    id: "gal-9",
    title: "Laboratory Information & Digital Systems",
    category: "equipment",
    image: CLINIC_IMAGES.drSharif,
    caption: "Dr. Sharif operating lab computerized test analysis station",
    description: "Integrating modern electronic health records and automated diagnostic reports for rapid, error-free clinical lab results.",
  },
  {
    id: "gal-10",
    title: "Administrative Coordination - Mr. Reagan",
    category: "team",
    image: CLINIC_IMAGES.reagan,
    caption: "Mr. Reagan leading clinic patient records and administrative care",
    description: "Ensuring smooth patient records administration, appointments scheduling, and coordination between departments for maximum patient satisfaction.",
  },
  {
    id: "gal-11",
    title: "Operations & Facility Management - Mr. Shafic",
    category: "team",
    image: CLINIC_IMAGES.shafic,
    caption: "Mr. Shafic supervising clinic facilities, cold chain and 24/7 readiness",
    description: "Maintaining strict facility safety, continuous power supply, medical gas supplies, and outreach logistical readiness around the clock.",
  },
];
