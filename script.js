const questions = [
  {
    question: "Choose proliferative elements of rash",
    answers: [
      { text: "blister", correct: true },
      { text: "vesicle", correct: false },
      { text: "Erosion", correct: false },
      { text: "Scar ", correct: false },
      { text: "Bulla", correct: false },
    ],
  },
  {
    question: "Choose proliferative elements of rash",
    answers: [
      { text: "Nodule", correct: true },
      { text: "vesicle", correct: false },
      { text: "Erosion", correct: false },
      { text: "Scar ", correct: false },
      { text: "Bulla", correct: false },
    ],
  },
  {
    question: "What function of keratinocytes",
    answers: [
      { text: "reproduction", correct: true },
      { text: "protection from UV rays ", correct: false },
      { text: "termoregulation", correct: false },
      { text: "moisturizing", correct: false },
      { text: "tactile sensation ", correct: false },
    ],
  },
  {
    question: "What pathohistological changes in stratum corneum    ",
    answers: [
      { text: "Hyperkeratosis", correct: true },
      { text: "granulosis", correct: false },
      { text: "Acanthosis", correct: false },
      { text: "Acantholysis", correct: false },
      { text: "Papillomatosis", correct: false },
    ],
  },
  {
    question: "Choose secondary elements of rash        ",
    answers: [
      { text: "Abrasion", correct: true },
      { text: "Abscesses", correct: false },
      { text: "Blister", correct: false },
      { text: "Enanthema", correct: false },
      { text: "Macula", correct: false },
    ],
  },
  {
    question: "Choose secondary elements of rash        ",
    answers: [
      { text: "Erosion", correct: true },
      { text: "Blister", correct: false },
      { text: "Abscesses", correct: false },
      { text: "spots ", correct: false },
      { text: "Enanthema", correct: false },
    ],
  },
  {
    question: "Differentiate in which of the following conditions does parakeratosis most frequently occur? ",
    answers: [
      { text: "Actinic keratosis", correct: true },
      { text: "Seborrheic keratosis", correct: false },
      { text: "Molluscum contagiosum ", correct: false },
      { text: "Basal cell carcinoma ", correct: false },
      { text: "Pitiriasis versicolor", correct: false },
    ],
  },
  {
    question: "Specify cells that connnect desmosomes  ",
    answers: [
      { text: "Keratinocytes", correct: true },
      { text: "Melanocytes", correct: false },
      { text: "Dermis and epidermis ", correct: false },
      { text: "Langerhans cells ", correct: false },
      { text: "Merkel cells", correct: false },
    ],
  },
  {
    question: "Determine what layer affects spongiosis",
    answers: [
      { text: "Stratum spinosum ", correct: true },
      { text: "Stratum basale", correct: false },
      { text: "Stratum corneum", correct: false },
      { text: "Stratum granulosum ", correct: false },
      { text: "Stratum licudum", correct: false },
    ],
  },
  {
    question: "Sweat glands of palm can be diffe rentiated from others by the following ",
    answers: [
      { text: "Secretion stimulated by emotional stimuli ", correct: true },
      { text: "Apocrine glands", correct: false },
      { text: "High chloride content", correct: false },
      { text: "Adrenergic mediators control the secretion ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Apocrine sweat glands are located in:",
    answers: [
      { text: "Armpits", correct: true },
      { text: "hairy part of head", correct: false },
      { text: "lower leg region", correct: false },
      { text: "in the area of the back of the hands", correct: false },
      { text: "on the soles", correct: false },
    ],
  },
  {
    question: "Eccrine sweat glands are located:",
    answers: [
      { text: "throughout the skin", correct: true },
      { text: "On the back of the brushes", correct: false },
      { text: "in the rear foot", correct: false },
      { text: "on the nails", correct: false },
      { text: "on hair", correct: false },
    ],
  },
  {
    question: "The sebaceous glands function:",
    answers: [
      { text: "moisturizing", correct: true },
      { text: "thermoregulatory", correct: false },
      { text: "receptor", correct: false },
      { text: "exchange", correct: false },
      { text: "respiratory", correct: false },
    ],
  },
  {
    question: "Long hair located in the area:",
    answers: [
      { text: "head", correct: true },
      { text: "Eye brow", correct: false },
      { text: "about nail bed", correct: false },
      { text: "sole", correct: false },
      { text: "palms", correct: false },
    ],
  },
  {
    question: "Bristly hair range:",
    answers: [
      { text: "in the field of beard and mustache", correct: true },
      { text: "in the nasal and auditory canal", correct: false },
      { text: "in the eyebrow area", correct: false },
      { text: "in the field of eyelashes", correct: false },
      { text: "heads", correct: false },
    ],
  },
  {
    question: "In addition to sweating, thermoregulation is performed using:",
    answers: [
      { text: "Constriction or dilation of blood vessels", correct: true },
      { text: "Taurus Fater Pacini", correct: false },
      { text: "Sebecious  glands", correct: false },
      { text: "Merkel cells", correct: false },
      { text: "Ruffini corpuscle", correct: false },
    ],
  },
  {
    question: "A 60-year-old man consulted a dermatologist. Complaints of a rash on the back of the neck, soreness, fever, limitation of neck mobility. Has been ill for 2 weeks. Concomitant disease: Diabetes mellitus. Objectively: on the skin of the back of the neck there is an infiltrate of stagnant-cyanotic color, in the central part with multiple pustules and foci of skin necrosis. A purulent bloody fluid flows out of the fistulous openings. The patient has a body temperature of 39 ̊С, the submandibular, cervical lymph nodes are enlarged, painful. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "Carbuncle", correct: true },
      { text: "Sycosis", correct: false },
      { text: "Hydradenitis", correct: false },
      { text: "Folliculitis", correct: false },
      { text: "Ostiofolliculitis", correct: false },
    ],
  },
  {
    question: "A 26-year-old woman consulted a dermatologist. Complaints of sharp pain in the left axillary region. The disease began acutely 3 days ago. Suffers from increased sweating. Concomitant disease: Obesity II degree. On examination: in the left axillary region, there are several dense painful nodes, up to 1.8 cm in diameter, adhered to the skin, purple-red, conical in shape, with a defining fluctuation in the center. Body temperature 37.4 ̊С. In the clinical analysis of blood: leukocytes 13.8 x 10 g / l, ESR 18 mm / h. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "hydradenitis", correct: true },
      { text: "Carbuncle", correct: false },
      { text: "Furuncle", correct: false },
      { text: "folliculitis", correct: false },
      { text: "ostiofolliculitis", correct: false },
    ],
  },
  {
    question: "A 49-year-old man came to the clinic. Complaints of painful formation on the back of the neck, chills. Body temperature 38.5 ̊С. She has a history of hypothermia. Among the accompanying diseases: chronic gastritis, chronic colitis. On examination: the skin on the back of the neck is purple-red, hot to the touch, edematous, infiltrated. In the central part, it has several fistulous openings, from which thick pus with an admixture of blood and necrotic masses is released. On palpation, a sharp pain in the lesion. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "carbuncle ", correct: true },
      { text: "sycosis", correct: false },
      { text: "folliculitis", correct: false },
      { text: "osteofolliculitis", correct: false },
      { text: "hydradenitis", correct: false },
    ],
  },
  {
    question: "A woman with a child of 8 years old applied to the doctor. Complaints about rashes in the corners of the mouth, pain. Anamnesis: frequent flue. Sick for a week. Objectively: in the corners of the mouth there are slit-like erosion, cracks surrounded by a corolla of exfoliated epidermis, covered with yellow crusts. Scraping on the mycelium of the fungus is negative. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "Slit impetigo", correct: true },
      { text: "Staphylococcal impetigo", correct: false },
      { text: "Streptococcal impetigo", correct: false },
      { text: "Vulgar impetigo", correct: false },
      { text: "Bullous impetigo", correct: false },
    ],
  },
  {
    question: "A man, 40 years old, applied to a dermatologist at the FMC. Complaints about a rash on the face in the area of ​​the mustache and beard. From the anamnesis he has been sick for a month. A concomitant disease is chronic gastritis. On examination: on the skin of the face in the area of ​​the beard and mustache against the background of hyperemia and infiltration, there are multiple scattered follicular papules and pustules, erosion, covered with purulent discharge and crusts, in places due to perifollicular inflammation, forming confluent foci covered with purulent crusts. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "vulgar sycosis", correct: true },
      { text: "gangrenous pyoderma", correct: false },
      { text: "Slit impetigo", correct: false },
      { text: "lichen simplex", correct: false },
      { text: "Vulgar impetigo", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman consulted a dermatologist. Complaints of eruptions accompanied by evening and nighttime itching. There are no associated diseases. Lives alone, two weeks ago she was visiting. On examination: on the skin of the trunk, especially on the anterolateral surfaces, around the nipples, on the upper and lower extremities, in the interdigital spaces there are numerous paired papules - vesicular elements, excoriation, bloody crusts. Symptoms of Cesari, Gorchakov are positive. Subjective: evening and nighttime itching. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "scabies ", correct: true },
      { text: "eczema ", correct: false },
      { text: "dermatitis ", correct: false },
      { text: "psoriasis ", correct: false },
      { text: "prurigo", correct: false },
    ],
  },
  {
    question: "staphyloderma neonatal include:",
    answers: [
      { text: "vesiculopustosis", correct: true },
      { text: "exudative erythema", correct: false },
      { text: "diathesis", correct: false },
      { text: "lichen planus", correct: false },
      { text: "pityriasis versicolor", correct: false },
    ],
  },
  {
    question: "Sycosis is localized:",
    answers: [
      { text: "in mustache and beard", correct: true },
      { text: "on the skin of the hips", correct: false },
      { text: "on the skin of the palms", correct: false },
      { text: "on the scalp", correct: false },
      { text: "on face", correct: false },
    ],
  },
  {
    question: "In the treatment of furunculosis, use:",
    answers: [
      { text: "cephalosporins", correct: true },
      { text: "cytostatics", correct: false },
      { text: "Anabolic", correct: false },
      { text: "anti-TB drugs", correct: false },
      { text: "ACTG", correct: false },
    ],
  },
  {
    question: "A carbuncle is:",
    answers: [
      { text: "Damage to several hair follicles", correct: true },
      { text: "single hair follicle", correct: false },
      { text: "Lesion of the nail bed", correct: false },
      { text: "Disease of sweat glands", correct: false },
      { text: "PVHD", correct: false },
    ],
  },
  {
    question: "At the reception of a dermatologist a woman with her daughter 5 years old. Three days ago, after being bitten by mosquitoes and scratching, blisters began to appear on the girl's face, which quickly dried into crusts. Washing with hot soapy water caused an increase in rashes. Objectively: in the nasolabial folds, on the upper lip, cheeks and on the chin, there are single flat blisters with a thin lining and turbid contents, light yellow crusts. A preliminary diagnosis was made: Streptococcal impetigo. Which of the following drugs should be prescribed for external therapy?",
    answers: [
      { text: "fucorsin", correct: true },
      { text: "lamisil", correct: false },
      { text: "exoderil", correct: false },
      { text: "nizoral", correct: false },
      { text: "zalain", correct: false },
    ],
  },
  {
    question: "A 60-year-old man went to the clinic. Complaints about a rash on the skin of the back of the neck, soreness. Has been ill for two weeks. Concomitant disease: Diabetes mellitus. On examination: an acute inflammatory infiltrate with many necrotic rods involving the underlying tissues, edema. In the center of the infiltrate, there are necrotic areas and fistulous openings with the release of pus mixed with blood. Diagnosed with Carbuncle. Which of the following is the most appropriate treatment?",
    answers: [
      { text: "surgical ", correct: true },
      { text: "physiotherapy ", correct: false },
      { text: "phytotherapeutic", correct: false },
      { text: "laser therapy ", correct: false },
      { text: "phototherapy", correct: false },
    ],
  },
  {
    question: "A 5-year-old man with a child applied to a dermatologist. Complaints about a rash in the groin - femoral, intergluteal folds. Stage II obesity. Objectively: multiple conflicts rapidly opening, forming weeping foci of bright pink color, with scalloped borders, linear cracks in the depths of the folds. The preliminary diagnosis: Intertriginous streptoderma. Which of the following is the most appropriate form in local patient care?",
    answers: [
      { text: "powder", correct: true },
      { text: "ointment ", correct: false },
      { text: "paste", correct: false },
      { text: "cream", correct: false },
      { text: "varnish", correct: false },
    ],
  },
  {
    question: "A 24-year-old woman consulted a dermatologist at the clinic. Complaints about the appearance of rashes, accompanied by severe nighttime itching. Anamnesis - eczema. Two weeks ago she was in a sanatorium. On examination: in the interdigital folds of the hands, on the flexion surfaces of the wrist joints, elbows and abdomen, there are numerous papulo-vesicular elements, up to 3 - 4 mm in diameter, located in pairs, as well as point and linear excoriation, in the elbow area - punctate bloody crusts. Subjective: severe nighttime itching. Preliminary diagnosis: Scabies. Which of the following symptoms is typical for this disease?",
    answers: [
      { text: "gorchakov", correct: true },
      { text: "nikolsky", correct: false },
      { text: "kebner", correct: false },
      { text: "pilnov", correct: false },
      { text: "sheklakov", correct: false },
    ],
  },
  {
    question: "A 30-year-old man has consulted a dermatologist at the FMC. Complaints of a rash on the skin of the trunk, upper and lower extremities, accompanied by evening and nighttime itching. From the anamnesis 2 weeks ago he was visiting relatives. On examination: on the skin of the trunk, especially on the anterolateral surfaces, abdomen, upper and lower limbs, there are numerous paired papules - vesicular elements, scratches, bloody crusts. Subjective: evening and nighttime itching. When examining scrapings, a scabies mite was found microscopically. Diagnosis: Scabies. Which of the following drugs should be prescribed for external therapy?",
    answers: [
      { text: "spregal", correct: true },
      { text: "tridox", correct: false },
      { text: "fenistil", correct: false },
      { text: "akriderm", correct: false },
      { text: "skinazole", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman turned to a dermatologist at the clinic. Complaints of itchy rash in the pubic area, which appeared a few days after intercourse. On examination: on the skin of the pubis and genitals, multiple grayish-brown points at the hair root, small, whitish, very dense nodules, as well as grayish-bluish spots, rounded outlines, up to 1 cm in diameter are determined. Preliminary diagnosis: Pubic lice. Which of the following drugs should be prescribed for external therapy?",
    answers: [
      { text: "permethrin", correct: true },
      { text: "tridox", correct: false },
      { text: "sinaflan", correct: false },
      { text: "akriderm", correct: false },
      { text: "skinazole", correct: false },
    ],
  },
  {
    question: "Angular stomatitis is differentiated from:",
    answers: [
      { text: "Surface candidosis of the corners of the mouth", correct: true },
      { text: "With simple deprive", correct: false },
      { text: "with turpiolem", correct: false },
      { text: "with psoriasis", correct: false },
      { text: "Simple dermatitis", correct: false },
    ],
  },
  {
    question: "Turniol is:",
    answers: [
      { text: "inflammation of the skin around the nail plate ", correct: true },
      { text: "inflammation of the sebaceous glands", correct: false },
      { text: "inflammation of the hair follicle", correct: false },
      { text: "Inflammation of the red border of the lip", correct: false },
      { text: "eye damage", correct: false },
    ],
  },
  {
    question: "Pityriasis versicolor is caused by:",
    answers: [
      { text: "pityrosporum orbiculare", correct: true },
      { text: "candida albicans", correct: false },
      { text: "microsporum ferrugeneum", correct: false },
      { text: "trichophyton rubrum", correct: false },
      { text: "corinebacterium minutissimum", correct: false },
    ],
  },
  {
    question: "What kind of peeling is typical for multi-colored lichen?",
    answers: [
      { text: "pityriasis ", correct: true },
      { text: "small lamellar", correct: false },
      { text: "flour like", correct: false },
      { text: "large lamellar", correct: false },
      { text: "leafy", correct: false },
    ],
  },
  {
    question: "What drugs are preferred for the treatment of superficial trichophytosis",
    answers: [
      { text: "antifungal ", correct: true },
      { text: "corticosteroid ", correct: false },
      { text: "antiviral ", correct: false },
      { text: "antibacterial ", correct: false },
      { text: "keratolytic ", correct: false },
    ],
  },
  {
    question: "In the treatment of microsporia, apply:",
    answers: [
      { text: "fluconazole", correct: true },
      { text: "ceftriaxone", correct: false },
      { text: "ciprofloxacin", correct: false },
      { text: "larotadine ", correct: false },
      { text: "ursodex", correct: false },
    ],
  },
  {
    question: "A mother with a 7-year-old child came to dermatologist. She discovered a patch of hair loss on the scalp. When viewed on the scalp, a lesion measuring 2 cm in diameter is determined, the hair seems to be \"sloppy cut\", at the level of 5-8 mm with grayish stumps; the skin peels off profusely, a zone of mild hyperemia is determined along the periphery of the focus. An emerald-green glow was detected during luminescence research. What is the most likely diagnosis?",
    answers: [
      { text: "microsporia ", correct: true },
      { text: "seborrhea", correct: false },
      { text: "trichophytosis", correct: false },
      { text: "alopecia ", correct: false },
      { text: "favus", correct: false },
    ],
  },
  {
    question: "A 40-year-old woman working as a milkmaid turned to an appointment with a dermatologist, complaining of painful elevations in the occiput. Objectively: in the occipital region on the scalp, acute inflammatory infiltrates sharply demarcated from the surrounding skin are determined, which noticeably rise above the skin level. The hair in the outbreak is stuck together due to the release of pus. With light tugging, the hair is easily pulled out. When the lesions are squeezed, pus is released from the hair follicles, the symptom of \"honeycomb\" is positive. What is the most likely diagnosis?",
    answers: [
      { text: "trichophytosis", correct: true },
      { text: "microsporia ", correct: false },
      { text: "pediculosis", correct: false },
      { text: "seborrhea", correct: false },
      { text: "psoriasis ", correct: false },
    ],
  },
  {
    question: "A 20-year-old man, applied to the FMC  with complaints of rashes in the area of ​​the groin-femoral folds, minor itching. From the anamnesis - attends the sports section. Objectively: spots on the skin of the inguinal-femoral folds are brown in color with distinct ridge-like scalloped edges. On the periphery of the spots there are papulovesicular elements, in the center there are foci of hypopigmentation. Epidermophyton floccosum was found by laboratory. What is the most likely diagnosis?",
    answers: [
      { text: "epidermophytisis of the inguinal folds", correct: true },
      { text: "trichophytosis of smooth skin", correct: false },
      { text: "flexion inverse psoriasis", correct: false },
      { text: "candidiasis of inguinal folds", correct: false },
      { text: "erythrasma of the groin area", correct: false },
    ],
  },
  {
    question: "A mother with a 5-year-old child turned to a dermatologist with complaints of rashes on the skin of the child's trunk and limbs. From the anamnesis: a week ago he was at my grandmother's house and played with the cat. An objective examination revealed multiple rounded foci of various sizes, pale pink color, with fine-lamellar superficial peeling. The boundaries of the foci are clear, with a towering edematous ridge, consisting of small nodular and vesicular elements. Foci in the form of \"ring in a ring\" figures. Microsporum canis was found during research. Provide the most likely diagnosis",
    answers: [
      { text: "microsporia", correct: true },
      { text: "erythrasma", correct: false },
      { text: "trichophytosis", correct: false },
      { text: "eczema", correct: false },
      { text: "psoriasis", correct: false },
    ],
  },
  {
    question: "A 24-year-old man came to see a doctor at the FMC with complaints of peeling of the scalp. On examination, the patient has a pronounced erythema of the skin, peeling, thinning hair. At the base of many hairs, rounded formations are determined, resembling an inverted saucer - scutula. Hair is dull, gray in color, reminiscent of an old chignon. In the centers of hair thinning, there are signs of cicatricial atrophy of the skin. An unpleasant \"mouse\" smell comes from the hair. What disease is such a picture typical for?",
    answers: [
      { text: "favus of the scalp", correct: true },
      { text: "seborrhea of the scalp", correct: false },
      { text: "teichophytosis of the scalp", correct: false },
      { text: "microsporia of the scalp", correct: false },
      { text: "flexion inverse psoriasis ", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman consulted a dermatologist with complaints of skin lesions under the mammary glands, burning and slight itching. Objectively: a woman has dark red flushing foci with clear boundaries in the folds under the mammary glands. Erosion in the center of the folds is covered with a whitish coating, when removed, bright red erosive surfaces are exposed. There are small nodular elements along the periphery of the foci. From research identified Candida albicans. Diagnosis: Intertriginous candidiasis. What disease is differential diagnosis performed with?",
    answers: [
      { text: "candidiasis", correct: true },
      { text: "dermatitis ", correct: false },
      { text: "eczema", correct: false },
      { text: "psoriasis ", correct: false },
      { text: "pruritus", correct: false },
    ],
  },
  {
    question: "When examining schoolchildren, a 14-year-old teenager showed rashes on the skin of his chest. Objectively: single spots of various configurations and sizes on the skin of the upper half of the body, yellowish-brown in color, reminiscent of the type of \"coffee with milk\", with pityriasis peeling on the surface. Balzer's iodine test is positive. Laboratory - found Pityrosporum orbiculare / What is the most likely diagnosis?",
    answers: [
      { text: "pityriasis vesicolor", correct: true },
      { text: "psoriasis vulgaris", correct: false },
      { text: "pink lichen", correct: false },
      { text: "disffuse neurodermatitis", correct: false },
      { text: "skin itching", correct: false },
    ],
  },
  {
    question: "A 25-year-old man consulted a local doctor with complaints of swelling, itching and soreness of the nail folds. Objectively: the nail plates are deformed, yellowish; when pressed from the side, droplets of pus protrude from under the rollers. The nail folds are edematous, brightly hyperemic. Microscopic examination revealed mycelium of the fungus. Diagnosis: Candidiasis of the nail plates. What medicines are prescribed for this diagnosis?",
    answers: [
      { text: "antifungal", correct: true },
      { text: "antihistamines", correct: false },
      { text: "antiprotozoal", correct: false },
      { text: "corticosteroid ", correct: false },
      { text: "antibacterial ", correct: false },
    ],
  },
  {
    question: "A mother with a child of 9 years old, went to the clinic with complaints of hair loss in the child. Objectively: on the scalp, the lesions are located on the marginal zones, merging with each other. The inflammation is covered with asbestos-like scales. Hair is broken off at the level of 5-8 mm. The hair is dull, at the base is dressed in a white cover. In laboratory research, mycelium filaments were found. Diagnosis: Microsporia of the scalp. Which of the following drugs is preferable in the treatment of microsporia of the scalp",
    answers: [
      { text: "terbizil", correct: true },
      { text: "ceftriaxone", correct: false },
      { text: "ciprofloxacin", correct: false },
      { text: "ornidazole", correct: false },
      { text: "Amoxicillin ", correct: false },
    ],
  },
  {
    question: "A mother with a child of 11 years old, went to the clinic with complaints of itching of the scalp and hair loss. Objectively: on the scalp, a lesion measuring 2 cm in diameter is determined, the hair appears to be \"carelessly cut\", broken off at the level of 5-6 mm, with grayish stumps, the skin is abundantly flaky, and a zone of slight hyperemia is determined along the periphery of the lesion. A luminescent study revealed a greenish glow. Diagnosis: Microsporia of the scalp. What disease is differential diagnosis performed with?",
    answers: [
      { text: "trichophytosis", correct: true },
      { text: "eczema ", correct: false },
      { text: "seborrhea", correct: false },
      { text: "alopecia", correct: false },
      { text: "psoriasis", correct: false },
    ],
  },
  {
    question: "Eczema is:",
    answers: [
      { text: "chronic inflammation over. skin layers, polymorphism of elements", correct: true },
      { text: "chronic infectious skin inflammation", correct: false },
      { text: "acute infectious inflammation of the skin", correct: false },
      { text: "monomorphism of elements", correct: false },
      { text: "Chronic inflammation of the connective tissue", correct: false },
    ],
  },
  {
    question: "Secondary elements for true eczema:",
    answers: [
      { text: "erosion", correct: true },
      { text: "vegetation", correct: false },
      { text: "ulcer", correct: false },
      { text: "abrasion", correct: false },
      { text: "lichenification", correct: false },
    ],
  },
  {
    question: "Species of true eczema:",
    answers: [
      { text: "idiopathic", correct: true },
      { text: "Microbial", correct: false },
      { text: "children", correct: false },
      { text: "paratraumatic", correct: false },
      { text: "ribbon-like", correct: false },
    ],
  },
  {
    question: "The most frequent localization of true eczema:",
    answers: [
      { text: "palms and soles", correct: true },
      { text: "mucous urethra", correct: false },
      { text: "dried shells", correct: false },
      { text: "Language", correct: false },
      { text: "esophagus", correct: false },
    ],
  },
  {
    question: "Differential diagnostic criteria for true eczema:",
    answers: [
      { text: "Symmetry of rash", correct: true },
      { text: "presence of purulent ulcers", correct: false },
      { text: "asymmetry of rash", correct: false },
      { text: "Nikolsky positive symptom", correct: false },
      { text: "presence of scars", correct: false },
    ],
  },
  {
    question: "To diagnostic criteria for prurginic eczema, include:",
    answers: [
      { text: "papulovesicles on a tight base", correct: true },
      { text: "Excessive oozing", correct: false },
      { text: "symptom Sheklakova", correct: false },
      { text: "Presence of pustules", correct: false },
      { text: "the presence of vegetations", correct: false },
    ],
  },
  {
    question: "It is used locally for true eczema:",
    answers: [
      { text: "solution of rivanol", correct: true },
      { text: "Clotrimazole", correct: false },
      { text: "Sol. Demyanovich", correct: false },
      { text: "Mycosist", correct: false },
      { text: "Corvalol", correct: false },
    ],
  },
  {
    question: "Seborrheic eczema is differentiated from:",
    answers: [
      { text: "Seborrheic dermatitis", correct: true },
      { text: "Inguinal epidermophitia", correct: false },
      { text: "syphilitic alopecia", correct: false },
      { text: "neurodermatitis", correct: false },
      { text: "Scabies", correct: false },
    ],
  },
  {
    question: "Against the background of what diseases | seborrheic eczema occurs:",
    answers: [
      { text: "Fat seborrhea", correct: true },
      { text: "Microbial Eczema", correct: false },
      { text: "idiopathic eczema", correct: false },
      { text: "Seborrheic baldness", correct: false },
      { text: "Obesity", correct: false },
    ],
  },
  {
    question: "A 27-year-old patient has turned to a dermatologist with complaints of rashes and itching in the feet. The disease is associated with a visit to the bath 2 weeks ago. Objectively: on the skin of the arch of the foot and its lateral surfaces, as well as the interdigital spaces against the background of erythema and swelling, there are flat bublles with a dense cover, resembling \"sago grains\", with peeling and thickening of the skin on the surface. The lesions on the periphery are surrounded by a border of exfoliating epidermis with small vesicles along the edge, there are cracks and weeping. What is the most likely diagnosis",
    answers: [
      { text: "epidermophytosis of the feet", correct: true },
      { text: "pityriasis versicolor", correct: false },
      { text: "microbial eczema", correct: false },
      { text: "psoriasis of nail", correct: false },
      { text: "rubromycosis of feet", correct: false },
    ],
  },
  {
    question: "A 25-year-old man turned to a dermatologist  with complaints of multiple rashes in the chest area, which he associates with sunburn. Objectively: single spots of various configurations and sizes on the skin of the upper half of the body, yellowish-brown in color with pityriasis peeling on the surface. Balzer's iodine test is positive. Laboratory examination found Pityropsporum orbiculare. What is the most likely diagnosis?",
    answers: [
      { text: "pityriasis versicolor", correct: true },
      { text: "superficial trichophytosis", correct: false },
      { text: "superficial microsporia ", correct: false },
      { text: "psoriasis vulgaris", correct: false },
      { text: "atopic dermatitis ", correct: false },
    ],
  },
  {
    question: "A 28-year-old man, applied to the FMC with complaints of rashes on the skin of the feet and toes and changes in the nail plates. From the anamnesis: he has been suffering from this disease for about 2 years, for the first time the rash appeared while serving in the army. Objectively: on the skin of the soles, there is marked infiltration, diffuse hyperemia, skin furrows with pronounced mucous peeling are clearly visible. The process captures the back and side surfaces of the feet and toes. All the nail plates on the skin of the feet are thickened, easily crumble, subungual hyperkeratosis is noted. A laboratory study found Trihophyton rubrum. What is the most likely diagnosis?",
    answers: [
      { text: "rubrophytia of pedis", correct: true },
      { text: "superficial microsporia ", correct: false },
      { text: "superficial trichophytosis", correct: false },
      { text: "epidermophytosis of the feet", correct: false },
      { text: "erythrasma folds", correct: false },
    ],
  },
  {
    question: "Apply the treatment for lichen planus on the oral mucosa",
    answers: [
      { text: "corticosteroid ", correct: true },
      { text: "antibiotics", correct: false },
      { text: "cytostatics", correct: false },
      { text: "antimalarial drugs", correct: false },
      { text: "antifungal drugs ", correct: false },
    ],
  },
  {
    question: "Differentiate psoriasis with",
    answers: [
      { text: "lichen planus", correct: true },
      { text: "toxicoderma ", correct: false },
      { text: "pemfigus vulgaris", correct: false },
      { text: "scabies", correct: false },
      { text: "pyodermia ", correct: false },
    ],
  },
  {
    question: "Apply the external treatment for lichen planus ",
    answers: [
      { text: "corticosteroids ointments ", correct: true },
      { text: "antibiotics ointments ", correct: false },
      { text: "antifungal ointments ", correct: false },
      { text: "antiviral ointments ", correct: false },
      { text: "sun block cream", correct: false },
    ],
  },
  {
    question: "Apply the treatment for psoriasis reabilitation stage",
    answers: [
      { text: "emolient ", correct: true },
      { text: "antibiotics cream ", correct: false },
      { text: "keratolitic ointment", correct: false },
      { text: "corticosteroid ointment ", correct: false },
      { text: "antifungal ointment ", correct: false },
    ],
  },
  {
    question: "Apply diagnostic test for psoriasis",
    answers: [
      { text: "auspith triad ", correct: true },
      { text: "balcar test ", correct: false },
      { text: "wood lamp", correct: false },
      { text: "microscopic examination ", correct: false },
      { text: "Yadasson test ", correct: false },
    ],
  },
  {
    question: "Apply diagnostic test for lichen planus",
    answers: [
      { text: "Wickham mash", correct: true },
      { text: "wood lamp", correct: false },
      { text: "microscopic examinaion ", correct: false },
      { text: "balcar test ", correct: false },
      { text: "Yadasson test ", correct: false },
    ],
  },
  {
    question: "Mr. Johnson presents with chronic itching all over his body, particularly on his arms, legs, and back. The itching has been ongoing for several months and is affecting his quality of life. He describes the itch as bothersome and constant, leading to sleep disturbances and irritability. There are no visible skin lesions or rash noted upon examination. Medical History:  Mr. Johnson has a history of hypertension and osteoarthritis. He is on medication for both conditions and denies any recent changes in his medications. There is no known history of allergies or skin conditions. His past medical history is significant for a mild case of eczema in his.What will be the diagnosis and treatment",
    answers: [
      { text: "senile pruritis ; Emollients & topical corticosteroids", correct: true },
      { text: "Leprosy ; dapsone", correct: false },
      { text: "syphillis ; rifampicin", correct: false },
      { text: "Multiform exudative erythmea; hydrocortisone cortisone", correct: false },
      { text: "Dermophagism", correct: false },
    ],
  },
  {
    question: " Specify the pathohistological sign of pemphigus",
    answers: [
      { text: " acantolysis                        ", correct: true },
      { text: " Hyperkeratosis", correct: false },
      { text: " acanthosis", correct: false },
      { text: " spongiosis", correct: false },
      { text: " parakeratosis", correct: false },
    ],
  },
  {
    question: " Name the pathological cells in pemphigus:",
    answers: [
      { text: " Tzanck cells      ", correct: true },
      { text: " LE cells", correct: false },
      { text: " Merkel cells", correct: false },
      { text: " spiny cells", correct: false },
      { text: " Meissner cells", correct: false },
    ],
  },
  {
    question: "Name the element in the vegetative form of pemphigus:",
    answers: [
      { text: " erosion   ", correct: true },
      { text: " nodule", correct: false },
      { text: " ulcer", correct: false },
      { text: " abrasion", correct: false },
      { text: " Lichenification", correct: false },
    ],
  },
  {
    question: "Specify with which disease bullous pemphigoid should be differentiated:",
    answers: [
      { text: " Duhring's dermatitis    ", correct: true },
      { text: " eczema", correct: false },
      { text: " neurodermatitis", correct: false },
      { text: " scabies", correct: false },
      { text: " psoriasis", correct: false },
    ],
  },
  {
    question: "Specify the clinical sign in Duhring's dermatitis:",
    answers: [
      { text: " polymorphic symmetrical rashes    ", correct: true },
      { text: " scarring", correct: false },
      { text: " spots", correct: false },
      { text: " monomorphic asymmetrical rashes", correct: false },
      { text: " vegetations", correct: false },
    ],
  },
  {
    question: "select the first-line treatment for mild to moderate atopic dermatitis in children and adults?",
    answers: [
      { text: "Topical corticosteroids", correct: true },
      { text: "Oral antihistamines", correct: false },
      { text: "Topical calcineurin inhibitors", correct: false },
      { text: "Oral corticosteroids", correct: false },
      { text: "Phototherapy", correct: false },
    ],
  },
  {
    question: "Determine the pathomorphologic sign of the Nicolsky symptom in pemphigus vulgaris:",
    answers: [
      { text: " acantholysis                    ", correct: true },
      { text: " parakeratosis", correct: false },
      { text: " acanthosis", correct: false },
      { text: " spongiosis", correct: false },
      { text: " granulosis", correct: false },
    ],
  },
  {
    question: "Determine the condition of the skin around the blisters in pemphigus:",
    answers: [
      { text: " not changed                        ", correct: true },
      { text: " hyperemic", correct: false },
      { text: " infiltrated", correct: false },
      { text: " tinged with purple", correct: false },
      { text: " has a pronounced skin pattern", correct: false },
    ],
  },
  {
    question: " Determine in which disease corticosteroid therapy should be used:",
    answers: [
      { text: " true pemphigus          ", correct: true },
      { text: " herpes simplex", correct: false },
      { text: " Rubromycosis                   ", correct: false },
      { text: " candidiasis", correct: false },
      { text: " furunculosis", correct: false },
    ],
  },
  {
    question: "Determine what happens to the blister in Nikolsky's symptom:",
    answers: [
      { text: " increases in size   ", correct: true },
      { text: " burst", correct: false },
      { text: " crusts over", correct: false },
      { text: " painful", correct: false },
      { text: " bleeds", correct: false },
    ],
  },
  {
    question: "Determine in which disease Nikolsky's symptom is sharply positive:",
    answers: [
      { text: " pemphigus  ", correct: true },
      { text: " neurodermatitis", correct: false },
      { text: " Duhring's dermatitis", correct: false },
      { text: " eczema", correct: false },
      { text: " psoriasis", correct: false },
    ],
  },
  {
    question: "A patient presents with a sharply demarcated, erythematous, and edematous rash with vesicles and weeping, following exposure to a new skincare product. choose the correct   diagnosis?",
    answers: [
      { text: " Allergic contact dermatitis", correct: true },
      { text: "Irritant contact dermatitis", correct: false },
      { text: "Atopic dermatitis", correct: false },
      { text: "Seborrheic dermatitis", correct: false },
      { text: "Nummular dermatitis", correct: false },
    ],
  },
  {
    question: " Select a disease from the collagenosis group:",
    answers: [
      { text: " scleroderma ", correct: true },
      { text: " rosacea", correct: false },
      { text: " psoriasis", correct: false },
      { text: " scrofuloderma", correct: false },
      { text: " acne", correct: false },
    ],
  },
  {
    question: "State the pathohistological phenomena responsible for the Benier-Meschersky symptom in lupus erythematosus:",
    answers: [
      { text: " follicular hyperkeratosis  ", correct: true },
      { text: " acantholysis", correct: false },
      { text: " granulosis", correct: false },
      { text: " acanthosis", correct: false },
      { text: " parakeratosis", correct: false },
    ],
  },
  {
    question: "Select the definition of the symptom \"lady's heel\":",
    answers: [
      { text: " the presence of horny spines under the scales     ", correct: true },
      { text: " the presence of horny spines on the surface of the scales", correct: false },
      { text: " a pattern on the skin that resembles a heel", correct: false },
      { text: " a sensation of pain when the scales are removed", correct: false },
      { text: " thickening of the skin", correct: false },
    ],
  },
  {
    question: "Specify what is a symptom of Benier-Meschersky :",
    answers: [
      { text: " painfulness when the scales are removed    ", correct: true },
      { text: " the presence of spikes under the scales", correct: false },
      { text: " the presence of desquamation in the centre of the lesion", correct: false },
      { text: " the appearance of infiltrative plaques", correct: false },
      { text: " lichenification of the skin", correct: false },
    ],
  },
  {
    question: "Specify the localisation of discoid lupus erythematosus:",
    answers: [
      { text: " face     ", correct: true },
      { text: " back", correct: false },
      { text: " neck", correct: false },
      { text: " scalp", correct: false },
      { text: " palms and feet", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a typical characteristic of psoriasis?",
    answers: [
      { text: "Involvement of only the palms and soles", correct: true },
      { text: "Silvery scales", correct: false },
      { text: "Well-demarcated erythematous plaques", correct: false },
      { text: "Pustules filled with clear fluid", correct: false },
      { text: "Auspitz sign (pinpoint bleeding upon removal of scales)", correct: false },
    ],
  },
  {
    question: "Name the primary  symptom of discoid lupus erythematosus:",
    answers: [
      { text: " erythema ", correct: true },
      { text: " papular infiltration", correct: false },
      { text: " vegetation", correct: false },
      { text: " mottling", correct: false },
      { text: " follicular pustule", correct: false },
    ],
  },
  {
    question: " Determine what causes the Benier-Meschersky symptom in discoid lupus erythematosus:",
    answers: [
      { text: " densely seated scales    ", correct: true },
      { text: " vasodilatation", correct: false },
      { text: " exudation", correct: false },
      { text: " atrophy", correct: false },
      { text: " hyperkeratosis", correct: false },
    ],
  },
  {
    question: " Determine the stage of development of scleroderma:",
    answers: [
      { text: " edema     ", correct: true },
      { text: " infiltration", correct: false },
      { text: " erosion", correct: false },
      { text: " vegetation", correct: false },
      { text: " lichenification", correct: false },
    ],
  },
  {
    question: " State the clinical sign of limited scleroderma:",
    answers: [
      { text: " a rounded spot with a lilac rim around the periphery   ", correct: true },
      { text: " multiple white patches", correct: false },
      { text: " erythematous spots", correct: false },
      { text: " spot with desquamation", correct: false },
      { text: " nodule", correct: false },
    ],
  },
  {
    question: " Prescribe treatment for scleroderma:",
    answers: [
      { text: " hyaluronidase    ", correct: true },
      { text: " analgesics", correct: false },
      { text: " antihistamines", correct: false },
      { text: " corticosteroids", correct: false },
      { text: " antibiotics", correct: false },
    ],
  },
  {
    question: "Choose the following  characteristic feature of pityriasis rosea lesions?",
    answers: [
      { text: "Wickham striae", correct: true },
      { text: "Central umbilication", correct: false },
      { text: "Targetoid appearance", correct: false },
      { text: "Koebner phenomenon", correct: false },
      { text: "Psoriasiform scales", correct: false },
    ],
  },
  {
    question: "Select the most common age group affected by pityriasis rosea?",
    answers: [
      { text: "Adolescents and young adults", correct: true },
      { text: "Infants", correct: false },
      { text: "Middle-aged adults", correct: false },
      { text: "Elderly", correct: false },
      { text: "All age groups are equally affected", correct: false },
    ],
  },
  {
    question: "Name the disease with which you would differentiate seborrhoeic eczema",
    answers: [
      { text: " seborrheic dermatitis                       ", correct: true },
      { text: " Inguinal epidermophitia", correct: false },
      { text: " syphilitic alopecia", correct: false },
      { text: " neurodermatitis", correct: false },
      { text: " Scabies", correct: false },
    ],
  },
  {
    question: "Indicate the background of which disease seborrheic eczema occurs:",
    answers: [
      { text: " Fat seborrhea                       ", correct: true },
      { text: " Microbial Eczema", correct: false },
      { text: " idiopathic eczema", correct: false },
      { text: " Seborrheic baldness", correct: false },
      { text: " Obesity", correct: false },
    ],
  },
  {
    question: "Specify the morphological feature of seborrhoeic eczema",
    answers: [
      { text: " erythematous stains with fatty scales            ", correct: true },
      { text: " papulovesicles with sulfur-purulent crusts", correct: false },
      { text: " Papulovesicles with serous contents", correct: false },
      { text: " erosion with serous crusts", correct: false },
      { text: " Ulcers", correct: false },
    ],
  },
  {
    question: "Specify the typical localisation of seborrhoea:",
    answers: [
      { text: " face, scalp, back, chest    ", correct: true },
      { text: " palms and soles", correct: false },
      { text: " upper and lower extremities", correct: false },
      { text: " external genitalia", correct: false },
      { text: " inguinal area, buttocks", correct: false },
    ],
  },
  {
    question: "Choose among  the following  commonly used topical treatment for localized lichen planus?",
    answers: [
      { text: "Topical calcineurin inhibitors", correct: true },
      { text: "Oral corticosteroids", correct: false },
      { text: "Systemic retinoids", correct: false },
      { text: "Oral antifungal agents", correct: false },
      { text: "Oral antihistamines", correct: false },
    ],
  },
  {
    question: "Specify the localisation of seborrheic eczema",
    answers: [
      { text: " skin of head     ", correct: true },
      { text: " nails", correct: false },
      { text: " soles", correct: false },
      { text: " palms", correct: false },
      { text: " sex organs", correct: false },
    ],
  },
  {
    question: "Name the disease with which you would differentiate seborrhoeic eczema",
    answers: [
      { text: " seborrheic dermatitis                       ", correct: true },
      { text: " Inguinal epidermophitia", correct: false },
      { text: " syphilitic alopecia", correct: false },
      { text: " neurodermatitis", correct: false },
      { text: " Scabies", correct: false },
    ],
  },
  {
    question: " Specify the common localisation of seborrhoeic eczema:",
    answers: [
      { text: " sebaceous glands    ", correct: true },
      { text: " sweat glands", correct: false },
      { text: " hair", correct: false },
      { text: " nails", correct: false },
      { text: " palms and soles", correct: false },
    ],
  },
  {
    question: " Specify the morphological feature of seborrhoeic eczema",
    answers: [
      { text: " erythematous stains with fatty scales            ", correct: true },
      { text: " papulovesicles with sulfur-purulent crusts", correct: false },
      { text: " Papulovesicles with serous contents", correct: false },
      { text: " erosion with serous crusts", correct: false },
      { text: " Ulcers", correct: false },
    ],
  },
  {
    question: "Specify the typical localisation of seborrhoea:",
    answers: [
      { text: " face, scalp, back, chest    ", correct: true },
      { text: " palms and soles", correct: false },
      { text: " upper and lower extremities", correct: false },
      { text: " external genitalia", correct: false },
      { text: " inguinal area, buttocks", correct: false },
    ],
  },
  {
    question: " Specify the primary morphological element of herpes simplex virus:",
    answers: [
      { text: " vesicle", correct: true },
      { text: " pustule", correct: false },
      { text: " papule", correct: false },
      { text: " nodule", correct: false },
      { text: " spot", correct: false },
    ],
  },
  {
    question: " Specify the clinical signs in herpes simplex:",
    answers: [
      { text: " a burning sensation       ", correct: true },
      { text: " a feeling of numbness", correct: false },
      { text: " an increase in blood pressure", correct: false },
      { text: " dysuria", correct: false },
      { text: " diarrhoea", correct: false },
    ],
  },
  {
    question: "Specify the characteristics of the herpes zoster rash:",
    answers: [
      { text: " located along nerve endings ", correct: true },
      { text: " vesicles are not tense", correct: false },
      { text: " blisters are flaccid", correct: false },
      { text: " rashes are covered with scales", correct: false },
      { text: " no rash", correct: false },
    ],
  },
  {
    question: "Name the group of diseases to which herpes zoster belongs:",
    answers: [
      { text: " viral        ", correct: true },
      { text: " bacterial", correct: false },
      { text: " fungal ", correct: false },
      { text: " autoimmune", correct: false },
      { text: " genetic", correct: false },
    ],
  },
  {
    question: "Name the clinical form of herpes zoster:",
    answers: [
      { text: " haemorrhagic        ", correct: true },
      { text: " hypertrophic", correct: false },
      { text: " ring-shaped", correct: false },
      { text: " Nummular", correct: false },
      { text: " lenticular", correct: false },
    ],
  },
  {
    question: " Specify the clinical form of herpes zoster:",
    answers: [
      { text: " necrotic       ", correct: true },
      { text: " papular", correct: false },
      { text: " lichenoid", correct: false },
      { text: " erythrodermic", correct: false },
      { text: " scaly", correct: false },
    ],
  },
  {
    question: " Specify the differential diagnosis of herpes simplex with which disease:",
    answers: [
      { text: " pemphigus vulgaris", correct: true },
      { text: " urticaria", correct: false },
      { text: " Duhring's dermatitis", correct: false },
      { text: " flat warts", correct: false },
      { text: " molluscum contagiosum", correct: false },
    ],
  },
  {
    question: "At  a  dermatologist's  appointment,  a  30-year-old  man  complained  of  recurring  painful rashes on the red border of the lips, accompanied by burning. From the anamnesis: exacerbations of the  disease  occur  more  than  6  times  a  year.  Locally:  on  the  red  border  of  the  lips  against  the background of erythema and edema, there are grouped vesicular elements with serous contents, individual elements form surface erosions covered with crusts. Which of the following diagnoses is the most likely? ",
    answers: [
      { text: "  Labial herpes   ", correct: true },
      { text: "  Viral warts ", correct: false },
      { text: "  Streptococcal impetigo ", correct: false },
      { text: "  Allergic dermatitis ", correct: false },
      { text: "  Candidal stomatitis ", correct: false },
    ],
  },
  {
    question: "A man, 30 years old, consulted a doctor with complaints of frequent urination. From the anamnesis:  a  week  ago  there  was  an  unprotected  intercourse  with  an  unfamiliar  woman. Objectively: hyperemia, edema of the mucous membrane of the external  opening of the urethra, infiltration  of  the  urethral  sponges,  mucous  discharge.  M.  Genitalium  was  detected  by  PCR diagnostics. Which of the following diagnoses is the most likely? ",
    answers: [
      { text: "  Mycoplasma infection   ", correct: true },
      { text: "  Chlamydial infection ", correct: false },
      { text: "  Trichomonas infection ", correct: false },
      { text: "  Gonorrheal infection ", correct: false },
      { text: "  Genitourinary candidiasis ", correct: false },
    ],
  },
  {
    question: "An 18-year-old girl came to the doctor's office with complaints of rashes in the genital area, accompanied by soreness, burning, itching. From the anamnesis: she had ARVI a week ago, she did not  use  any  medications.  Locally:  against  the  background  of  erythema  and  edema,  there  are grouped vesicular elements with serous and serous-purulent contents, crusts and ulceration. Which of the following is the most likely diagnosis? ",
    answers: [
      { text: "  Genital herpes   ", correct: true },
      { text: "  herpes zoster", correct: false },
      { text: "  Viral warts ", correct: false },
      { text: "  Molluscum contagiosum ", correct: false },
      { text: "  Ecthyma ordinary ", correct: false },
    ],
  },
  {
    question: " A mother with a 13-year-old child turned to a dermatologist with complaints of rashes on her arms. From the anamnesis: noticed a rash a week ago. Objectively: on the dorsum of the hands, hemispherical, dense nodules, rising above the skin, 3 to 5 mm in diameter, with a rough granular surface, having irregular outlines. Which of the preliminary diagnoses is the most likely? ",
    answers: [
      { text: "  Youthful warts   ", correct: true },
      { text: "  Molluscum contagiosum ", correct: false },
      { text: "  Contact dermatitis ", correct: false },
      { text: "  Staphylococcal impetigo ", correct: false },
      { text: "  Pigmented nevus ", correct: false },
    ],
  },
  {
    question: " A 45-year-old woman consulted a doctor with complaints of severe dull pains and rashes in the  back,  general  malaise.  Anamnesis:  a  week  before  the  rash,  she  had  a  sore  throat,  low-grade fever,  pain  and  burning  along  the  intercostal  nerves.  Objectively:  unilateral  lesion  along  the intercostal nerves on the right - grouped vesicles are linearly located, with serous-purulent contents on an erythematous, slightly edematous base. Which of the following diagnoses is the most likely? ",
    answers: [
      { text: "  Herpes zoster ", correct: true },
      { text: "  Herpes simplex ", correct: false },
      { text: "  Pemphigus vulgaris ", correct: false },
      { text: "  Molluscum contagiosum ", correct: false },
      { text: "  Allergic dermatitis ", correct: false },
    ],
  },
  {
    question: " Specify the causative agent of syphilis?       ",
    answers: [
      { text: "  Treponema pallidum", correct: true },
      { text: "  Neisseria gonorrhoeae", correct: false },
      { text: "  Chlamydia trachomatis", correct: false },
      { text: "  Helicobacter pylori", correct: false },
      { text: "  Candida albicans", correct: false },
    ],
  },
  {
    question: " Specify the primary route of transmission of the causative agent of syphilis?     ",
    answers: [
      { text: "  sexual ", correct: true },
      { text: "  household contact", correct: false },
      { text: "  transmissive", correct: false },
      { text: "  transfusion", correct: false },
      { text: "  transplacental", correct: false },
    ],
  },
  {
    question: "A 24-year-old patient came to the FMC for an appointment with a doctor complaining of the appearance of a sore on the glans penis, which has already lasted for 10 days. From the anamnesis, it was possible to find out that he had sexual intercourse with an unfamiliar woman. Objectively: in the area of ​​the coronal groove there is a round ulcer, the edges are even, the bottom is smooth, the size is 1.5x2.0 cm. Pale treponema was found in the material taken from the ulcer. DAC is negative. What is the most likely diagnosis?",
    answers: [
      { text: "   Syphilis primary seronegative", correct: true },
      { text: "   Syphilis primary seropositive ", correct: false },
      { text: "    Syphilis secondary fresh", correct: false },
      { text: "   Syphilis secondary recurrent", correct: false },
      { text: "    Syphilis tertiary active", correct: false },
    ],
  },
  {
    question: " A 24-year-old patient turned to a dermatovenerologist in a private clinic with complaints of ulcers on the glans penis, as well as swelling in the right iliac region. Anamnesis revealed that he had sexual contact with one woman for 2 months. Objectively: there is a sore on the head of the penis, measuring 1x1 cm, the edges are even, the bottom is varnished. The right lymph node in the iliac region is enlarged to a walnut, painless and dense in consistency. DAC (++++) is sharply positive. What is the most likely diagnosis?",
    answers: [
      { text: "   Syphilis primary seropositive ", correct: true },
      { text: "   Syphilis secondary recurrent", correct: false },
      { text: "    Syphilis primary seronegative ", correct: false },
      { text: "   Syphilis secondary fresh", correct: false },
      { text: "    Syphilis tertiary active", correct: false },
    ],
  },
  {
    question: "A 26-year-old patient consulted a dermatovenerologist with complaints of hair loss and the appearance of white spots on the back of the neck. Before that, I noted rashes on the skin of the trunk, which, as suddenly appeared, just as suddenly disappeared. Not married, promiscuous in sexual contacts. DAC (++++) is sharply positive. Objectively: there is a small focal hair loss, depigmented spots on the back of the neck, similar to a specific leukoderma. What diagnosis can be suspected in the patient?",
    answers: [
      { text: "   Syphilis secondary recurrent", correct: true },
      { text: "   Syphilis primary seronegative ", correct: false },
      { text: "    Syphilis secondary fresh", correct: false },
      { text: "   Syphilis tertiary active", correct: false },
      { text: "    Syphilis late latent", correct: false },
    ],
  },
  {
    question: " During a preventive examination in a antenatal clinic, in a pregnant woman at a period of 3 months, the DAC is sharply positive (++++). On examination: the skin is clean. An ulcer was found on the cervix, measuring 1.5x1.5 cm. Inguinal lymph nodes are enlarged on both sides. The husband was diagnosed with secondary recurrent syphilis. What is the most likely diagnosis?",
    answers: [
      { text: "    Syphilis primary seropositive ", correct: true },
      { text: "   Syphilis primary seronegative", correct: false },
      { text: "    Secondary early syphilis", correct: false },
      { text: "   Syphilis secondary late", correct: false },
      { text: "    Syphilis late latent ", correct: false },
    ],
  },
  {
    question: " During a preventive examination in a antenatal clinic, in a pregnant woman at a period of 3 months, the DAC is sharply positive (++++). On examination: the skin is clean. An ulcer was found on the cervix, measuring 1.5x1.5 cm. Inguinal lymph nodes are enlarged on both sides. The husband was diagnosed with secondary recurrent syphilis. What is the most likely diagnosis?",
    answers: [
      { text: " Syphilis primary seropositive ", correct: true },
      { text: " Syphilis primary seronegative", correct: false },
      { text: " Secondary early syphilis", correct: false },
      { text: " Syphilis secondary late", correct: false },
      { text: " Syphilis late latent", correct: false },
    ],
  },
  {
    question: "A 26-year-old patient consulted a doctor at the FMC for a rash in the anus. He thought hemorrhoids, treated himself with various ointments, applied ichthyol suppositories. Minor improvements. Before that, he noticed the appearance of reddish spots on the skin of the trunk. Objectively: there are single, numbered papules on the skin of the abdomen and back. De-pigmentation with a marble tint is noticeable on the skin of the neck. In the area of ​​the anus, extensive wide condylomas. Not married, not sexually choosy. DAC is sharply positive. Which of the following diagnoses is the most likely?",
    answers: [
      { text: " Syphilis secondary late", correct: true },
      { text: " Syphilis latent ", correct: false },
      { text: " Syphilis primary seronegative", correct: false },
      { text: " Syphilis tertiary active", correct: false },
      { text: " Syphilis secondary early syphilis", correct: false },
    ],
  },
  {
    question: " Specify the method of diagnosis of primary syphilis?               ",
    answers: [
      { text: "  Dark-field microscopy", correct: true },
      { text: "  General blood test", correct: false },
      { text: "  Ultrasound examination of lymph nodes", correct: false },
      { text: " Lymph node biopsy", correct: false },
      { text: "  Histological examination of the biomaterial", correct: false },
    ],
  },
  {
    question: "A 22-year-old patient turned to a dermatovenerologist with complaints of rashes in the area of ​​the skin of the palms and soles. Not socially adapted, not picky about sexual relations. Objectively: on the skin of the palms and soles there are papules of rounded outlines measuring 1.5x1.5 cm, depigmented spots in the back of the neck. What laboratory tests need to be performed to establish a diagnosis?",
    answers: [
      { text: "   Serological", correct: true },
      { text: "   Histological", correct: false },
      { text: "    Biochemical", correct: false },
      { text: "    Cytological", correct: false },
      { text: "    Bacterioscopic", correct: false },
    ],
  },
  {
    question: "A 23-year-old female patient consulted a doctor with complaints of discomfort when swallowing and enlarged tonsils. From the anamnesis it was found out that he leads a promiscuous sex life. Objectively: the tonsil is larger on the right, copper-red, swollen. The submandibular lymph node on the right is enlarged to the size of a bean. What laboratory tests are required to clarify the diagnosis?",
    answers: [
      { text: "   Serological", correct: true },
      { text: "    Bacteriological", correct: false },
      { text: "    Histological", correct: false },
      { text: "   Cytological", correct: false },
      { text: "    Biochemical", correct: false },
    ],
  },
  {
    question: "A 25-year-old patient came to the doctor's office with complaints of swelling and pain in the glans penis, which appeared two days ago. He is married and has a child. Often on a business trip for work. Objectively: the skin of the glans penis is hyperemic, edematous, the ulcer is in the epithelial stage. Inguinal lymph nodes are enlarged on both sides. DAC is negative. Pale treponema was found in the material from the ulcer. Diagnosed with primary seronegative syphilis. What antibiotic is recommended in the treatment of this patient?",
    answers: [
      { text: "   Doxycycline", correct: true },
      { text: "    Spectinomycin", correct: false },
      { text: "    Levomycentin", correct: false },
      { text: "   Tsiprobay", correct: false },
      { text: "    Gentamicin", correct: false },
    ],
  },
  {
    question: " In the FMC, a 25-year-old woman turned to a dermatovenerologist who had repeated sexual contact with a man she knew who was diagnosed with syphilis. The last contact was 2 months ago. Objectively: the skin and visible mucous membranes are free of rashes. The inguinal lymph nodes are not enlarged. Serological tests are negative. Preventive treatment was prescribed. What antibiotic is most indicated in this case?",
    answers: [
      { text: " Extensillin", correct: true },
      { text: " Spectinomycin", correct: false },
      { text: " Levomycentin", correct: false },
      { text: " Gentamicin", correct: false },
      { text: " Ciprofloxacin", correct: false },
    ],
  },
  {
    question: "A 22-year-old patient turned to a dermatovenerologist with complaints of rashes in the area of ​​the skin of the palms and soles. Not socially adapted, not picky about sexual relations. Objectively: on the skin of the palms and soles there are papules of rounded outlines measuring 1.5x1.5 cm, depigmented spots in the back of the neck. What laboratory tests need to be performed to establish a diagnosis?",
    answers: [
      { text: " Serological", correct: true },
      { text: " Histological", correct: false },
      { text: " Biochemical", correct: false },
      { text: " Cytological", correct: false },
      { text: " Bacterioscopic", correct: false },
    ],
  },
  {
    question: " A 23-year-old female patient consulted a doctor with complaints of discomfort when swallowing and enlarged tonsils. From the anamnesis it was found out that he leads a promiscuous sex life. Objectively: the tonsil is larger on the right, copper-red, swollen. The submandibular lymph node on the right is enlarged to the size of a bean. What laboratory tests are required to clarify the diagnosis?",
    answers: [
      { text: " Serological", correct: true },
      { text: " Bacteriological", correct: false },
      { text: " Histological", correct: false },
      { text: " Cytological", correct: false },
      { text: " Biochemical", correct: false },
    ],
  },
  {
    question: "Patient A., 49 years old, came to the FMC to a dermatovenerologist with complaints of an unhealed ulcer of the right leg, which appeared about two months ago. Earlier, before the appearance of the ulcer, he noticed rashes on the trunk, which periodically appeared and disappeared. Objectively: an ulcer is visible 2 - 3 cm in size, the discharge is insignificant, sticky, viscous in nature, similar to gum arabic (juice of an African tree). DAC is weakly positive (++). What diagnosis can you think of? ",
    answers: [
      { text: "   Syphilis tertiary", correct: true },
      { text: "   Syphilis secondary", correct: false },
      { text: "    Syphilis primary ", correct: false },
      { text: "   Syphilis unspecified", correct: false },
      { text: "    Syphilis early", correct: false },
    ],
  },
  {
    question: " Indicate at what age tertiary syphilis is diagnosed",
    answers: [
      { text: " 4-5 years", correct: true },
      { text: " 1-2 months", correct: false },
      { text: " 1-2 years", correct: false },
      { text: " 1-3 days", correct: false },
      { text: " 15-20 years", correct: false },
    ],
  },
  {
    question: " Specify the primary morphological element in tertiary syphilis:",
    answers: [
      { text: " tuberclum", correct: true },
      { text: " spot", correct: false },
      { text: " papulae", correct: false },
      { text: " roseola", correct: false },
      { text: " pustulae", correct: false },
    ],
  },
  {
    question: " A child at the age of 4 months was admitted to the children's department with rashes on the skin of the trunk and limbs. The mother was diagnosed with secondary fresh syphilis. Objectively: on the skin of the limbs and buttocks there is a maculopapular rash, weeping papules around the mouth and anus. DAC is sharply positive. What is the most appropriate preliminary diagnosis?",
    answers: [
      { text: "   Syphilis congenital early", correct: true },
      { text: "    Syphilis congenital late ", correct: false },
      { text: "    Syphilis secondary recurrent", correct: false },
      { text: "   Syphilis secondary fresh", correct: false },
      { text: "    Syphilis primary seropositive", correct: false },
    ],
  },
  {
    question: "Specify the period of time from the time of infection after which early latent syphilis can be diagnosed :",
    answers: [
      { text: " less than one year     ", correct: true },
      { text: " four weeks", correct: false },
      { text: " more than two years", correct: false },
      { text: " more than three years", correct: false },
      { text: " more than 4 years", correct: false },
    ],
  },
  {
    question: "Specify the clinical symptom of early congenital syphilis in children aged 1 to 2 years:",
    answers: [
      { text: " broad condylomas  ", correct: true },
      { text: " diffuse papular infiltration of Gohsinger's papules", correct: false },
      { text: " syphilitic vesicles", correct: false },
      { text: " syphilitic rhinitis", correct: false },
      { text: " parenchymatous keratitis", correct: false },
    ],
  },
  {
    question: "Determine the sign of bone involvement in early congenital syphilis:",
    answers: [
      { text: " Osteochondritis   ", correct: true },
      { text: " osteomyelitis", correct: false },
      { text: " periostitis", correct: false },
      { text: " monoarthritis", correct: false },
      { text: " Polyarthritis", correct: false },
    ],
  },
  {
    question: " Specify the infectious biomaterial from a pregnant woman with syphilis:",
    answers: [
      { text: " breast milk  ", correct: true },
      { text: " urine", correct: false },
      { text: " sweat", correct: false },
      { text: " faeces", correct: false },
      { text: " Tears", correct: false },
    ],
  },
  {
    question: " Identify the symptom of early congenital syphilis:",
    answers: [
      { text: " syphilitic rhinitis   ", correct: true },
      { text: " a patchy rash of the skin of the torso", correct: false },
      { text: " papular rash of the skin of the trunk", correct: false },
      { text: " syphilitic alopecia", correct: false },
      { text: " syphilitic vesicles", correct: false },
    ],
  },
  {
    question: " Specify a reliable sign of fetal syphilis:",
    answers: [
      { text: " osteoperiostitis", correct: true },
      { text: " myocarditis", correct: false },
      { text: " hepatitis", correct: false },
      { text: " pneumonia", correct: false },
      { text: " meningitis", correct: false },
    ],
  },
  {
    question: "Specify the diagnostic examination in the recognition of aortic aneurysm of syphilitic genesis:",
    answers: [
      { text: " Radiological   ", correct: true },
      { text: " auscultatory", correct: false },
      { text: " percussion", correct: false },
      { text: " serological", correct: false },
      { text: " clinical", correct: false },
    ],
  },
  {
    question: " Provide a definition of non-sterile infectious immunity in syphilis:",
    answers: [
      { text: " resistance to new infection as long as the pathogen remains in the patient's organism  ", correct: true },
      { text: " the inability of a person who has been cured of syphilis to become infected with it again", correct: false },
      { text: " the possibility of a syphilis patient to be re-infected by additional exposure to the causative organism", correct: false },
      { text: " more severe course in case of repeated infection", correct: false },
      { text: " persistent immunity", correct: false },
    ],
  },
  {
    question: "Specify which mucous membrane lesions are most characteristic of congenital syphilis of infancy:",
    answers: [
      { text: " nose  ", correct: true },
      { text: " mouth", correct: false },
      { text: " pharynx", correct: false },
      { text: " genitalia", correct: false },
      { text: " Conjunctiva", correct: false },
    ],
  },
  {
    question: "Specify the favourite localisation of rashes in syphilitic vesicular vesicles",
    answers: [
      { text: " palms and soles  ", correct: true },
      { text: " seborrhoeic area", correct: false },
      { text: " trunk", correct: false },
      { text: " genitalia", correct: false },
      { text: " everywhere on the skin cover", correct: false },
    ],
  },
  {
    question: " Specify the infectious form of syphilis:",
    answers: [
      { text: " early latent  ", correct: true },
      { text: " late latent", correct: false },
      { text: " tertiary active", correct: false },
      { text: " tertiary latent", correct: false },
      { text: " Neurosyphilis", correct: false },
    ],
  },
  {
    question: "Specify in which period of pregnancy changes in the internal organs of the foetus caused by syphilitic infection are observed:",
    answers: [
      { text: " 5th month ", correct: true },
      { text: " 2-3 months ", correct: false },
      { text: " 7th month ", correct: false },
      { text: " 6th month", correct: false },
      { text: " Month 8", correct: false },
    ],
  },
  {
    question: "Patient G., aged 52 years, came to the polyclinic to see a dermatologist about rashes in the left hip joint, which appeared 3-4 weeks ago. Subjectively: she was bothered by pains in her legs. Previously she had noticed rashes on the skin of the trunk, palms and soles. According to the patient, they spontaneously appeared and disappeared. Objective: on the inner surface of the left thigh there are grouped bumps dense to the touch, the size of a pea. Presumptive diagnosis: tubercle syphilis. What investigation should be performed to clarify the diagnosis?",
    answers: [
      { text: "Serological", correct: true },
      { text: "Histological ", correct: false },
      { text: "Bacteriological ", correct: false },
      { text: "Biochemical", correct: false },
      { text: "Bacterioscopic", correct: false },
    ],
  },
  {
    question: " Specify the causative agent of gonorrhea",
    answers: [
      { text: " gonococcus", correct: true },
      { text: " Trichomonas vaginalis", correct: false },
      { text: " staphylococcus", correct: false },
      { text: " streptococcus", correct: false },
      { text: " Gardnerella vaginalis", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman turned to a venereologist with complaints of profuse leucorrhoea with an unpleasant odor that arose after an acute respiratory infection. Previously, such pathological vaginal discharge did not bother the patient. The result of microscopy of a vaginal smear stained according to Gram: leukocytes - 8-10, moderate microflora, single lactobacilli, “key cells” were found. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "   Bacterial vaginosis", correct: true },
      { text: "   Trichomonas vaginitis", correct: false },
      { text: "    Candidal vaginitis", correct: false },
      { text: "    Gonorrheal endocervicitis", correct: false },
      { text: "    Chlamydial cervicitis", correct: false },
    ],
  },
  {
    question: " A woman of 27 years old, suffering from secondary infertility, complains of profuse leucorrhoea, periodically frequent urination. When viewed in the mirrors, the cervix is ​​eroded, hyperemic, mucopurulent discharge from the cervical canal. The body of the uterus and appendages are not enlarged, painless on palpation. The vaults are free. In a smear up to 40-50 leukocytes, abundant coccal flora, key cells, gardnerella were found, Trichomonas and diplococci were not found. Which of the following preliminary diagnoses is the most likely?",
    answers: [
      { text: "   Bacterial vaginosis", correct: true },
      { text: "   Candidal vaginitis", correct: false },
      { text: "    Gonorrheal endocervicitis", correct: false },
      { text: "   Trichomonas vaginitis", correct: false },
      { text: "    Chlamydial cervicitis", correct: false },
    ],
  },
  {
    question: "Name the complication of male gonorrhoea characterised by dense swollen masses on the urethral surface of the penis:",
    answers: [
      { text: " lymphangitis", correct: true },
      { text: " cavernitis", correct: false },
      { text: " colliculitis", correct: false },
      { text: " stricture", correct: false },
      { text: " Epididymitis", correct: false },
    ],
  },
  {
    question: "Specify the incorrect symptom of trichomoniasis in women:",
    answers: [
      { text: " acute condylomas on the large and small labia and around the anus.", correct: true },
      { text: " hyperaemia and swelling of the vulvar and vaginal mucosa;", correct: false },
      { text: " yellow-green liquid frothy discharge from the vagina with an unpleasant odour;", correct: false },
      { text: " erosive and ulcerative lesions of the mucous membrane of the external genitalia and/or skin of the inner surface of the thighs;", correct: false },
      { text: " petechial haemorrhages on the mucous membrane of the vaginal part of the cervix (\"strawberry\" cervix);", correct: false },
    ],
  },
  {
    question: "Specify the incorrect complication of trichomoniasis in women:",
    answers: [
      { text: " cervical cancer.", correct: true },
      { text: " salpingoophoritis.", correct: false },
      { text: " endometritis", correct: false },
      { text: " pelvio-peritonitis.", correct: false },
      { text: " cystitis", correct: false },
    ],
  },
  {
    question: "Specify which group of microorganisms vaginal gardnerella belongs to:",
    answers: [
      { text: " gram-variable coccobacillus forms of microorganisms", correct: true },
      { text: " gram-negative coccobacilli", correct: false },
      { text: " gram-variable coccobacilli", correct: false },
      { text: " gram-positive coccobacterial forms of microorganisms", correct: false },
      { text: " gram-positive bacillary forms of microorganisms", correct: false },
    ],
  },
  {
    question: "Specify the localisation of urogenital trichomonads in women:",
    answers: [
      { text: " in all genitourinary organs and the ampulla of the rectum", correct: true },
      { text: " urethra, vagina, vagina, cervix", correct: false },
      { text: "nan", correct: false },
      { text: " vagina, cervix, uterus.", correct: false },
      { text: " urethra, vagina, ampulla of rectum.", correct: false },
    ],
  },
  {
    question: " Specify the main clinical sign of eye damage in gonorrhea:",
    answers: [
      { text: " conjunctivitis", correct: true },
      { text: " blepharitis", correct: false },
      { text: " cataract", correct: false },
      { text: "4 glaucoma", correct: false },
      { text: " retinal detachment", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman turned to a venereologist for a preventive examination. Anamnesis: casual sexual intercourse six days ago. Complaints about minor discharge. During a gynecological examination: the external genital organs and vaginal mucosa without signs of inflammation, the internal genital organs without pathology. What research should be assigned to make a diagnosis?",
    answers: [
      { text: "   PCR", correct: true },
      { text: "   CSR", correct: false },
      { text: "    IEA", correct: false },
      { text: "   SIF", correct: false },
      { text: "    RIF", correct: false },
    ],
  },
  {
    question: " A 30-year-old woman turned to the polyclinic of the dermatovenerologic dispensary with complaints of moderate, homogeneous, sticky, grayish-whitish vaginal discharge, with an unpleasant smell of “rotten fish”. On examination: the walls of the vagina are moderately hyperemic, covered with grayish-whitish discharge. “Key” cells were found in smears. Diagnosis: Bacterial vaginosis. Which test confirms the diagnosis?",
    answers: [
      { text: "   Amine", correct: true },
      { text: "    Urease", correct: false },
      { text: "    Salbutomach", correct: false },
      { text: "   Glycemic", correct: false },
      { text: "    Lepromine", correct: false },
    ],
  },
  {
    question: " A 36-year-old woman turned to a venereologist for a preventive examination. Complaints about discharge, burning. When viewed in mirrors: the cervix is ​​cylindrical, mucous discharge, foamy, gray with an unpleasant odor. When conducting a bimanual study, pathology from the internal genital organs was not detected. According to microscopic examination, “key cells” were found in vaginal smears. Preliminary diagnosis: Bacterial vaginosis. What drug should be prescribed?",
    answers: [
      { text: "    Clindamycin", correct: true },
      { text: "   Acyclovir", correct: false },
      { text: "    Valacyclovir", correct: false },
      { text: "   Diazolin", correct: false },
      { text: "    Diclofenac", correct: false },
    ],
  },
  {
    question: "Specify an ineffective treatment regimen for uncomplicated gonorrhoea:",
    answers: [
      { text: " kanamycin 2 g orally once a month", correct: true },
      { text: " ceftriaxone 250 mg intravenously once a day", correct: false },
      { text: " spectinomycin 2 g once a day/m", correct: false },
      { text: " cefixime 400 mg once orally", correct: false },
      { text: " doxycycline 100 mg 2 times a day for 7 days", correct: false },
    ],
  },
  {
    question: "Specify an ineffective treatment regimen for trichomoniasis:",
    answers: [
      { text: " metronidazole 250 mg orally 2 times a day for 14 days ", correct: true },
      { text: " metronidazole 500 mg orally 2 times a day for 7 days", correct: false },
      { text: " metronidazole 2 g orally once a day", correct: false },
      { text: " tinidazole 2 g orally once a day", correct: false },
      { text: " metronidazole 250 mg 4 times a day for 7 days", correct: false },
    ],
  },
  {
    question: "Specify an ineffective localisation for gonorrhoea testing:",
    answers: [
      { text: " from the posterior vaginal vault", correct: true },
      { text: " urethral secretion", correct: false },
      { text: " from the cervical canal", correct: false },
      { text: " from the back of the pharynx", correct: false },
      { text: " ocular secretions", correct: false },
    ],
  },
  {
    question: "Specify the drug of choice in the treatment of gonorrhoea:",
    answers: [
      { text: " ceftriaxone", correct: true },
      { text: " penicillin", correct: false },
      { text: " tetracycline", correct: false },
      { text: " metronidazole", correct: false },
      { text: " Erythromycin", correct: false },
    ],
  },
  {
    question: " Specify the causative agent of urogenital chlamydia",
    answers: [
      { text: " Chlamydia trachomatis", correct: true },
      { text: " Trichomonas vaginalis", correct: false },
      { text: " Gardnerella vaginalis", correct: false },
      { text: " gonococcus", correct: false },
      { text: " Helicobacter pylori", correct: false },
    ],
  },
  {
    question: " Choose the group of the causative agent chlamydia trachomatis",
    answers: [
      { text: " bacteria", correct: true },
      { text: " viruses", correct: false },
      { text: " helminths", correct: false },
      { text: " protozoa", correct: false },
      { text: " fungi", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman turned to a dermatovenerologist with complaints of soreness during intercourse, pulling pains in the lower abdomen, frequent painful urination. From the anamnesis: the sexual partner had discharge of a mucopurulent character. Barrier contraception is not used. Objectively: swelling and hyperemia of the mucous membrane of the cervix, mucopurulent discharge from the cervical canal. C. trachomatis was found by PCR diagnostics. Which of the following infections is most commonly associated with this pathogen?",
    answers: [
      { text: "   Gonorrheal", correct: true },
      { text: "   Trichomonas", correct: false },
      { text: "    Gardnerella", correct: false },
      { text: "   Staphylococcal", correct: false },
      { text: "    Streptococcal", correct: false },
    ],
  },
  {
    question: "A man, 34 years old, turned to a dermatovenerologist with complaints of scanty mucous discharge from the urethra, pain and burning sensation when urinating. From the anamnesis: has been ill for a week. Objectively: the sponges of the urethra are hyperemic and edematous, mucopurulent discharge. Which of the verified diagnostic methods will make the diagnosis possible?",
    answers: [
      { text: "   Polymerase chain reaction", correct: true },
      { text: "   Complete blood count", correct: false },
      { text: "    General urine analysis", correct: false },
      { text: "   Bacteriological inoculation method", correct: false },
      { text: "    A complex of serological reactions", correct: false },
    ],
  },
  {
    question: "Specify the most detectable localization of the chlamydia pathogen in a newborn baby:",
    answers: [
      { text: " mucous membrane of the posterior pharyngeal wall", correct: true },
      { text: " nasal mucosa", correct: false },
      { text: " external auditory canal", correct: false },
      { text: " inguinal fold", correct: false },
      { text: " umbilical cord", correct: false },
    ],
  },
  {
    question: "Identify which disease is characterized by \"contact\" bleeding during the intermenstrual period in women:",
    answers: [
      { text: " urogenital chlamydia", correct: true },
      { text: " urogenital trichomoniasis", correct: false },
      { text: " gonorrhea", correct: false },
      { text: " urogenital candidiasis", correct: false },
      { text: " bacterial vaginosis", correct: false },
    ],
  },
  {
    question: " Use the main group of drugs in the treatment of urogenital chlamydia for children under 12 years of age and pregnant women",
    answers: [
      { text: " macrolides", correct: true },
      { text: " tetracyclines", correct: false },
      { text: " cephalosporins", correct: false },
      { text: " penicillins", correct: false },
      { text: " antimalarial", correct: false },
    ],
  },
  {
    question: " Choose the symptom of Reiter's disease:",
    answers: [
      { text: " arthritis", correct: true },
      { text: " gastritis", correct: false },
      { text: " myocarditis", correct: false },
      { text: " pyelonephritis", correct: false },
      { text: " colitis", correct: false },
    ],
  },
  {
    question: " Choose the symptom of Reiter's disease:",
    answers: [
      { text: " urethritis", correct: true },
      { text: " gastritis", correct: false },
      { text: " myocarditis", correct: false },
      { text: " pyelonephritis", correct: false },
      { text: " colitis", correct: false },
    ],
  },
  {
    question: "Specify the group of drugs that is not used in the treatment of Reiter's disease:",
    answers: [
      { text: " sulphonamide drugs", correct: true },
      { text: " detoxification therapy", correct: false },
      { text: " hyposensitising therapy", correct: false },
      { text: " antirheumatic drugs", correct: false },
      { text: " antibacterial drugs", correct: false },
    ],
  },
  {
    question: "Name which of the following microorganisms that cause sexually transmitted diseases cannot be detected by microscopic examination:",
    answers: [
      { text: " mycoplasma genitalis", correct: true },
      { text: " pale treponema", correct: false },
      { text: " gardnerella", correct: false },
      { text: " gonococcus Neisser.", correct: false },
      { text: " trichomonas vaginalis", correct: false },
    ],
  },
  {
    question: " Name the most common reason for men with urogenital chlamydia to come to the clinic:",
    answers: [
      { text: " chronic urethroprostatitis", correct: true },
      { text: " acute urethritis", correct: false },
      { text: " acute prostatitis", correct: false },
      { text: " acute orchoepididymitis", correct: false },
      { text: " acute cystitis", correct: false },
    ],
  },
  {
    question: "Specify the time period for taking urethral material to detect chlamydia:",
    answers: [
      { text: " after delayed urination for 3-4 hours", correct: true },
      { text: " immediately or 10 minutes after urination", correct: false },
      { text: " after preliminary combined provocation", correct: false },
      { text: " against the background of purulent discharge", correct: false },
      { text: " after urethral massage on the bougie", correct: false },
    ],
  },
  {
    question: " Specify the time period for the first PCR control test for chlamydia after treatment:",
    answers: [
      { text: " after 1 month", correct: true },
      { text: " immediately after the end of antibiotic therapy", correct: false },
      { text: " after 10-14 days", correct: false },
      { text: " after 2-3 months", correct: false },
      { text: " after six months", correct: false },
    ],
  },
  {
    question: "specify the incorrect biological material for laboratory diagnosis of mycoplasmosis and ureaplasmosis in women:",
    answers: [
      { text: " conjunctival secretion", correct: true },
      { text: " urethral mucosal scraping", correct: false },
      { text: " cervical mucosal scraping", correct: false },
      { text: " blood serum", correct: false },
      { text: " vaginal discharge", correct: false },
    ],
  },
  {
    question: "Specify the drug for the treatment of chlamydial and ureaplasma urethritis:",
    answers: [
      { text: " sumamed", correct: true },
      { text: " ofloxacin", correct: false },
      { text: " rovamycin", correct: false },
      { text: " claforan", correct: false },
      { text: " amoxicillin", correct: false },
    ],
  },
  {
    question: " Choose the causative agent of urogenital candidiasis:",
    answers: [
      { text: " candida albicans", correct: true },
      { text: " trichophyton rubrum", correct: false },
      { text: " microsporum", correct: false },
      { text: " Malasezia furfur", correct: false },
      { text: " Epidermophyton", correct: false },
    ],
  },
  {
    question: " A 34-year-old man consulted a venereologist at a private medical center with complaints of itching and burning of the foreskin. She has been ill for 1.5 months. From the anamnesis: over the past year he has been treated at a tuberculosis clinic for extrapulmonary tuberculosis and is registered. Objectively: whitish coating on the glans penis and foreskin, curd-like discharge. Which of the following diagnoses is most likely?",
    answers: [
      { text: "   Candida balanoposthitis", correct: true },
      { text: "    Tuberculous balanitis", correct: false },
      { text: "    Bacterial balanitis", correct: false },
      { text: "   Tuberculous balanoposthitis", correct: false },
      { text: "    Gonorrheal balanitis", correct: false },
    ],
  },
  {
    question: "A 47-year-old man consulted a dermatovenerologist with complaints of rashes in the genital area, burning, and soreness. Similar rashes have appeared before. Denies extramarital sex. Objectively: on the mucous membrane of the labia majora, there are grouped vesicles with serous contents and erosions with polycyclic outlines. Regional lymph nodes are not enlarged. No laboratory tests have been carried out. Which of the following diagnoses is most likely?",
    answers: [
      { text: "   Genital herpes", correct: true },
      { text: "    Bullous pemphigoid", correct: false },
      { text: "    Chancroid", correct: false },
      { text: "   True pemphigus", correct: false },
      { text: "    Urogenital candidiasis", correct: false },
    ],
  },
  {
    question: "Specify where the inflammatory process is localised in urogenital candidiasis",
    answers: [
      { text: "1) upper layers of the vaginal epithelium ", correct: true },
      { text: "2) upper layers of the urethral epithelium;", correct: false },
      { text: " 3) deep layers of the vaginal epithelium;", correct: false },
      { text: " 4) deep layers of the urethral epithelium.", correct: false },
      { text: "5) upper and deep layers of the vaginal epithelium", correct: false },
    ],
  },
  {
    question: "Name the diseases caused by urogenital candidiasis in women?",
    answers: [
      { text: "2) vulvovaginitis ", correct: true },
      { text: "1) vaginosis;", correct: false },
      { text: "3) urethritis;", correct: false },
      { text: "4) salpingitis", correct: false },
      { text: "5) endometriosis.", correct: false },
    ],
  },
  {
    question: "Specify which diseases are caused by urogenital candidiasis in men?",
    answers: [
      { text: "4) urethritis ", correct: true },
      { text: "1) orchitis", correct: false },
      { text: "2) epididymitis", correct: false },
      { text: "3) prostatitis;", correct: false },
      { text: "5) cystitis.", correct: false },
    ],
  },
  {
    question: " Specify the group of causative agents of genital herpes",
    answers: [
      { text: " viruses", correct: true },
      { text: " bacteria", correct: false },
      { text: " protozoa", correct: false },
      { text: " helminths", correct: false },
      { text: " fungi", correct: false },
    ],
  },
  {
    question: " Specify the incorrect method for laboratory diagnosis of herpetic infection:",
    answers: [
      { text: "IFA", correct: true },
      { text: "  microscopy", correct: false },
      { text: "  culture method", correct: false },
      { text: "  PIF", correct: false },
      { text: " PCR", correct: false },
    ],
  },
  {
    question: " A 25-year-old man came to see a dermatologist with complaints of painful rashes. During the last 2 years he notes the appearance of manifestations for the eighth time. Objectively: on the head of the penis - grouped vesicles the size of a millet grain with serous content. On the inner sheet of the preputial sac - erosive surface with clear edges, soft on palpation. Which of the listed diseases is characterised by the above picture?",
    answers: [
      { text: " genital herpes", correct: true },
      { text: " primary syphilis", correct: false },
      { text: " herpes zoster", correct: false },
      { text: " chancriform pyoderma", correct: false },
      { text: " Scabies", correct: false },
    ],
  },
  {
    question: "Patient 37 years old, applied to a venereologist complaining of soreness, rashes on the head of the penis. From anamnesis: he has been ill for 10 days. Objectively: on the head of the penis there are vesicles with serous content on a swollen, hyperaemic background, polycyclic erosions. Diagnosis: Genital herpes. Choose a remedy for external therapy:",
    answers: [
      { text: " Poultice", correct: true },
      { text: " Ointment", correct: false },
      { text: " Cream", correct: false },
      { text: " Paste", correct: false },
      { text: " Lacquer", correct: false },
    ],
  },
  {
    question: "A 45-year-old patient visited a venereologist with complaints of rashes, itching of genitals. From the anamnesis: he had been ill for 5 days, earlier he had the same rashes, this was the 6th relapse within a year. He was treated at the place of residence. Objectively: on the skin of the venous furrow of the penis, grouped vesicles on a hyperaemic base, erosions with festooned edges. Diagnosis: Genital herpes. Recurrent form. Which of the following vaccines is used to prevent subsequent recurrences?",
    answers: [
      { text: " Antiviral ", correct: true },
      { text: " Anti-staphylococcal ", correct: false },
      { text: " Anti-Tuberculosis   ", correct: false },
      { text: " Anti-tetanus ", correct: false },
      { text: " Antitrichomonadal", correct: false },
    ],
  },
  {
    question: "Specify the dosage of Fluconazole in the treatment of acute urogenital candidiasis?",
    answers: [
      { text: " 150 mg once", correct: true },
      { text: " 150 mg once for 3 days;", correct: false },
      { text: " 250 mg once;", correct: false },
      { text: " 250 mg once for 3 days", correct: false },
      { text: "  50mg once", correct: false },
    ],
  },
  {
    question: "Name the drugs used in the maintenance therapy of urogenital candidiasis?",
    answers: [
      { text: " Clotrimazole", correct: true },
      { text: " Josamycin;", correct: false },
      { text: " Itraconazole;", correct: false },
      { text: "  Amoxicillin", correct: false },
      { text: " Ofloxacin.", correct: false },
    ],
  },
  {
    question: " Specify the tactics of treatment of urogenital candidiasis in pregnant women in the 1st trimester?",
    answers: [
      { text: "  Natamycin vaginal suppositories 100 mg once a day for 6 days.", correct: true },
      { text: " Clotrimazole vaginal tablet 100 mg once a day before bedtime for 10 days;", correct: false },
      { text: " Clotrimazole vaginal tablet 100 mg once daily before bedtime for 7 days;", correct: false },
      { text: " Natamycin vaginal suppositories 100 mg once daily for 10 days;", correct: false },
      { text: " Nystatin vaginal suppositories 1 time per day for 6 days", correct: false },
    ],
  },
  {
    question: " Specify the tactics of treatment of urogenital candidiasis in pregnant women in the 2nd trimester?",
    answers: [
      { text: " Natamycin vaginal suppositories 100 mg once a day for 6 days.", correct: true },
      { text: " Clotrimazole vaginal tablet 100 mg once a day before bedtime for 10 days;", correct: false },
      { text: " Clotrimazole vaginal tablet 100 mg once daily before bedtime for 7 days;", correct: false },
      { text: " Natamycin vaginal suppositories 100 mg once daily for 10 days;", correct: false },
      { text: " Nystatin vaginal suppositories 1 time per day for 6 days", correct: false },
    ],
  },
  {
    question: "Name the criteria for assessing the quality of medical care for patients with urogenital candidiasis?",
    answers: [
      { text: "  microscopic examination", correct: true },
      { text: "  general blood analysis ", correct: false },
      { text: "  ultrasound examination of pelvic organs", correct: false },
      { text: "  prescription of immunomodulatory therapy;", correct: false },
      { text: "  instrumental examination;", correct: false },
    ],
  },
  {
    question: " Specify a preventive measure aimed at actively identifying hidden sources of infection of sexually transmitted diseases:",
    answers: [
      { text: " medical examinations", correct: true },
      { text: " treatment of patients", correct: false },
      { text: " examination of patients", correct: false },
      { text: " vaccination", correct: false },
      { text: " sanitary educational work", correct: false },
    ],
  },
  {
    question: "Specify the cause of the \"lower abdominal pain\" syndrome:",
    answers: [
      { text: " chlamydia", correct: true },
      { text: " soft chancre", correct: false },
      { text: " syphilis", correct: false },
      { text: " donovanosis", correct: false },
      { text: " leprosy", correct: false },
    ],
  },
  {
    question: "Specify what does not cause scrotal oedema syndrome:",
    answers: [
      { text: " genital herpes", correct: true },
      { text: " gonorrhoea", correct: false },
      { text: " chlamydia", correct: false },
      { text: " trauma", correct: false },
      { text: " mycoplasmosis", correct: false },
    ],
  },
  {
    question: "Specify the causative agent of venereal lymphogranuloma:",
    answers: [
      { text: " Chlamydia trachomatis (serotypes L1, L2, L3)", correct: true },
      { text: " Streptobacillus Ducreyi.", correct: false },
      { text: " Donovan's corpuscles", correct: false },
      { text: " pale treponema", correct: false },
      { text: " candida", correct: false },
    ],
  },
  {
    question: " Specify the social factors that do not influence STD transmission:",
    answers: [
      { text: " gender, age", correct: true },
      { text: "refusal of personal protective equipment (condom, etc.)", correct: false },
      { text: " untimely initiation of STI treatment", correct: false },
      { text: " interruption of treatment", correct: false },
      { text: " sexual partners are not involved in treatment", correct: false },
    ],
  },
  {
    question: "Specify the earliest time for detection of HIV antibodies:",
    answers: [
      { text: " two weeks", correct: true },
      { text: " one month", correct: false },
      { text: " two months", correct: false },
      { text: " three weeks", correct: false },
      { text: " one week", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
