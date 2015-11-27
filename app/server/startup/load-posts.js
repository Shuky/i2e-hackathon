Meteor.startup(function () {
  Posts.remove({}); 
  if (Posts.find().count() === 0) {
    var posts = [
      {
      	'likes': 18,
      	'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG',
        'title' :' Case 36-2015',
        'message': "<iecomment commentid='1'>" + 
"        Case 36-2015: A 27-Year-Old Woman with a Lesion of the Ear Canal" + 
"      </iecomment>          " + 
"      <h6>Konstantina M. Stankovic, M.D., Ph.D., Oon T. Tan, M.D., Ph.D., and Peter M. Sadow, M.D., Ph.D.</h6>" + 
"              <h3 class=\"cpc-section\">Presentation of Case</h3>" + 
"               <p>Dr. Konstantina M. Stankovic: A 27-year-old woman was seen in an outpatient otolaryn-gology clinic of the Massachusetts Eye and Ear Infirmary, which is affiliated with this hospital, because of a pruritic lesion of the left ear canal, with recurrent bleeding." + 
"     </p><p><iecomment commentid='1'>One year before this presentation</iecomment>, a ballooning lesion had developed in the patient’s left ear canal that partially occluded the lumen and was associated with " + 
"pruritus and recurrent bleeding. An unknown medication was administered topically into the ear canal, with improvement in both bleeding and pruritus. Two weeks " + 
"before this presentation, bleeding from the left ear canal recurred, with associated " + 
"pruritus of both ear canals. The patient was seen by a physician at another clinic, " + 
"who prescribed an otic suspension (consisting of neomycin, polymyxin B sulfate, and hydrocortisone) and a 5-day course of oral azithromycin, as well as topical clobetasol propionate ointment (0.05%) for pruritus; the symptoms did not improve, and the bleeding did not resolve. She was referred to the outpatient otolaryngology clinic of the Massachusetts Eye and Ear Infirmary.</p>" + 
"<p>The patient reported brief episodes of sharp, stabbing otalgia on the left side, " + 
"with episodes of disequilibrium that lasted for a few seconds and were not associ-ated with vertigo, tinnitus, or changes in hearing. She had not had recurrent otitis media during childhood, exposure to loud noises, or head trauma with loss of consciousness. She took no other medications and had no known allergies. She worked in a health-related field. She did not smoke or drink alcohol.</p>" + 
"<p>On examination, the patient appeared to be well, with no craniofacial dysmor-phism. A light pink raised lesion (approximately 1.0 cm by 1.0 cm by 0.5 cm), with a cobblestone appearance and several prominent vessels, was present on the pos-terior tragus of the left ear; on examination with an operating microscope, the lesion extended medially along the anterior wall of the external auditory canal. The eardrums, medial left ear canal, and entire right ear canal were normal. There was no tragal tenderness. A 512-Hz tuning fork was used to show that the Rinne test was positive bilaterally (with air conduction greater than bone conduction) and that, on the Weber test, the sound was located along the midline. The remainder of the examination of the nose, nasopharynx, mouth, pharynx, larynx, neck, ears (for hearing acuity for conversational speech), and third through twelfth cranial nerves was normal, and there was no spontaneous nystagmus. A culture of the left external ear canal grew a moderate amount of coagulase-negative staphylococcus species. Top-ical nystatin–triamcinolone ointment was adminis-tered to the left ear twice daily for 2 weeks, with-out improvement.</p><p>One week later, the patient returned to the out-patient clinic. She reported near constant pruritus and bleeding that had increased in amount and frequency. The lesion in the left ear canal appeared to be unchanged from the previous examination. A small crust covered the most medial aspect of the lesion.</p>" + 
"<p>Nine days later, a diagnostic procedure was performed.</p>" + 
"<h3 class=\"cpc-section\">Differential Diagnosis</h3>" + 
" <p>Dr. Stankovic: I cared for this patient and amaware of the diagnosis. The differential diagno-" + 
"sis of her pruritic, bleeding, painful lesion in the left external auditory meatus includes in-fectious, inflammatory, idiopathic, and neo-plastic causes <a ng-hover=\"onHover()\" href=\"assets/posts/table.png\">(Table 1)</a>.</p>" + 
"<h5>Infectious and Inflammatory Processes</h5>" + 
"<p>The most common infectious cause of a lesion " + 
"in the ear canal is otitis externa, which is typically due to Pseudomonas aeruginosa. Features that support this diagnosis are the location of the lesion and focal pain; the condition is not as-sociated with a particular age or sex. However, this diagnosis is unlikely because the lesion did not respond to topical or oral antibiotic agents and a culture of the ear canal did not grow any " + 
"pathogens.</p>" + 
"<p>A common inflammatory cause of a lesion in" + 
"<iecomment commentid='1'>the ear canal is atopic</iecomment> dermatitis (i.e., eczema). This diagnosis is supported by the presence of an intensely pruritic, erythematous lesion with scaly crusting and small, sometimes confluent vesicles. However, atopic dermatitis is typically associated with asthma, allergic rhinitis, or other atopic disorders; this patient did not have any of " + 
"these conditions. In addition, atopic dermatitis of the ear is typically a part of generalized involvement of the face and neck, which was not present in this patient.</p>" + 
"<p>Another relatively common inflammatory process that occurs in the ear canal is an insect bite. " + 
"Insect bites<iecomment commentid='1'> are characterized by discomfort, itching, and focal pain</iecomment>; this patient had these symptoms. However, the chronic nature of the patient’s symptoms and the absence of focal erythema, warmth, and edema make an insect bite unlikely.</p>" + 
"<p>Sarcoidosis, which is a chronic inflammatory disease associated with noncaseating granulomas, is a consideration in this case, because its dermatologic manifestations include maculopapular eruptions, subcutaneous nodules, and lupus pernio, a plaquelike violaceous lesion that occurs in the ear or on the nose, cheek, or skin. However, sarcoidosis is unlikely because it typically is systemic and has respiratory manifestations. In patients with sarcoidosis, skin involvement (seen in 25% of patients) is much less common than involvement of the lungs (seen in 90%) or lymphoid tissues (seen in 75%)<span class=\"q\">1<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span></p>" + 
"<h5>Idiopathic and Reactive Processes</h5>" + 
"<p>Granuloma <iecomment commentid='1'>faciale is an uncommon,</iecomment> benign" + 
"chronic skin condition that is usually considered" + 
"to be idiopathic but is sometimes thought to be" + 
"due to sun exposure. It is characterized by the" + 
"presence of a single cutaneous nodule or multiple" + 
"cutaneous nodules, which are sometimes" + 
"covered with telangiectasias and commonly occur" + 
"on the head and neck. Granuloma faciale is" + 
"much more common in persons of European" + 
"descent (such as this patient) than in those of" + 
"Asian or African descent. However, this diagnosis" + 
"is unlikely in this case because granuloma" + 
"faciale typically occurs on areas that have been" + 
"exposed to the sun (including periauricular and" + 
"helical areas); furthermore, the disease is usually" + 
"asymptomatic, is more common in men than in" + 
"women, and is associated with a median age at" + 
"presentation of 45 years.</p>" + 
"<p>Another entity to consider is cutaneous lymphoid" + 
"hyperplasia, a benign condition that is often" + 
"considered to be idiopathic but is sometimes" + 
"considered to be reactive to jewelry, trauma, arthropod" + 
"bites, folliculitis, or infection. It is not" + 
"associated with a particular race but is twice as" + 
"common in women as in men, and two thirds of" + 
"cases occur before the patient is 40 years of age;" + 
"this patient’s demographic features are consistent" + 
"with the diagnosis. Cutaneous lymphoid" + 
"hyperplasia is further supported by the nodular" + 
"nature, small size, and location of the patient’s" + 
"lesion; a cutaneous lymphoid hyperplasia lesion" + 
"is typically less than 1 cm in diameter, and in" + 
"70% of cases, it occurs on the face or other sites" + 
"on the head and neck, including the external ear." + 
"However, cutaneous lymphoid hyperplasia is typically" + 
"associated with minimal symptoms, and the" + 
"lesion is often red to purple.</p>" + 
"<h5>Neoplasms</h5>" + 
"A neoplastic cause of the lesion is supported by" + 
"the chronic and escalating nature of the patient’s" + 
"symptoms, along with the vascular markings on" + 
"the lesion. Both malignant and benign neoplasms" + 
"should be considered." + 
"<h6><i>Malignant</i></h6>" + 
"<p>Malignant tumors of the external auditory canal" + 
"are rare. The most common primary malignant" + 
"tumor to occur in this location is squamous-cell carcinoma, which is much more common than" + 
"basal-cell or ceruminous-gland carcinoma. However," + 
"squamous-cell carcinomas of the external" + 
"auditory canal typically occur in patients with" + 
"chronic suppurative otitis media, which this" + 
"patient did not have. Furthermore, the patient’s" + 
"young age and the absence of a history of excessive" + 
"sun exposure and of cranial-nerve deficits" + 
"due to an invasive tumor make a malignant tumor" + 
"unlikely." + 
"</p>" + 
"<p>" + 
"Granulocytic sarcoma, also known as myeloid" + 
"sarcoma or chloroma, is a solid extramedullary" + 
"collection of myeloid leukemia cells that can occur" + 
"in the ear canal of an otherwise asymptomatic" + 
"patient.<span class=\"q\">2<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span>" + 
" Although the onset of granulocytic" + 
"sarcoma can precede that of acute myeloid leukemia" + 
"by years,<span class=\"q\">3<md-tooltip md-delay=\"0\" md-direction=\"right\">Effat KG. Angiolymphoid hyperplasia" + 
"with eosinophilia of the auricle: progression" + 
"of histopathological changes. J Laryngol" + 
"Otol 2006;120:411-3.</md-tooltip></span>" + 
" granulocytic sarcoma is unlikely" + 
"in this case because of the absence of a" + 
"myeloproliferative neoplasm, myelodysplastic syndrome," + 
"or acute leukemia." + 
"</p>" + 
"<h6><i>Benign</i></h6>" + 
"<p>" + 
" An indolent CD8+ lymphoid proliferation of the" + 
" ear has been recognized as a distinct primary" + 
" cutaneous T-cell lymphoproliferative disorder.4,5" + 
" The lesion characteristically develops on the external" + 
" ear, grows slowly, and can be erythematous" + 
" and tender or painless. It is typically not intensely" + 
" pruritic or bleeding and commonly occurs" + 
" on the helix of the auricle; these features make" + 
" the diagnosis unlikely in this case." + 
" </p><p>Lobular capillary hemangioma, also known" + 
" as pyogenic granuloma, is a common, benign" + 
" vascular tumor–like lesion involving the external" + 
" ear that may be due to trauma, hormones, or" + 
" viral infection. The small, solitary nodular lesion" + 
" is prone to bleeding and ulceration (as was seen" + 
" in this case). However, lobular capillary hemangioma" + 
" is unlikely because it is typically a glistening" + 
" red papule that evolves rapidly over a few" + 
" weeks, whereas the lesion seen in this case had" + 
" a cobblestone appearance and evolved over many" + 
" months. In addition, the incidence of lobular capillary" + 
" hemangioma peaks in the second decade," + 
" but this patient is in her third decade." + 
"</p>" + 
"<h6><i>Epithelioid Hemangioma</i></h6>" + 
"<p>An important diagnostic consideration in this" + 
"case is epithelioid hemangioma, also known as" + 
"angiolymphoid hyperplasia with eosinophilia. The appearance and location of the lesion, the associated" + 
"symptoms, and the patient’s age and sex" + 
"are all typical of this entity. Epithelioid hemangioma" + 
"is an uncommon, benign neoplasm that" + 
"is characterized by isolated or grouped papules," + 
"plaques, or nodules and occurs in the skin of the" + 
"head and neck, most commonly in the periauricular" + 
"skin, forehead, and scalp.6" + 
" An isolated lesion," + 
"which is typically 0.5 to 2.0 cm in diameter, occurs" + 
"in 80% of cases. The lesion is characteristically" + 
"pruritic, painful, and prone to bleeding. Several" + 
"studies indicate a higher incidence in women than" + 
"in men, and the median age at onset is 30 years" + 
"(range, 20 to 50).</p>" + 
"<p>In the past, epithelioid hemangioma was often" + 
"confused with Kimura’s disease, a chronic" + 
"inflammatory disorder of unknown cause that is" + 
"most common in young men of Asian descent." + 
"Kimura’s disease is clinically manifested by subcutaneous" + 
"masses in the region of the head and" + 
"neck, often with associated lymphadenopathy." + 
"Kimura’s disease is also associated with blood" + 
"eosinophilia, elevated levels of IgE, and in some" + 
"cases, the nephrotic syndrome. The diagnosis of" + 
"Kimura’s disease is unlikely in this case.</p>" + 
"<p>For diagnostic and therapeutic purposes, I" + 
"performed a wide local excision of the lesion and" + 
"split-thickness skin grafting.</p>" + 
"<h3 class=\"cpc-section\">Dr . Konstantina M. Stankovic’s Diagnosis</h3>" + 
"<p>Epithelioid hemangioma.</p>" + 
"<h3 class=\"cpc-section\">Pathological Discussion</h3>" + 
"<p>Dr. Peter M. Sadow: The excision specimen was a" + 
"skin ellipse (1.2 cm by 1.0 cm by 0.3 cm), with" + 
"focal scaled crust that was visible on the skin" + 
"surface and no grossly evident dermal lesion. The" + 
"entire specimen was submitted for histologic examination" + 
"(Fig. 1A and 1B). The dermis contained" + 
"discontinuous foci of tumor, consisting of blood" + 
"vessels with plump, eosinophilic, epithelioid endothelial" + 
"cells and patchy clusters of lymphocytes." + 
"These features are typical of epithelioid hemangioma." + 
"The tumor focally extended to the lateral" + 
"and deep-tissue edges.</p>" + 
"<p>" + 
" Epithelioid hemangiomas are generally located" + 
" in the dermis or subcutaneous tissue and" + 
" less commonly located in deep soft tissues. In" + 
" the periphery of the lesion, the blood vessels are" + 
" well formed, but in the center, the blood vessels" + 
" are less well formed and often surround a single," + 
" centrally located, larger vessel. The characteristic" + 
" endothelial cells are plump, with ample eosinophilic" + 
" cytoplasm and nuclei that may contain a" + 
" prominent nucleolus. Epithelioid hemangiomas" + 
" have cuboidal-to-hobnail (tombstone-like) projection" + 
" into the vascular lumina; they have a" + 
" multilobular growth pattern and tend to be circumscribed" + 
" more often in subcutaneous tissue" + 
" than in the dermis, where they may be poorly" + 
" circumscribed. They may occasionally have an" + 
" infiltrative pattern in deep soft tissue (which" + 
" was seen in this case) and may have spindled," + 
" cellular areas and a fibromyxoid stroma. The" + 
" neoplastic blood vessels are accompanied by a" + 
" variable inflammatory infiltrate that is composed" + 
" largely of lymphocytes and eosinophils" + 
" but also of mast and plasma cells; eosinophils" + 
" were not visible in this case. The inflammatory" + 
" changes are most prominent at the periphery of" + 
" the lesion, and the surrounding lymphoid cuff" + 
" may have the appearance of being contained in" + 
" a lymph node. <span class=\"q\">7<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span><span class=\"q\">8<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span><span class=\"q\">9<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span>" + 
"</p>" + 
"<h3 class=\"cpc-section\">Discussion of Management</h3>" + 
"<p>Dr. Stankovic: The lesion recurred 2 months after" + 
"it had originally been excised, which occurs in" + 
"up to 50% of patients. Since spontaneous resolution" + 
"is rare, we discussed options for management" + 
"of recurrent epithelioid hemangioma.</p>" + 
"<h5>Management of Recurrent Epithelioid" + 
"Hemangioma</h5>" + 
"<p>Options for drug therapy include intralesional" + 
"injections of glucocorticoids or interferon alfa-2b," + 
"topical treatment with imiquimod or tacrolimus," + 
"and systemic administration of glucocorticoids," + 
"isotretinoin, or mepolizumab (anti–interleukin-5" + 
"antibody). The main advantage of drug therapies" + 
"is a good cosmetic outcome. However, such therapies are not curative, rely on patient adherence," + 
"and may be associated with systemic side" + 
"effects.</p><p>Surgical options include laser therapy, cryosurgery," + 
"electrosurgery, and reexcision with either" + 
"a traditional method or Mohs micrographic" + 
"surgery. The advantage of surgical treatment is" + 
"that it addresses the vascular segment at the" + 
"base of the lesion to minimize the likelihood of" + 
"disease recurrence. A disadvantage is postoperative" + 
"scarring, which could lead to stenosis of the" + 
"ear canal in this patient</p>" + 
"<p>" + 
" Laser therapy typically requires multiple" + 
" treatments, and effectiveness is inversely correlated" + 
" with the depth of invasion or vessel size." + 
" Although radiation has been used to treat recurrent" + 
" epithelioid hemangioma because of good" + 
" cosmetic outcome, it is associated with risks of" + 
" osteoradionecrosis of the temporal bone, malignant" + 
" transformation of a benign lesion, and delayed" + 
" hearing loss." + 
"</p>" + 
"<p>The patient first elected to undergo minimally" + 
"invasive laser treatment. I performed one" + 
"treatment with a potassium titanyl phosphate (KTP) laser, which resulted in regression of the" + 
"lesion. However, the lesion recurred 2 months" + 
"later, and over the next 18 months, multiple laser" + 
"treatments (with KTP and pulsed-dye lasers)" + 
"and an intralesional glucocorticoid injection" + 
"were administered. Transient regression and relief" + 
"of symptoms occurred, but with recurrence" + 
"after 1 to 2 months and ultimate development of" + 
"a second lesion.</p>" + 
"<p>I consulted Dr. Tan of the Laser Center at the" + 
"Massachusetts Eye and Ear Infirmary for consideration" + 
"of combination therapy with surgical" + 
"reexcision and laser treatment</p>" + 
"<h5>Laser Treatment for Epithelioid Hemangioma</h5>" + 
"<p>Dr. Oon T. Tan: Although this patient had undergone" + 
"several treatments — including surgery," + 
"intralesional glucocorticoid injection, and laser" + 
"therapy — that resulted in short periods of quiescence" + 
"accompanied by relief of her symptoms," + 
"the tumor persistently recurred. The failure of" + 
"these treatments to eradicate the tumor suggested" + 
"that we needed a more effective treatment" + 
"method. The treatment had to be tumor-specific," + 
"inducing minimal damage to healthy adjacent" + 
"tissues and preserving structures in the auditory" + 
"canal that were located distal to the tumor.</p>" + 
"<p>Why had the KTP and pulsed-dye lasers been" + 
"ineffective in eradicating the epithelioid hemangioma?" + 
"A unique aspect of the laser beam is its" + 
"ability to penetrate the skin to different depths" + 
"as a function of its wavelength (Fig. 2).10 For" + 
"example, the KTP laser, which has a wavelength" + 
"of 532 nm, will penetrate the skin to a depth of" + 
"0.8 mm from the dermoepidermal junction,11" + 
"whereas the pulsed-dye laser, which has a wavelength" + 
"of 585 to 595 nm, will penetrate to a" + 
"depth of approximately 1.3 mm.12 In this case, it" + 
"seemed likely that neither the KTP laser nor the" + 
"pulsed-dye laser had penetrated deeply enough" + 
"to completely destroy the epithelioid hemangioma" + 
"lesions and that tumor remnants had persisted" + 
"beyond the treated margins</p><p>Another aspect of laser therapy to consider is" + 
"selective photothermolysis, a technique used to" + 
"concentrate the laser beam on a selected chromophore.13" + 
"The vascular channels of epithelioid" + 
"hemangioma contain red cells; therefore, in this" + 
"case, hemoglobin was the selected endogenous" + 
"chromophore. The wavelength that has maximum" + 
"absorption by hemoglobin is approximately" + 
"585 to 595 nm, and thus the initial choice of" + 
"the pulsed-dye laser was appropriate. However," + 
"the depth of penetration at this wavelength was" + 
"insufficient to destroy the deepest aspect of the" + 
"tumor, and so we decided to use a more deeply" + 
"penetrating, vascular-specific laser, the Alexandrite" + 
"laser, which has a wavelength of 755 nm" + 
"and penetrates the skin to a depth of 1.5 to 1.8 mm" + 
"from the dermoepidermal junction.</p>" + 
"<h5>Pathological Discussion</h5>" + 
"<p>Dr. Sadow: Two years after the original excision" + 
"had been performed, two excision specimens of" + 
"the recurrent lesion were obtained from the left" + 
"ear canal that were designated as anterior and" + 
"superior (Fig. 1C and 1D). The anterior specimen" + 
"measured 1.5 cm by 1.0 cm by 0.2 cm, and the" + 
"superior specimen measured 1.0 cm by 0.4 cm" + 
"by 0.2 cm. The anterior specimen had extensive" + 
"tumor involvement, which focally extended to" + 
"both lateral and deep-tissue margins. The tumor" + 
"on the superior specimen appeared to have been" + 
"completely excised. Eosinophils were rare. The" + 
"stroma immediately adjacent to the tumor contained" + 
"a lymphoid-rich inflammatory infiltrate" + 
"with plasma cells that were positive for IgE." + 
"Staining for tryptase and CD117 showed numerous" + 
"mast cells (Fig. 1D); mast cells are often seen" + 
"in epithelioid hemangioma and may explain the" + 
"patient’s itching.</p>" + 
"<p>Dr. Stankovic: The patient was seen for follow-up" + 
"7 months after the combination treatment with" + 
"reexcision, Alexandrite and pulsed-dye lasers, and" + 
"split-thickness skin grafting. There was no evidence" + 
"of recurrence at the treated site (Fig. 3C)." + 
"However, a small satellite lesion, measuring 5 mm" + 
"in diameter, was noted lateral and superior to the" + 
"original lesion. The patient underwent one treatment" + 
"with the Alexandrite and pulsed-dye lasers." + 
"At follow-up 10 months after this treatment, the" + 
"lesion was asymptomatic and unchanged in size" + 
"and had no vascular markings.</p>" + 
"<h5>Anatomical Diagnosis</h5>" + 
"<p>Epithelioid hemangioma.</p>",
        'createdAt' : new Date(),
        public: true,
        owner: '1',
        id : '1',
        labels: ['']
      },
      {
        'title' :' Quantom Physics',
        'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Schrodingers_cat.svg/2000px-Schrodingers_cat.svg.png',
        'message': "<p>Scientific inquiry into the wave nature of light began in the 17th and 18th centuries, when scientists such as Robert Hooke, Christiaan Huygens and Leonhard Euler proposed a wave theory of light based on experimental observations.[1] In 1803, Thomas Young, an English polymath, performed the famous double-slit experiment that he later described in a paper entitled On the nature of light and colours. This experiment played a major role in the general acceptance of the wave theory of light." + 
"In 1838, Michael Faraday discovered cathode rays. These studies were followed by the 1859 statement of the black-body radiation problem by Gustav Kirchhoff, the 1877 suggestion by Ludwig Boltzmann that the energy states of a physical system can be discrete, and the 1900 quantum hypothesis of Max Planck.[2] Planck\'s hypothesis that energy is radiated and absorbed in discrete \"quanta\" (or energy elements) precisely matched the observed patterns of black-body radiation." + 
"In 1896, Wilhelm Wien empirically determined a distribution law of black-body radiation,[3] known as Wien\'s law in his honor. Ludwig Boltzmann independently arrived at this result by considerations of Maxwell\'s equations. However, it was valid only at high frequencies and underestimated the radiance at low frequencies. Later, Planck corrected this model using Boltzmann\'s statistical interpretation of thermodynamics and proposed what is now called Planck\'s law, which led to the development of quantum mechanics." + 
"Following Max Planck\'s solution in 1900 to the black-body radiation problem (reported 1859), Albert Einstein offered a quantum-based theory to explain the photoelectric effect (1905, reported 1887). Around 1900-1910, the atomic theory and the corpuscular theory of light[4] first came to be widely accepted as scientific fact; these latter theories can be viewed as quantum theories of matter and electromagnetic radiation, respectively." + 
"Among the first to study quantum phenomena in nature were Arthur Compton, C. V. Raman, and Pieter Zeeman, each of whom has a quantum effect named after him. Robert Andrews Millikan studied the photoelectric effect experimentally, and Albert Einstein developed a theory for it. At the same time, Niels Bohr developed his theory of the atomic structure, which was later confirmed by the experiments of Henry Moseley. In 1913, Peter Debye extended Niels Bohr\'s theory of atomic structure, introducing elliptical orbits, a concept also introduced by Arnold Sommerfeld.[5] This phase is known as old quantum theory." + 
"According to Planck, each energy element (E) is proportional to its frequency (ν):" + 
" E  " + 
"" + 
"Max Planck is considered the father of the quantum theory." + 
"where h is Planck\'s constant." + 
"Planck cautiously insisted that this was simply an aspect of the processes of absorption and emission of radiation and had nothing to do with the physical reality of the radiation itself.[6] In fact, he considered his quantum hypothesis a mathematical trick to get the right answer rather than a sizable discovery.[7] However, in 1905 Albert Einstein interpreted Planck\'s quantum hypothesis realistically and used it to explain the photoelectric effect, in which shining light on certain materials can eject electrons from the material. He won the 1921 Nobel Prize in Physics for this work." + 
"Einstein further developed this idea to show that an electromagnetic wave such as light could also be described as a particle (later called the photon), with a discrete quantum of energy that was dependent on its frequency.[8]" + 
"" + 
"The 1927 Solvay Conference in Brussels." + 
"The foundations of quantum mechanics were established during the first half of the 20th century by Max Planck, Niels Bohr, Werner Heisenberg, Louis de Broglie, Arthur Compton, Albert Einstein, Erwin Schrödinger, Max Born, John von Neumann, Paul Dirac, Enrico Fermi, Wolfgang Pauli, Max von Laue, Freeman Dyson, David Hilbert, Wilhelm Wien, Satyendra Nath Bose, Arnold Sommerfeld, and others. The Copenhagen interpretation of Niels Bohr became widely accepted." + 
"In the mid-1920s, developments in quantum mechanics led to its becoming the standard formulation for atomic physics. In the summer of 1925, Bohr and Heisenberg published results that closed the old quantum theory. Out of deference to their particle-like behavior in certain processes and measurements, light quanta came to be called photons (1926). From Einstein\'s simple postulation was born a flurry of debating, theorizing, and testing. Thus, the entire field of quantum physics emerged, leading to its wider acceptance at the Fifth Solvay Conference in 1927." + 
"It was found that subatomic particles and electromagnetic waves are neither simply particle nor wave but have certain properties of each. This originated the concept of wave–particle duality." + 
"By 1930, quantum mechanics had been further unified and formalized by the work of David Hilbert, Paul Dirac and John von Neumann[9] with greater emphasis on measurement, the statistical nature of our knowledge of reality, and philosophical speculation about the \'observer\'. It has since permeated many disciplines including quantum chemistry, quantum electronics, quantum optics, and quantum information science. Its speculative modern developments include string theory and quantum gravity theories. It also provides a useful framework for many features of the modern periodic table of elements, and describes the behaviors of atoms during chemical bonding and the flow of electrons in computer semiconductors, and therefore plays a crucial role in many modern technologies." + 
"While quantum mechanics was constructed to describe the world of the very small, it is also needed to explain some macroscopic phenomena such as superconductors,[10] and superfluids.[11]" + 
"The word quantum derives from the Latin, meaning \"how great\" or \"how much\".[12] In quantum mechanics, it refers to a discrete unit assigned to certain physical quantities such as the energy of an atom at rest (see Figure 1). The discovery that particles are discrete packets of energy with wave-like properties led to the branch of physics dealing with atomic and subatomic systems which is today called quantum mechanics. It underlies the mathematical framework of many fields of physics and chemistry, including condensed matter physics, solid-state physics, atomic physics, molecular physics, computational physics, computational chemistry, quantum chemistry, particle physics, nuclear chemistry, and nuclear physics.[13] Some fundamental aspects of the theory are still actively studied.[14]" + 
"Quantum mechanics is essential to understanding the behavior of systems at atomic length scales and smaller. If the physical nature of an atom was solely described by classical mechanics, electrons would not orbit the nucleus, since orbiting electrons emit radiation (due to circular motion) and would eventually collide with the nucleus due to this loss of energy. This framework was unable to explain the stability of atoms. Instead, electrons remain in an uncertain, non-deterministic, smeared, probabilistic wave–particle orbital about the nucleus, defying the traditional assumptions of classical mechanics and electromagnetism.[15]" + 
"Quantum mechanics was initially developed to provide a better explanation and description of the atom, especially the differences in the spectra of light emitted by different isotopes of the same chemical element, as well as subatomic particles. In short, the quantum-mechanical atomic model has succeeded spectacularly in the realm where classical mechanics and electromagnetism falter." + 
"Broadly speaking, quantum mechanics incorporates four classes of phenomena for which classical physics cannot account:" + 
"quantization of certain physical properties" + 
"quantum entanglement" + 
"principle of uncertainty" + 
"wave–particle duality</p>",
        'createdAt' : new Date(),
        public: true,
        owner: '1',
        likes: 11,
        id : '2'
      },
      {
      	'imageUrl': 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/286px-Hydrogen_Density_Plots.png',
        'title' : 'Wiki-Physics',
        'message': "<div id=\"mw-content-text\" lang=\"en\" dir=\"ltr\" class=\"mw-content-ltr\"><div class=\"hatnote\">For a more accessible and less technical introduction to this topic, see <a href=\"/wiki/Introduction_to_quantum_mechanics\" title=\"Introduction to quantum mechanics\">Introduction to quantum mechanics</a>.</div>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:288px;\"><a href=\"/wiki/File:Hydrogen_Density_Plots.png\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/286px-Hydrogen_Density_Plots.png\" width=\"286\" height=\"260\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/429px-Hydrogen_Density_Plots.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hydrogen_Density_Plots.png/572px-Hydrogen_Density_Plots.png 2x\" data-file-width=\"2200\" data-file-height=\"2000\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Hydrogen_Density_Plots.png\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "Solution to <a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger\'s equation</a> for the hydrogen atom at different energy levels. The brighter areas represent a higher probability of finding an <a href=\"/wiki/Electron\" title=\"Electron\">electron</a></div>" + 
 "</div>" + 
 "</div>" + 
 "<table class=\"vertical-navbox nowraplinks plainlist nowraplinks\" style=\"float:right;clear:right;width:22.0em;margin:0 0 1.0em 1.0em;background:#f9f9f9;border:1px solid #aaa;padding:0.2em;border-spacing:0.4em 0;text-align:center;line-height:1.4em;font-size:88%;width:19.0em;\">" + 
 "<tbody><tr>" + 
 "<th style=\"padding:0.2em 0.4em 0.2em;font-size:145%;line-height:1.2em\"><strong class=\"selflink\">Quantum mechanics</strong></th>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0.2em 0 0.4em\"><img class=\"mwe-math-fallback-image-inline tex\" alt=\"\sigma_x \sigma_p \ge \frac{\hbar}{2}\" src=\"//upload.wikimedia.org/math/e/6/8/e68d148926aa65efc4aac092c4c9d88f.png\">" + 
 "<div style=\"padding-top:0.2em;line-height:1.2em;font-size:90%;padding-top:0.4em;font-style:italic;\"><a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">Uncertainty principle</a></div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td class=\"hlist nowrap\" style=\"padding:0.3em 0.4em 0.3em;font-weight:bold;border-top: 1px solid #aaa; border-bottom: 1px solid #aaa;display:block;margin-bottom:0.4em;\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Introduction_to_quantum_mechanics\" title=\"Introduction to quantum mechanics\">Introduction</a></li>" + 
 "<li><a href=\"/wiki/Glossary_of_elementary_quantum_mechanics\" title=\"Glossary of elementary quantum mechanics\">Glossary</a></li>" + 
 "<li><a href=\"/wiki/History_of_quantum_mechanics\" title=\"History of quantum mechanics\">History</a></li>" + 
 "</ul>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame1\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Background<a class=\"NavToggle\" id=\"NavToggle1\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">Classical mechanics</a></li>" + 
 "<li><a href=\"/wiki/Old_quantum_theory\" title=\"Old quantum theory\">Old quantum theory</a></li>" + 
 "<li><a href=\"/wiki/Bra%E2%80%93ket_notation\" title=\"Bra–ket notation\">Bra–ket notation</a></li>" + 
 "</ul>" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Hamiltonian_(quantum_mechanics)\" title=\"Hamiltonian (quantum mechanics)\">Hamiltonian</a></li>" + 
 "<li><a href=\"/wiki/Interference_(wave_propagation)\" title=\"Interference (wave propagation)\">Interference</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame2\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Fundamentals<a class=\"NavToggle\" id=\"NavToggle2\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Complementarity_(physics)\" title=\"Complementarity (physics)\">Complementarity</a></li>" + 
 "<li><a href=\"/wiki/Quantum_decoherence\" title=\"Quantum decoherence\">Decoherence</a></li>" + 
 "<li><a href=\"/wiki/Quantum_entanglement\" title=\"Quantum entanglement\">Entanglement</a></li>" + 
 "<li><a href=\"/wiki/Energy_level\" title=\"Energy level\">Energy level</a></li>" + 
 "<li><a href=\"/wiki/Measurement_in_quantum_mechanics\" title=\"Measurement in quantum mechanics\">Measurement</a></li>" + 
 "<li><a href=\"/wiki/Quantum_nonlocality\" title=\"Quantum nonlocality\">Nonlocality</a></li>" + 
 "<li><a href=\"/wiki/Quantum_number\" title=\"Quantum number\">Quantum number</a></li>" + 
 "<li><a href=\"/wiki/Quantum_state\" title=\"Quantum state\">State</a></li>" + 
 "<li><a href=\"/wiki/Quantum_superposition\" title=\"Quantum superposition\">Superposition</a></li>" + 
 "<li><a href=\"/wiki/Symmetry_in_quantum_mechanics\" title=\"Symmetry in quantum mechanics\">Symmetry</a></li>" + 
 "<li><a href=\"/wiki/Quantum_tunnelling\" title=\"Quantum tunnelling\">Tunnelling</a></li>" + 
 "<li><a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">Uncertainty</a></li>" + 
 "<li><a href=\"/wiki/Wave_function\" title=\"Wave function\">Wave function</a>&nbsp;(<a href=\"/wiki/Wave_function_collapse\" title=\"Wave function collapse\">collapse</a>)</li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame3\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Experiments<a class=\"NavToggle\" id=\"NavToggle3\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Afshar_experiment\" title=\"Afshar experiment\">Afshar</a></li>" + 
 "<li><a href=\"/wiki/Bell_test_experiments\" title=\"Bell test experiments\">Bell\'s inequality</a></li>" + 
 "<li><a href=\"/wiki/Davisson%E2%80%93Germer_experiment\" title=\"Davisson–Germer experiment\">Davisson–Germer</a></li>" + 
 "<li><a href=\"/wiki/Double-slit_experiment\" title=\"Double-slit experiment\">Double-slit</a></li>" + 
 "<li><a href=\"/wiki/Elitzur%E2%80%93Vaidman_bomb_tester\" title=\"Elitzur–Vaidman bomb tester\">Elitzur–Vaidman</a></li>" + 
 "<li><a href=\"/wiki/Franck%E2%80%93Hertz_experiment\" title=\"Franck–Hertz experiment\">Franck–Hertz</a></li>" + 
 "<li><a href=\"/wiki/Mach%E2%80%93Zehnder_interferometer\" title=\"Mach–Zehnder interferometer\">Mach–Zehnder</a></li>" + 
 "<li><a href=\"/wiki/Popper%27s_experiment\" title=\"Popper\'s experiment\">Popper</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Quantum_eraser_experiment\" title=\"Quantum eraser experiment\">Quantum eraser</a>&nbsp;(<a href=\"/wiki/Delayed_choice_quantum_eraser\" title=\"Delayed choice quantum eraser\">delayed-choice</a>)</li>" + 
 "</ul>" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger%27s_cat\" title=\"Schrödinger\'s cat\">Schrödinger\'s cat</a></li>" + 
 "<li><a href=\"/wiki/Stern%E2%80%93Gerlach_experiment\" title=\"Stern–Gerlach experiment\">Stern–Gerlach</a></li>" + 
 "<li><a href=\"/wiki/Wheeler%27s_delayed_choice_experiment\" title=\"Wheeler\'s delayed choice experiment\">Wheeler\'s delayed-choice</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame4\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Formulations<a class=\"NavToggle\" id=\"NavToggle4\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Mathematical_formulation_of_quantum_mechanics\" title=\"Mathematical formulation of quantum mechanics\">Overview</a></li>" + 
 "</ul>" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Heisenberg_picture\" title=\"Heisenberg picture\">Heisenberg</a></li>" + 
 "<li><a href=\"/wiki/Interaction_picture\" title=\"Interaction picture\">Interaction</a></li>" + 
 "<li><a href=\"/wiki/Matrix_mechanics\" title=\"Matrix mechanics\">Matrix</a></li>" + 
 "<li><a href=\"/wiki/Phase_space_formulation\" title=\"Phase space formulation\">Phase-space</a></li>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger_picture\" title=\"Schrödinger picture\">Schrödinger</a></li>" + 
 "<li><a href=\"/wiki/Path_integral_formulation\" title=\"Path integral formulation\">Sum-over-histories (path integral)</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame5\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Equations<a class=\"NavToggle\" id=\"NavToggle5\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Dirac_equation\" title=\"Dirac equation\">Dirac</a></li>" + 
 "<li><a href=\"/wiki/Klein%E2%80%93Gordon_equation\" title=\"Klein–Gordon equation\">Klein–Gordon</a></li>" + 
 "<li><a href=\"/wiki/Pauli_equation\" title=\"Pauli equation\">Pauli</a></li>" + 
 "<li><a href=\"/wiki/Rydberg_formula\" title=\"Rydberg formula\">Rydberg</a></li>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame6\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\"><a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">Interpretations</a><a class=\"NavToggle\" id=\"NavToggle6\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">Overview</a></li>" + 
 "</ul>" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Consistent_histories\" title=\"Consistent histories\">Consistent histories</a></li>" + 
 "<li><a href=\"/wiki/Copenhagen_interpretation\" title=\"Copenhagen interpretation\">Copenhagen</a></li>" + 
 "<li><a href=\"/wiki/De_Broglie%E2%80%93Bohm_theory\" title=\"De Broglie–Bohm theory\">de Broglie–Bohm</a></li>" + 
 "<li><a href=\"/wiki/Ensemble_interpretation\" title=\"Ensemble interpretation\">Ensemble</a></li>" + 
 "<li><a href=\"/wiki/Hidden_variable_theory\" title=\"Hidden variable theory\">Hidden-variable</a></li>" + 
 "<li><a href=\"/wiki/Many-worlds_interpretation\" title=\"Many-worlds interpretation\">Many-worlds</a></li>" + 
 "<li><a href=\"/wiki/Objective_collapse_theory\" title=\"Objective collapse theory\">Objective collapse</a></li>" + 
 "<li><a href=\"/wiki/Quantum_Bayesianism\" title=\"Quantum Bayesianism\">Bayesian</a></li>" + 
 "<li><a href=\"/wiki/Quantum_logic\" title=\"Quantum logic\">Quantum logic</a></li>" + 
 "<li><a href=\"/wiki/Relational_quantum_mechanics\" title=\"Relational quantum mechanics\">Relational</a></li>" + 
 "<li><a href=\"/wiki/Stochastic_interpretation\" title=\"Stochastic interpretation\">Stochastic</a></li>" + 
 "<li><a href=\"/wiki/Scale_relativity\" title=\"Scale relativity\">Scale relativity</a></li>" + 
 "<li><a href=\"/wiki/Transactional_interpretation\" title=\"Transactional interpretation\">Transactional</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame7\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Advanced topics<a class=\"NavToggle\" id=\"NavToggle7\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Quantum_chaos\" title=\"Quantum chaos\">Quantum chaos</a></li>" + 
 "<li><a href=\"/wiki/Quantum_computing\" title=\"Quantum computing\">Quantum computing</a></li>" + 
 "<li><a href=\"/wiki/Density_matrix\" title=\"Density matrix\">Density matrix</a></li>" + 
 "<li><a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">Quantum field theory</a></li>" + 
 "<li><a href=\"/wiki/Fractional_quantum_mechanics\" title=\"Fractional quantum mechanics\">Fractional quantum mechanics</a></li>" + 
 "<li><a href=\"/wiki/Quantum_information_science\" title=\"Quantum information science\">Quantum information science</a></li>" + 
 "<li><a href=\"/wiki/Relativistic_quantum_mechanics\" title=\"Relativistic quantum mechanics\">Relativistic quantum mechanics</a></li>" + 
 "<li><a href=\"/wiki/Scattering_theory\" title=\"Scattering theory\">Scattering theory</a></li>" + 
 "<li><a href=\"/wiki/Quantum_statistical_mechanics\" title=\"Quantum statistical mechanics\">Quantum statistical mechanics</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame8\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left;text-align:center;\">Scientists<a class=\"NavToggle\" id=\"NavToggle8\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(170, 170, 170); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(170, 170, 170); display: none;\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Yakir_Aharonov\" title=\"Yakir Aharonov\">Aharonov</a></li>" + 
 "<li><a href=\"/wiki/John_Stewart_Bell\" title=\"John Stewart Bell\">Bell</a></li>" + 
 "<li><a href=\"/wiki/Patrick_Blackett,_Baron_Blackett\" title=\"Patrick Blackett, Baron Blackett\" class=\"mw-redirect\">Blackett</a></li>" + 
 "<li><a href=\"/wiki/Felix_Bloch\" title=\"Felix Bloch\">Bloch</a></li>" + 
 "<li><a href=\"/wiki/David_Bohm\" title=\"David Bohm\">Bohm</a></li>" + 
 "<li><a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Bohr</a></li>" + 
 "<li><a href=\"/wiki/Max_Born\" title=\"Max Born\">Born</a></li>" + 
 "<li><a href=\"/wiki/Satyendra_Nath_Bose\" title=\"Satyendra Nath Bose\">Bose</a></li>" + 
 "<li><a href=\"/wiki/Louis_de_Broglie\" title=\"Louis de Broglie\">de Broglie</a></li>" + 
 "<li><a href=\"/wiki/David_John_Candlin\" title=\"David John Candlin\">Candlin</a></li>" + 
 "<li><a href=\"/wiki/Arthur_Compton\" title=\"Arthur Compton\">Compton</a></li>" + 
 "<li><a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Dirac</a></li>" + 
 "<li><a href=\"/wiki/Clinton_Davisson\" title=\"Clinton Davisson\">Davisson</a></li>" + 
 "<li><a href=\"/wiki/Peter_Debye\" title=\"Peter Debye\">Debye</a></li>" + 
 "<li><a href=\"/wiki/Paul_Ehrenfest\" title=\"Paul Ehrenfest\">Ehrenfest</a></li>" + 
 "<li><a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Einstein</a></li>" + 
 "<li><a href=\"/wiki/Hugh_Everett_III\" title=\"Hugh Everett III\">Everett</a></li>" + 
 "<li><a href=\"/wiki/Vladimir_Fock\" title=\"Vladimir Fock\">Fock</a></li>" + 
 "<li><a href=\"/wiki/Enrico_Fermi\" title=\"Enrico Fermi\">Fermi</a></li>" + 
 "<li><a href=\"/wiki/Richard_Feynman\" title=\"Richard Feynman\">Feynman</a></li>" + 
 "<li><a href=\"/wiki/Roy_Glauber\" title=\"Roy Glauber\" class=\"mw-redirect\">Glauber</a></li>" + 
 "<li><a href=\"/wiki/Martin_Gutzwiller\" title=\"Martin Gutzwiller\">Gutzwiller</a></li>" + 
 "<li><a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Heisenberg</a></li>" + 
 "<li><a href=\"/wiki/David_Hilbert\" title=\"David Hilbert\">Hilbert</a></li>" + 
 "<li><a href=\"/wiki/Pascual_Jordan\" title=\"Pascual Jordan\">Jordan</a></li>" + 
 "<li><a href=\"/wiki/Hans_Kramers\" title=\"Hans Kramers\">Kramers</a></li>" + 
 "<li><a href=\"/wiki/Wolfgang_Pauli\" title=\"Wolfgang Pauli\">Pauli</a></li>" + 
 "<li><a href=\"/wiki/Willis_Lamb\" title=\"Willis Lamb\">Lamb</a></li>" + 
 "<li><a href=\"/wiki/Lev_Landau\" title=\"Lev Landau\">Landau</a></li>" + 
 "<li><a href=\"/wiki/Max_von_Laue\" title=\"Max von Laue\">Laue</a></li>" + 
 "<li><a href=\"/wiki/Henry_Moseley\" title=\"Henry Moseley\">Moseley</a></li>" + 
 "<li><a href=\"/wiki/Robert_Andrews_Millikan\" title=\"Robert Andrews Millikan\">Millikan</a></li>" + 
 "<li><a href=\"/wiki/Heike_Kamerlingh_Onnes\" title=\"Heike Kamerlingh Onnes\">Onnes</a></li>" + 
 "<li><a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Planck</a></li>" + 
 "<li><a href=\"/wiki/Isidor_Isaac_Rabi\" title=\"Isidor Isaac Rabi\">Rabi</a></li>" + 
 "<li><a href=\"/wiki/C._V._Raman\" title=\"C. V. Raman\">Raman</a></li>" + 
 "<li><a href=\"/wiki/Johannes_Rydberg\" title=\"Johannes Rydberg\">Rydberg</a></li>" + 
 "<li><a href=\"/wiki/Erwin_Schr%C3%B6dinger\" title=\"Erwin Schrödinger\">Schrödinger</a></li>" + 
 "<li><a href=\"/wiki/Arnold_Sommerfeld\" title=\"Arnold Sommerfeld\">Sommerfeld</a></li>" + 
 "<li><a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">von Neumann</a></li>" + 
 "<li><a href=\"/wiki/Hermann_Weyl\" title=\"Hermann Weyl\">Weyl</a></li>" + 
 "<li><a href=\"/wiki/Wilhelm_Wien\" title=\"Wilhelm Wien\">Wien</a></li>" + 
 "<li><a href=\"/wiki/Eugene_Wigner\" title=\"Eugene Wigner\">Wigner</a></li>" + 
 "<li><a href=\"/wiki/Pieter_Zeeman\" title=\"Pieter Zeeman\">Zeeman</a></li>" + 
 "<li><a href=\"/wiki/Anton_Zeilinger\" title=\"Anton Zeilinger\">Zeilinger</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"text-align:right;font-size:115%;padding-top: 0.6em;border-top:1px solid #aaa;padding-top:0.1em;\">" + 
 "<div class=\"plainlinks hlist navbar mini\">" + 
 "<ul>" + 
 "<li class=\"nv-view\"><a href=\"/wiki/Template:Quantum_mechanics\" title=\"Template:Quantum mechanics\"><abbr title=\"View this template\">v</abbr></a></li>" + 
 "<li class=\"nv-talk\"><a href=\"/wiki/Template_talk:Quantum_mechanics\" title=\"Template talk:Quantum mechanics\"><abbr title=\"Discuss this template\">t</abbr></a></li>" + 
 "<li class=\"nv-edit\"><a class=\"external text\" href=\"//en.wikipedia.org/w/index.php?title=Template:Quantum_mechanics&amp;action=edit\"><abbr title=\"Edit this template\">e</abbr></a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<p><b>Quantum mechanics</b> (<b>QM</b>; also known as <b>quantum physics</b> or <b>quantum theory</b>) including <a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">quantum field theory</a>, is a fundamental branch of <a href=\"/wiki/Physics\" title=\"Physics\">physics</a> concerned with processes involving, for example, <a href=\"/wiki/Atom\" title=\"Atom\">atoms</a> and <a href=\"/wiki/Photons\" title=\"Photons\" class=\"mw-redirect\">photons</a>. In such processes, said to be quantized, the <a href=\"/wiki/Action_(physics)\" title=\"Action (physics)\">action</a> has been observed to be only in integer multiples of the <a href=\"/wiki/Planck_constant\" title=\"Planck constant\">Planck constant</a>, a physical quantity that is exceedingly, indeed perhaps ultimately, small. This is utterly inexplicable in <a href=\"/wiki/Classical_physics\" title=\"Classical physics\">classical physics</a>.</p>" + 
 "<p>Quantum mechanics <a href=\"/wiki/History_of_quantum_mechanics\" title=\"History of quantum mechanics\">gradually arose</a> from <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a>\'s solution in 1900 to the <a href=\"/wiki/Black-body_radiation\" title=\"Black-body radiation\">black-body radiation</a> problem (reported 1859) and <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a>\'s 1905 paper which offered a quantum-based theory to explain the <a href=\"/wiki/Photoelectric_effect\" title=\"Photoelectric effect\">photoelectric effect</a> (reported 1887). <a href=\"/wiki/Old_quantum_theory\" title=\"Old quantum theory\">Early quantum theory</a> was significantly reformulated in the mid-1920s.</p>" + 
 "<p>The <a href=\"/wiki/Mathematical_formulations_of_quantum_mechanics\" title=\"Mathematical formulations of quantum mechanics\" class=\"mw-redirect\">mathematical formulations of quantum mechanics</a> are abstract. A mathematical function, the <a href=\"/wiki/Wave_function\" title=\"Wave function\">wave function</a>, provides information about the <a href=\"/wiki/Probability_amplitude\" title=\"Probability amplitude\">probability amplitude</a> of position, momentum, and other physical properties of a particle.</p>" + 
 "<p>Important applications of quantum mechanical theory include <a href=\"/wiki/Superconducting_magnet\" title=\"Superconducting magnet\">superconducting magnets</a>, <a href=\"/wiki/Light-emitting_diode\" title=\"Light-emitting diode\">light-emitting diodes</a> and the <a href=\"/wiki/Laser\" title=\"Laser\">laser</a>, the <a href=\"/wiki/Transistor\" title=\"Transistor\">transistor</a> and <a href=\"/wiki/Semiconductor\" title=\"Semiconductor\">semiconductors</a> such as the <a href=\"/wiki/Microprocessor\" title=\"Microprocessor\">microprocessor</a>, <a href=\"/wiki/Medical_imaging\" title=\"Medical imaging\">medical and research imaging</a> such as <a href=\"/wiki/Magnetic_resonance_imaging\" title=\"Magnetic resonance imaging\">magnetic resonance imaging</a> and <a href=\"/wiki/Electron_microscope\" title=\"Electron microscope\">electron microscopy</a>, and explanations for many biological and physical phenomena.</p>" + 
 "<p></p>" + 
 "<div id=\"toc\" class=\"toc\">" + 
 "<div id=\"toctitle\">" + 
 "<h2>Contents</h2>" + 
 "<span class=\"toctoggle\">&nbsp;[<a href=\"#\" id=\"togglelink\">hide</a>]&nbsp;</span></div>" + 
 "<ul>" + 
 "<li class=\"toclevel-1 tocsection-1\"><a href=\"#History\"><span class=\"tocnumber\">1</span> <span class=\"toctext\">History</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-2\"><a href=\"#Mathematical_formulations\"><span class=\"tocnumber\">2</span> <span class=\"toctext\">Mathematical formulations</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-3\"><a href=\"#Mathematically_equivalent_formulations_of_quantum_mechanics\"><span class=\"tocnumber\">3</span> <span class=\"toctext\">Mathematically equivalent formulations of quantum mechanics</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-4\"><a href=\"#Interactions_with_other_scientific_theories\"><span class=\"tocnumber\">4</span> <span class=\"toctext\">Interactions with other scientific theories</span></a>" + 
 "<ul>" + 
 "<li class=\"toclevel-2 tocsection-5\"><a href=\"#Quantum_mechanics_and_classical_physics\"><span class=\"tocnumber\">4.1</span> <span class=\"toctext\">Quantum mechanics and classical physics</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-6\"><a href=\"#Copenhagen_interpretation_of_quantum_versus_classical_kinematics\"><span class=\"tocnumber\">4.2</span> <span class=\"toctext\">Copenhagen interpretation of quantum versus classical kinematics</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-7\"><a href=\"#Relativity_and_quantum_mechanics\"><span class=\"tocnumber\">4.3</span> <span class=\"toctext\">Relativity and quantum mechanics</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-8\"><a href=\"#Attempts_at_a_unified_field_theory\"><span class=\"tocnumber\">4.4</span> <span class=\"toctext\">Attempts at a unified field theory</span></a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li class=\"toclevel-1 tocsection-9\"><a href=\"#Philosophical_implications\"><span class=\"tocnumber\">5</span> <span class=\"toctext\">Philosophical implications</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-10\"><a href=\"#Applications\"><span class=\"tocnumber\">6</span> <span class=\"toctext\">Applications</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-11\"><a href=\"#Examples\"><span class=\"tocnumber\">7</span> <span class=\"toctext\">Examples</span></a>" + 
 "<ul>" + 
 "<li class=\"toclevel-2 tocsection-12\"><a href=\"#Free_particle\"><span class=\"tocnumber\">7.1</span> <span class=\"toctext\">Free particle</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-13\"><a href=\"#Step_potential\"><span class=\"tocnumber\">7.2</span> <span class=\"toctext\">Step potential</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-14\"><a href=\"#Rectangular_potential_barrier\"><span class=\"tocnumber\">7.3</span> <span class=\"toctext\">Rectangular potential barrier</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-15\"><a href=\"#Particle_in_a_box\"><span class=\"tocnumber\">7.4</span> <span class=\"toctext\">Particle in a box</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-16\"><a href=\"#Finite_potential_well\"><span class=\"tocnumber\">7.5</span> <span class=\"toctext\">Finite potential well</span></a></li>" + 
 "<li class=\"toclevel-2 tocsection-17\"><a href=\"#Harmonic_oscillator\"><span class=\"tocnumber\">7.6</span> <span class=\"toctext\">Harmonic oscillator</span></a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li class=\"toclevel-1 tocsection-18\"><a href=\"#See_also\"><span class=\"tocnumber\">8</span> <span class=\"toctext\">See also</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-19\"><a href=\"#Notes\"><span class=\"tocnumber\">9</span> <span class=\"toctext\">Notes</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-20\"><a href=\"#References\"><span class=\"tocnumber\">10</span> <span class=\"toctext\">References</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-21\"><a href=\"#Further_reading\"><span class=\"tocnumber\">11</span> <span class=\"toctext\">Further reading</span></a></li>" + 
 "<li class=\"toclevel-1 tocsection-22\"><a href=\"#External_links\"><span class=\"tocnumber\">12</span> <span class=\"toctext\">External links</span></a></li>" + 
 "</ul>" + 
 "</div>" + 
 "<p></p>" + 
 "<h2><span class=\"mw-headline\" id=\"History\">History</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=1\" title=\"Edit section: History\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<table class=\"vertical-navbox nowraplinks\" style=\"float:right;clear:right;width:22.0em;margin:0 0 1.0em 1.0em;background:#f9f9f9;border:1px solid #aaa;padding:0.2em;border-spacing:0.4em 0;text-align:center;line-height:1.4em;font-size:88%\">" + 
 "<tbody><tr>" + 
 "<th style=\"padding:0.2em 0.4em 0.2em;font-size:145%;line-height:1.2em\">Modern physics</th>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0.2em 0 0.4em\"><img class=\"mwe-math-fallback-image-inline tex\" alt=\"{  i\hbar\frac{\partial}{\partial t} \Psi(\mathbf{r},\,t) = \hat H \Psi(\mathbf{r},\,t)}\" src=\"//upload.wikimedia.org/math/d/d/d/ddde5e204085e85728a7f9721974f450.png\">" + 
 "<div style=\"padding-top:0.2em;line-height:1.2em\"><a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger equation</a></div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\"><a href=\"/wiki/History_of_physics#The_emergence_of_a_new_physics_circa_1900\" title=\"History of physics\">History of modern physics</a></td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame9\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left\">Founders<a class=\"NavToggle\" id=\"NavToggle9\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; display: none;\"><a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a> &nbsp;<b>·</b>  <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a> &nbsp;<b>·</b>  <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a> &nbsp;<b>·</b>  <a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a> &nbsp;<b>·</b>  <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Werner Heisenberg</a> &nbsp;<b>·</b>  <a href=\"/wiki/Erwin_Schr%C3%B6dinger\" title=\"Erwin Schrödinger\">Erwin Schrödinger</a> &nbsp;<b>·</b>  <a href=\"/wiki/Louis_de_Broglie\" title=\"Louis de Broglie\">Louis de Broglie</a> &nbsp;<b>·</b>  <a href=\"/wiki/Satyendra_Nath_Bose\" title=\"Satyendra Nath Bose\">Satyendra Nath Bose</a> &nbsp;<b>·</b>  <a href=\"/wiki/Wolfgang_Pauli\" title=\"Wolfgang Pauli\">Wolfgang Pauli</a> &nbsp;<b>·</b>  <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Paul Dirac</a></div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame10\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left\">Concepts<a class=\"NavToggle\" id=\"NavToggle10\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; display: none;\"><a href=\"/wiki/Space\" title=\"Space\">space</a>&nbsp;<b>·</b> <a href=\"/wiki/Time\" title=\"Time\">time</a>&nbsp;<b>·</b> <a href=\"/wiki/Energy\" title=\"Energy\">energy</a>&nbsp;<b>·</b> <a href=\"/wiki/Matter\" title=\"Matter\">matter</a>&nbsp;<b>·</b> <a href=\"/wiki/Work_(physics)\" title=\"Work (physics)\">work</a><br>" + 
 "<a href=\"/wiki/Randomness\" title=\"Randomness\">randomness</a>&nbsp;<b>·</b> <a href=\"/wiki/Information\" title=\"Information\">information</a>&nbsp;<b>·</b> <a href=\"/wiki/Entropy\" title=\"Entropy\">entropy</a>&nbsp;<b>·</b> <a href=\"/wiki/Mind\" title=\"Mind\">mind</a><br>" + 
 "<a href=\"/wiki/Light\" title=\"Light\">light</a>&nbsp;<b>·</b> <a href=\"/wiki/Particle\" title=\"Particle\">particle</a>&nbsp;<b>·</b> <a href=\"/wiki/Wave\" title=\"Wave\">wave</a>&nbsp;<b>·</b> <a href=\"/wiki/Holon_(physics)\" title=\"Holon (physics)\">holon</a></div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame11\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left\">Branches<a class=\"NavToggle\" id=\"NavToggle11\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; display: none;\"><a href=\"/wiki/Applied_physics\" title=\"Applied physics\">Applied</a>&nbsp;<b>·</b> <a href=\"/wiki/Experimental_physics\" title=\"Experimental physics\">Experimental</a>&nbsp;<b>·</b> <a href=\"/wiki/Theoretical_physics\" title=\"Theoretical physics\">Theoretical</a><br>" + 
 "<a href=\"/wiki/Philosophy_of_Science\" title=\"Philosophy of Science\" class=\"mw-redirect\">Philosophy of Science</a>&nbsp;<b>·</b> <a href=\"/wiki/Philosophy_of_physics\" title=\"Philosophy of physics\">Philosophy of physics</a><br>" + 
 "<a href=\"/wiki/Mathematical_logic\" title=\"Mathematical logic\">Mathematical logic</a>&nbsp;<b>·</b> <a href=\"/wiki/Mathematical_physics\" title=\"Mathematical physics\">Mathematical physics</a><br>" + 
 "<a href=\"/wiki/Supersymmetry\" title=\"Supersymmetry\">Supersymmetry</a>&nbsp;<b>·</b> <a href=\"/wiki/String_theory\" title=\"String theory\">String theory</a>&nbsp;<b>·</b> <a href=\"/wiki/M-theory\" title=\"M-theory\">M-theory</a><br>" + 
 "<a href=\"/wiki/Grand_Unified_Theory\" title=\"Grand Unified Theory\">Grand Unified Theory</a>&nbsp;<b>·</b> <a href=\"/wiki/Standard_model\" title=\"Standard model\" class=\"mw-redirect\">Standard model</a><br>" + 
 "<strong class=\"selflink\">Quantum mechanics</strong>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">Quantum field theory</a><br>" + 
 "<a href=\"/wiki/Antiparticle\" title=\"Antiparticle\">Antiparticle</a>&nbsp;<b>·</b> <a href=\"/wiki/Antimatter\" title=\"Antimatter\">Antimatter</a><br>" + 
 "<a href=\"/wiki/Electromagnetism\" title=\"Electromagnetism\">Electromagnetism</a>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_electrodynamics\" title=\"Quantum electrodynamics\">Quantum electrodynamics</a><br>" + 
 "<a href=\"/wiki/Weak_interaction\" title=\"Weak interaction\">Weak interaction</a>&nbsp;<b>·</b> <a href=\"/wiki/Electroweak_interaction\" title=\"Electroweak interaction\">Electroweak interaction</a><br>" + 
 "<a href=\"/wiki/Strong_interaction\" title=\"Strong interaction\">Strong interaction</a>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_chromodynamics\" title=\"Quantum chromodynamics\">Quantum chromodynamics</a><br>" + 
 "<a href=\"/wiki/Particle_physics\" title=\"Particle physics\">Particle physics</a>&nbsp;<b>·</b> <a href=\"/wiki/Nuclear_physics\" title=\"Nuclear physics\">Nuclear physics</a><br>" + 
 "<a href=\"/wiki/Exotic_matter\" title=\"Exotic matter\">Exotic matter</a>&nbsp;<b>·</b> <a href=\"/wiki/Higgs_boson\" title=\"Higgs boson\">Higgs boson</a><br>" + 
 "<a href=\"/wiki/Atomic,_molecular,_and_optical_physics\" title=\"Atomic, molecular, and optical physics\">Atomic, molecular, and optical physics</a><br>" + 
 "<a href=\"/wiki/Condensed_matter_physics\" title=\"Condensed matter physics\">Condensed matter physics</a><br>" + 
 "<a href=\"/wiki/Quantum_statistical_mechanics\" title=\"Quantum statistical mechanics\">Quantum statistical mechanics</a><br>" + 
 "<a href=\"/wiki/Quantum_information\" title=\"Quantum information\">Quantum information</a>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_Computation\" title=\"Quantum Computation\" class=\"mw-redirect\">Quantum Computation</a><br>" + 
 "<a href=\"/wiki/Spintronics\" title=\"Spintronics\">Spintronics</a>&nbsp;<b>·</b> <a href=\"/wiki/Superconductivity\" title=\"Superconductivity\">Superconductivity</a><br>" + 
 "<a href=\"/wiki/Non-linear_dynamics\" title=\"Non-linear dynamics\" class=\"mw-redirect\">Non-linear dynamics</a>&nbsp;<b>·</b> <a href=\"/wiki/Photonics\" title=\"Photonics\">Photonics</a>&nbsp;<b>·</b> <a href=\"/wiki/Biophysics\" title=\"Biophysics\">Biophysics</a><br>" + 
 "<a href=\"/wiki/Neurophysics\" title=\"Neurophysics\">Neurophysics</a>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_mind\" title=\"Quantum mind\">Quantum mind</a><br>" + 
 "<a href=\"/wiki/Plasma_physics\" title=\"Plasma physics\" class=\"mw-redirect\">Plasma physics</a>&nbsp;<b>·</b> <a href=\"/wiki/Neutrino_astronomy\" title=\"Neutrino astronomy\">Neutrino astronomy</a><br>" + 
 "<a href=\"/wiki/Special_relativity\" title=\"Special relativity\">Special relativity</a>&nbsp;<b>·</b> <a href=\"/wiki/General_relativity\" title=\"General relativity\">General relativity</a><br>" + 
 "<a href=\"/wiki/Scale_relativity\" title=\"Scale relativity\">Scale relativity</a>&nbsp;<b>·</b> <a href=\"/wiki/Spacetime_symmetries\" title=\"Spacetime symmetries\">Spacetime symmetries</a><br>" + 
 "<a href=\"/wiki/Dark_matter\" title=\"Dark matter\">Dark matter</a>&nbsp;<b>·</b> <a href=\"/wiki/Dark_energy\" title=\"Dark energy\">Dark energy</a><br>" + 
 "<a href=\"/wiki/Fractal_analysis\" title=\"Fractal analysis\">Fractal analysis</a>&nbsp;<b>·</b> <a href=\"/wiki/Quantum_chaos\" title=\"Quantum chaos\">Quantum chaos</a><br>" + 
 "<a href=\"/wiki/Emergence\" title=\"Emergence\">Emergence</a>&nbsp;<b>·</b> <a href=\"/wiki/Complex_systems\" title=\"Complex systems\">Complex systems</a><br>" + 
 "<a href=\"/wiki/Black_Holes\" title=\"Black Holes\" class=\"mw-redirect\">Black Holes</a>&nbsp;<b>·</b> <a href=\"/wiki/Holographic_principle\" title=\"Holographic principle\">Holographic principle</a><br>" + 
 "<a href=\"/wiki/Astrophysics\" title=\"Astrophysics\">Astrophysics</a>&nbsp;<b>·</b> <a href=\"/wiki/Observable_universe\" title=\"Observable universe\">Observable universe</a><br>" + 
 "<a href=\"/wiki/Big_Bang\" title=\"Big Bang\">Big Bang</a>&nbsp;<b>·</b> <a href=\"/wiki/Cosmology\" title=\"Cosmology\">Cosmology</a><br>" + 
 "<a href=\"/wiki/Theories_of_gravitation\" title=\"Theories of gravitation\" class=\"mw-redirect\">Theories of gravitation</a>&nbsp;<b>·</b> <a href=\"/wiki/Loop_quantum_gravity\" title=\"Loop quantum gravity\">Loop quantum gravity</a><br>" + 
 "<a href=\"/wiki/Quantum_gravity\" title=\"Quantum gravity\">Quantum gravity</a>&nbsp;<b>·</b> <a href=\"/wiki/Theory_of_Everything\" title=\"Theory of Everything\" class=\"mw-redirect\">Theory of Everything</a><br>" + 
 "<a href=\"/wiki/Mathematical_universe_hypothesis\" title=\"Mathematical universe hypothesis\">Mathematical universe hypothesis</a>&nbsp;<b>·</b> <a href=\"/wiki/Multiverse\" title=\"Multiverse\">Multiverse</a></div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"padding:0 0.1em 0.4em\">" + 
 "<div class=\"NavFrame collapsed\" style=\"border:none;padding:0\" id=\"NavFrame12\">" + 
 "<div class=\"NavHead\" style=\"font-size:105%;background:transparent;text-align:left\">Scientists<a class=\"NavToggle\" id=\"NavToggle12\" href=\"#\">[show]</a></div>" + 
 "<div class=\"NavContent\" style=\"font-size: 105%; padding: 0.2em 0px 0.4em; text-align: center; display: none;\"><a href=\"/wiki/Wilhelm_R%C3%B6ntgen\" title=\"Wilhelm Röntgen\">Röntgen</a>&nbsp;<b>·</b>  <a href=\"/wiki/Henri_Becquerel\" title=\"Henri Becquerel\">Becquerel</a>&nbsp;<b>·</b>  <a href=\"/wiki/Hendrik_Lorentz\" title=\"Hendrik Lorentz\">Lorentz</a>&nbsp;<b>·</b>  <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Planck</a>&nbsp;<b>·</b>  <a href=\"/wiki/Pierre_Curie\" title=\"Pierre Curie\">Curie</a>&nbsp;<b>·</b>  <a href=\"/wiki/Wilhelm_Wien\" title=\"Wilhelm Wien\">Wien</a>&nbsp;<b>·</b>  <a href=\"/wiki/Marie_Curie\" title=\"Marie Curie\">Skłodowska-Curie</a>&nbsp;<b>·</b>  <a href=\"/wiki/Arnold_Sommerfeld\" title=\"Arnold Sommerfeld\">Sommerfeld</a>&nbsp;<b>·</b>  <a href=\"/wiki/Ernest_Rutherford\" title=\"Ernest Rutherford\">Rutherford</a>&nbsp;<b>·</b>  <a href=\"/wiki/Frederick_Soddy\" title=\"Frederick Soddy\">Soddy</a>&nbsp;<b>·</b>  <a href=\"/wiki/Heike_Kamerlingh_Onnes\" title=\"Heike Kamerlingh Onnes\">Onnes</a>&nbsp;<b>·</b>  <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Einstein</a>&nbsp;<b>·</b> <a href=\"/wiki/Frank_Wilczek\" title=\"Frank Wilczek\">Wilczek</a>&nbsp;<b>·</b> <a href=\"/wiki/Max_Born\" title=\"Max Born\">Born</a>&nbsp;<b>·</b>  <a href=\"/wiki/Hermann_Weyl\" title=\"Hermann Weyl\">Weyl</a>&nbsp;<b>·</b> <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Bohr</a>&nbsp;<b>·</b>  <a href=\"/wiki/Erwin_Schr%C3%B6dinger\" title=\"Erwin Schrödinger\">Schrödinger</a>&nbsp;<b>·</b>  <a href=\"/wiki/Louis_de_Broglie\" title=\"Louis de Broglie\">de Broglie</a>&nbsp;<b>·</b> <a href=\"/wiki/Max_von_Laue\" title=\"Max von Laue\">Laue</a>&nbsp;<b>·</b>  <a href=\"/wiki/Satyendra_Nath_Bose\" title=\"Satyendra Nath Bose\">Bose</a>&nbsp;<b>·</b>  <a href=\"/wiki/Arthur_Compton\" title=\"Arthur Compton\">Compton</a>&nbsp;<b>·</b>  <a href=\"/wiki/Wolfgang_Pauli\" title=\"Wolfgang Pauli\">Pauli</a>&nbsp;<b>·</b> <a href=\"/wiki/Ernest_Walton\" title=\"Ernest Walton\">Walton</a>&nbsp;<b>·</b>  <a href=\"/wiki/Enrico_Fermi\" title=\"Enrico Fermi\">Fermi</a>&nbsp;<b>·</b> <a href=\"/wiki/Johannes_Diderik_van_der_Waals\" title=\"Johannes Diderik van der Waals\">Waals</a>&nbsp;<b>·</b>  <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Heisenberg</a>&nbsp;<b>·</b> <a href=\"/wiki/Freeman_Dyson\" title=\"Freeman Dyson\">Dyson</a>&nbsp;<b>·</b>  <a href=\"/wiki/Pieter_Zeeman\" title=\"Pieter Zeeman\">Zeeman</a>&nbsp;<b>·</b> <a href=\"/wiki/Henry_Moseley\" title=\"Henry Moseley\">Moseley</a>&nbsp;<b>·</b> <a href=\"/wiki/David_Hilbert\" title=\"David Hilbert\">Hilbert</a>&nbsp;<b>·</b> <a href=\"/wiki/Kurt_G%C3%B6del\" title=\"Kurt Gödel\">Gödel</a>&nbsp;<b>·</b> <a href=\"/wiki/Pascual_Jordan\" title=\"Pascual Jordan\">Jordan</a>&nbsp;<b>·</b>  <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Dirac</a>&nbsp;<b>·</b> <a href=\"/wiki/Eugene_Wigner\" title=\"Eugene Wigner\">Wigner</a>&nbsp;<b>·</b> <a href=\"/wiki/Stephen_Hawking\" title=\"Stephen Hawking\">Hawking</a>&nbsp;<b>·</b> <a href=\"/wiki/Philip_Warren_Anderson\" title=\"Philip Warren Anderson\">P.W Anderson</a>&nbsp;<b>·</b> <a href=\"/wiki/Georges_Lema%C3%AEtre\" title=\"Georges Lemaître\">Lemaître</a>&nbsp;<b>·</b>  <a href=\"/wiki/Sir_George_Paget_Thomson\" title=\"Sir George Paget Thomson\" class=\"mw-redirect\">Thomson</a>&nbsp;<b>·</b>  <a href=\"/wiki/Henri_Poincar%C3%A9\" title=\"Henri Poincaré\">Poincaré</a>&nbsp;<b>·</b> <a href=\"/wiki/John_Archibald_Wheeler\" title=\"John Archibald Wheeler\">Wheeler</a>&nbsp;<b>·</b> <a href=\"/wiki/Roger_Penrose\" title=\"Roger Penrose\">Penrose</a>&nbsp;<b>·</b> <a href=\"/wiki/Robert_A._Millikan\" title=\"Robert A. Millikan\" class=\"mw-redirect\">Millikan</a>&nbsp;<b>·</b> <a href=\"/wiki/Yoichiro_Nambu\" title=\"Yoichiro Nambu\">Nambu</a>&nbsp;<b>·</b>  <a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">von Neumann</a>&nbsp;<b>·</b> <a href=\"/wiki/Peter_Higgs\" title=\"Peter Higgs\">Higgs</a>&nbsp;<b>·</b>  <a href=\"/wiki/Otto_Hahn\" title=\"Otto Hahn\">Hahn</a>&nbsp;<b>·</b>  <a href=\"/wiki/Richard_Feynman\" title=\"Richard Feynman\">Feynman</a>&nbsp;<b>·</b>  <a href=\"/wiki/Tsung-Dao_Lee\" title=\"Tsung-Dao Lee\">Lee</a>&nbsp;<b>·</b>  <a href=\"/wiki/Philipp_Lenard\" title=\"Philipp Lenard\">Lenard</a>&nbsp;<b>·</b> <a href=\"/wiki/Abdus_Salam\" title=\"Abdus Salam\">Salam</a>&nbsp;<b>·</b>  <a href=\"/wiki/Gerard_%27t_Hooft\" title=\"Gerard \'t Hooft\">\'t Hooft</a>&nbsp;<b>·</b>  <a href=\"/wiki/John_Stewart_Bell\" title=\"John Stewart Bell\">Bell</a>&nbsp;<b>·</b>  <a href=\"/wiki/Murray_Gell-Mann\" title=\"Murray Gell-Mann\">Gell-Mann</a>&nbsp;<b>·</b>  <a href=\"/wiki/J._J._Thomson\" title=\"J. J. Thomson\">J. J. Thomson</a> &nbsp;<b>·</b>  <a href=\"/wiki/C._V._Raman\" title=\"C. V. Raman\">Raman</a>&nbsp;<b>·</b>  <a href=\"/wiki/William_Lawrence_Bragg\" title=\"William Lawrence Bragg\">Bragg</a>&nbsp;<b>·</b>  <a href=\"/wiki/John_Bardeen\" title=\"John Bardeen\">Bardeen</a>&nbsp;<b>·</b>  <a href=\"/wiki/William_Shockley\" title=\"William Shockley\">Shockley</a>&nbsp;<b>·</b>  <a href=\"/wiki/James_Chadwick\" title=\"James Chadwick\">Chadwick</a>&nbsp;<b>·</b>  <a href=\"/wiki/Ernest_O._Lawrence\" title=\"Ernest O. Lawrence\" class=\"mw-redirect\">Lawrence</a>&nbsp;<b>·</b>  <a href=\"/wiki/Anton_Zeilinger\" title=\"Anton Zeilinger\">Zeilinger</a></div>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr>" + 
 "<td style=\"text-align:right;font-size:115%;padding-top: 0.6em;\">" + 
 "<div class=\"plainlinks hlist navbar mini\">" + 
 "<ul>" + 
 "<li class=\"nv-view\"><a href=\"/wiki/Template:Modern_physics\" title=\"Template:Modern physics\"><abbr title=\"View this template\">v</abbr></a></li>" + 
 "<li class=\"nv-talk\"><a href=\"/wiki/Template_talk:Modern_physics\" title=\"Template talk:Modern physics\"><abbr title=\"Discuss this template\">t</abbr></a></li>" + 
 "<li class=\"nv-edit\"><a class=\"external text\" href=\"//en.wikipedia.org/w/index.php?title=Template:Modern_physics&amp;action=edit\"><abbr title=\"Edit this template\">e</abbr></a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/History_of_quantum_mechanics\" title=\"History of quantum mechanics\">History of quantum mechanics</a></div>" + 
 "<p>Scientific inquiry into the wave nature of light began in the 17th and 18th centuries, when scientists such as <a href=\"/wiki/Robert_Hooke\" title=\"Robert Hooke\">Robert Hooke</a>, <a href=\"/wiki/Christiaan_Huygens\" title=\"Christiaan Huygens\">Christiaan Huygens</a> and <a href=\"/wiki/Leonhard_Euler\" title=\"Leonhard Euler\">Leonhard Euler</a> proposed a wave theory of light based on experimental observations.<sup id=\"cite_ref-Born_.26_Wolf_1-0\" class=\"reference\"><a href=\"#cite_note-Born_.26_Wolf-1\"><span>[</span>1<span>]</span></a></sup> In 1803, <a href=\"/wiki/Thomas_Young_(scientist)\" title=\"Thomas Young (scientist)\">Thomas Young</a>, an English <a href=\"/wiki/Polymath\" title=\"Polymath\">polymath</a>, performed the famous <a href=\"/wiki/Young%27s_interference_experiment\" title=\"Young\'s interference experiment\">double-slit experiment</a> that he later described in a paper entitled <i>On the nature of light and colours</i>. This experiment played a major role in the general acceptance of the <a href=\"/wiki/Wave_theory_of_light\" title=\"Wave theory of light\" class=\"mw-redirect\">wave theory of light</a>.</p>" + 
 "<p>In 1838, <a href=\"/wiki/Michael_Faraday\" title=\"Michael Faraday\">Michael Faraday</a> discovered <a href=\"/wiki/Cathode_ray\" title=\"Cathode ray\">cathode rays</a>. These studies were followed by the 1859 statement of the <a href=\"/wiki/Black-body_radiation\" title=\"Black-body radiation\">black-body radiation</a> problem by <a href=\"/wiki/Gustav_Kirchhoff\" title=\"Gustav Kirchhoff\">Gustav Kirchhoff</a>, the 1877 suggestion by <a href=\"/wiki/Ludwig_Boltzmann\" title=\"Ludwig Boltzmann\">Ludwig Boltzmann</a> that the energy states of a physical system can be discrete, and the 1900 quantum hypothesis of <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a>.<sup id=\"cite_ref-2\" class=\"reference\"><a href=\"#cite_note-2\"><span>[</span>2<span>]</span></a></sup> Planck\'s hypothesis that energy is radiated and absorbed in discrete \"quanta\" (or energy elements) precisely matched the observed patterns of black-body radiation.</p>" + 
 "<p>In 1896, <a href=\"/wiki/Wilhelm_Wien\" title=\"Wilhelm Wien\">Wilhelm Wien</a> empirically determined a distribution law of black-body radiation,<sup id=\"cite_ref-3\" class=\"reference\"><a href=\"#cite_note-3\"><span>[</span>3<span>]</span></a></sup> known as <a href=\"/wiki/Wien_approximation\" title=\"Wien approximation\">Wien\'s law</a> in his honor. Ludwig Boltzmann independently arrived at this result by considerations of <a href=\"/wiki/Maxwell%27s_equations\" title=\"Maxwell\'s equations\">Maxwell\'s equations</a>. However, it was valid only at high frequencies and underestimated the radiance at low frequencies. Later, Planck corrected this model using Boltzmann\'s statistical interpretation of thermodynamics and proposed what is now called <a href=\"/wiki/Planck%27s_law\" title=\"Planck\'s law\">Planck\'s law</a>, which led to the development of quantum mechanics.</p>" + 
 "<p>Following <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a>\'s solution in 1900 to the black-body radiation problem (reported 1859), <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a> offered a quantum-based theory to explain the <a href=\"/wiki/Photoelectric_effect\" title=\"Photoelectric effect\">photoelectric effect</a> (1905, reported 1887). Around 1900-1910, the <a href=\"/wiki/Atomic_theory\" title=\"Atomic theory\">atomic theory</a> and the <a href=\"/wiki/Corpuscular_theory_of_light\" title=\"Corpuscular theory of light\">corpuscular theory of light</a><sup id=\"cite_ref-4\" class=\"reference\"><a href=\"#cite_note-4\"><span>[</span>4<span>]</span></a></sup> first came to be widely accepted as scientific fact; these latter theories can be viewed as quantum theories of <a href=\"/wiki/Matter\" title=\"Matter\">matter</a> and <a href=\"/wiki/Electromagnetic_radiation\" title=\"Electromagnetic radiation\">electromagnetic radiation</a>, respectively.</p>" + 
 "<p>Among the first to study quantum phenomena in nature were <a href=\"/wiki/Arthur_Compton\" title=\"Arthur Compton\">Arthur Compton</a>, <a href=\"/wiki/C._V._Raman\" title=\"C. V. Raman\">C. V. Raman</a>, and <a href=\"/wiki/Pieter_Zeeman\" title=\"Pieter Zeeman\">Pieter Zeeman</a>, each of whom has a quantum effect named after him. <a href=\"/wiki/Robert_Andrews_Millikan\" title=\"Robert Andrews Millikan\">Robert Andrews Millikan</a> studied the <a href=\"/wiki/Photoelectric_effect\" title=\"Photoelectric effect\">photoelectric effect</a> experimentally, and Albert Einstein developed a theory for it. At the same time, <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a> developed his theory of the atomic structure, which was later confirmed by the experiments of <a href=\"/wiki/Henry_Moseley\" title=\"Henry Moseley\">Henry Moseley</a>. In 1913, <a href=\"/wiki/Peter_Debye\" title=\"Peter Debye\">Peter Debye</a> extended Niels Bohr\'s theory of atomic structure, introducing <a href=\"/wiki/Elliptical_orbit\" title=\"Elliptical orbit\" class=\"mw-redirect\">elliptical orbits</a>, a concept also introduced by <a href=\"/wiki/Arnold_Sommerfeld\" title=\"Arnold Sommerfeld\">Arnold Sommerfeld</a>.<sup id=\"cite_ref-5\" class=\"reference\"><a href=\"#cite_note-5\"><span>[</span>5<span>]</span></a></sup> This phase is known as <a href=\"/wiki/Old_quantum_theory\" title=\"Old quantum theory\">old quantum theory</a>.</p>" + 
 "<p>According to Planck, each energy element (<i>E</i>) is proportional to its <a href=\"/wiki/Frequency\" title=\"Frequency\">frequency</a> (<i>ν</i>):</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" E = h \nu\ \" src=\"//upload.wikimedia.org/math/7/2/a/72a186f3866ae93fc82a18d65b7b7644.png\"></dd>" + 
 "</dl>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:172px;\"><a href=\"/wiki/File:Max_Planck_(1858-1947).jpg\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_%281858-1947%29.jpg/170px-Max_Planck_%281858-1947%29.jpg\" width=\"170\" height=\"239\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_%281858-1947%29.jpg/255px-Max_Planck_%281858-1947%29.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Max_Planck_%281858-1947%29.jpg/340px-Max_Planck_%281858-1947%29.jpg 2x\" data-file-width=\"1810\" data-file-height=\"2542\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Max_Planck_(1858-1947).jpg\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "<a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a> is considered the father of the quantum theory.</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>where <i>h</i> is <a href=\"/wiki/Planck_constant\" title=\"Planck constant\">Planck\'s constant</a>.</p>" + 
 "<p>Planck cautiously insisted that this was simply an aspect of the <i>processes</i> of absorption and emission of radiation and had nothing to do with the <i>physical reality</i> of the radiation itself.<sup id=\"cite_ref-6\" class=\"reference\"><a href=\"#cite_note-6\"><span>[</span>6<span>]</span></a></sup> In fact, he considered his <a href=\"/wiki/Quantum_hypothesis\" title=\"Quantum hypothesis\" class=\"mw-redirect\">quantum hypothesis</a> a mathematical trick to get the right answer rather than a sizable discovery.<sup id=\"cite_ref-Kragh_7-0\" class=\"reference\"><a href=\"#cite_note-Kragh-7\"><span>[</span>7<span>]</span></a></sup> However, in 1905 <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a> interpreted Planck\'s quantum hypothesis <a href=\"/wiki/Local_realism\" title=\"Local realism\" class=\"mw-redirect\">realistically</a> and used it to explain the <a href=\"/wiki/Photoelectric_effect\" title=\"Photoelectric effect\">photoelectric effect</a>, in which shining light on certain materials can eject electrons from the material. He won the 1921 Nobel Prize in Physics for this work.</p>" + 
 "<p>Einstein further developed this idea to show that an electromagnetic wave such as light could also be described as a particle (later called the <a href=\"/wiki/Photon\" title=\"Photon\">photon</a>), with a discrete quantum of energy that was dependent on its frequency.<sup id=\"cite_ref-8\" class=\"reference\"><a href=\"#cite_note-8\"><span>[</span>8<span>]</span></a></sup></p>" + 
 "<div class=\"thumb tleft\">" + 
 "<div class=\"thumbinner\" style=\"width:262px;\"><a href=\"/wiki/File:Solvay_conference_1927.jpg\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solvay_conference_1927.jpg/260px-Solvay_conference_1927.jpg\" width=\"260\" height=\"188\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solvay_conference_1927.jpg/390px-Solvay_conference_1927.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Solvay_conference_1927.jpg/520px-Solvay_conference_1927.jpg 2x\" data-file-width=\"3000\" data-file-height=\"2171\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Solvay_conference_1927.jpg\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "The 1927 <a href=\"/wiki/Solvay_Conference\" title=\"Solvay Conference\">Solvay Conference</a> in <a href=\"/wiki/Brussels\" title=\"Brussels\">Brussels</a>.</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>The foundations of quantum mechanics were established during the first half of the 20th century by <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a>, <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a>, <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Werner Heisenberg</a>, <a href=\"/wiki/Louis_de_Broglie\" title=\"Louis de Broglie\">Louis de Broglie</a>, <a href=\"/wiki/Arthur_Compton\" title=\"Arthur Compton\">Arthur Compton</a>, <a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a>, <a href=\"/wiki/Erwin_Schr%C3%B6dinger\" title=\"Erwin Schrödinger\">Erwin Schrödinger</a>, <a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a>, <a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">John von Neumann</a>, <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Paul Dirac</a>, <a href=\"/wiki/Enrico_Fermi\" title=\"Enrico Fermi\">Enrico Fermi</a>, <a href=\"/wiki/Wolfgang_Pauli\" title=\"Wolfgang Pauli\">Wolfgang Pauli</a>, <a href=\"/wiki/Max_von_Laue\" title=\"Max von Laue\">Max von Laue</a>, <a href=\"/wiki/Freeman_Dyson\" title=\"Freeman Dyson\">Freeman Dyson</a>, <a href=\"/wiki/David_Hilbert\" title=\"David Hilbert\">David Hilbert</a>, <a href=\"/wiki/Wilhelm_Wien\" title=\"Wilhelm Wien\">Wilhelm Wien</a>, <a href=\"/wiki/Satyendra_Nath_Bose\" title=\"Satyendra Nath Bose\">Satyendra Nath Bose</a>, <a href=\"/wiki/Arnold_Sommerfeld\" title=\"Arnold Sommerfeld\">Arnold Sommerfeld</a>, and <a href=\"/wiki/Category:Quantum_physicists\" title=\"Category:Quantum physicists\">others</a>. The <a href=\"/wiki/Copenhagen_interpretation\" title=\"Copenhagen interpretation\">Copenhagen interpretation</a> of <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a> became widely accepted.</p>" + 
 "<p>In the mid-1920s, developments in quantum mechanics led to its becoming the standard formulation for atomic physics. In the summer of 1925, Bohr and Heisenberg published results that closed the old quantum theory. Out of deference to their particle-like behavior in certain processes and measurements, light quanta came to be called <a href=\"/wiki/Photon\" title=\"Photon\">photons</a> (1926). From Einstein\'s simple postulation was born a flurry of debating, theorizing, and testing. Thus, the entire field of <a href=\"/wiki/Quantum_physics\" title=\"Quantum physics\" class=\"mw-redirect\">quantum physics</a> emerged, leading to its wider acceptance at the Fifth <a href=\"/wiki/Solvay_Conference\" title=\"Solvay Conference\">Solvay Conference</a> in 1927.</p>" + 
 "<p>It was found that <a href=\"/wiki/Subatomic_particles\" title=\"Subatomic particles\" class=\"mw-redirect\">subatomic particles</a> and electromagnetic waves are neither simply particle nor wave but have certain properties of each. This originated the concept of <a href=\"/wiki/Wave%E2%80%93particle_duality\" title=\"Wave–particle duality\">wave–particle duality</a>.</p>" + 
 "<p>By 1930, quantum mechanics had been further unified and formalized by the work of <a href=\"/wiki/David_Hilbert\" title=\"David Hilbert\">David Hilbert</a>, <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Paul Dirac</a> and <a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">John von Neumann</a><sup id=\"cite_ref-9\" class=\"reference\"><a href=\"#cite_note-9\"><span>[</span>9<span>]</span></a></sup> with greater emphasis on <a href=\"/wiki/Measurement_in_quantum_mechanics\" title=\"Measurement in quantum mechanics\">measurement</a>, the statistical nature of our knowledge of reality, and <a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">philosophical speculation about the \'observer\'</a>. It has since permeated many disciplines including <a href=\"/wiki/Quantum_chemistry\" title=\"Quantum chemistry\">quantum chemistry</a>, <a href=\"/wiki/Quantum_electronics\" title=\"Quantum electronics\" class=\"mw-redirect\">quantum electronics</a>, <a href=\"/wiki/Quantum_optics\" title=\"Quantum optics\">quantum optics</a>, and <a href=\"/wiki/Quantum_information_science\" title=\"Quantum information science\">quantum information science</a>. Its speculative modern developments include <a href=\"/wiki/String_theory\" title=\"String theory\">string theory</a> and <a href=\"/wiki/Quantum_gravity\" title=\"Quantum gravity\">quantum gravity</a> theories. It also provides a useful framework for many features of the modern <a href=\"/wiki/Periodic_table\" title=\"Periodic table\">periodic table of elements</a>, and describes the behaviors of <a href=\"/wiki/Atoms\" title=\"Atoms\" class=\"mw-redirect\">atoms</a> during <a href=\"/wiki/Chemical_bond\" title=\"Chemical bond\">chemical bonding</a> and the flow of <a href=\"/wiki/Electron\" title=\"Electron\">electrons</a> in computer <a href=\"/wiki/Semiconductor\" title=\"Semiconductor\">semiconductors</a>, and therefore plays a crucial role in many modern technologies.</p>" + 
 "<p>While quantum mechanics was constructed to describe the world of the very small, it is also needed to explain some <a href=\"/wiki/Macroscopic\" title=\"Macroscopic\" class=\"mw-redirect\">macroscopic</a> phenomena such as <a href=\"/wiki/Superconductivity\" title=\"Superconductivity\">superconductors</a>,<sup id=\"cite_ref-10\" class=\"reference\"><a href=\"#cite_note-10\"><span>[</span>10<span>]</span></a></sup> and <a href=\"/wiki/Superfluid\" title=\"Superfluid\" class=\"mw-redirect\">superfluids</a>.<sup id=\"cite_ref-11\" class=\"reference\"><a href=\"#cite_note-11\"><span>[</span>11<span>]</span></a></sup></p>" + 
 "<p>The word <i>quantum</i> derives from the <a href=\"/wiki/Latin_language\" title=\"Latin language\" class=\"mw-redirect\">Latin</a>, meaning \"how great\" or \"how much\".<sup id=\"cite_ref-12\" class=\"reference\"><a href=\"#cite_note-12\"><span>[</span>12<span>]</span></a></sup> In quantum mechanics, it refers to a discrete unit assigned to certain <a href=\"/wiki/Physical_quantity\" title=\"Physical quantity\">physical quantities</a> such as the <a href=\"/wiki/Energy\" title=\"Energy\">energy</a> of an <a href=\"/wiki/Atom\" title=\"Atom\">atom</a> at rest (see Figure 1). The discovery that particles are discrete packets of energy with wave-like properties led to the branch of physics dealing with atomic and subatomic systems which is today called quantum mechanics. It underlies the <a href=\"/wiki/Mathematical\" title=\"Mathematical\" class=\"mw-redirect\">mathematical</a> framework of many fields of <a href=\"/wiki/Physics\" title=\"Physics\">physics</a> and <a href=\"/wiki/Chemistry\" title=\"Chemistry\">chemistry</a>, including <a href=\"/wiki/Condensed_matter_physics\" title=\"Condensed matter physics\">condensed matter physics</a>, <a href=\"/wiki/Solid-state_physics\" title=\"Solid-state physics\">solid-state physics</a>, <a href=\"/wiki/Atomic_physics\" title=\"Atomic physics\">atomic physics</a>, <a href=\"/wiki/Molecular_physics\" title=\"Molecular physics\">molecular physics</a>, <a href=\"/wiki/Computational_physics\" title=\"Computational physics\">computational physics</a>, <a href=\"/wiki/Computational_chemistry\" title=\"Computational chemistry\">computational chemistry</a>, <a href=\"/wiki/Quantum_chemistry\" title=\"Quantum chemistry\">quantum chemistry</a>, <a href=\"/wiki/Particle_physics\" title=\"Particle physics\">particle physics</a>, <a href=\"/wiki/Nuclear_chemistry\" title=\"Nuclear chemistry\">nuclear chemistry</a>, and <a href=\"/wiki/Nuclear_physics\" title=\"Nuclear physics\">nuclear physics</a>.<sup id=\"cite_ref-13\" class=\"reference\"><a href=\"#cite_note-13\"><span>[</span>13<span>]</span></a></sup> Some fundamental aspects of the theory are still actively studied.<sup id=\"cite_ref-14\" class=\"reference\"><a href=\"#cite_note-14\"><span>[</span>14<span>]</span></a></sup></p>" + 
 "<p>Quantum mechanics is essential to understanding the behavior of systems at <a href=\"/wiki/Atom\" title=\"Atom\">atomic</a> length scales and smaller. If the physical nature of an atom was solely described by <a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">classical mechanics</a>, electrons would not <i>orbit</i> the nucleus, since orbiting electrons emit radiation (due to <a href=\"/wiki/Circular_motion\" title=\"Circular motion\">circular motion</a>) and would eventually collide with the nucleus due to this loss of energy. This framework was unable to explain the stability of atoms. Instead, electrons remain in an uncertain, non-deterministic, <i>smeared</i>, <a href=\"/wiki/Probability\" title=\"Probability\">probabilistic</a> wave–particle <a href=\"/wiki/Atomic_orbital\" title=\"Atomic orbital\">orbital</a> about the nucleus, defying the traditional assumptions of classical mechanics and <a href=\"/wiki/Electromagnetism\" title=\"Electromagnetism\">electromagnetism</a>.<sup id=\"cite_ref-15\" class=\"reference\"><a href=\"#cite_note-15\"><span>[</span>15<span>]</span></a></sup></p>" + 
 "<p>Quantum mechanics was initially developed to provide a better explanation and description of the atom, especially the differences in the <a href=\"/wiki/Spectrum\" title=\"Spectrum\">spectra</a> of light emitted by different <a href=\"/wiki/Isotope\" title=\"Isotope\">isotopes</a> of the same <a href=\"/wiki/Chemical_element\" title=\"Chemical element\">chemical element</a>, as well as subatomic particles. In short, the quantum-mechanical atomic model has succeeded spectacularly in the realm where classical mechanics and electromagnetism falter.</p>" + 
 "<p>Broadly speaking, quantum mechanics incorporates four classes of phenomena for which classical physics cannot account:</p>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Quantization_(physics)\" title=\"Quantization (physics)\">quantization</a> of <a href=\"/wiki/Canonical_conjugate_variables\" title=\"Canonical conjugate variables\" class=\"mw-redirect\">certain physical properties</a></li>" + 
 "<li><a href=\"/wiki/Quantum_entanglement\" title=\"Quantum entanglement\">quantum entanglement</a></li>" + 
 "<li><a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">principle of uncertainty</a></li>" + 
 "<li><a href=\"/wiki/Wave%E2%80%93particle_duality\" title=\"Wave–particle duality\">wave–particle duality</a></li>" + 
 "</ul>" + 
 "<h2><span class=\"mw-headline\" id=\"Mathematical_formulations\">Mathematical formulations</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=2\" title=\"Edit section: Mathematical formulations\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Mathematical_formulation_of_quantum_mechanics\" title=\"Mathematical formulation of quantum mechanics\">Mathematical formulation of quantum mechanics</a></div>" + 
 "<div class=\"hatnote\">See also: <a href=\"/wiki/Quantum_logic\" title=\"Quantum logic\">Quantum logic</a></div>" + 
 "<p>In the mathematically rigorous formulation of quantum mechanics developed by <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Paul Dirac</a>,<sup id=\"cite_ref-16\" class=\"reference\"><a href=\"#cite_note-16\"><span>[</span>16<span>]</span></a></sup> <a href=\"/wiki/David_Hilbert\" title=\"David Hilbert\">David Hilbert</a>,<sup id=\"cite_ref-17\" class=\"reference\"><a href=\"#cite_note-17\"><span>[</span>17<span>]</span></a></sup> <a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">John von Neumann</a>,<sup id=\"cite_ref-18\" class=\"reference\"><a href=\"#cite_note-18\"><span>[</span>18<span>]</span></a></sup> and <a href=\"/wiki/Hermann_Weyl\" title=\"Hermann Weyl\">Hermann Weyl</a>,<sup id=\"cite_ref-19\" class=\"reference\"><a href=\"#cite_note-19\"><span>[</span>19<span>]</span></a></sup> the possible states of a quantum mechanical system are represented by <a href=\"/wiki/Unit_vector\" title=\"Unit vector\">unit vectors</a> (called <i>state vectors</i>). Formally, these reside in a <a href=\"/wiki/Complex_number\" title=\"Complex number\">complex</a> <a href=\"/wiki/Separable_space\" title=\"Separable space\">separable</a> <a href=\"/wiki/Hilbert_space\" title=\"Hilbert space\">Hilbert space</a>—variously called the <a href=\"/wiki/State_space_(physics)\" title=\"State space (physics)\"><i>state space</i></a> or the <i>associated Hilbert space</i> of the system—that is well defined up to a complex number of norm 1 (the phase factor). In other words, the possible states are points in the <a href=\"/wiki/Projective_space\" title=\"Projective space\">projective space</a> of a Hilbert space, usually called the <a href=\"/wiki/Complex_projective_space\" title=\"Complex projective space\">complex projective space</a>. The exact nature of this Hilbert space is dependent on the system—for example, the state space for position and momentum states is the space of <a href=\"/wiki/Square-integrable\" title=\"Square-integrable\" class=\"mw-redirect\">square-integrable</a> functions, while the state space for the spin of a single proton is just the product of two complex planes. Each observable is represented by a maximally <a href=\"/wiki/Hermitian_adjoint\" title=\"Hermitian adjoint\">Hermitian</a> (precisely: by a <a href=\"/wiki/Self-adjoint_operator\" title=\"Self-adjoint operator\">self-adjoint</a>) linear <a href=\"/wiki/Operator_(physics)\" title=\"Operator (physics)\">operator</a> acting on the state space. Each <a href=\"/wiki/Eigenstate\" title=\"Eigenstate\" class=\"mw-redirect\">eigenstate</a> of an observable corresponds to an <a href=\"/wiki/Eigenvector\" title=\"Eigenvector\" class=\"mw-redirect\">eigenvector</a> of the operator, and the associated <a href=\"/wiki/Eigenvalue\" title=\"Eigenvalue\" class=\"mw-redirect\">eigenvalue</a> corresponds to the value of the observable in that eigenstate. If the operator\'s spectrum is discrete, the observable can attain only those discrete eigenvalues.</p>" + 
 "<p>In the formalism of quantum mechanics, the state of a system at a given time is described by a <a href=\"/wiki/Complex_number\" title=\"Complex number\">complex</a> <a href=\"/wiki/Wave_function\" title=\"Wave function\">wave function</a>, also referred to as state vector in a complex <a href=\"/wiki/Vector_space\" title=\"Vector space\">vector space</a>.<sup id=\"cite_ref-20\" class=\"reference\"><a href=\"#cite_note-20\"><span>[</span>20<span>]</span></a></sup> This abstract mathematical object allows for the calculation of <a href=\"/wiki/Probability\" title=\"Probability\">probabilities</a> of outcomes of concrete experiments. For example, it allows one to compute the probability of finding an electron in a particular region around the nucleus at a particular time. Contrary to classical mechanics, one can never make simultaneous predictions of <a href=\"/wiki/Conjugate_variables\" title=\"Conjugate variables\">conjugate variables</a>, such as position and momentum, with accuracy. For instance, electrons may be considered (to a certain probability) to be located somewhere within a given region of space, but with their exact positions unknown. Contours of constant probability, often referred to as \"clouds\", may be drawn around the nucleus of an atom to conceptualize where the electron might be located with the most probability. Heisenberg\'s <a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">uncertainty principle</a> quantifies the inability to precisely locate the particle given its conjugate momentum.<sup id=\"cite_ref-21\" class=\"reference\"><a href=\"#cite_note-21\"><span>[</span>21<span>]</span></a></sup></p>" + 
 "<p>According to one interpretation, as the result of a measurement the wave function containing the probability information for a system collapses from a given initial state to a particular eigenstate. The possible results of a measurement are the eigenvalues of the operator representing the observable—which explains the choice of <i>Hermitian</i> operators, for which all the eigenvalues are real. The probability distribution of an observable in a given state can be found by computing the <a href=\"/wiki/Spectral_theorem\" title=\"Spectral theorem\">spectral decomposition</a> of the corresponding operator. Heisenberg\'s <a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">uncertainty principle</a> is represented by the statement that the operators corresponding to certain observables do not <a href=\"/wiki/Commutator\" title=\"Commutator\">commute</a>.</p>" + 
 "<p>The <a href=\"/wiki/Probability\" title=\"Probability\">probabilistic</a> nature of quantum mechanics thus stems from the act of measurement. This is one of the most difficult aspects of quantum systems to understand. It was the central topic in the famous <a href=\"/wiki/Bohr%E2%80%93Einstein_debates\" title=\"Bohr–Einstein debates\">Bohr–Einstein debates</a>, in which the two scientists attempted to clarify these fundamental principles by way of <a href=\"/wiki/Thought_experiment\" title=\"Thought experiment\">thought experiments</a>. In the decades after the formulation of quantum mechanics, the question of what constitutes a \"measurement\" has been extensively studied. Newer <a href=\"/wiki/Interpretation_of_quantum_mechanics\" title=\"Interpretation of quantum mechanics\" class=\"mw-redirect\">interpretations of quantum mechanics</a> have been formulated that do away with the concept of \"wave function collapse\" (see, for example, the <a href=\"/wiki/Relative_state_interpretation\" title=\"Relative state interpretation\" class=\"mw-redirect\">relative state interpretation</a>). The basic idea is that when a quantum system interacts with a measuring apparatus, their respective wave functions become <a href=\"/wiki/Quantum_Entanglement\" title=\"Quantum Entanglement\" class=\"mw-redirect\">entangled</a>, so that the original quantum system ceases to exist as an independent entity. For details, see the article on <a href=\"/wiki/Measurement_in_quantum_mechanics\" title=\"Measurement in quantum mechanics\">measurement in quantum mechanics</a>.<sup id=\"cite_ref-google215_22-0\" class=\"reference\"><a href=\"#cite_note-google215-22\"><span>[</span>22<span>]</span></a></sup></p>" + 
 "<p>Generally, quantum mechanics does not assign definite values. Instead, it makes a prediction using a <a href=\"/wiki/Probability_distribution\" title=\"Probability distribution\">probability distribution</a>; that is, it describes the probability of obtaining the possible outcomes from measuring an observable. Often these results are skewed by many causes, such as dense probability clouds. Probability clouds are approximate (but better than <a href=\"/wiki/Bohr_model\" title=\"Bohr model\">the Bohr model</a>) whereby electron location is given by a <a href=\"/wiki/Probability_function\" title=\"Probability function\" class=\"mw-redirect\">probability function</a>, the <a href=\"/wiki/Wave_function\" title=\"Wave function\">wave function</a> <a href=\"/wiki/Eigenvalue\" title=\"Eigenvalue\" class=\"mw-redirect\">eigenvalue</a>, such that the probability is the squared modulus of the <a href=\"/wiki/Probability_amplitude\" title=\"Probability amplitude\">complex amplitude</a>, or quantum state nuclear attraction.<sup id=\"cite_ref-23\" class=\"reference\"><a href=\"#cite_note-23\"><span>[</span>23<span>]</span></a></sup><sup id=\"cite_ref-24\" class=\"reference\"><a href=\"#cite_note-24\"><span>[</span>24<span>]</span></a></sup> Naturally, these probabilities will depend on the quantum state at the \"instant\" of the measurement. Hence, uncertainty is involved in the value. There are, however, certain states that are associated with a definite value of a particular observable. These are known as <a href=\"/wiki/Eigenstate\" title=\"Eigenstate\" class=\"mw-redirect\">eigenstates</a> of the observable (\"eigen\" can be translated from <a href=\"/wiki/German_language\" title=\"German language\">German</a> as meaning \"inherent\" or \"characteristic\").<sup id=\"cite_ref-25\" class=\"reference\"><a href=\"#cite_note-25\"><span>[</span>25<span>]</span></a></sup></p>" + 
 "<p>In the everyday world, it is natural and intuitive to think of everything (every observable) as being in an eigenstate. Everything appears to have a definite position, a definite momentum, a definite energy, and a definite time of occurrence. However, quantum mechanics does not pinpoint the exact values of a particle\'s position and momentum (since they are <a href=\"/wiki/Conjugate_variables\" title=\"Conjugate variables\">conjugate pairs</a>) or its energy and time (since they too are conjugate pairs); rather, it provides only a range of probabilities in which that particle might be given its momentum and momentum probability. Therefore, it is helpful to use different words to describe states having <i><a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">uncertain</a></i> values and states having <i>definite</i> values (eigenstates). Usually, a system will not be in an <a href=\"/wiki/Eigenstate\" title=\"Eigenstate\" class=\"mw-redirect\">eigenstate</a> of the observable (particle) we are interested in. However, if one measures the observable, the wave function will instantaneously be an eigenstate (or \"generalized\" eigenstate) of that observable. This process is known as <a href=\"/wiki/Wave_function_collapse\" title=\"Wave function collapse\">wave function collapse</a>, a controversial and much-debated process<sup id=\"cite_ref-26\" class=\"reference\"><a href=\"#cite_note-26\"><span>[</span>26<span>]</span></a></sup> that involves expanding the system under study to include the measurement device. If one knows the corresponding wave function at the instant before the measurement, one will be able to compute the probability of the wave function collapsing into each of the possible eigenstates. For example, the free particle in the previous example will usually have a wave function that is a <a href=\"/wiki/Wave_packet\" title=\"Wave packet\">wave packet</a> centered around some mean position <i>x</i><sub>0</sub> (neither an eigenstate of position nor of momentum). When one measures the position of the particle, it is impossible to predict with certainty the result.<sup id=\"cite_ref-google215_22-1\" class=\"reference\"><a href=\"#cite_note-google215-22\"><span>[</span>22<span>]</span></a></sup> It is probable, but not certain, that it will be near <i>x</i><sub>0</sub>, where the amplitude of the wave function is large. After the measurement is performed, having obtained some result <i>x</i>, the wave function collapses into a position eigenstate centered at <i>x</i>.<sup id=\"cite_ref-27\" class=\"reference\"><a href=\"#cite_note-27\"><span>[</span>27<span>]</span></a></sup></p>" + 
 "<p>The time evolution of a quantum state is described by the <a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger equation</a>, in which the <a href=\"/wiki/Hamiltonian_(quantum_mechanics)\" title=\"Hamiltonian (quantum mechanics)\">Hamiltonian</a> (the <a href=\"/wiki/Operator_(physics)\" title=\"Operator (physics)\">operator</a> corresponding to the <a href=\"/wiki/Total_energy\" title=\"Total energy\" class=\"mw-redirect\">total energy</a> of the system) generates the time evolution. The <a href=\"/wiki/Time_evolution\" title=\"Time evolution\">time evolution</a> of wave functions is <a href=\"/wiki/Determinism\" title=\"Determinism\">deterministic</a> in the sense that - given a wave function at an <i>initial</i> time - it makes a definite prediction of what the wave function will be at any <i>later</i> time.<sup id=\"cite_ref-28\" class=\"reference\"><a href=\"#cite_note-28\"><span>[</span>28<span>]</span></a></sup></p>" + 
 "<p>During a <a href=\"/wiki/Quantum_measurement\" title=\"Quantum measurement\" class=\"mw-redirect\">measurement</a>, on the other hand, the change of the initial wave function into another, later wave function is not deterministic, it is unpredictable (i.e., <a href=\"/wiki/Random\" title=\"Random\" class=\"mw-redirect\">random</a>). A time-evolution simulation can be seen here.<sup id=\"cite_ref-29\" class=\"reference\"><a href=\"#cite_note-29\"><span>[</span>29<span>]</span></a></sup><sup id=\"cite_ref-30\" class=\"reference\"><a href=\"#cite_note-30\"><span>[</span>30<span>]</span></a></sup></p>" + 
 "<p>Wave functions change as time progresses. The <a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger equation</a> describes how wave functions change in time, playing a role similar to <a href=\"/wiki/Newton%27s_second_law\" title=\"Newton\'s second law\" class=\"mw-redirect\">Newton\'s second law</a> in <a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">classical mechanics</a>. The Schrödinger equation, applied to the aforementioned example of the free particle, predicts that the center of a wave packet will move through space at a constant velocity (like a classical particle with no forces acting on it). However, the wave packet will also spread out as time progresses, which means that the position becomes more uncertain with time. This also has the effect of turning a position eigenstate (which can be thought of as an infinitely sharp wave packet) into a broadened wave packet that no longer represents a (definite, certain) position eigenstate.<sup id=\"cite_ref-31\" class=\"reference\"><a href=\"#cite_note-31\"><span>[</span>31<span>]</span></a></sup></p>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:277px;\"><a href=\"/wiki/File:HAtomOrbitals.png\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/HAtomOrbitals.png/275px-HAtomOrbitals.png\" width=\"275\" height=\"275\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/c/cf/HAtomOrbitals.png 1.5x, //upload.wikimedia.org/wikipedia/commons/c/cf/HAtomOrbitals.png 2x\" data-file-width=\"316\" data-file-height=\"316\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:HAtomOrbitals.png\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "Fig. 1: <a href=\"/wiki/Probability_density_function\" title=\"Probability density function\">Probability densities</a> corresponding to the wave functions of an electron in a hydrogen atom possessing definite energy levels (increasing from the top of the image to the bottom: <i>n</i> = 1, 2, 3, ...) and angular momenta (increasing across from left to right: <i>s</i>, <i>p</i>, <i>d</i>, ...). Brighter areas correspond to higher probability density in a position measurement. Such wave functions are directly comparable to <a href=\"/wiki/Chladni%27s_figures\" title=\"Chladni\'s figures\" class=\"mw-redirect\">Chladni\'s figures</a> of <a href=\"/wiki/Acoustics\" title=\"Acoustics\">acoustic</a> modes of vibration in <a href=\"/wiki/Classical_physics\" title=\"Classical physics\">classical physics</a>, and are modes of oscillation as well, possessing a sharp <a href=\"/wiki/Energy\" title=\"Energy\">energy</a> and, thus, a definite <a href=\"/wiki/Frequency\" title=\"Frequency\">frequency</a>. The <a href=\"/wiki/Angular_momentum\" title=\"Angular momentum\">angular momentum</a> and energy are <a href=\"/wiki/Quantization_(physics)\" title=\"Quantization (physics)\">quantized</a>, and take <b>only</b> discrete values like those shown (as is the case for <a href=\"/wiki/Resonant_frequency\" title=\"Resonant frequency\" class=\"mw-redirect\">resonant frequencies</a> in acoustics)</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>Some wave functions produce probability distributions that are constant, or independent of time—such as when in a <a href=\"/wiki/Eigenstate#Schr.C3.B6dinger_equation\" title=\"Eigenstate\" class=\"mw-redirect\">stationary state</a> of constant energy, time vanishes in the absolute square of the wave function. Many systems that are treated dynamically in classical mechanics are described by such \"static\" wave functions. For example, a single <a href=\"/wiki/Electron\" title=\"Electron\">electron</a> in an unexcited <a href=\"/wiki/Atom\" title=\"Atom\">atom</a> is pictured classically as a particle moving in a circular trajectory around the <a href=\"/wiki/Atomic_nucleus\" title=\"Atomic nucleus\">atomic nucleus</a>, whereas in quantum mechanics it is described by a static, <a href=\"/wiki/Spherical_coordinate_system\" title=\"Spherical coordinate system\">spherically symmetric</a> wave function surrounding the nucleus (<a href=\"/wiki/File:HAtomOrbitals.png\" title=\"File:HAtomOrbitals.png\">Fig. 1</a>) (note, however, that only the lowest angular momentum states, labeled <i>s</i>, are spherically symmetric).<sup id=\"cite_ref-32\" class=\"reference\"><a href=\"#cite_note-32\"><span>[</span>32<span>]</span></a></sup></p>" + 
 "<p>The Schrödinger equation acts on the <i>entire</i> probability amplitude, not merely its absolute value. Whereas the absolute value of the probability amplitude encodes information about probabilities, its <a href=\"/wiki/Phase_(waves)\" title=\"Phase (waves)\">phase</a> encodes information about the <a href=\"/wiki/Interference_(wave_propagation)\" title=\"Interference (wave propagation)\">interference</a> between quantum states. This gives rise to the \"wave-like\" behavior of quantum states. As it turns out, analytic solutions of the Schrödinger equation are available for only <a href=\"/wiki/List_of_quantum-mechanical_systems_with_analytical_solutions\" title=\"List of quantum-mechanical systems with analytical solutions\">a very small number of relatively simple model Hamiltonians</a>, of which the <a href=\"/wiki/Quantum_harmonic_oscillator\" title=\"Quantum harmonic oscillator\">quantum harmonic oscillator</a>, the <a href=\"/wiki/Particle_in_a_box\" title=\"Particle in a box\">particle in a box</a>, the <a href=\"/wiki/Dihydrogen_cation\" title=\"Dihydrogen cation\">dihydrogen cation</a>, and the <a href=\"/wiki/Hydrogen_atom\" title=\"Hydrogen atom\">hydrogen atom</a> are the most important representatives. Even the <a href=\"/wiki/Helium\" title=\"Helium\">helium</a> atom—which contains just one more electron than does the hydrogen atom—has defied all attempts at a fully analytic treatment.</p>" + 
 "<p>There exist several techniques for generating approximate solutions, however. In the important method known as <a href=\"/wiki/Perturbation_theory_(quantum_mechanics)\" title=\"Perturbation theory (quantum mechanics)\">perturbation theory</a>, one uses the analytic result for a simple quantum mechanical model to generate a result for a more complicated model that is related to the simpler model by (for one example) the addition of a weak <a href=\"/wiki/Potential_energy\" title=\"Potential energy\">potential energy</a>. Another method is the \"semi-classical equation of motion\" approach, which applies to systems for which quantum mechanics produces only weak (small) deviations from classical behavior. These deviations can then be computed based on the classical motion. This approach is particularly important in the field of <a href=\"/wiki/Quantum_chaos\" title=\"Quantum chaos\">quantum chaos</a>.</p>" + 
 "<h2><span class=\"mw-headline\" id=\"Mathematically_equivalent_formulations_of_quantum_mechanics\">Mathematically equivalent formulations of quantum mechanics</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=3\" title=\"Edit section: Mathematically equivalent formulations of quantum mechanics\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<p>There are numerous mathematically equivalent formulations of quantum mechanics. One of the oldest and most commonly used formulations is the \"<a href=\"/wiki/Transformation_theory_(quantum_mechanics)\" title=\"Transformation theory (quantum mechanics)\">transformation theory</a>\" proposed by <a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Paul Dirac</a>, which unifies and generalizes the two earliest formulations of quantum mechanics - <a href=\"/wiki/Matrix_mechanics\" title=\"Matrix mechanics\">matrix mechanics</a> (invented by <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Werner Heisenberg</a>) and <a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">wave mechanics</a> (invented by <a href=\"/wiki/Erwin_Schr%C3%B6dinger\" title=\"Erwin Schrödinger\">Erwin Schrödinger</a>).<sup id=\"cite_ref-33\" class=\"reference\"><a href=\"#cite_note-33\"><span>[</span>33<span>]</span></a></sup></p>" + 
 "<p>Especially since <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Werner Heisenberg</a> was awarded the <a href=\"/wiki/Nobel_Prize_in_Physics\" title=\"Nobel Prize in Physics\">Nobel Prize in Physics</a> in 1932 for the creation of quantum mechanics, the role of <a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a> in the development of QM was overlooked until the 1954 Nobel award. The role is noted in a 2005 biography of Born, which recounts his role in the matrix formulation of quantum mechanics, and the use of probability amplitudes. Heisenberg himself acknowledges having learned matrices from Born, as published in a 1940 <i><a href=\"/wiki/Festschrift\" title=\"Festschrift\">festschrift</a></i> honoring <a href=\"/wiki/Max_Planck\" title=\"Max Planck\">Max Planck</a>.<sup id=\"cite_ref-34\" class=\"reference\"><a href=\"#cite_note-34\"><span>[</span>34<span>]</span></a></sup> In the matrix formulation, the <a href=\"/wiki/Quantum_state\" title=\"Quantum state\">instantaneous state of a quantum system</a> encodes the probabilities of its measurable properties, or \"<a href=\"/wiki/Observable\" title=\"Observable\">observables</a>\". Examples of observables include <a href=\"/wiki/Energy\" title=\"Energy\">energy</a>, <a href=\"/wiki/Position_operator\" title=\"Position operator\">position</a>, <a href=\"/wiki/Momentum_operator\" title=\"Momentum operator\">momentum</a>, and <a href=\"/wiki/Angular_momentum\" title=\"Angular momentum\">angular momentum</a>. Observables can be either <a href=\"/wiki/Continuous_function\" title=\"Continuous function\">continuous</a> (e.g., the position of a particle) or <a href=\"/wiki/Discrete_mathematics\" title=\"Discrete mathematics\">discrete</a> (e.g., the energy of an electron bound to a hydrogen atom).<sup id=\"cite_ref-35\" class=\"reference\"><a href=\"#cite_note-35\"><span>[</span>35<span>]</span></a></sup> An alternative formulation of quantum mechanics is <a href=\"/wiki/Feynman\" title=\"Feynman\" class=\"mw-redirect\">Feynman</a>\'s <a href=\"/wiki/Path_integral_formulation\" title=\"Path integral formulation\">path integral formulation</a>, in which a quantum-mechanical amplitude is considered as a sum over all possible classical and non-classical paths between the initial and final states. This is the quantum-mechanical counterpart of the <a href=\"/wiki/Action_principle\" title=\"Action principle\" class=\"mw-redirect\">action principle</a> in classical mechanics.</p>" + 
 "<h2><span class=\"mw-headline\" id=\"Interactions_with_other_scientific_theories\">Interactions with other scientific theories</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=4\" title=\"Edit section: Interactions with other scientific theories\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<p>The rules of quantum mechanics are fundamental. They assert that the state space of a system is a <a href=\"/wiki/Hilbert_space\" title=\"Hilbert space\">Hilbert space</a> and that observables of that system are <a href=\"/wiki/Hermitian_operators\" title=\"Hermitian operators\" class=\"mw-redirect\">Hermitian operators</a> acting on that space—although they do not tell us which Hilbert space or which operators. These can be chosen appropriately in order to obtain a quantitative description of a quantum system. An important guide for making these choices is the <a href=\"/wiki/Correspondence_principle\" title=\"Correspondence principle\">correspondence principle</a>, which states that the predictions of quantum mechanics reduce to those of classical mechanics when a system moves to higher energies or, equivalently, larger quantum numbers, i.e. whereas a single particle exhibits a degree of randomness, in systems incorporating millions of particles averaging takes over and, at the high energy limit, the statistical probability of random behaviour approaches zero. In other words, classical mechanics is simply a quantum mechanics of large systems. This \"high energy\" limit is known as the <i>classical</i> or <i>correspondence limit</i>. One can even start from an established classical model of a particular system, then attempt to guess the underlying quantum model that would give rise to the classical model in the correspondence limit.</p>" + 
 "<table style=\"float:right; width:30%; margin:0em 1em 1em 1em; background:#eee; border:#ccc solid\">" + 
 "<tbody><tr>" + 
 "<td><a href=\"/wiki/File:Question_dropshade.png\" class=\"image\"><img alt=\"Question dropshade.png\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Question_dropshade.png/20px-Question_dropshade.png\" width=\"20\" height=\"20\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Question_dropshade.png/30px-Question_dropshade.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Question_dropshade.png/40px-Question_dropshade.png 2x\" data-file-width=\"50\" data-file-height=\"50\"></a></td>" + 
 "<td><b>Open problem in physics</b>:<br>" + 
 "<div style=\"padding:5px;\"><i>In the <a href=\"/wiki/Correspondence_limit\" title=\"Correspondence limit\" class=\"mw-redirect\">correspondence limit</a> of <b>quantum mechanics</b>: Is there a preferred interpretation of quantum mechanics? How does the quantum description of reality, which includes elements such as the \"<a href=\"/wiki/Superposition_principle\" title=\"Superposition principle\">superposition</a> of states\" and \"<a href=\"/wiki/Wave_function_collapse\" title=\"Wave function collapse\">wave function collapse</a>\", give rise to the reality we perceive?</i><br>" + 
 "<small><a href=\"/wiki/List_of_unsolved_problems_in_physics\" title=\"List of unsolved problems in physics\">(more open problems in physics)</a></small></div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<p>When quantum mechanics was originally formulated, it was applied to models whose correspondence limit was <a href=\"/wiki/Theory_of_relativity\" title=\"Theory of relativity\">non-relativistic</a> <a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">classical mechanics</a>. For instance, the well-known model of the <a href=\"/wiki/Quantum_harmonic_oscillator\" title=\"Quantum harmonic oscillator\">quantum harmonic oscillator</a> uses an explicitly non-relativistic expression for the <a href=\"/wiki/Kinetic_energy\" title=\"Kinetic energy\">kinetic energy</a> of the oscillator, and is thus a quantum version of the <a href=\"/wiki/Harmonic_oscillator\" title=\"Harmonic oscillator\">classical harmonic oscillator</a>.</p>" + 
 "<p>Early attempts to merge quantum mechanics with <a href=\"/wiki/Special_relativity\" title=\"Special relativity\">special relativity</a> involved the replacement of the Schrödinger equation with a covariant equation such as the <a href=\"/wiki/Klein%E2%80%93Gordon_equation\" title=\"Klein–Gordon equation\">Klein–Gordon equation</a> or the <a href=\"/wiki/Dirac_equation\" title=\"Dirac equation\">Dirac equation</a>. While these theories were successful in explaining many experimental results, they had certain unsatisfactory qualities stemming from their neglect of the relativistic creation and annihilation of particles. A fully relativistic quantum theory required the development of <a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">quantum field theory</a>, which applies quantization to a field (rather than a fixed set of particles). The first complete quantum field theory, <a href=\"/wiki/Quantum_electrodynamics\" title=\"Quantum electrodynamics\">quantum electrodynamics</a>, provides a fully quantum description of the <a href=\"/wiki/Electromagnetism\" title=\"Electromagnetism\">electromagnetic interaction</a>. The full apparatus of quantum field theory is often unnecessary for describing electrodynamic systems. A simpler approach, one that has been employed since the inception of quantum mechanics, is to treat <a href=\"/wiki/Electric_charge\" title=\"Electric charge\">charged</a> particles as quantum mechanical objects being acted on by a classical <a href=\"/wiki/Electromagnetic_field\" title=\"Electromagnetic field\">electromagnetic field</a>. For example, the elementary quantum model of the <a href=\"/wiki/Hydrogen_atom\" title=\"Hydrogen atom\">hydrogen atom</a> describes the <a href=\"/wiki/Electric_field\" title=\"Electric field\">electric field</a> of the hydrogen atom using a classical <img class=\"mwe-math-fallback-image-inline tex\" alt=\"\scriptstyle -e^2/(4 \pi\ \epsilon_{_0}\ r)\" src=\"//upload.wikimedia.org/math/f/b/6/fb68b9da550fe0a422d51c5a8327006b.png\"> <a href=\"/wiki/Electric_potential\" title=\"Electric potential\">Coulomb potential</a>. This \"semi-classical\" approach fails if quantum fluctuations in the electromagnetic field play an important role, such as in the emission of <a href=\"/wiki/Photon\" title=\"Photon\">photons</a> by <a href=\"/wiki/Charged_particle\" title=\"Charged particle\">charged particles</a>.</p>" + 
 "<p><a href=\"/wiki/Field_(physics)\" title=\"Field (physics)\">Quantum field</a> theories for the <a href=\"/wiki/Strong_nuclear_force\" title=\"Strong nuclear force\" class=\"mw-redirect\">strong nuclear force</a> and the <a href=\"/wiki/Weak_nuclear_force\" title=\"Weak nuclear force\" class=\"mw-redirect\">weak nuclear force</a> have also been developed. The quantum field theory of the strong nuclear force is called <a href=\"/wiki/Quantum_chromodynamics\" title=\"Quantum chromodynamics\">quantum chromodynamics</a>, and describes the interactions of subnuclear particles such as <a href=\"/wiki/Quark\" title=\"Quark\">quarks</a> and <a href=\"/wiki/Gluon\" title=\"Gluon\">gluons</a>. The weak nuclear force and the <a href=\"/wiki/Electromagnetic_force\" title=\"Electromagnetic force\" class=\"mw-redirect\">electromagnetic force</a> were unified, in their quantized forms, into a single quantum field theory (known as <a href=\"/wiki/Electroweak_theory\" title=\"Electroweak theory\" class=\"mw-redirect\">electroweak theory</a>), by the physicists <a href=\"/wiki/Abdus_Salam\" title=\"Abdus Salam\">Abdus Salam</a>, <a href=\"/wiki/Sheldon_Glashow\" title=\"Sheldon Glashow\" class=\"mw-redirect\">Sheldon Glashow</a> and <a href=\"/wiki/Steven_Weinberg\" title=\"Steven Weinberg\">Steven Weinberg</a>. These three men shared the Nobel Prize in Physics in 1979 for this work.<sup id=\"cite_ref-36\" class=\"reference\"><a href=\"#cite_note-36\"><span>[</span>36<span>]</span></a></sup></p>" + 
 "<p>It has proven difficult to construct quantum models of <a href=\"/wiki/Gravity\" title=\"Gravity\">gravity</a>, the remaining <a href=\"/wiki/Fundamental_force\" title=\"Fundamental force\" class=\"mw-redirect\">fundamental force</a>. Semi-classical approximations are workable, and have led to predictions such as <a href=\"/wiki/Hawking_radiation\" title=\"Hawking radiation\">Hawking radiation</a>. However, the formulation of a complete theory of <a href=\"/wiki/Quantum_gravity\" title=\"Quantum gravity\">quantum gravity</a> is hindered by apparent incompatibilities between <a href=\"/wiki/General_relativity\" title=\"General relativity\">general relativity</a> (the most accurate theory of gravity currently known) and some of the fundamental assumptions of quantum theory. The resolution of these incompatibilities is an area of active research, and theories such as <a href=\"/wiki/String_theory\" title=\"String theory\">string theory</a> are among the possible candidates for a future theory of quantum gravity.</p>" + 
 "<p>Classical mechanics has also been extended into the <a href=\"/wiki/Complex_domain\" title=\"Complex domain\" class=\"mw-redirect\">complex domain</a>, with complex classical mechanics exhibiting behaviors similar to quantum mechanics.<sup id=\"cite_ref-37\" class=\"reference\"><a href=\"#cite_note-37\"><span>[</span>37<span>]</span></a></sup></p>" + 
 "<h3><span class=\"mw-headline\" id=\"Quantum_mechanics_and_classical_physics\">Quantum mechanics and classical physics</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=5\" title=\"Edit section: Quantum mechanics and classical physics\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<p>Predictions of quantum mechanics have been verified experimentally to an extremely high degree of accuracy.<sup id=\"cite_ref-38\" class=\"reference\"><a href=\"#cite_note-38\"><span>[</span>38<span>]</span></a></sup> According to the <a href=\"/wiki/Correspondence_principle\" title=\"Correspondence principle\">correspondence principle</a> between classical and quantum mechanics, all objects obey the laws of quantum mechanics, and classical mechanics is just an approximation for large systems of objects (or a statistical quantum mechanics of a large collection of particles).<sup id=\"cite_ref-Tipler_39-0\" class=\"reference\"><a href=\"#cite_note-Tipler-39\"><span>[</span>39<span>]</span></a></sup> The laws of classical mechanics thus follow from the laws of quantum mechanics as a statistical average at the limit of large systems or large <a href=\"/wiki/Quantum_number\" title=\"Quantum number\">quantum numbers</a>.<sup id=\"cite_ref-40\" class=\"reference\"><a href=\"#cite_note-40\"><span>[</span>40<span>]</span></a></sup> However, <a href=\"/wiki/Chaos_theory\" title=\"Chaos theory\">chaotic systems</a> do not have good quantum numbers, and <a href=\"/wiki/Quantum_chaos\" title=\"Quantum chaos\">quantum chaos</a> studies the relationship between classical and quantum descriptions in these systems.</p>" + 
 "<p><a href=\"/wiki/Quantum_coherence\" title=\"Quantum coherence\" class=\"mw-redirect\">Quantum coherence</a> is an essential difference between classical and quantum theories as illustrated by the <a href=\"/wiki/EPR_paradox\" title=\"EPR paradox\">Einstein–Podolsky–Rosen (EPR) paradox</a> — an attack on a certain philosophical interpretation of quantum mechanics by an appeal to <a href=\"/wiki/Local_realism\" title=\"Local realism\" class=\"mw-redirect\">local realism</a>.<sup id=\"cite_ref-41\" class=\"reference\"><a href=\"#cite_note-41\"><span>[</span>41<span>]</span></a></sup> <a href=\"/wiki/Quantum_interference#Quantum_interference\" title=\"Quantum interference\" class=\"mw-redirect\">Quantum interference</a> involves adding together <i><a href=\"/wiki/Probability_amplitude\" title=\"Probability amplitude\">probability amplitudes</a></i>, whereas classical \"waves\" infer that there is an adding together of <i>intensities</i>. For microscopic bodies, the extension of the system is much smaller than the <a href=\"/wiki/Coherence_length\" title=\"Coherence length\">coherence length</a>, which gives rise to long-range entanglement and other nonlocal phenomena characteristic of quantum systems.<sup id=\"cite_ref-42\" class=\"reference\"><a href=\"#cite_note-42\"><span>[</span>42<span>]</span></a></sup> Quantum coherence is not typically evident at macroscopic scales, though an exception to this rule may occur at extremely low temperatures (i.e. approaching <a href=\"/wiki/Absolute_zero\" title=\"Absolute zero\">absolute zero</a>) at which quantum behavior may manifest itself macroscopically.<sup id=\"cite_ref-43\" class=\"reference\"><a href=\"#cite_note-43\"><span>[</span>43<span>]</span></a></sup> This is in accordance with the following observations:</p>" + 
 "<ul>" + 
 "<li>Many macroscopic properties of a classical system are a direct consequence of the quantum behavior of its parts. For example, the stability of bulk matter (consisting of atoms and <a href=\"/wiki/Molecule\" title=\"Molecule\">molecules</a> which would quickly collapse under electric forces alone), the rigidity of solids, and the mechanical, thermal, chemical, optical and magnetic properties of matter are all results of the interaction of <a href=\"/wiki/Electric_charge\" title=\"Electric charge\">electric charges</a> under the rules of quantum mechanics.<sup id=\"cite_ref-44\" class=\"reference\"><a href=\"#cite_note-44\"><span>[</span>44<span>]</span></a></sup></li>" + 
 "<li>While the seemingly \"exotic\" behavior of matter posited by quantum mechanics and relativity theory become more apparent when dealing with particles of extremely small size or velocities approaching the <a href=\"/wiki/Speed_of_light\" title=\"Speed of light\">speed of light</a>, the laws of classical, often considered \"<a href=\"/wiki/Isaac_Newton\" title=\"Isaac Newton\">Newtonian</a>\", physics remain accurate in predicting the behavior of the vast majority of \"large\" objects (on the order of the size of large molecules or bigger) at velocities much smaller than the <a href=\"/wiki/Speed_of_light\" title=\"Speed of light\">velocity of light</a>.<sup id=\"cite_ref-45\" class=\"reference\"><a href=\"#cite_note-45\"><span>[</span>45<span>]</span></a></sup></li>" + 
 "</ul>" + 
 "<h3><span class=\"mw-headline\" id=\"Copenhagen_interpretation_of_quantum_versus_classical_kinematics\">Copenhagen interpretation of quantum versus classical kinematics</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=6\" title=\"Edit section: Copenhagen interpretation of quantum versus classical kinematics\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<p>A big difference between classical and quantum mechanics is that they use very different kinematic descriptions.<sup id=\"cite_ref-46\" class=\"reference\"><a href=\"#cite_note-46\"><span>[</span>46<span>]</span></a></sup></p>" + 
 "<p>In <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a>\'s mature view, quantum mechanical phenomena are required to be experiments, with complete descriptions of all the devices for the system, preparative, intermediary, and finally measuring. The descriptions are in macroscopic terms, expressed in ordinary language, supplemented with the concepts of classical mechanics.<sup id=\"cite_ref-47\" class=\"reference\"><a href=\"#cite_note-47\"><span>[</span>47<span>]</span></a></sup><sup id=\"cite_ref-48\" class=\"reference\"><a href=\"#cite_note-48\"><span>[</span>48<span>]</span></a></sup><sup id=\"cite_ref-49\" class=\"reference\"><a href=\"#cite_note-49\"><span>[</span>49<span>]</span></a></sup><sup id=\"cite_ref-50\" class=\"reference\"><a href=\"#cite_note-50\"><span>[</span>50<span>]</span></a></sup> The initial condition and the final condition of the system are respectively described by values in a configuration space, for example a position space, or some equivalent space such as a momentum space. Quantum mechanics does not admit a completely precise description, in terms of both position and momentum, of an initial condition or \"state\" (in the classical sense of the word) that would support a precisely deterministic and causal prediction of a final condition.<sup id=\"cite_ref-Heisenberg_1927_51-0\" class=\"reference\"><a href=\"#cite_note-Heisenberg_1927-51\"><span>[</span>51<span>]</span></a></sup><sup id=\"cite_ref-52\" class=\"reference\"><a href=\"#cite_note-52\"><span>[</span>52<span>]</span></a></sup> In this sense, advocated by Bohr in his mature writings, a quantum phenomenon is a process, a passage from initial to final condition, not an instantaneous \"state\" in the classical sense of that word.<sup id=\"cite_ref-53\" class=\"reference\"><a href=\"#cite_note-53\"><span>[</span>53<span>]</span></a></sup><sup id=\"cite_ref-54\" class=\"reference\"><a href=\"#cite_note-54\"><span>[</span>54<span>]</span></a></sup> Thus there are two kinds of processes in quantum mechanics: stationary and transitional. For a stationary process, the initial and final condition are the same. For a transition, they are different. Obviously by definition, if only the initial condition is given, the process is not determined.<sup id=\"cite_ref-Heisenberg_1927_51-1\" class=\"reference\"><a href=\"#cite_note-Heisenberg_1927-51\"><span>[</span>51<span>]</span></a></sup> Given its initial condition, prediction of its final condition is possible, causally but only probabilistically, because the Schrödinger equation is deterministic for wave function evolution, but the wave function describes the system only probabilistically.<sup id=\"cite_ref-55\" class=\"reference\"><a href=\"#cite_note-55\"><span>[</span>55<span>]</span></a></sup><sup id=\"cite_ref-56\" class=\"reference\"><a href=\"#cite_note-56\"><span>[</span>56<span>]</span></a></sup></p>" + 
 "<p>For many experiments, it is possible to think of the initial and final conditions of the system as being a particle. In some cases it appears that there are potentially several spatially distinct pathways or trajectories by which a particle might pass from initial to final condition. It is an important feature of the quantum kinematic description that it does not permit a unique definite statement of which of those pathways is actually followed. Only the initial and final conditions are definite, and, as stated in the foregoing paragraph, they are defined only as precisely as allowed by the configuration space description or its equivalent. In every case for which a quantum kinematic description is needed, there is always a compelling reason for this restriction of kinematic precision. An example of such a reason is that for a particle to be experimentally found in a definite position, it must be held motionless; for it to be experimentally found to have a definite momentum, it must have free motion; these two are logically incompatible.<sup id=\"cite_ref-57\" class=\"reference\"><a href=\"#cite_note-57\"><span>[</span>57<span>]</span></a></sup><sup id=\"cite_ref-58\" class=\"reference\"><a href=\"#cite_note-58\"><span>[</span>58<span>]</span></a></sup></p>" + 
 "<p>Classical kinematics does not primarily demand experimental description of its phenomena. It allows completely precise description of an instantaneous state by a value in phase space, the Cartesian product of configuration and momentum spaces. This description simply assumes or imagines a state as a physically existing entity without concern about its experimental measurability. Such a description of an initial condition, together with Newton\'s laws of motion, allows a precise deterministic and causal prediction of a final condition, with a definite trajectory of passage. <a href=\"/wiki/Hamiltonian_mechanics\" title=\"Hamiltonian mechanics\">Hamiltonian</a> dynamics can be used for this. Classical kinematics also allows the description of a process analogous to the initial and final condition description used by quantum mechanics. <a href=\"/wiki/Lagrangian_mechanics\" title=\"Lagrangian mechanics\">Lagrangian mechanics</a> applies to this.<sup id=\"cite_ref-59\" class=\"reference\"><a href=\"#cite_note-59\"><span>[</span>59<span>]</span></a></sup> For processes that need account to be taken of actions of a small number of <a href=\"/wiki/Planck%27s_constant\" title=\"Planck\'s constant\" class=\"mw-redirect\">Planck constants</a>, classical kinematics is not adequate; quantum mechanics is needed.</p>" + 
 "<h3><span class=\"mw-headline\" id=\"Relativity_and_quantum_mechanics\">Relativity and quantum mechanics</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=7\" title=\"Edit section: Relativity and quantum mechanics\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Relativistic_quantum_mechanics\" title=\"Relativistic quantum mechanics\">Relativistic quantum mechanics</a></div>" + 
 "<p>Even with the defining postulates of both Einstein\'s theory of general relativity and quantum theory being indisputably supported by rigorous and repeated <a href=\"/wiki/Empirical_evidence\" title=\"Empirical evidence\">empirical evidence</a>, and while they do not directly contradict each other theoretically (at least with regard to their primary claims), they have proven extremely difficult to incorporate into one consistent, cohesive model.<sup id=\"cite_ref-60\" class=\"reference\"><a href=\"#cite_note-60\"><span>[</span>60<span>]</span></a></sup></p>" + 
 "<p>Einstein himself is well known for rejecting some of the claims of quantum mechanics. While clearly contributing to the field, he did not accept many of the more \"philosophical consequences and interpretations\" of quantum mechanics, such as the lack of deterministic <a href=\"/wiki/Causality\" title=\"Causality\">causality</a>. He is famously quoted as saying, in response to this aspect, \"My God does not play with dice\". He also had difficulty with the assertion that a single <a href=\"/wiki/Subatomic_particle\" title=\"Subatomic particle\">subatomic particle</a> can occupy numerous areas of space at one time. However, he was also the first to notice some of the apparently exotic consequences of <a href=\"/wiki/Quantum_entanglement\" title=\"Quantum entanglement\">entanglement</a>, and used them to formulate the <a href=\"/wiki/Einstein%E2%80%93Podolsky%E2%80%93Rosen_paradox\" title=\"Einstein–Podolsky–Rosen paradox\" class=\"mw-redirect\">Einstein–Podolsky–Rosen paradox</a> in the hope of showing that quantum mechanics had unacceptable implications if taken as a complete description of physical reality. This was 1935, but in 1964 it was shown by John Bell (see <a href=\"/wiki/Bell_inequality\" title=\"Bell inequality\" class=\"mw-redirect\">Bell inequality</a>) that - although Einstein was correct in identifying seemingly paradoxical implications of <a href=\"/wiki/Quantum_nonlocality\" title=\"Quantum nonlocality\">quantum mechanical nonlocality</a> - these implications could be experimentally tested. Alain Aspect\'s initial experiments in 1982, and many subsequent experiments since, have definitively verified quantum entanglement.</p>" + 
 "<p>According to the paper of J. Bell and the <a href=\"/wiki/Copenhagen_interpretation\" title=\"Copenhagen interpretation\">Copenhagen interpretation</a>—the common interpretation of quantum mechanics by physicists since 1927 - and contrary to Einstein\'s ideas, quantum mechanics was <i>not</i>, at the same time a \"realistic\" theory and a \"<a href=\"/wiki/Principle_of_locality\" title=\"Principle of locality\">local</a>\" theory.</p>" + 
 "<p>The <a href=\"/wiki/Einstein%E2%80%93Podolsky%E2%80%93Rosen_paradox\" title=\"Einstein–Podolsky–Rosen paradox\" class=\"mw-redirect\">Einstein–Podolsky–Rosen paradox</a> shows in any case that there exist experiments by which one can measure the state of one particle and instantaneously change the state of its entangled partner - although the two particles can be an arbitrary distance apart. However, this effect does not violate <a href=\"/wiki/Causality\" title=\"Causality\">causality</a>, since no transfer of information happens. Quantum entanglement forms the basis of <a href=\"/wiki/Quantum_cryptography\" title=\"Quantum cryptography\">quantum cryptography</a>, which is used in high-security commercial applications in banking and government.</p>" + 
 "<p>Gravity is negligible in many areas of particle physics, so that unification between general relativity and quantum mechanics is not an urgent issue in those particular applications. However, the lack of a correct theory of <a href=\"/wiki/Quantum_gravity\" title=\"Quantum gravity\">quantum gravity</a> is an important issue in <a href=\"/wiki/Cosmology\" title=\"Cosmology\">cosmology</a> and the search by physicists for an elegant \"<a href=\"/wiki/Theory_of_everything\" title=\"Theory of everything\">Theory of Everything</a>\" (TOE). Consequently, resolving the inconsistencies between both theories has been a major goal of 20th and 21st century physics. Many prominent physicists, including <a href=\"/wiki/Stephen_Hawking\" title=\"Stephen Hawking\">Stephen Hawking</a>, have labored for many years in the attempt to discover a theory underlying <i>everything</i>. This TOE would combine not only the different models of subatomic physics, but also derive the four <a href=\"/wiki/Fundamental_interaction\" title=\"Fundamental interaction\">fundamental forces of nature</a> - the <a href=\"/wiki/Strong_interaction\" title=\"Strong interaction\">strong force</a>, <a href=\"/wiki/Electromagnetism\" title=\"Electromagnetism\">electromagnetism</a>, the <a href=\"/wiki/Weak_interaction\" title=\"Weak interaction\">weak force</a>, and <a href=\"/wiki/Gravity\" title=\"Gravity\">gravity</a> - from a single force or phenomenon. While Stephen Hawking was initially a believer in the Theory of Everything, after considering <a href=\"/wiki/G%C3%B6del%27s_Incompleteness_Theorem\" title=\"Gödel\'s Incompleteness Theorem\" class=\"mw-redirect\">Gödel\'s Incompleteness Theorem</a>, he has concluded that one is not obtainable, and has stated so publicly in his lecture \"Gödel and the End of Physics\" (2002).<sup id=\"cite_ref-61\" class=\"reference\"><a href=\"#cite_note-61\"><span>[</span>61<span>]</span></a></sup></p>" + 
 "<h3><span class=\"mw-headline\" id=\"Attempts_at_a_unified_field_theory\">Attempts at a unified field theory</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=8\" title=\"Edit section: Attempts at a unified field theory\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Grand_unified_theory\" title=\"Grand unified theory\" class=\"mw-redirect\">Grand unified theory</a></div>" + 
 "<p>The quest to unify the <a href=\"/wiki/Fundamental_force\" title=\"Fundamental force\" class=\"mw-redirect\">fundamental forces</a> through quantum mechanics is still ongoing. <a href=\"/wiki/Quantum_electrodynamics\" title=\"Quantum electrodynamics\">Quantum electrodynamics</a> (or \"quantum electromagnetism\"), which is currently (in the perturbative regime at least) the most accurately tested physical theory in competition with general relativity,<sup id=\"cite_ref-62\" class=\"reference\"><a href=\"#cite_note-62\"><span>[</span>62<span>]</span></a></sup><sup id=\"cite_ref-63\" class=\"reference\"><a href=\"#cite_note-63\"><span>[</span>63<span>]</span></a></sup><sup class=\"noprint Inline-Template\" style=\"white-space:nowrap;\">[<i><a href=\"/wiki/Wikipedia:Identifying_reliable_sources\" title=\"Wikipedia:Identifying reliable sources\"><span title=\"The material near this tag may rely on an unreliable source. (January 2012)\">unreliable source?</span></a></i>]</sup><sup>(blog)</sup> has been successfully merged with the weak nuclear force into the <a href=\"/wiki/Electroweak_force\" title=\"Electroweak force\" class=\"mw-redirect\">electroweak force</a> and work is currently being done to merge the electroweak and strong force into the <a href=\"/wiki/Electrostrong_force\" title=\"Electrostrong force\" class=\"mw-redirect\">electrostrong force</a>. Current predictions state that at around 10<sup>14</sup> GeV the three aforementioned forces are fused into a single unified field.<sup id=\"cite_ref-64\" class=\"reference\"><a href=\"#cite_note-64\"><span>[</span>64<span>]</span></a></sup> Beyond this \"grand unification\", it is speculated that it may be possible to merge gravity with the other three gauge symmetries, expected to occur at roughly 10<sup>19</sup> GeV. However&nbsp;— and while special relativity is parsimoniously incorporated into quantum electrodynamics&nbsp;— the expanded <a href=\"/wiki/General_relativity\" title=\"General relativity\">general relativity</a>, currently the best theory describing the gravitation force, has not been fully incorporated into quantum theory. One of those searching for a coherent TOE is <a href=\"/wiki/Edward_Witten\" title=\"Edward Witten\">Edward Witten</a>, a theoretical physicist who formulated the <a href=\"/wiki/M-theory\" title=\"M-theory\">M-theory</a>, which is an attempt at describing the supersymmetrical based <a href=\"/wiki/String_theory\" title=\"String theory\">string theory</a>. M-theory posits that our apparent 4-dimensional <a href=\"/wiki/Spacetime\" title=\"Spacetime\">spacetime</a> is, in reality, actually an 11-dimensional spacetime containing 10 spatial dimensions and 1 time dimension, although 7 of the spatial dimensions are - at lower energies - completely \"compactified\" (or infinitely curved) and not readily amenable to measurement or probing.</p>" + 
 "<p>Another popular theory is <a href=\"/wiki/Loop_quantum_gravity\" title=\"Loop quantum gravity\">Loop quantum gravity</a> (LQG), a theory first proposed by <a href=\"/wiki/Carlo_Rovelli\" title=\"Carlo Rovelli\">Carlo Rovelli</a> that describes the quantum properties of gravity. It is also a theory of <a href=\"/w/index.php?title=Quantum_space&amp;action=edit&amp;redlink=1\" class=\"new\" title=\"Quantum space (page does not exist)\">quantum space</a> and <a href=\"/wiki/Chronon\" title=\"Chronon\">quantum time</a>, because in general relativity the geometry of spacetime is a manifestation of <a href=\"/wiki/Gravity\" title=\"Gravity\">gravity</a>. LQG is an attempt to merge and adapt standard quantum mechanics and standard <a href=\"/wiki/General_relativity\" title=\"General relativity\">general relativity</a>. The main output of the theory is a physical picture of space where space is granular. The granularity is a direct consequence of the quantization. It has the same nature of the granularity of the photons in the quantum theory of electromagnetism or the discrete levels of the energy of the atoms. But here it is space itself which is discrete. More precisely, space can be viewed as an extremely fine fabric or network \"woven\" of finite loops. These networks of loops are called <a href=\"/wiki/Spin_networks\" title=\"Spin networks\" class=\"mw-redirect\">spin networks</a>. The evolution of a spin network over time is called a spin foam. The predicted size of this structure is the <a href=\"/wiki/Planck_length\" title=\"Planck length\">Planck length</a>, which is approximately 1.616×10<sup>−35</sup> m. According to theory, there is no meaning to length shorter than this (cf. <a href=\"/wiki/Planck_scale\" title=\"Planck scale\">Planck scale</a> energy). Therefore, LQG predicts that not just matter, but also space itself, has an atomic structure.</p>" + 
 "<h2><span class=\"mw-headline\" id=\"Philosophical_implications\">Philosophical implications</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=9\" title=\"Edit section: Philosophical implications\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">Interpretations of quantum mechanics</a></div>" + 
 "<p>Since its inception, the many <a href=\"/wiki/Counter-intuitive\" title=\"Counter-intuitive\" class=\"mw-redirect\">counter-intuitive</a> aspects and results of quantum mechanics have provoked strong <a href=\"/wiki/Philosophy\" title=\"Philosophy\">philosophical</a> debates and many <a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">interpretations</a>. Even fundamental issues, such as <a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a>\'s basic <a href=\"/wiki/Born_rule\" title=\"Born rule\">rules</a> concerning <a href=\"/wiki/Probability_amplitude\" title=\"Probability amplitude\">probability amplitudes</a> and <a href=\"/wiki/Probability_distribution\" title=\"Probability distribution\">probability distributions</a>, took decades to be appreciated by society and many leading scientists. <a href=\"/wiki/Richard_Feynman\" title=\"Richard Feynman\">Richard Feynman</a> once said, \"I think I can safely say that nobody understands quantum mechanics.\"<sup id=\"cite_ref-65\" class=\"reference\"><a href=\"#cite_note-65\"><span>[</span>65<span>]</span></a></sup> According to <a href=\"/wiki/Steven_Weinberg\" title=\"Steven Weinberg\">Steven Weinberg</a>, \"There is now in my opinion no entirely satisfactory interpretation of quantum mechanics.\"<sup id=\"cite_ref-66\" class=\"reference\"><a href=\"#cite_note-66\"><span>[</span>66<span>]</span></a></sup></p>" + 
 "<p>The <a href=\"/wiki/Copenhagen_interpretation\" title=\"Copenhagen interpretation\">Copenhagen interpretation</a> - due largely to the Danish theoretical physicist <a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Niels Bohr</a> - remains the quantum mechanical formalism that is currently most widely accepted amongst physicists, some 75 years after its enunciation. According to this interpretation, the probabilistic nature of quantum mechanics is not a <i>temporary</i> feature which will eventually be replaced by a deterministic theory, but instead must be considered a <i>final</i> renunciation of the classical idea of \"causality.\" It is also believed therein that any well-defined application of the quantum mechanical formalism must always make reference to the experimental arrangement, due to the <a href=\"/wiki/Complementarity_(physics)\" title=\"Complementarity (physics)\">conjugate</a> nature of evidence obtained under different experimental situations.</p>" + 
 "<p><a href=\"/wiki/Albert_Einstein\" title=\"Albert Einstein\">Albert Einstein</a>, himself one of the founders of quantum theory, <a href=\"/wiki/Bohr-Einstein_debates\" title=\"Bohr-Einstein debates\" class=\"mw-redirect\">rejected</a> the quantum theoretical doctrine that the state of a system depends on the experimental arrangement for its measurement. He held that underlying quantum mechanics there should be a theory that thoroughly and directly expresses the rule against <a href=\"/wiki/Action_at_a_distance\" title=\"Action at a distance\">action at a distance</a>; in other words, he insisted on the <a href=\"/wiki/Principle_of_locality\" title=\"Principle of locality\">principle of locality</a>. He inferred that the present theory was incomplete, contrary to the Copenhagen doctrine that it is complete. He therefore produced a series of objections, the most famous of which has become known as the <a href=\"/wiki/Einstein%E2%80%93Podolsky%E2%80%93Rosen_paradox\" title=\"Einstein–Podolsky–Rosen paradox\" class=\"mw-redirect\">Einstein–Podolsky–Rosen paradox</a>.</p>" + 
 "<p><a href=\"/wiki/John_Stewart_Bell\" title=\"John Stewart Bell\">John Bell</a> showed that this \"EPR\" paradox led to <a href=\"/wiki/Bell%27s_theorem\" title=\"Bell\'s theorem\">experimentally testable differences</a> between quantum mechanics and theories that rely on added hidden variables. <a href=\"/wiki/Bell_test_experiments\" title=\"Bell test experiments\">Experiments</a> have been performed confirming the accuracy of quantum mechanics, thereby demonstrating that quantum mechanics cannot be improved upon by addition of hidden variables.<sup id=\"cite_ref-67\" class=\"reference\"><a href=\"#cite_note-67\"><span>[</span>67<span>]</span></a></sup> The <i><a href=\"/wiki/Bohr-Einstein_debates\" title=\"Bohr-Einstein debates\" class=\"mw-redirect\">Bohr-Einstein debates</a></i> provide a vibrant critique of the Copenhagen Interpretation from an <a href=\"/wiki/Epistemological\" title=\"Epistemological\" class=\"mw-redirect\">epistemological</a> point of view.</p>" + 
 "<p>The <a href=\"/wiki/Everett_many-worlds_interpretation\" title=\"Everett many-worlds interpretation\" class=\"mw-redirect\">Everett many-worlds interpretation</a>, formulated in 1956, holds that <i>all</i> the possibilities described by quantum theory <i>simultaneously</i> occur in a <a href=\"/wiki/Multiverse\" title=\"Multiverse\">multiverse</a> composed of mostly independent parallel universes.<sup id=\"cite_ref-68\" class=\"reference\"><a href=\"#cite_note-68\"><span>[</span>68<span>]</span></a></sup> This is not accomplished by introducing some \"new axiom\" to quantum mechanics, but on the contrary, by <i>removing</i> the axiom of the collapse of the wave packet. <i>All</i> of the possible consistent states of the measured system and the measuring apparatus (including the observer) are present in a <i>real</i> physical - not just formally mathematical, as in other interpretations - <a href=\"/wiki/Quantum_superposition\" title=\"Quantum superposition\">quantum superposition</a>. Such a superposition of consistent state combinations of different systems is called an <a href=\"/wiki/Quantum_entanglement\" title=\"Quantum entanglement\">entangled state</a>. While the multiverse is deterministic, we perceive non-deterministic behavior governed by probabilities, because we can only observe the universe (i.e., the consistent state contribution to the aforementioned superposition) that we, as observers, inhabit. Everett\'s interpretation is perfectly consistent with <a href=\"/wiki/John_Stewart_Bell\" title=\"John Stewart Bell\">John Bell</a>\'s experiments and makes them intuitively understandable. However, according to the theory of <a href=\"/wiki/Quantum_decoherence\" title=\"Quantum decoherence\">quantum decoherence</a>, these \"parallel universes\" will never be accessible to us. The inaccessibility can be understood as follows: once a measurement is done, the measured system becomes <a href=\"/wiki/Quantum_entanglement\" title=\"Quantum entanglement\">entangled</a> with <i>both</i> the physicist who measured it <i>and</i> a huge number of other particles, some of which are <a href=\"/wiki/Photon\" title=\"Photon\">photons</a> flying away at the <a href=\"/wiki/Speed_of_light\" title=\"Speed of light\">speed of light</a> towards the other end of the universe. In order to prove that the wave function did not collapse, one would have to bring <i>all</i> these particles back and measure them again, together with the system that was originally measured. Not only is this completely impractical, but even if one <i>could</i> theoretically do this, it would have to destroy any evidence that the original measurement took place (including the physicist\'s memory). In light of these <a href=\"/wiki/Bell_test\" title=\"Bell test\" class=\"mw-redirect\">Bell tests</a>, Cramer (1986) formulated his <a href=\"/wiki/Transactional_interpretation\" title=\"Transactional interpretation\">transactional interpretation</a>.<sup id=\"cite_ref-Cramer_69-0\" class=\"reference\"><a href=\"#cite_note-Cramer-69\"><span>[</span>69<span>]</span></a></sup> <a href=\"/wiki/Relational_quantum_mechanics\" title=\"Relational quantum mechanics\">Relational quantum mechanics</a> appeared in the late 1990s as the modern derivative of the <a href=\"/wiki/Copenhagen_Interpretation\" title=\"Copenhagen Interpretation\" class=\"mw-redirect\">Copenhagen Interpretation</a>.</p>" + 
 "<h2><span class=\"mw-headline\" id=\"Applications\">Applications</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=10\" title=\"Edit section: Applications\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<p>Quantum mechanics has had enormous<sup id=\"cite_ref-70\" class=\"reference\"><a href=\"#cite_note-70\"><span>[</span>70<span>]</span></a></sup> success in explaining many of the features of our universe. Quantum mechanics is often the only tool available that can reveal the individual behaviors of the <a href=\"/wiki/Subatomic_particle\" title=\"Subatomic particle\">subatomic particles</a> that make up all forms of matter (<a href=\"/wiki/Electron\" title=\"Electron\">electrons</a>, <a href=\"/wiki/Proton\" title=\"Proton\">protons</a>, <a href=\"/wiki/Neutron\" title=\"Neutron\">neutrons</a>, <a href=\"/wiki/Photon\" title=\"Photon\">photons</a>, and others). Quantum mechanics has strongly influenced <a href=\"/wiki/String_theory\" title=\"String theory\">string theories</a>, candidates for a <a href=\"/wiki/Theory_of_everything\" title=\"Theory of everything\">Theory of Everything</a> (see <a href=\"/wiki/Reductionism\" title=\"Reductionism\">reductionism</a>).</p>" + 
 "<p>Quantum mechanics is also critically important for understanding how individual atoms combine covalently to form <a href=\"/wiki/Molecules\" title=\"Molecules\" class=\"mw-redirect\">molecules</a>. The application of quantum mechanics to <a href=\"/wiki/Chemistry\" title=\"Chemistry\">chemistry</a> is known as <a href=\"/wiki/Quantum_chemistry\" title=\"Quantum chemistry\">quantum chemistry</a>. Relativistic quantum mechanics can, in principle, mathematically describe most of chemistry. Quantum mechanics can also provide quantitative insight into <a href=\"/wiki/Ionic_bond\" title=\"Ionic bond\" class=\"mw-redirect\">ionic</a> and <a href=\"/wiki/Covalent_bonding\" title=\"Covalent bonding\" class=\"mw-redirect\">covalent bonding</a> processes by explicitly showing which molecules are energetically favorable to which others and the magnitudes of the energies involved.<sup id=\"cite_ref-71\" class=\"reference\"><a href=\"#cite_note-71\"><span>[</span>71<span>]</span></a></sup> Furthermore, most of the calculations performed in modern <a href=\"/wiki/Computational_chemistry\" title=\"Computational chemistry\">computational chemistry</a> rely on quantum mechanics.</p>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:352px;\"><a href=\"/wiki/File:Rtd_seq_v3.gif\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Rtd_seq_v3.gif/350px-Rtd_seq_v3.gif\" width=\"350\" height=\"280\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/5/51/Rtd_seq_v3.gif 1.5x, //upload.wikimedia.org/wikipedia/commons/5/51/Rtd_seq_v3.gif 2x\" data-file-width=\"453\" data-file-height=\"362\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Rtd_seq_v3.gif\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "A working mechanism of a resonant tunneling diode device, based on the phenomenon of quantum tunneling through potential barriers</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>A great deal of modern technological inventions operate at a scale where quantum effects are significant. Examples include the <a href=\"/wiki/Laser\" title=\"Laser\">laser</a>, the <a href=\"/wiki/Transistor\" title=\"Transistor\">transistor</a> (and thus the <a href=\"/wiki/Integrated_circuit\" title=\"Integrated circuit\">microchip</a>), the <a href=\"/wiki/Electron_microscope\" title=\"Electron microscope\">electron microscope</a>, and <a href=\"/wiki/Magnetic_Resonance_Imaging\" title=\"Magnetic Resonance Imaging\" class=\"mw-redirect\">magnetic resonance imaging</a> (MRI). The study of <a href=\"/wiki/Semiconductor\" title=\"Semiconductor\">semiconductors</a> led to the invention of the <a href=\"/wiki/Diode\" title=\"Diode\">diode</a> and the <a href=\"/wiki/Transistor\" title=\"Transistor\">transistor</a>, which are indispensable parts of modern <a href=\"/wiki/Electronics\" title=\"Electronics\">electronics</a> systems and devices.</p>" + 
 "<p>Researchers are currently seeking robust methods of directly manipulating quantum states. Efforts are being made to more fully develop <a href=\"/wiki/Quantum_cryptography\" title=\"Quantum cryptography\">quantum cryptography</a>, which will theoretically allow guaranteed secure transmission of <a href=\"/wiki/Information\" title=\"Information\">information</a>. A more distant goal is the development of <a href=\"/wiki/Quantum_computer\" title=\"Quantum computer\" class=\"mw-redirect\">quantum computers</a>, which are expected to perform certain computational tasks exponentially faster than classical <a href=\"/wiki/Computer\" title=\"Computer\">computers</a>. Instead of using classical bits, quantum computers use <a href=\"/wiki/Qubits\" title=\"Qubits\" class=\"mw-redirect\">qubits</a>, which can be in <a href=\"/wiki/Quantum_superposition\" title=\"Quantum superposition\">superpositions</a> of states. Another active research topic is <a href=\"/wiki/Quantum_teleportation\" title=\"Quantum teleportation\">quantum teleportation</a>, which deals with techniques to transmit quantum information over arbitrary distances.</p>" + 
 "<p><a href=\"/wiki/Quantum_tunneling\" title=\"Quantum tunneling\" class=\"mw-redirect\">Quantum tunneling</a> is vital to the operation of many devices. Even in the simple <a href=\"/wiki/Light_switch\" title=\"Light switch\">light switch</a>, the electrons in the <a href=\"/wiki/Electric_current\" title=\"Electric current\">electric current</a> could not penetrate the potential barrier made up of a layer of oxide without quantum tunneling. <a href=\"/wiki/Flash_memory\" title=\"Flash memory\">Flash memory</a> chips found in <a href=\"/wiki/USB_flash_drive\" title=\"USB flash drive\">USB drives</a> use quantum tunneling to erase their memory cells.</p>" + 
 "<p>While quantum mechanics primarily applies to the smaller atomic regimes of matter and energy, some systems exhibit <a href=\"/wiki/Mechanics#Classical_versus_quantum\" title=\"Mechanics\">quantum mechanical effects</a> on a large scale. <a href=\"/wiki/Superfluidity\" title=\"Superfluidity\">Superfluidity</a>, the frictionless flow of a liquid at temperatures near <a href=\"/wiki/Absolute_zero\" title=\"Absolute zero\">absolute zero</a>, is one well-known example. So is the closely related phenomenon of <a href=\"/wiki/Superconductivity\" title=\"Superconductivity\">superconductivity</a>, the frictionless flow of an electron gas in a conducting material (an <a href=\"/wiki/Electric_current\" title=\"Electric current\">electric current</a>) at sufficiently low temperatures.</p>" + 
 "<p>Quantum theory also provides accurate descriptions for many previously unexplained phenomena, such as <a href=\"/wiki/Black-body_radiation\" title=\"Black-body radiation\">black-body radiation</a> and the stability of the <a href=\"/wiki/Atomic_orbital\" title=\"Atomic orbital\">orbitals</a> of electrons in atoms. It has also given insight into the workings of many different <a href=\"/wiki/Biological_systems\" title=\"Biological systems\" class=\"mw-redirect\">biological systems</a>, including <a href=\"/wiki/Smell_receptors\" title=\"Smell receptors\" class=\"mw-redirect\">smell receptors</a> and <a href=\"/wiki/Protein_structure\" title=\"Protein structure\">protein structures</a>.<sup id=\"cite_ref-72\" class=\"reference\"><a href=\"#cite_note-72\"><span>[</span>72<span>]</span></a></sup> Recent work on <a href=\"/wiki/Photosynthesis\" title=\"Photosynthesis\">photosynthesis</a> has provided evidence that quantum correlations play an essential role in this fundamental process of plants and many other organisms.<sup id=\"cite_ref-73\" class=\"reference\"><a href=\"#cite_note-73\"><span>[</span>73<span>]</span></a></sup> Even so, <a href=\"/wiki/Classical_physics\" title=\"Classical physics\">classical physics</a> can often provide good approximations to results otherwise obtained by quantum physics, typically in circumstances with large numbers of particles or large <a href=\"/wiki/Quantum_number\" title=\"Quantum number\">quantum numbers</a>. Since classical formulas are much simpler and easier to compute than quantum formulas, classical approximations are used and preferred when the system is large enough to render the effects of quantum mechanics insignificant.</p>" + 
 "<div style=\"clear:both;\"></div>" + 
 "<h2><span class=\"mw-headline\" id=\"Examples\">Examples</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=11\" title=\"Edit section: Examples\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<h3><span class=\"mw-headline\" id=\"Free_particle\">Free particle</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=12\" title=\"Edit section: Free particle\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<p>For example, consider a <a href=\"/wiki/Free_particle\" title=\"Free particle\">free particle</a>. In quantum mechanics, there is <a href=\"/wiki/Wave%E2%80%93particle_duality\" title=\"Wave–particle duality\">wave–particle duality</a>, so the properties of the particle can be described as the properties of a wave. Therefore, its <a href=\"/wiki/Quantum_state\" title=\"Quantum state\">quantum state</a> can be represented as a <a href=\"/wiki/Wave\" title=\"Wave\">wave</a> of arbitrary shape and extending over space as a <a href=\"/wiki/Wave_function\" title=\"Wave function\">wave function</a>. The position and momentum of the particle are <a href=\"/wiki/Observables\" title=\"Observables\" class=\"mw-redirect\">observables</a>. The <a href=\"/wiki/Uncertainty_Principle\" title=\"Uncertainty Principle\" class=\"mw-redirect\">Uncertainty Principle</a> states that both the position and the momentum cannot simultaneously be measured with complete precision. However, one <i>can</i> measure the position (alone) of a moving free particle, creating an eigenstate of position with a wave function that is very large (a <a href=\"/wiki/Dirac_delta\" title=\"Dirac delta\" class=\"mw-redirect\">Dirac delta</a>) at a particular position <i>x</i>, and zero everywhere else. If one performs a position measurement on such a wave function, the resultant <i>x</i> will be obtained with 100% probability (i.e., with full certainty, or complete precision). This is called an eigenstate of position—or, stated in mathematical terms, a <i>generalized position eigenstate (<a href=\"/wiki/Distribution_(mathematics)\" title=\"Distribution (mathematics)\">eigendistribution</a>)</i>. If the particle is in an eigenstate of position, then its momentum is completely unknown. On the other hand, if the particle is in an eigenstate of momentum, then its position is completely unknown.<sup id=\"cite_ref-74\" class=\"reference\"><a href=\"#cite_note-74\"><span>[</span>74<span>]</span></a></sup> In an eigenstate of momentum having a <a href=\"/wiki/Plane_wave\" title=\"Plane wave\">plane wave</a> form, it can be shown that the <a href=\"/wiki/Wavelength\" title=\"Wavelength\">wavelength</a> is equal to <i>h/p</i>, where <i>h</i> is <a href=\"/wiki/Planck%27s_constant\" title=\"Planck\'s constant\" class=\"mw-redirect\">Planck\'s constant</a> and <i>p</i> is the momentum of the <a href=\"/wiki/Eigenstate\" title=\"Eigenstate\" class=\"mw-redirect\">eigenstate</a>.<sup id=\"cite_ref-75\" class=\"reference\"><a href=\"#cite_note-75\"><span>[</span>75<span>]</span></a></sup></p>" + 
 "<div class=\"center\">" + 
 "<div class=\"thumb tnone\">" + 
 "<div class=\"thumbinner\" style=\"width:602px;\"><a href=\"/wiki/File:QuantumDot_wf.gif\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/QuantumDot_wf.gif/600px-QuantumDot_wf.gif\" width=\"600\" height=\"292\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/b/b5/QuantumDot_wf.gif 1.5x, //upload.wikimedia.org/wikipedia/commons/b/b5/QuantumDot_wf.gif 2x\" data-file-width=\"708\" data-file-height=\"344\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:QuantumDot_wf.gif\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "3D confined electron wave functions for each eigenstate in a Quantum Dot. Here, rectangular and triangular-shaped quantum dots are shown. Energy states in rectangular dots are more ‘s-type’ and ‘p-type’. However, in a triangular dot, the wave functions are mixed due to confinement symmetry.</div>" + 
 "</div>" + 
 "</div>" + 
 "</div>" + 
 "<h3><span class=\"mw-headline\" id=\"Step_potential\">Step potential</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=13\" title=\"Edit section: Step potential\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Solution_of_Schr%C3%B6dinger_equation_for_a_step_potential\" title=\"Solution of Schrödinger equation for a step potential\">Solution of Schrödinger equation for a step potential</a></div>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:402px;\"><a href=\"/wiki/File:Qm_step_pot_temp.png\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Qm_step_pot_temp.png/400px-Qm_step_pot_temp.png\" width=\"400\" height=\"247\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Qm_step_pot_temp.png/600px-Qm_step_pot_temp.png 1.5x, //upload.wikimedia.org/wikipedia/commons/8/87/Qm_step_pot_temp.png 2x\" data-file-width=\"665\" data-file-height=\"411\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Qm_step_pot_temp.png\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "Scattering at a finite potential step of height <i>V</i><sub>0</sub>, shown in green. The amplitudes and direction of left- and right-moving waves are indicated. Yellow is the incident wave, blue are reflected and transmitted waves, red does not occur. <i>E</i> &gt; <i>V</i><sub>0</sub> for this figure.</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>The potential in this case is given by:</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"V(x)= \begin{cases} 0, &amp; x < 0, \\ V_0, &amp; x \ge 0. \end{cases} \" src=\"//upload.wikimedia.org/math/9/8/4/984a8cae0beae22ad13adaddd1783b36.png\"></dd>" + 
 "</dl>" + 
 "<p>The solutions are superpositions of left- and right-moving waves:</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"\psi_1(x)= \frac{1}{\sqrt{k_1}} \left(A_\rightarrow e^{i k_1 x} + A_\leftarrow e^{-ik_1x}\right)\quad x<0 \" src=\"//upload.wikimedia.org/math/5/3/c/53cce77636ab5b4d28bedcd7db1ba006.png\"></dd>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"\psi_2(x)= \frac{1}{\sqrt{k_2}} \left(B_\rightarrow e^{i k_2 x} + B_\leftarrow e^{-ik_2x}\right)\quad x>0\" src=\"//upload.wikimedia.org/math/a/e/5/ae57755df0a1f39f8625506c4cf2c27e.png\"></dd>" + 
 "</dl>" + 
 "<p>where the <a href=\"/wiki/Wave_vector\" title=\"Wave vector\">wave vectors</a> are related to the energy via</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"k_1=\sqrt{2m E/\hbar^2}\" src=\"//upload.wikimedia.org/math/e/d/a/edab2ba9ea21d1bad5bb17058069baa3.png\">, and</dd>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"k_2=\sqrt{2m (E-V_0)/\hbar^2}\" src=\"//upload.wikimedia.org/math/1/2/6/1263365edef5016182d98a8d93957814.png\"></dd>" + 
 "</dl>" + 
 "<p>with coefficients A and B determined from the <a href=\"/wiki/Boundary_condition\" title=\"Boundary condition\" class=\"mw-redirect\">boundary conditions</a> and by imposing a continuous <a href=\"/wiki/Derivative\" title=\"Derivative\">derivative</a> on the solution.</p>" + 
 "<p>Each term of the solution can be interpreted as an incident, reflected, or transmitted component of the wave, allowing the calculation of transmission and reflection coefficients. Notably, in contrast to classical mechanics, incident particles with energies greater than the potential step are partially reflected.</p>" + 
 "<h3><span class=\"mw-headline\" id=\"Rectangular_potential_barrier\">Rectangular potential barrier</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=14\" title=\"Edit section: Rectangular potential barrier\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Rectangular_potential_barrier\" title=\"Rectangular potential barrier\">Rectangular potential barrier</a></div>" + 
 "<p>This is a model for the <a href=\"/wiki/Quantum_tunneling\" title=\"Quantum tunneling\" class=\"mw-redirect\">quantum tunneling</a> effect which plays an important role in the performance of modern technologies such as <a href=\"/wiki/Flash_memory\" title=\"Flash memory\">flash memory</a> and <a href=\"/wiki/Scanning_tunneling_microscope\" title=\"Scanning tunneling microscope\">scanning tunneling microscopy</a>. Quantum tunneling is central to physical phenomena involved in <a href=\"/wiki/Superlattice\" title=\"Superlattice\">superlattices</a>.</p>" + 
 "<h3><span class=\"mw-headline\" id=\"Particle_in_a_box\">Particle in a box</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=15\" title=\"Edit section: Particle in a box\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:222px;\"><a href=\"/wiki/File:Infinite_potential_well.svg\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Infinite_potential_well.svg/220px-Infinite_potential_well.svg.png\" width=\"220\" height=\"176\" class=\"thumbimage\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Infinite_potential_well.svg/330px-Infinite_potential_well.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/27/Infinite_potential_well.svg/440px-Infinite_potential_well.svg.png 2x\" data-file-width=\"275\" data-file-height=\"220\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:Infinite_potential_well.svg\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "1-dimensional potential energy box (or infinite potential well)</div>" + 
 "</div>" + 
 "</div>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Particle_in_a_box\" title=\"Particle in a box\">Particle in a box</a></div>" + 
 "<p>The particle in a one-dimensional potential energy box is the most mathematically simple example where restraints lead to the quantization of energy levels. The box is defined as having zero potential energy everywhere <i>inside</i> a certain region, and infinite potential energy everywhere <i>outside</i> that region. For the one-dimensional case in the <img class=\"mwe-math-fallback-image-inline tex\" alt=\"x\" src=\"//upload.wikimedia.org/math/9/d/d/9dd4e461268c8034f5c8564e155c67a6.png\"> direction, the time-independent Schrödinger equation may be written<sup id=\"cite_ref-76\" class=\"reference\"><a href=\"#cite_note-76\"><span>[</span>76<span>]</span></a></sup></p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" - \frac {\hbar ^2}{2m} \frac {d ^2 \psi}{dx^2} = E \psi.\" src=\"//upload.wikimedia.org/math/3/9/0/39053c61c19246d2197dc26df468cf4c.png\"></dd>" + 
 "</dl>" + 
 "<p>With the differential operator defined by</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" \hat{p}_x = -i\hbar\frac{d}{dx} \" src=\"//upload.wikimedia.org/math/1/3/8/1388c8db0749e17c4d673b86ae72bd05.png\"></dd>" + 
 "</dl>" + 
 "<p>the previous equation is evocative of the <a href=\"/wiki/Kinetic_energy#Kinetic_energy_of_rigid_bodies\" title=\"Kinetic energy\">classic kinetic energy analogue</a>,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" \frac{1}{2m} \hat{p}_x^2 = E,\" src=\"//upload.wikimedia.org/math/7/4/4/744beb2f2fe36179ac834a5b2b9ef2bd.png\"></dd>" + 
 "</dl>" + 
 "<p>with state <img class=\"mwe-math-fallback-image-inline tex\" alt=\"\psi\" src=\"//upload.wikimedia.org/math/1/9/d/19df1c2726ed43128440c1157f72a937.png\"> in this case having energy <img class=\"mwe-math-fallback-image-inline tex\" alt=\"E\" src=\"//upload.wikimedia.org/math/3/a/3/3a3ea00cfc35332cedf6e5e9a32e94da.png\"> coincident with the kinetic energy of the particle.</p>" + 
 "<p>The general solutions of the Schrödinger equation for the particle in a box are</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" \psi(x) = A e^{ikx} + B e ^{-ikx} \qquad\qquad E =  \frac{\hbar^2 k^2}{2m}\" src=\"//upload.wikimedia.org/math/b/3/d/b3db706e83d4fc31bd3fac4cef6f26ec.png\"></dd>" + 
 "</dl>" + 
 "<p>or, from <a href=\"/wiki/Euler%27s_formula\" title=\"Euler\'s formula\">Euler\'s formula</a>,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" \psi(x) = C \sin kx + D \cos kx.\!\" src=\"//upload.wikimedia.org/math/a/6/e/a6e6b07e7ce12709ab98c2ba47cca5af.png\"></dd>" + 
 "</dl>" + 
 "<p>The infinite potential walls of the box determine the values of <i>C</i>, <i>D</i>, and <i>k</i> at <span class=\"nowrap\"><i>x</i> = 0</span> and <span class=\"nowrap\"><i>x</i> = <i>L</i></span> where <span class=\"nowrap\"><i>ψ</i></span> must be zero. Thus, at <span class=\"nowrap\"><i>x</i> = 0</span>,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"\psi(0) = 0 = C\sin 0 + D\cos 0 = D\!\" src=\"//upload.wikimedia.org/math/3/5/0/3501417b5587efe9e1355368fc5e640b.png\"></dd>" + 
 "</dl>" + 
 "<p>and <span class=\"nowrap\"><i>D</i> = 0</span>. At <span class=\"nowrap\"><i>x</i> = <i>L</i></span>,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" \psi(L) = 0 = C\sin kL.\!\" src=\"//upload.wikimedia.org/math/2/c/5/2c5e1eb6d34b55cfc8d117d347ec2bc8.png\"></dd>" + 
 "</dl>" + 
 "<p>in which <i>C</i> cannot be zero as this would conflict with the Born interpretation. Therefore, since <span class=\"nowrap\">sin(<i>kL</i>) = 0</span>, <i>kL</i> must be an integer multiple of π,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"k = \frac{n\pi}{L}\qquad\qquad n=1,2,3,\ldots.\" src=\"//upload.wikimedia.org/math/3/d/2/3d23973128a8a07d48f0ba1f8585f724.png\"></dd>" + 
 "</dl>" + 
 "<p>The quantization of energy levels follows from this constraint on <i>k</i>, since</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"E = \frac{\hbar^2 \pi^2 n^2}{2mL^2} = \frac{n^2h^2}{8mL^2}.\" src=\"//upload.wikimedia.org/math/2/f/d/2fd009416ed37cc1420e759f5fb8296a.png\"></dd>" + 
 "</dl>" + 
 "<h3><span class=\"mw-headline\" id=\"Finite_potential_well\">Finite potential well</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=16\" title=\"Edit section: Finite potential well\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Finite_potential_well\" title=\"Finite potential well\">Finite potential well</a></div>" + 
 "<p>A finite potential well is the generalization of the infinite potential well problem to potential wells having finite depth.</p>" + 
 "<p>The finite potential well problem is mathematically more complicated than the infinite particle-in-a-box problem as the wave function is not pinned to zero at the walls of the well. Instead, the wave function must satisfy more complicated mathematical boundary conditions as it is nonzero in regions outside the well.</p>" + 
 "<h3><span class=\"mw-headline\" id=\"Harmonic_oscillator\">Harmonic oscillator</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=17\" title=\"Edit section: Harmonic oscillator\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h3>" + 
 "<div class=\"hatnote relarticle mainarticle\">Main article: <a href=\"/wiki/Quantum_harmonic_oscillator\" title=\"Quantum harmonic oscillator\">Quantum harmonic oscillator</a></div>" + 
 "<div class=\"thumb tright\">" + 
 "<div class=\"thumbinner\" style=\"width:302px;\"><a href=\"/wiki/File:QuantumHarmonicOscillatorAnimation.gif\" class=\"image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/9/90/QuantumHarmonicOscillatorAnimation.gif\" width=\"300\" height=\"373\" class=\"thumbimage\" data-file-width=\"300\" data-file-height=\"373\"></a>" + 
 "<div class=\"thumbcaption\">" + 
 "<div class=\"magnify\"><a href=\"/wiki/File:QuantumHarmonicOscillatorAnimation.gif\" class=\"internal\" title=\"Enlarge\"></a></div>" + 
 "Some trajectories of a <a href=\"/wiki/Harmonic_oscillator\" title=\"Harmonic oscillator\">harmonic oscillator</a> (i.e. a ball attached to a <a href=\"/wiki/Hooke%27s_law\" title=\"Hooke\'s law\">spring</a>) in <a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">classical mechanics</a> (A-B) and quantum mechanics (C-H). In quantum mechanics, the position of the ball is represented by a <a href=\"/wiki/Wave\" title=\"Wave\">wave</a> (called the <a href=\"/wiki/Wave_function\" title=\"Wave function\">wave function</a>), with the <a href=\"/wiki/Real_part\" title=\"Real part\" class=\"mw-redirect\">real part</a> shown in blue and the <a href=\"/wiki/Imaginary_part\" title=\"Imaginary part\" class=\"mw-redirect\">imaginary part</a> shown in red. Some of the trajectories (such as C,D,E,and F) are <a href=\"/wiki/Standing_wave\" title=\"Standing wave\">standing waves</a> (or \"<a href=\"/wiki/Stationary_state\" title=\"Stationary state\">stationary states</a>\"). Each standing-wave frequency is proportional to a possible <a href=\"/wiki/Energy_level\" title=\"Energy level\">energy level</a> of the oscillator. This \"energy quantization\" does not occur in classical physics, where the oscillator can have <i>any</i> energy.</div>" + 
 "</div>" + 
 "</div>" + 
 "<p>As in the classical case, the potential for the quantum harmonic oscillator is given by</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"V(x)=\frac{1}{2}m\omega^2x^2\" src=\"//upload.wikimedia.org/math/f/f/c/ffc1c12124651f59f29b87c405c92a3d.png\"></dd>" + 
 "</dl>" + 
 "<p>This problem can either be treated by directly solving the Schrödinger equation, which is not trivial, or by using the more elegant \"ladder method\" first proposed by Paul Dirac. The <a href=\"/wiki/Eigenstate\" title=\"Eigenstate\" class=\"mw-redirect\">eigenstates</a> are given by</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"  \psi_n(x) = \sqrt{\frac{1}{2^n\,n!}} \cdot \left(\frac{m\omega}{\pi \hbar}\right)^{1/4} \cdot e^{" + 
 "- \frac{m\omega x^2}{2 \hbar}} \cdot H_n\left(\sqrt{\frac{m\omega}{\hbar}} x \right), \qquad n = 0,1,2,\ldots. \" src=\"//upload.wikimedia.org/math/1/0/9/109cf0dbdbf920956b79d4adb277d600.png\"></dd>" + 
 "</dl>" + 
 "<p>where <i>H<sub>n</sub></i> are the <a href=\"/wiki/Hermite_polynomials\" title=\"Hermite polynomials\">Hermite polynomials</a>,</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\"H_n(x)=(-1)^n e^{x^2}\frac{d^n}{dx^n}\left(e^{-x^2}\right)\" src=\"//upload.wikimedia.org/math/7/f/a/7fa6de6f59480e41016f4a9c79ecaacd.png\"></dd>" + 
 "</dl>" + 
 "<p>and the corresponding energy levels are</p>" + 
 "<dl>" + 
 "<dd><img class=\"mwe-math-fallback-image-inline tex\" alt=\" E_n = \hbar \omega \left(n + {1\over 2}\right)\" src=\"//upload.wikimedia.org/math/c/e/8/ce878ab016e4775b084c9f4a7e45a312.png\">.</dd>" + 
 "</dl>" + 
 "<p>This is another example illustrating the quantization of energy for bound states.</p>" + 
 "<h2><span class=\"mw-headline\" id=\"See_also\">See also</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=18\" title=\"Edit section: See also\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<div class=\"noprint portal tright\" style=\"border:solid #aaa 1px;margin:0.5em 0 0.5em 1em\">" + 
 "<table style=\"background:#f9f9f9;font-size:85%;line-height:110%;max-width:175px\">" + 
 "<tbody><tr style=\"vertical-align:middle\">" + 
 "<td style=\"text-align:center\"><a href=\"/wiki/File:Stylised_Lithium_Atom.svg\" class=\"image\"><img alt=\"Portal icon\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Stylised_Lithium_Atom.svg/25px-Stylised_Lithium_Atom.svg.png\" width=\"25\" height=\"28\" class=\"noviewer\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Stylised_Lithium_Atom.svg/37px-Stylised_Lithium_Atom.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Stylised_Lithium_Atom.svg/49px-Stylised_Lithium_Atom.svg.png 2x\" data-file-width=\"266\" data-file-height=\"303\"></a></td>" + 
 "<td style=\"padding:0 0.2em;vertical-align:middle;font-style:italic;font-weight:bold\"><a href=\"/wiki/Portal:Physics\" title=\"Portal:Physics\">Physics portal</a></td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "</div>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Angular_momentum_diagrams_(quantum_mechanics)\" title=\"Angular momentum diagrams (quantum mechanics)\">Angular momentum diagrams (quantum mechanics)</a></li>" + 
 "<li><a href=\"/wiki/EPR_paradox\" title=\"EPR paradox\">EPR paradox</a></li>" + 
 "<li><a href=\"/wiki/Fractional_quantum_mechanics\" title=\"Fractional quantum mechanics\">Fractional quantum mechanics</a></li>" + 
 "<li><a href=\"/wiki/List_of_quantum-mechanical_systems_with_analytical_solutions\" title=\"List of quantum-mechanical systems with analytical solutions\">List of quantum-mechanical systems with analytical solutions</a></li>" + 
 "<li><a href=\"/wiki/Macroscopic_quantum_phenomena\" title=\"Macroscopic quantum phenomena\">Macroscopic quantum phenomena</a></li>" + 
 "<li><a href=\"/wiki/Phase_space_formulation\" title=\"Phase space formulation\">Phase space formulation</a></li>" + 
 "<li><a href=\"/wiki/Regularization_(physics)\" title=\"Regularization (physics)\">Regularization (physics)</a></li>" + 
 "<li><a href=\"/wiki/Spherical_basis\" title=\"Spherical basis\">Spherical basis</a></li>" + 
 "</ul>" + 
 "<h2><span class=\"mw-headline\" id=\"Notes\">Notes</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=19\" title=\"Edit section: Notes\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<div class=\"reflist references-column-width\" style=\"-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em; list-style-type: decimal;\">" + 
 "<ol class=\"references\">" + 
 "<li id=\"cite_note-Born_.26_Wolf-1\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-Born_.26_Wolf_1-0\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a> &amp; Emil Wolf, Principles of Optics, 1999, Cambridge University Press</span></li>" + 
 "<li id=\"cite_note-2\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-2\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Mehra, J.; Rechenberg, H. (1982). <i>The historical development of quantum theory</i>. New York: Springer-Verlag. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0387906428\" title=\"Special:BookSources/0387906428\">0387906428</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=J.&amp;rft.aulast=Mehra&amp;rft.au=Rechenberg%2C+H.&amp;rft.btitle=The+historical+development+of+quantum+theory&amp;rft.date=1982&amp;rft.genre=book&amp;rft.isbn=0387906428&amp;rft.place=New+York&amp;rft.pub=Springer-Verlag&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-3\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-3\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Kragh, Helge (2002). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=ELrFDIldlawC&amp;pg=PA58\"><i>Quantum Generations: A History of Physics in the Twentieth Century</i></a>. Princeton University Press. p.&nbsp;58. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-691-09552-3\" title=\"Special:BookSources/0-691-09552-3\">0-691-09552-3</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Helge&amp;rft.aulast=Kragh&amp;rft.btitle=Quantum+Generations%3A+A+History+of+Physics+in+the+Twentieth+Century&amp;rft.date=2002&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DELrFDIldlawC%26pg%3DPA58&amp;rft.isbn=0-691-09552-3&amp;rft.pages=58&amp;rft.pub=Princeton+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=ELrFDIldlawC&amp;pg=PA58\">Extract of page 58</a></span></li>" + 
 "<li id=\"cite_note-4\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-4\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Ben-Menahem, Ari (2009). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=9tUrarQYhKMC\"><i>Historical Encyclopedia of Natural and Mathematical Sciences, Volume 1</i></a>. Springer. p.&nbsp;3678. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/3540688315\" title=\"Special:BookSources/3540688315\">3540688315</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Ari&amp;rft.aulast=Ben-Menahem&amp;rft.btitle=Historical+Encyclopedia+of+Natural+and+Mathematical+Sciences%2C+Volume+1&amp;rft.date=2009&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3D9tUrarQYhKMC&amp;rft.isbn=3540688315&amp;rft.pages=3678&amp;rft.pub=Springer&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=9tUrarQYhKMC&amp;pg=PA3678\">Extract of page 3678</a></span></li>" + 
 "<li id=\"cite_note-5\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-5\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation journal\">E Arunan (2010). <a rel=\"nofollow\" class=\"external text\" href=\"http://www.ias.ac.in/resonance/Volumes/15/12/1056-1059.pdf\">\"Peter Debye\"</a> <span style=\"font-size:85%;\">(PDF)</span>. <i>Resonance (journal)</i> (Indian Academy of Sciences) <b>15</b> (12).</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.atitle=Peter+Debye&amp;rft.au=E+Arunan&amp;rft.date=2010&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.ias.ac.in%2Fresonance%2FVolumes%2F15%2F12%2F1056-1059.pdf&amp;rft.issue=12&amp;rft.jtitle=Resonance+%28journal%29&amp;rft.pub=Indian+Academy+of+Sciences&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.volume=15\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-6\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-6\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\"><a href=\"/wiki/Thomas_Samuel_Kuhn\" title=\"Thomas Samuel Kuhn\" class=\"mw-redirect\">Kuhn, T. S.</a> (1978). <i>Black-body theory and the quantum discontinuity 1894-1912</i>. Oxford: Clarendon Press. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0195023838\" title=\"Special:BookSources/0195023838\">0195023838</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=T.+S.&amp;rft.aulast=Kuhn&amp;rft.btitle=Black-body+theory+and+the+quantum+discontinuity+1894-1912&amp;rft.date=1978&amp;rft.genre=book&amp;rft.isbn=0195023838&amp;rft.place=Oxford&amp;rft.pub=Clarendon+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-Kragh-7\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-Kragh_7-0\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite id=\"CITEREFKragh2000\" class=\"citation\">Kragh, Helge (1 December 2000), <a rel=\"nofollow\" class=\"external text\" href=\"http://physicsworld.com/cws/article/print/373\"><i>Max Planck: the reluctant revolutionary</i></a>, PhysicsWorld.com</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Helge&amp;rft.aulast=Kragh&amp;rft.btitle=Max+Planck%3A+the+reluctant+revolutionary&amp;rft.date=1+December+2000&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fphysicsworld.com%2Fcws%2Farticle%2Fprint%2F373&amp;rft.pub=PhysicsWorld.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-8\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-8\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation journal\">Einstein, A. (1905). \"<span lang=\"de\" xml:lang=\"de\">Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt</span>\" [On a heuristic point of view concerning the production and transformation of light]. <i><a href=\"/wiki/Annalen_der_Physik\" title=\"Annalen der Physik\">Annalen der Physik</a></i> <b>17</b> (6): 132–148. <a href=\"/wiki/Bibcode\" title=\"Bibcode\">Bibcode</a>:<a rel=\"nofollow\" class=\"external text\" href=\"http://adsabs.harvard.edu/abs/1905AnP...322..132E\">1905AnP...322..132E</a>. <a href=\"/wiki/Digital_object_identifier\" title=\"Digital object identifier\">doi</a>:<a rel=\"nofollow\" class=\"external text\" href=\"//dx.doi.org/10.1002%2Fandp.19053220607\">10.1002/andp.19053220607</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.atitle=%3Cspan+lang%3D%22de%22++%3E%C3%9Cber+einen+die+Erzeugung+und+Verwandlung+des+Lichtes+betreffenden+heuristischen+Gesichtspunkt%3C%2Fspan%3ECategory%3AArticles+containing+German-language+text&amp;rft.aufirst=A.&amp;rft.aulast=Einstein&amp;rft.date=1905&amp;rft.genre=article&amp;rft_id=info%3Abibcode%2F1905AnP...322..132E&amp;rft_id=info%3Adoi%2F10.1002%2Fandp.19053220607&amp;rft.issue=6&amp;rft.jtitle=Annalen+der+Physik&amp;rft.pages=132-148&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.volume=17\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span> Reprinted in <i>The collected papers of Albert Einstein</i>, John Stachel, editor, Princeton University Press, 1989, Vol. 2, pp. 149-166, in German; see also <i>Einstein\'s early work on the quantum hypothesis</i>, ibid. pp. 134-148.</span></li>" + 
 "<li id=\"cite_note-9\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-9\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation journal\">van Hove, Leon (1958). <a rel=\"nofollow\" class=\"external text\" href=\"http://www.ams.org/journals/bull/1958-64-03/S0002-9904-1958-10206-2/S0002-9904-1958-10206-2.pdf\">\"Von Neumann\'s contributions to quantum mechanics\"</a> <span style=\"font-size:85%;\">(PDF)</span>. <i>Bulletin of the American Mathematical Society</i> <b>64</b>: Part2:95–99. <a href=\"/wiki/Digital_object_identifier\" title=\"Digital object identifier\">doi</a>:<a rel=\"nofollow\" class=\"external text\" href=\"//dx.doi.org/10.1090%2Fs0002-9904-1958-10206-2\">10.1090/s0002-9904-1958-10206-2</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.atitle=Von+Neumann%27s+contributions+to+quantum+mechanics&amp;rft.aufirst=Leon&amp;rft.aulast=van+Hove&amp;rft.date=1958&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.ams.org%2Fjournals%2Fbull%2F1958-64-03%2FS0002-9904-1958-10206-2%2FS0002-9904-1958-10206-2.pdf&amp;rft_id=info%3Adoi%2F10.1090%2Fs0002-9904-1958-10206-2&amp;rft.jtitle=Bulletin+of+the+American+Mathematical+Society&amp;rft.pages=Part2%3A95-99&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.volume=64\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-10\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-10\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.feynmanlectures.caltech.edu/III_21.html#Ch21-S5\"></a><a href=\"/wiki/The_Feynman_Lectures_on_Physics\" title=\"The Feynman Lectures on Physics\">The Feynman Lectures on Physics</a></span> <b>III</b> 21-4 \"...it was long believed that the wave function of the Schrödinger equation would never have a macroscopic representation analogous to the macroscopic representation of the amplitude for photons. On the other hand, it is now realized that the phenomena of superconductivity presents us with just this situation. accessdate=2015-11-24</li>" + 
 "<li id=\"cite_note-11\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-11\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external text\" href=\"http://research.physics.berkeley.edu/packard/publications/Articles/LT24_Berk_expts_on_macro_sup_effects.pdf\">Richard Packard (2006) \"Berkeley Experiments on Superfluid Macroscopic Quantum Effects\"</a> accessdate=2015-11-24</span></li>" + 
 "<li id=\"cite_note-12\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-12\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.merriam-webster.com/dictionary/quantum\">\"Quantum - Definition and More from the Free Merriam-Webster Dictionary\"</a>. Merriam-webster.com<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Quantum+-+Definition+and+More+from+the+Free+Merriam-Webster+Dictionary&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.merriam-webster.com%2Fdictionary%2Fquantum&amp;rft.pub=Merriam-webster.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-13\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-13\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external free\" href=\"http://mooni.fccj.org/~ethall/quantum/quant.htm\">http://mooni.fccj.org/~ethall/quantum/quant.htm</a></span></li>" + 
 "<li id=\"cite_note-14\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-14\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://ysfine.com/\">\"ysfine.com\"</a>. <i>ysfine.com</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">11 September</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=ysfine.com&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fysfine.com%2F&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-15\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-15\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external text\" href=\"https://web.archive.org/web/20091026095410/http://geocities.com/mik_malm/quantmech.html\">Oocities.com</a> at the <a href=\"/wiki/Wayback_Machine\" title=\"Wayback Machine\">Wayback Machine</a> (archived October 26, 2009)<sup class=\"noprint Inline-Template\"><span style=\"white-space: nowrap;\">[<i><a href=\"/wiki/Wikipedia:Link_rot\" title=\"Wikipedia:Link rot\"><span title=\"&nbsp;since April 2014\">dead link</span></a></i>]</span></sup></span></li>" + 
 "<li id=\"cite_note-16\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-16\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">P.A.M. Dirac, <i>The Principles of Quantum Mechanics</i>, Clarendon Press, Oxford, 1930.</span></li>" + 
 "<li id=\"cite_note-17\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-17\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">D. Hilbert <i>Lectures on Quantum Theory</i>, 1915–1927</span></li>" + 
 "<li id=\"cite_note-18\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-18\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">J. von Neumann, <i>Mathematische Grundlagen der Quantenmechanik</i>, Springer, Berlin, 1932 (English translation: <i>Mathematical Foundations of Quantum Mechanics</i>, Princeton University Press, 1955).</span></li>" + 
 "<li id=\"cite_note-19\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-19\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">H.Weyl \"The Theory of Groups and Quantum Mechanics\", 1931 (original title: \"Gruppentheorie und Quantenmechanik\").</span></li>" + 
 "<li id=\"cite_note-20\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-20\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Greiner, Walter; Müller, Berndt (1994). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=gCfvWx6vuzUC&amp;pg=PA52\"><i>Quantum Mechanics Symmetries, Second edition</i></a>. Springer-Verlag. p.&nbsp;52. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/3-540-58080-8\" title=\"Special:BookSources/3-540-58080-8\">3-540-58080-8</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Walter&amp;rft.aulast=Greiner&amp;rft.au=M%C3%BCller%2C+Berndt&amp;rft.btitle=Quantum+Mechanics+Symmetries%2C+Second+edition&amp;rft.date=1994&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DgCfvWx6vuzUC%26pg%3DPA52&amp;rft.isbn=3-540-58080-8&amp;rft.pages=52&amp;rft.pub=Springer-Verlag&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=gCfvWx6vuzUC&amp;pg=PA52\">Chapter 1, p. 52</a></span></li>" + 
 "<li id=\"cite_note-21\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-21\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.aip.org/history/heisenberg/p08a.htm\">\"Heisenberg - Quantum Mechanics, 1925–1927: The Uncertainty Relations\"</a>. Aip.org<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Heisenberg+-+Quantum+Mechanics%2C+1925%E2%80%931927%3A+The+Uncertainty+Relations&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.aip.org%2Fhistory%2Fheisenberg%2Fp08a.htm&amp;rft.pub=Aip.org&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-google215-22\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-google215_22-0\"><span class=\"cite-accessibility-label\">Jump up to: </span><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-google215_22-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation book\">Greenstein, George; Zajonc, Arthur (2006). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=5t0tm0FB1CsC&amp;pg=PA215\"><i>The Quantum Challenge: Modern Research on the Foundations of Quantum Mechanics, Second edition</i></a>. Jones and Bartlett Publishers, Inc. p.&nbsp;215. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-7637-2470-X\" title=\"Special:BookSources/0-7637-2470-X\">0-7637-2470-X</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=George&amp;rft.aulast=Greenstein&amp;rft.au=Zajonc%2C+Arthur&amp;rft.btitle=The+Quantum+Challenge%3A+Modern+Research+on+the+Foundations+of+Quantum+Mechanics%2C+Second+edition&amp;rft.date=2006&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3D5t0tm0FB1CsC%26pg%3DPA215&amp;rft.isbn=0-7637-2470-X&amp;rft.pages=215&amp;rft.pub=Jones+and+Bartlett+Publishers%2C+Inc&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=5t0tm0FB1CsC&amp;pg=PA215\">Chapter 8, p. 215</a></span></li>" + 
 "<li id=\"cite_note-23\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-23\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.actapress.com/PaperInfo.aspx?PaperID=25988&amp;reason=500\">\"[Abstract] Visualization of Uncertain Particle Movement\"</a>. Actapress.com<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=%5BAbstract%26%2393%3B+Visualization+of+Uncertain+Particle+Movement&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.actapress.com%2FPaperInfo.aspx%3FPaperID%3D25988%26reason%3D500&amp;rft.pub=Actapress.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-24\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-24\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Hirshleifer, Jack (2001). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=W2J2IXgiZVgC&amp;pg=PA265\"><i>The Dark Side of the Force: Economic Foundations of Conflict Theory</i></a>. Campbridge University Press. p.&nbsp;265. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-521-80412-4\" title=\"Special:BookSources/0-521-80412-4\">0-521-80412-4</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Jack&amp;rft.aulast=Hirshleifer&amp;rft.btitle=The+Dark+Side+of+the+Force%3A+Economic+Foundations+of+Conflict+Theory&amp;rft.date=2001&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DW2J2IXgiZVgC%26pg%3DPA265&amp;rft.isbn=0-521-80412-4&amp;rft.pages=265&amp;rft.pub=Campbridge+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=W2J2IXgiZVgC&amp;pg=PA265\">Chapter , p.</a></span></li>" + 
 "<li id=\"cite_note-25\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-25\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.dict.cc/german-english/eigen.html\">\"dict.cc dictionary&nbsp;:: eigen&nbsp;:: German-English translation\"</a>. <i>dict.cc</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">11 September</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=dict.cc+dictionary+%3A%3A+eigen+%3A%3A+German-English+translation&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.dict.cc%2Fgerman-english%2Feigen.html&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-26\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-26\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.phy.olemiss.edu/~luca/Topics/qm/collapse.html\">\"Topics: Wave-Function Collapse\"</a>. Phy.olemiss.edu. 2012-07-27<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Topics%3A+Wave-Function+Collapse&amp;rft.date=2012-07-27&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.phy.olemiss.edu%2F~luca%2FTopics%2Fqm%2Fcollapse.html&amp;rft.pub=Phy.olemiss.edu&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-27\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-27\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://farside.ph.utexas.edu/teaching/qmech/lectures/node28.html\">\"Collapse of the wave-function\"</a>. Farside.ph.utexas.edu<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Collapse+of+the+wave-function&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Ffarside.ph.utexas.edu%2Fteaching%2Fqmech%2Flectures%2Fnode28.html&amp;rft.pub=Farside.ph.utexas.edu&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-28\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-28\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.reddit.com/r/philosophy/comments/8p2qv/determinism_and_naive_realism/\">\"Determinism and Naive Realism&nbsp;: philosophy\"</a>. Reddit.com. 2009-06-01<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Determinism+and+Naive+Realism+%3A+philosophy&amp;rft.date=2009-06-01&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.reddit.com%2Fr%2Fphilosophy%2Fcomments%2F8p2qv%2Fdeterminism_and_naive_realism%2F&amp;rft.pub=Reddit.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-29\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-29\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\">Michael Trott. <a rel=\"nofollow\" class=\"external text\" href=\"http://demonstrations.wolfram.com/TimeEvolutionOfAWavepacketInASquareWell/\">\"Time-Evolution of a Wavepacket in a Square Well&nbsp;— Wolfram Demonstrations Project\"</a>. Demonstrations.wolfram.com<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-10-15</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Michael+Trott&amp;rft.btitle=Time-Evolution+of+a+Wavepacket+in+a+Square+Well%26nbsp%3B%E2%80%94+Wolfram+Demonstrations+Project&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fdemonstrations.wolfram.com%2FTimeEvolutionOfAWavepacketInASquareWell%2F&amp;rft.pub=Demonstrations.wolfram.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-30\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-30\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\">Michael Trott. <a rel=\"nofollow\" class=\"external text\" href=\"http://demonstrations.wolfram.com/TimeEvolutionOfAWavepacketInASquareWell/\">\"Time Evolution of a Wavepacket In a Square Well\"</a>. Demonstrations.wolfram.com<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-10-15</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Michael+Trott&amp;rft.btitle=Time+Evolution+of+a+Wavepacket+In+a+Square+Well&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fdemonstrations.wolfram.com%2FTimeEvolutionOfAWavepacketInASquareWell%2F&amp;rft.pub=Demonstrations.wolfram.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-31\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-31\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Mathews, Piravonu Mathews; Venkatesan, K. (1976). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=_qzs1DD3TcsC&amp;pg=PA36\"><i>A Textbook of Quantum Mechanics</i></a>. Tata McGraw-Hill. p.&nbsp;36. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-07-096510-2\" title=\"Special:BookSources/0-07-096510-2\">0-07-096510-2</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Piravonu+Mathews&amp;rft.aulast=Mathews&amp;rft.au=Venkatesan%2C+K.&amp;rft.btitle=A+Textbook+of+Quantum+Mechanics&amp;rft.date=1976&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3D_qzs1DD3TcsC%26pg%3DPA36&amp;rft.isbn=0-07-096510-2&amp;rft.pages=36&amp;rft.pub=Tata+McGraw-Hill&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=_qzs1DD3TcsC&amp;pg=PA36\">Chapter 2, p. 36</a></span></li>" + 
 "<li id=\"cite_note-32\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-32\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://physics.ukzn.ac.za/~petruccione/Phys120/Wave%20Functions%20and%20the%20Schr%F6dinger%20Equation.pdf\">\"Wave Functions and the Schrödinger Equation\"</a> <span style=\"font-size:85%;\">(PDF)</span><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-10-15</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Wave+Functions+and+the+Schr%C3%B6dinger+Equation&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fphysics.ukzn.ac.za%2F~petruccione%2FPhys120%2FWave%2520Functions%2520and%2520the%2520Schr%25F6dinger%2520Equation.pdf&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span><sup class=\"noprint Inline-Template\"><span style=\"white-space: nowrap;\">[<i><a href=\"/wiki/Wikipedia:Link_rot\" title=\"Wikipedia:Link rot\"><span title=\"&nbsp;since August 2012\">dead link</span></a></i>]</span></sup></span></li>" + 
 "<li id=\"cite_note-33\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-33\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external autonumber\" href=\"http://th-www.if.uj.edu.pl/acta/vol19/pdf/v19p0683.pdf\">[1]</a><sup class=\"noprint Inline-Template\"><span style=\"white-space: nowrap;\">[<i><a href=\"/wiki/Wikipedia:Link_rot\" title=\"Wikipedia:Link rot\"><span title=\"&nbsp;since April 2014\">dead link</span></a></i>]</span></sup></span></li>" + 
 "<li id=\"cite_note-34\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-34\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">Nancy Thorndike Greenspan, \"The End of the Certain World: The Life and Science of Max Born\" (Basic Books, 2005), pp. 124-8 and 285-6.</span></li>" + 
 "<li id=\"cite_note-35\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-35\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external free\" href=\"http://ocw.usu.edu/physics/classical-mechanics/pdf_lectures/06.pdf\">http://ocw.usu.edu/physics/classical-mechanics/pdf_lectures/06.pdf</a></span></li>" + 
 "<li id=\"cite_note-36\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-36\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://nobelprize.org/nobel_prizes/physics/laureates/1979/index.html\">\"The Nobel Prize in Physics 1979\"</a>. Nobel Foundation<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-02-16</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=The+Nobel+Prize+in+Physics+1979&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fnobelprize.org%2Fnobel_prizes%2Fphysics%2Flaureates%2F1979%2Findex.html&amp;rft.pub=Nobel+Foundation&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-37\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-37\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation arxiv\">Carl M. Bender, Daniel W. Hook, Karta Kooner (2009-12-31). \"Complex Elliptic Pendulum\". <a href=\"/wiki/ArXiv\" title=\"ArXiv\">arXiv</a>:<a rel=\"nofollow\" class=\"external text\" href=\"//arxiv.org/abs/1001.0131\">1001.0131</a> [<a rel=\"nofollow\" class=\"external text\" href=\"//arxiv.org/archive/hep-th\">hep-th</a>].</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.atitle=Complex+Elliptic+Pendulum&amp;rft.au=Carl+M.+Bender%2C+Daniel+W.+Hook%2C+Karta+Kooner&amp;rft.date=2009-12-31&amp;rft.genre=preprint&amp;rft_id=info%3Aarxiv%2F1001.0131&amp;rft.jtitle=arXiv&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-38\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-38\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">See, for example, <a href=\"/wiki/Precision_tests_of_QED\" title=\"Precision tests of QED\">Precision tests of QED</a>. The relativistic refinement of quantum mechanics known as <a href=\"/wiki/Quantum_electrodynamics\" title=\"Quantum electrodynamics\">quantum electrodynamics</a> (QED) has been shown to agree with experiment to within 1 part in 10<sup>8</sup> for some atomic properties.</span></li>" + 
 "<li id=\"cite_note-Tipler-39\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-Tipler_39-0\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Tipler, Paul; Llewellyn, Ralph (2008). <i>Modern Physics</i> (5 ed.). <a href=\"/wiki/W._H._Freeman_and_Company\" title=\"W. H. Freeman and Company\">W. H. Freeman and Company</a>. pp.&nbsp;160–161. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/978-0-7167-7550-8\" title=\"Special:BookSources/978-0-7167-7550-8\">978-0-7167-7550-8</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Paul&amp;rft.aulast=Tipler&amp;rft.au=Llewellyn%2C+Ralph&amp;rft.btitle=Modern+Physics&amp;rft.date=2008&amp;rft.edition=5&amp;rft.genre=book&amp;rft.isbn=978-0-7167-7550-8&amp;rft.pages=160-161&amp;rft.pub=W.+H.+Freeman+and+Company&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-40\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-40\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.scribd.com/doc/5998949/Quantum-mechanics-course-iwhatisquantummechanics\">\"Quantum mechanics course iwhatisquantummechanics\"</a>. Scribd.com. 2008-09-14<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Quantum+mechanics+course+iwhatisquantummechanics&amp;rft.date=2008-09-14&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.scribd.com%2Fdoc%2F5998949%2FQuantum-mechanics-course-iwhatisquantummechanics&amp;rft.pub=Scribd.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-41\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-41\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">A. Einstein, B. Podolsky, and N. Rosen, <a rel=\"nofollow\" class=\"external text\" href=\"http://www.drchinese.com/David/EPR.pdf\"><i>Can quantum-mechanical description of physical reality be considered complete?</i></a> Phys. Rev. <b>47</b> 777 (1935). <a rel=\"nofollow\" class=\"external autonumber\" href=\"http://prola.aps.org/abstract/PR/v47/i10/p777_1\">[2]</a></span></li>" + 
 "<li id=\"cite_note-42\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-42\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://philsci-archive.pitt.edu/2328/1/handbook.pdf\">\"Between classical and quantum�\"</a> <span style=\"font-size:85%;\">(PDF)</span><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-19</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Between+classical+and+quantum%EF%BF%BD&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fphilsci-archive.pitt.edu%2F2328%2F1%2Fhandbook.pdf&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-43\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-43\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">(see <a href=\"/wiki/Macroscopic_quantum_phenomena\" title=\"Macroscopic quantum phenomena\">macroscopic quantum phenomena</a>, <a href=\"/wiki/Bose%E2%80%93Einstein_condensate\" title=\"Bose–Einstein condensate\">Bose–Einstein condensate</a>, and <a href=\"/wiki/Quantum_machine\" title=\"Quantum machine\">Quantum machine</a>)</span></li>" + 
 "<li id=\"cite_note-44\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-44\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://academic.brooklyn.cuny.edu/physics/sobel/Nucphys/atomprop.html\">\"Atomic Properties\"</a>. Academic.brooklyn.cuny.edu<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Atomic+Properties&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Facademic.brooklyn.cuny.edu%2Fphysics%2Fsobel%2FNucphys%2Fatomprop.html&amp;rft.pub=Academic.brooklyn.cuny.edu&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-45\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-45\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external free\" href=\"http://assets.cambridge.org/97805218/29526/excerpt/9780521829526_excerpt.pdf\">http://assets.cambridge.org/97805218/29526/excerpt/9780521829526_excerpt.pdf</a></span></li>" + 
 "<li id=\"cite_note-46\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-46\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Max_Born\" title=\"Max Born\">Born, M.</a>, <a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Heisenberg, W.</a>, <a href=\"/wiki/Pascual_Jordan\" title=\"Pascual Jordan\">Jordan, P.</a> (1926). <i>Z. Phys.</i> <b>35</b>: 557–615. Translated as \'On quantum mechanics <span class=\"texhtml\">II</span>\', pp. 321–385 in <a href=\"/wiki/Bartel_Leendert_van_der_Waerden\" title=\"Bartel Leendert van der Waerden\">Van der Waerden, B.L.</a> (1967), <i>Sources of Quantum Mechanics</i>, North-Holland, Amsterdam, \"The basic difference between the theory proposed here and that used hitherto ... lies in the characteristic kinematics ...\", p. 385.</span></li>" + 
 "<li id=\"cite_note-47\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-47\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Dirac, P.A.M.</a> (1930/1958). <i>The Principles of Quantum Mechanics</i>, fourth edition, Oxford University Press, Oxford UK, p. 5: \"A question about what will happen to a particular photon under certain conditions is not really very precise. To make it precise one must imagine some experiment performed having a bearing on the question, and enquire what will be the result of the experiment. Only questions about the results of experiments have a real significance and it is only such questions that theoretical physics has to consider.\"</span></li>" + 
 "<li id=\"cite_note-48\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-48\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Bohr, N.</a> (1939). The Causality Problem in Atomic Physics, in <i>New Theories in Physics, Conference organized in collaboration with the International Union of Physics and the Polish Intellectual Co-operation Committee, Warsaw, May 30th – June 3rd 1938</i>, International Institute of Intellectual Co-operation, Paris, 1939, pp. 11–30, reprinted in <i>Niels Bohr, Collected Works</i>, volume 7 (1933 – 1958) edited by J. Kalckar, Elsevier, Amsterdam, <a href=\"/wiki/Special:BookSources/0444898921\" class=\"internal mw-magiclink-isbn\">ISBN 0-444-89892-1</a>, pp. 303–322. \"The essential lesson of the analysis of measurements in quantum theory is thus the emphasis on the necessity, in the account of the phenomena, of taking the whole experimental arrangement into consideration, in complete conformity with the fact that all unambiguous interpretation of the quantum mechanical formalism involves the fixation of the external conditions, defining the initial state of the atomic system and the character of the possible predictions as regards subsequent observable properties of that system. Any measurement in quantum theory can in fact only refer either to a fixation of the initial state or to the test of such predictions, and it is first the combination of both kinds which constitutes a well-defined phenomenon.\"</span></li>" + 
 "<li id=\"cite_note-49\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-49\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Bohr, N.</a> (1948). On the notions of complementarity and causality, <i>Dialectica</i> <b>2</b>: 312–319. \"As a more appropriate way of expression, one may advocate limitation of the use of the word <i>phenomenon</i> to refer to observations obtained under specified circumstances, including an account of the whole experiment.\"</span></li>" + 
 "<li id=\"cite_note-50\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-50\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">Ludwig, G. (1987). <i>An Axiomatic Basis for Quantum Mechanics</i>, volume 2, <i>Quantum Mechanics and Macrosystems</i>, translated by K. Just, Springer, Berlin, <a href=\"/wiki/Special:BookSources/9783642718991\" class=\"internal mw-magiclink-isbn\">ISBN 978-3-642-71899-1</a>, Chapter <span class=\"texhtml\">XIII</span>, Special Structures in Preparation and Registration Devices, §1, Measurement chains, p. 132.</span></li>" + 
 "<li id=\"cite_note-Heisenberg_1927-51\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-Heisenberg_1927_51-0\"><span class=\"cite-accessibility-label\">Jump up to: </span><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-Heisenberg_1927_51-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Heisenberg, W.</a> (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik, <i>Z. Phys.</i> <b>43</b>: 172–198. Translation as \'The actual content of quantum theoretical kinematics and mechanics\' <a rel=\"nofollow\" class=\"external text\" href=\"http://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19840008978.pdf\">here</a>, \"But in the rigorous formulation of the law of causality, — \"If we know the present precisely, we can calculate the future\" — it is not the conclusion that is faulty, but the premise.\"</span></li>" + 
 "<li id=\"cite_note-52\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-52\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Herbert_S._Green\" title=\"Herbert S. Green\">Green, H.S.</a> (1965). <i>Matrix Mechanics</i>, with a foreword by <a href=\"/wiki/Max_Born\" title=\"Max Born\">Max Born</a>, P. Noordhoff Ltd, Groningen. \"It is not possible, therefore, to provide \'initial conditions\' for the prediction of the behaviour of atomic systems, in the way contemplated by classical physics. This is accepted by quantum theory, not merely as an experimental difficulty, but as a fundamental law of nature\", p. 32.</span></li>" + 
 "<li id=\"cite_note-53\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-53\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/L%C3%A9on_Rosenfeld\" title=\"Léon Rosenfeld\">Rosenfeld, L.</a> (1957). Misunderstandings about the foundations of quantum theory, pp. 41–45 in <i>Observation and Interpretation</i>, edited by S. Körner, Butterworths, London. \"A phenomenon is therefore a process (endowed with the characteristic quantal wholeness) involving a definite type of interaction between the system and the apparatus.\"</span></li>" + 
 "<li id=\"cite_note-54\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-54\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Paul_Dirac\" title=\"Paul Dirac\">Dirac, P.A.M.</a> (1973). Development of the physicist\'s conception of nature, pp. 1–55 in <i>The Physicist\'s Conception of Nature</i>, edited by J. Mehra, D. Reidel, Dordrecht, <a href=\"/wiki/Special:BookSources/9027703450\" class=\"internal mw-magiclink-isbn\">ISBN 90-277-0345-0</a>, p. 5: \"That led Heisenberg to his really masterful step forward, resulting in the new quantum mechanics. His idea was to build up a theory entirely in terms of quantities referring to two states.\"</span></li>" + 
 "<li id=\"cite_note-55\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-55\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Max_Born\" title=\"Max Born\">Born, M.</a> (1927). Physical aspects of quantum mechanics, <i>Nature</i> <b>119</b>: 354–357, \"These probabilities are thus dynamically determined. But what the system actually does is not determined ...\"</span></li>" + 
 "<li id=\"cite_note-56\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-56\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Albert_Messiah\" title=\"Albert Messiah\">Messiah, A.</a> (1961). <i>Quantum Mechanics</i>, volume 1, translated by G.M. Temmer from the French <i>Mécanique Quantique</i>, North-Holland, Amsterdam, p. 157.</span></li>" + 
 "<li id=\"cite_note-57\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-57\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Niels_Bohr\" title=\"Niels Bohr\">Bohr, N.</a> (1928). The Quantum postulate and the recent development of atomic theory, <i>Nature</i> <b>121</b>: 580–590.</span></li>" + 
 "<li id=\"cite_note-58\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-58\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Werner_Heisenberg\" title=\"Werner Heisenberg\">Heisenberg, W.</a> (1930). <i>The Physical Principles of the Quantum Theory</i>, translated by C. Eckart and F.C. Hoyt, University of Chicago Press.</span></li>" + 
 "<li id=\"cite_note-59\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-59\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a href=\"/wiki/Herbert_Goldstein\" title=\"Herbert Goldstein\">Goldstein, H.</a> (1950). <i>Classical Mechanics</i>, Addison-Wesley, <a href=\"/wiki/Special:BookSources/0201025108\" class=\"internal mw-magiclink-isbn\">ISBN 0-201-02510-8</a>.</span></li>" + 
 "<li id=\"cite_note-60\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-60\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">\"There is as yet no logically consistent and complete relativistic quantum field theory.\", p. 4. &nbsp;— V. B. Berestetskii, <a href=\"/wiki/Evgeny_Lifshitz\" title=\"Evgeny Lifshitz\">E. M. Lifshitz</a>, L P Pitaevskii (1971). J. B. Sykes, J. S. Bell (translators). <i>Relativistic Quantum Theory</i> <b>4, part I</b>. <i>Course of Theoretical Physics (Landau and Lifshitz)</i> <a href=\"/wiki/Special:BookSources/0080160255\" class=\"internal mw-magiclink-isbn\">ISBN 0-08-016025-5</a></span></li>" + 
 "<li id=\"cite_note-61\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-61\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.damtp.cam.ac.uk/strings02/dirac/hawking/\">\"Stephen Hawking; Gödel and the end of physics\"</a>. <i>cam.ac.uk</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">11 September</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Stephen+Hawking%3B+G%C3%B6del+and+the+end+of+physics&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.damtp.cam.ac.uk%2Fstrings02%2Fdirac%2Fhawking%2F&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-62\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-62\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=6a-agBFWuyQC&amp;pg=PA61&amp;lpg=PA61&amp;dq=most+accurately+tested+physical+theory+pulsar&amp;source=bl&amp;ots=rsrPvowECD&amp;sig=S9MaY509U0pOgF86h2uvcpQQ_wU&amp;hl=en&amp;sa=X&amp;ei=TwkTT6j9M8LXiAKSwNjTDQ&amp;sqi=2&amp;ved=0CE0Q6AEwBw#v=onepage&amp;q=most%20accurately%20tested%20physical%20theory%20pulsar&amp;f=false\">\"The Nature of Space and Time\"</a>. <i>google.com</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">11 September</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=The+Nature+of+Space+and+Time&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3D6a-agBFWuyQC%26pg%3DPA61%26lpg%3DPA61%26dq%3Dmost%2Baccurately%2Btested%2Bphysical%2Btheory%2Bpulsar%26source%3Dbl%26ots%3DrsrPvowECD%26sig%3DS9MaY509U0pOgF86h2uvcpQQ_wU%26hl%3Den%26sa%3DX%26ei%3DTwkTT6j9M8LXiAKSwNjTDQ%26sqi%3D2%26ved%3D0CE0Q6AEwBw%23v%3Donepage%26q%3Dmost%2520accurately%2520tested%2520physical%2520theory%2520pulsar%26f%3Dfalse&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-63\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-63\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://latticeqcd.blogspot.com/2005/06/most-accurate-theory-we-have.html\">\"Life on the lattice: The most accurate theory we have\"</a>. Latticeqcd.blogspot.com. 2005-06-03<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-10-15</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Life+on+the+lattice%3A+The+most+accurate+theory+we+have&amp;rft.date=2005-06-03&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Flatticeqcd.blogspot.com%2F2005%2F06%2Fmost-accurate-theory-we-have.html&amp;rft.pub=Latticeqcd.blogspot.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-64\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-64\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Parker, B. (1993). <i>Overcoming some of the problems</i>. pp.&nbsp;259–279.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=B.&amp;rft.aulast=Parker&amp;rft.btitle=Overcoming+some+of+the+problems&amp;rft.date=1993&amp;rft.genre=book&amp;rft.pages=259-279&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-65\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-65\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">The Character of Physical Law (1965) Ch. 6; also quoted in The New Quantum Universe (2003), by Tony Hey and Patrick Walters</span></li>" + 
 "<li id=\"cite_note-66\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-66\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">Weinberg, S. <a rel=\"nofollow\" class=\"external text\" href=\"http://arxiv.org/abs/1109.6462\">\"Collapse of the State Vector\"</a>, Phys. Rev. A 85, 062116 (2012).</span></li>" + 
 "<li id=\"cite_note-67\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-67\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://plato.stanford.edu/entries/qm-action-distance/\">\"Action at a Distance in Quantum Mechanics (Stanford Encyclopedia of Philosophy)\"</a>. Plato.stanford.edu. 2007-01-26<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Action+at+a+Distance+in+Quantum+Mechanics+%28Stanford+Encyclopedia+of+Philosophy%29&amp;rft.date=2007-01-26&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fplato.stanford.edu%2Fentries%2Fqm-action-distance%2F&amp;rft.pub=Plato.stanford.edu&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-68\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-68\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://plato.stanford.edu/entries/qm-everett/\">\"Everett\'s Relative-State Formulation of Quantum Mechanics (Stanford Encyclopedia of Philosophy)\"</a>. Plato.stanford.edu<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Everett%27s+Relative-State+Formulation+of+Quantum+Mechanics+%28Stanford+Encyclopedia+of+Philosophy%29&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fplato.stanford.edu%2Fentries%2Fqm-everett%2F&amp;rft.pub=Plato.stanford.edu&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-Cramer-69\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-Cramer_69-0\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.npl.washington.edu/npl/int_rep/tiqm/TI_toc.html\">The Transactional Interpretation of Quantum Mechanics</a> by John Cramer. <i>Reviews of Modern Physics</i> 58, 647-688, July (1986)</span></li>" + 
 "<li id=\"cite_note-70\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-70\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">See, for example, <a href=\"/wiki/The_Feynman_Lectures_on_Physics\" title=\"The Feynman Lectures on Physics\">the Feynman Lectures on Physics</a> for some of the technological applications which use quantum mechanics, e.g., <a href=\"/wiki/Transistor\" title=\"Transistor\">transistors</a> (vol <b>III</b>, pp. 14-11 ff), <a href=\"/wiki/Integrated_circuit\" title=\"Integrated circuit\">integrated circuits</a>, which are follow-on technology in solid-state physics (vol <b>II</b>, pp. 8-6), and <a href=\"/wiki/Laser\" title=\"Laser\">lasers</a> (vol <b>III</b>, pp. 9-13).</span></li>" + 
 "<li id=\"cite_note-71\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-71\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\"><a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=vdXU6SD4_UYC\"><i>Introduction to Quantum Mechanics with Applications to Chemistry - Linus Pauling, E. Bright Wilson</i></a>. 1985-03-01. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/9780486648712\" title=\"Special:BookSources/9780486648712\">9780486648712</a><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Introduction+to+Quantum+Mechanics+with+Applications+to+Chemistry+-+Linus+Pauling%2C+E.+Bright+Wilson&amp;rft.date=1985-03-01&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DvdXU6SD4_UYC&amp;rft.isbn=9780486648712&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-72\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-72\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\">Anderson, Mark (2009-01-13). <a rel=\"nofollow\" class=\"external text\" href=\"http://discovermagazine.com/2009/feb/13-is-quantum-mechanics-controlling-your-thoughts/article_view?b_start:int=1&amp;-C\">\"Is Quantum Mechanics Controlling Your Thoughts? | Subatomic Particles\"</a>. DISCOVER Magazine<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Mark&amp;rft.aulast=Anderson&amp;rft.btitle=Is+Quantum+Mechanics+Controlling+Your+Thoughts%3F+%26%23124%3B+Subatomic+Particles&amp;rft.date=2009-01-13&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fdiscovermagazine.com%2F2009%2Ffeb%2F13-is-quantum-mechanics-controlling-your-thoughts%2Farticle_view%3Fb_start%3Aint%3D1%26-C&amp;rft.pub=DISCOVER+Magazine&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-73\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-73\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://physicsworld.com/cws/article/news/41632\">\"Quantum mechanics boosts photosynthesis\"</a>. physicsworld.com<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2010-10-23</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.btitle=Quantum+mechanics+boosts+photosynthesis&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fphysicsworld.com%2Fcws%2Farticle%2Fnews%2F41632&amp;rft.pub=physicsworld.com&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-74\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-74\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Davies, P. C. W.; Betts, David S. (1984). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=XRyHCrGNstoC&amp;pg=PA79\"><i>Quantum Mechanics, Second edition</i></a>. Chapman and Hall. p.&nbsp;79. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-7487-4446-0\" title=\"Special:BookSources/0-7487-4446-0\">0-7487-4446-0</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Betts%2C+David+S.&amp;rft.aufirst=P.+C.+W.&amp;rft.aulast=Davies&amp;rft.btitle=Quantum+Mechanics%2C+Second+edition&amp;rft.date=1984&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DXRyHCrGNstoC%26pg%3DPA79&amp;rft.isbn=0-7487-4446-0&amp;rft.pages=79&amp;rft.pub=Chapman+and+Hall&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span>, <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=XRyHCrGNstoC&amp;pg=PA79\">Chapter 6, p. 79</a></span></li>" + 
 "<li id=\"cite_note-75\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-75\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\">Baofu, Peter (2007-12-31). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=tKm-Ekwke_UC\"><i>The Future of Complexity: Conceiving a Better Way to Understand Order and Chaos</i></a>. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/9789812708991\" title=\"Special:BookSources/9789812708991\">9789812708991</a><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2012-08-18</span></span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Peter&amp;rft.aulast=Baofu&amp;rft.btitle=The+Future+of+Complexity%3A+Conceiving+a+Better+Way+to+Understand+Order+and+Chaos&amp;rft.date=2007-12-31&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DtKm-Ekwke_UC&amp;rft.isbn=9789812708991&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></span></li>" + 
 "<li id=\"cite_note-76\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-76\"><span class=\"cite-accessibility-label\">Jump up </span>^</a></b></span> <span class=\"reference-text\">Derivation of particle in a box, <a rel=\"nofollow\" class=\"external text\" href=\"http://chemistry.tidalswan.com/index.php?title=Quantum_Mechanics\">chemistry.tidalswan.com</a></span></li>" + 
 "</ol>" + 
 "</div>" + 
 "<h2><span class=\"mw-headline\" id=\"References\">References</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=20\" title=\"Edit section: References\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<div class=\"refbegin\" style=\"\">" + 
 "<p>The following titles, all by working physicists, attempt to communicate quantum theory to lay people, using a minimum of technical apparatus.</p>" + 
 "<ul>" + 
 "<li>Chester, Marvin (1987) <i>Primer of Quantum Mechanics</i>. John Wiley. <a href=\"/wiki/Special:BookSources/0486428788\" class=\"internal mw-magiclink-isbn\">ISBN 0-486-42878-8</a></li>" + 
 "<li><cite class=\"citation book\">Cox, Brian; Forshaw, Jeff (2011). <i><a href=\"/wiki/The_Quantum_Universe\" title=\"The Quantum Universe\">The Quantum Universe: Everything That Can Happen Does Happen</a>:</i>. Allen Lane. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/1-84614-432-9\" title=\"Special:BookSources/1-84614-432-9\">1-84614-432-9</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Brian&amp;rft.au=Forshaw%2C+Jeff&amp;rft.aulast=Cox&amp;rft.btitle=The+Quantum+Universe%3A+Everything+That+Can+Happen+Does+Happen%3A&amp;rft.date=2011&amp;rft.genre=book&amp;rft.isbn=1-84614-432-9&amp;rft.pub=Allen+Lane&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><a href=\"/wiki/Richard_Feynman\" title=\"Richard Feynman\">Richard Feynman</a>, 1985. <i><a href=\"/wiki/QED:_The_Strange_Theory_of_Light_and_Matter\" title=\"QED: The Strange Theory of Light and Matter\">QED: The Strange Theory of Light and Matter</a></i>, <a href=\"/wiki/Princeton_University_Press\" title=\"Princeton University Press\">Princeton University Press</a>. <a href=\"/wiki/Special:BookSources/0691083886\" class=\"internal mw-magiclink-isbn\">ISBN 0-691-08388-6</a>. Four elementary lectures on <a href=\"/wiki/Quantum_electrodynamics\" title=\"Quantum electrodynamics\">quantum electrodynamics</a> and <a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">quantum field theory</a>, yet containing many insights for the expert.</li>" + 
 "<li><a href=\"/wiki/Giancarlo_Ghirardi\" title=\"Giancarlo Ghirardi\">Ghirardi, GianCarlo</a>, 2004. <i>Sneaking a Look at God\'s Cards</i>, Gerald Malsbary, trans. Princeton Univ. Press. The most technical of the works cited here. Passages using <a href=\"/wiki/Algebra\" title=\"Algebra\">algebra</a>, <a href=\"/wiki/Trigonometry\" title=\"Trigonometry\">trigonometry</a>, and <a href=\"/wiki/Bra%E2%80%93ket_notation\" title=\"Bra–ket notation\">bra–ket notation</a> can be passed over on a first reading.</li>" + 
 "<li><a href=\"/wiki/N._David_Mermin\" title=\"N. David Mermin\" class=\"mw-redirect\">N. David Mermin</a>, 1990, \"Spooky actions at a distance: mysteries of the QT\" in his <i>Boojums all the way through</i>. <a href=\"/wiki/Cambridge_University_Press\" title=\"Cambridge University Press\">Cambridge University Press</a>: 110-76.</li>" + 
 "<li><a href=\"/wiki/Victor_Stenger\" title=\"Victor Stenger\" class=\"mw-redirect\">Victor Stenger</a>, 2000. <i>Timeless Reality: Symmetry, Simplicity, and Multiple Universes</i>. Buffalo NY: Prometheus Books. Chpts. 5-8. Includes <a href=\"/wiki/Cosmological\" title=\"Cosmological\" class=\"mw-redirect\">cosmological</a> and <a href=\"/wiki/Philosophical\" title=\"Philosophical\" class=\"mw-redirect\">philosophical</a> considerations.</li>" + 
 "</ul>" + 
 "<p>More technical:</p>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Bryce_DeWitt\" title=\"Bryce DeWitt\">Bryce DeWitt</a>, R. Neill Graham, eds., 1973. <i>The Many-Worlds Interpretation of Quantum Mechanics</i>, Princeton Series in Physics, <a href=\"/wiki/Princeton_University_Press\" title=\"Princeton University Press\">Princeton University Press</a>. <a href=\"/wiki/Special:BookSources/069108131X\" class=\"internal mw-magiclink-isbn\">ISBN 0-691-08131-X</a></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/P._A._M._Dirac\" title=\"P. A. M. Dirac\" class=\"mw-redirect\">Dirac, P. A. M.</a> (1930). <i><a href=\"/wiki/Principles_of_Quantum_Mechanics\" title=\"Principles of Quantum Mechanics\" class=\"mw-redirect\">The Principles of Quantum Mechanics</a></i>. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-19-852011-5\" title=\"Special:BookSources/0-19-852011-5\">0-19-852011-5</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=P.+A.+M.&amp;rft.aulast=Dirac&amp;rft.btitle=The+Principles+of+Quantum+Mechanics&amp;rft.date=1930&amp;rft.genre=book&amp;rft.isbn=0-19-852011-5&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span> The beginning chapters make up a very clear and comprehensible introduction.</li>" + 
 "<li><a href=\"/wiki/Hugh_Everett\" title=\"Hugh Everett\" class=\"mw-redirect\">Hugh Everett</a>, 1957, \"Relative State Formulation of Quantum Mechanics\", <i>Reviews of Modern Physics</i> 29: 454-62.</li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/Richard_Feynman\" title=\"Richard Feynman\">Feynman, Richard P.</a>; <a href=\"/wiki/Robert_B._Leighton\" title=\"Robert B. Leighton\">Leighton, Robert B.</a>; Sands, Matthew (1965). <i><a href=\"/wiki/The_Feynman_Lectures_on_Physics\" title=\"The Feynman Lectures on Physics\">The Feynman Lectures on Physics</a></i> <b>1–3</b>. <a href=\"/wiki/Addison-Wesley\" title=\"Addison-Wesley\">Addison-Wesley</a>. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-7382-0008-5\" title=\"Special:BookSources/0-7382-0008-5\">0-7382-0008-5</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=Richard+P.&amp;rft.aulast=Feynman&amp;rft.au=Leighton%2C+Robert+B.&amp;rft.au=Sands%2C+Matthew&amp;rft.btitle=The+Feynman+Lectures+on+Physics&amp;rft.date=1965&amp;rft.genre=book&amp;rft.isbn=0-7382-0008-5&amp;rft.pub=Addison-Wesley&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.volume=1-3\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\">Griffiths, David J. (2004). <i>Introduction to Quantum Mechanics (2nd ed.)</i>. Prentice Hall. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-13-111892-7\" title=\"Special:BookSources/0-13-111892-7\">0-13-111892-7</a>. <a href=\"/wiki/OCLC\" title=\"OCLC\">OCLC</a>&nbsp;<a rel=\"nofollow\" class=\"external text\" href=\"//www.worldcat.org/oclc/40251748\">40251748</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Griffiths%2C+David+J.&amp;rft.btitle=Introduction+to+Quantum+Mechanics+%282nd+ed.%29&amp;rft.date=2004&amp;rft.genre=book&amp;rft_id=info%3Aoclcnum%2F40251748&amp;rft.isbn=0-13-111892-7&amp;rft.pub=Prentice+Hall&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span> A standard undergraduate text.</li>" + 
 "<li><a href=\"/wiki/Max_Jammer\" title=\"Max Jammer\">Max Jammer</a>, 1966. <i>The Conceptual Development of Quantum Mechanics</i>. McGraw Hill.</li>" + 
 "<li><a href=\"/wiki/Hagen_Kleinert\" title=\"Hagen Kleinert\">Hagen Kleinert</a>, 2004. <i>Path Integrals in Quantum Mechanics, Statistics, Polymer Physics, and Financial Markets</i>, 3rd ed. Singapore: World Scientific. <a rel=\"nofollow\" class=\"external text\" href=\"http://www.physik.fu-berlin.de/~kleinert/b5\">Draft of 4th edition.</a></li>" + 
 "<li>Gunther Ludwig, 1968. <i>Wave Mechanics</i>. London: Pergamon Press. <a href=\"/wiki/Special:BookSources/0082032041\" class=\"internal mw-magiclink-isbn\">ISBN 0-08-203204-1</a></li>" + 
 "<li><a href=\"/wiki/George_Mackey\" title=\"George Mackey\">George Mackey</a> (2004). <i>The mathematical foundations of quantum mechanics</i>. Dover Publications. <a href=\"/wiki/Special:BookSources/0486435172\" class=\"internal mw-magiclink-isbn\">ISBN 0-486-43517-2</a>.</li>" + 
 "<li><a href=\"/wiki/Albert_Messiah\" title=\"Albert Messiah\">Albert Messiah</a>, 1966. <i>Quantum Mechanics</i> (Vol. I), English translation from French by G. M. Temmer. North Holland, John Wiley &amp; Sons. Cf. chpt. IV, section III.</li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/Roland_Omn%C3%A8s\" title=\"Roland Omnès\">Omnès, Roland</a> (1999). <i>Understanding Quantum Mechanics</i>. Princeton University Press. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-691-00435-8\" title=\"Special:BookSources/0-691-00435-8\">0-691-00435-8</a>. <a href=\"/wiki/OCLC\" title=\"OCLC\">OCLC</a>&nbsp;<a rel=\"nofollow\" class=\"external text\" href=\"//www.worldcat.org/oclc/39849482\">39849482</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Omn%C3%A8s%2C+Roland&amp;rft.btitle=Understanding+Quantum+Mechanics&amp;rft.date=1999&amp;rft.genre=book&amp;rft_id=info%3Aoclcnum%2F39849482&amp;rft.isbn=0-691-00435-8&amp;rft.pub=Princeton+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li>Scerri, Eric R., 2006. <i>The <a href=\"/wiki/Periodic_Table\" title=\"Periodic Table\" class=\"mw-redirect\">Periodic Table</a>: Its Story and Its Significance</i>. Oxford University Press. Considers the extent to which chemistry and the periodic system have been reduced to quantum mechanics. <a href=\"/wiki/Special:BookSources/0195305736\" class=\"internal mw-magiclink-isbn\">ISBN 0-19-530573-6</a></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/Transnational_College_of_Lex\" title=\"Transnational College of Lex\" class=\"mw-redirect\">Transnational College of Lex</a> (1996). <i>What is Quantum Mechanics? A Physics Adventure</i>. Language Research Foundation, Boston. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-9643504-1-6\" title=\"Special:BookSources/0-9643504-1-6\">0-9643504-1-6</a>. <a href=\"/wiki/OCLC\" title=\"OCLC\">OCLC</a>&nbsp;<a rel=\"nofollow\" class=\"external text\" href=\"//www.worldcat.org/oclc/34661512\">34661512</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Transnational+College+of+Lex&amp;rft.btitle=What+is+Quantum+Mechanics%3F+A+Physics+Adventure&amp;rft.date=1996&amp;rft.genre=book&amp;rft_id=info%3Aoclcnum%2F34661512&amp;rft.isbn=0-9643504-1-6&amp;rft.pub=Language+Research+Foundation%2C+Boston&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/John_von_Neumann\" title=\"John von Neumann\">von Neumann, John</a> (1955). <i>Mathematical Foundations of Quantum Mechanics</i>. Princeton University Press. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-691-02893-1\" title=\"Special:BookSources/0-691-02893-1\">0-691-02893-1</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.aufirst=John&amp;rft.aulast=von+Neumann&amp;rft.btitle=Mathematical+Foundations+of+Quantum+Mechanics&amp;rft.date=1955&amp;rft.genre=book&amp;rft.isbn=0-691-02893-1&amp;rft.pub=Princeton+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><a href=\"/wiki/Hermann_Weyl\" title=\"Hermann Weyl\">Hermann Weyl</a>, 1950. <i>The Theory of Groups and Quantum Mechanics</i>, Dover Publications.</li>" + 
 "<li>D. Greenberger, K. Hentschel, F. Weinert, eds., 2009. <i>Compendium of quantum physics, Concepts, experiments, history and philosophy</i>, Springer-Verlag, Berlin, Heidelberg.</li>" + 
 "</ul>" + 
 "</div>" + 
 "<h2><span class=\"mw-headline\" id=\"Further_reading\">Further reading</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=21\" title=\"Edit section: Further reading\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<ul>" + 
 "<li><cite class=\"citation book\">Bernstein, Jeremy (2009). <a rel=\"nofollow\" class=\"external text\" href=\"http://books.google.com/books?id=j0Me3brYOL0C&amp;printsec=frontcover\"><i>Quantum Leaps</i></a>. Cambridge, Massachusetts: Belknap Press of Harvard University Press. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/978-0-674-03541-6\" title=\"Special:BookSources/978-0-674-03541-6\">978-0-674-03541-6</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Bernstein%2C+Jeremy&amp;rft.btitle=Quantum+Leaps&amp;rft.date=2009&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3Dj0Me3brYOL0C%26printsec%3Dfrontcover&amp;rft.isbn=978-0-674-03541-6&amp;rft.place=Cambridge%2C+Massachusetts&amp;rft.pub=Belknap+Press+of+Harvard+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/David_Bohm\" title=\"David Bohm\">Bohm, David</a> (1989). <i>Quantum Theory</i>. <a href=\"/wiki/Dover_Publications\" title=\"Dover Publications\">Dover Publications</a>. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-486-65969-0\" title=\"Special:BookSources/0-486-65969-0\">0-486-65969-0</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Bohm%2C+David&amp;rft.btitle=Quantum+Theory&amp;rft.date=1989&amp;rft.genre=book&amp;rft.isbn=0-486-65969-0&amp;rft.pub=Dover+Publications&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\">Eisberg, Robert; <a href=\"/wiki/Robert_Resnick\" title=\"Robert Resnick\">Resnick, Robert</a> (1985). <i>Quantum Physics of Atoms, Molecules, Solids, Nuclei, and Particles (2nd ed.)</i>. Wiley. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-471-87373-X\" title=\"Special:BookSources/0-471-87373-X\">0-471-87373-X</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Eisberg%2C+Robert%3B+Resnick%2C+Robert&amp;rft.btitle=Quantum+Physics+of+Atoms%2C+Molecules%2C+Solids%2C+Nuclei%2C+and+Particles+%282nd+ed.%29&amp;rft.date=1985&amp;rft.genre=book&amp;rft.isbn=0-471-87373-X&amp;rft.pub=Wiley&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/Liboff,_Richard_L.\" title=\"Liboff, Richard L.\" class=\"mw-redirect\">Liboff, Richard L.</a> (2002). <i>Introductory Quantum Mechanics</i>. Addison-Wesley. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-8053-8714-5\" title=\"Special:BookSources/0-8053-8714-5\">0-8053-8714-5</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Liboff%2C+Richard+L.&amp;rft.btitle=Introductory+Quantum+Mechanics&amp;rft.date=2002&amp;rft.genre=book&amp;rft.isbn=0-8053-8714-5&amp;rft.pub=Addison-Wesley&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\">Merzbacher, Eugen (1998). <i>Quantum Mechanics</i>. Wiley, John &amp; Sons, Inc. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-471-88702-1\" title=\"Special:BookSources/0-471-88702-1\">0-471-88702-1</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Merzbacher%2C+Eugen&amp;rft.btitle=Quantum+Mechanics&amp;rft.date=1998&amp;rft.genre=book&amp;rft.isbn=0-471-88702-1&amp;rft.pub=Wiley%2C+John+%26+Sons%2C+Inc&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\"><a href=\"/wiki/J._J._Sakurai\" title=\"J. J. Sakurai\">Sakurai, J. J.</a> (1994). <i>Modern Quantum Mechanics</i>. Addison Wesley. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-201-53929-2\" title=\"Special:BookSources/0-201-53929-2\">0-201-53929-2</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Sakurai%2C+J.+J.&amp;rft.btitle=Modern+Quantum+Mechanics&amp;rft.date=1994&amp;rft.genre=book&amp;rft.isbn=0-201-53929-2&amp;rft.pub=Addison+Wesley&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\">Shankar, R. (1994). <i>Principles of Quantum Mechanics</i>. Springer. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/0-306-44790-8\" title=\"Special:BookSources/0-306-44790-8\">0-306-44790-8</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Shankar%2C+R.&amp;rft.btitle=Principles+of+Quantum+Mechanics&amp;rft.date=1994&amp;rft.genre=book&amp;rft.isbn=0-306-44790-8&amp;rft.pub=Springer&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><cite class=\"citation book\">Stone, A. Douglas (2013). <i>Einstein and the Quantum</i>. Princeton University Press. <a href=\"/wiki/International_Standard_Book_Number\" title=\"International Standard Book Number\">ISBN</a>&nbsp;<a href=\"/wiki/Special:BookSources/978-0-691-13968-5\" title=\"Special:BookSources/978-0-691-13968-5\">978-0-691-13968-5</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Stone%2C+A.+Douglas&amp;rft.btitle=Einstein+and+the+Quantum&amp;rft.date=2013&amp;rft.genre=book&amp;rft.isbn=978-0-691-13968-5&amp;rft.pub=Princeton+University+Press&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><a href=\"/wiki/Martinus_J._G._Veltman\" title=\"Martinus J. G. Veltman\">Martinus J. G. Veltman</a>, 2003 <i>Facts and Mysteries in Elementary Particle Physics</i>.</li>" + 
 "<li><cite class=\"citation book\">Shushi, Tomer (2014). <a rel=\"nofollow\" class=\"external text\" href=\"http://www.davidpublisher.org/Public/uploads/Contribute/55c84ab660c47.pdf\"><i>The Influence of Particle Interactions on the Existence of Quantum Particles Properties</i></a> <span style=\"font-size:85%;\">(PDF)</span>. Haifa, Israel: Journal of Physical Science and Application.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.au=Shushi%2C+Tomer&amp;rft.btitle=The+Influence+of+Particle+Interactions+on+the+Existence+of+Quantum+Particles+Properties&amp;rft.date=2014&amp;rft.genre=book&amp;rft_id=http%3A%2F%2Fwww.davidpublisher.org%2FPublic%2Fuploads%2FContribute%2F55c84ab660c47.pdf&amp;rft.place=Haifa%2C+Israel&amp;rft.pub=Journal+of+Physical+Science+and+Application&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "</ul>" + 
 "<h2><span class=\"mw-headline\" id=\"External_links\">External links</span><span class=\"mw-editsection\"><span class=\"mw-editsection-bracket\">[</span><a href=\"/w/index.php?title=Quantum_mechanics&amp;action=edit&amp;section=22\" title=\"Edit section: External links\">edit</a><span class=\"mw-editsection-bracket\">]</span></span></h2>" + 
 "<table class=\"metadata plainlinks mbox-small\" style=\"padding:0.25em 0.5em 0.5em 0.75em;border:1px solid #aaa;background:#f9f9f9;\">" + 
 "<tbody><tr>" + 
 "<td colspan=\"2\" style=\"padding-bottom:0.75em;border-bottom:1px solid #aaa;text-align:center;\">" + 
 "<div style=\"clear:both;\">Find more about<br>" + 
 "<b>Quantum mechanics</b><br>" + 
 "at Wikipedia\'s <a href=\"/wiki/Wikipedia:Wikimedia_sister_projects\" title=\"Wikipedia:Wikimedia sister projects\">sister projects</a></div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td style=\"padding-top:0.75em;\"><a href=\"//en.wiktionary.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Wiktionary\"><img alt=\"Search Wiktionary\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wiktionary-logo-en.svg/23px-Wiktionary-logo-en.svg.png\" width=\"23\" height=\"25\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wiktionary-logo-en.svg/35px-Wiktionary-logo-en.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Wiktionary-logo-en.svg/46px-Wiktionary-logo-en.svg.png 2x\" data-file-width=\"1000\" data-file-height=\"1089\"></a></td>" + 
 "<td style=\"padding-top:0.75em;\"><a href=\"//en.wiktionary.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"wikt:Special:Search/Quantum mechanics\">Definitions</a> from Wiktionary</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//commons.wikimedia.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Commons\"><img alt=\"Search Commons\" src=\"//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/18px-Commons-logo.svg.png\" width=\"18\" height=\"25\" srcset=\"//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/28px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/37px-Commons-logo.svg.png 2x\" data-file-width=\"1024\" data-file-height=\"1376\"></a></td>" + 
 "<td><a href=\"//commons.wikimedia.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"c:Special:Search/Quantum mechanics\">Media</a> from Commons</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//en.wikinews.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Wikinews\"><img alt=\"Search Wikinews\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/25px-Wikinews-logo.svg.png\" width=\"25\" height=\"14\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/38px-Wikinews-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/24/Wikinews-logo.svg/50px-Wikinews-logo.svg.png 2x\" data-file-width=\"759\" data-file-height=\"415\"></a></td>" + 
 "<td><a href=\"//en.wikinews.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"n:Special:Search/Quantum mechanics\">News stories</a> from Wikinews</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//en.wikiquote.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Wikiquote\"><img alt=\"Search Wikiquote\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/21px-Wikiquote-logo.svg.png\" width=\"21\" height=\"25\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/32px-Wikiquote-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/42px-Wikiquote-logo.svg.png 2x\" data-file-width=\"300\" data-file-height=\"355\"></a></td>" + 
 "<td><a href=\"//en.wikiquote.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"q:Special:Search/Quantum mechanics\">Quotations</a> from Wikiquote</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//en.wikisource.org/wiki/Quantum_mechanics\" title=\"Search Wikisource\"><img alt=\"Search Wikisource\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/24px-Wikisource-logo.svg.png\" width=\"24\" height=\"25\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/36px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/48px-Wikisource-logo.svg.png 2x\" data-file-width=\"410\" data-file-height=\"430\"></a></td>" + 
 "<td><a href=\"//en.wikisource.org/wiki/Quantum_mechanics\" class=\"extiw\" title=\"s:Quantum mechanics\">Source texts</a> from Wikisource</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//en.wikibooks.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Wikibooks\"><img alt=\"Search Wikibooks\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/25px-Wikibooks-logo.svg.png\" width=\"25\" height=\"25\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/38px-Wikibooks-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/50px-Wikibooks-logo.svg.png 2x\" data-file-width=\"300\" data-file-height=\"300\"></a></td>" + 
 "<td><a href=\"//en.wikibooks.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"b:Special:Search/Quantum mechanics\">Textbooks</a> from Wikibooks</td>" + 
 "</tr>" + 
 "<tr style=\"height:25px;\">" + 
 "<td><a href=\"//en.wikiversity.org/wiki/Special:Search/Quantum_mechanics\" title=\"Search Wikiversity\"><img alt=\"Search Wikiversity\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/25px-Wikiversity-logo-en.svg.png\" width=\"25\" height=\"23\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/38px-Wikiversity-logo-en.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wikiversity-logo-en.svg/50px-Wikiversity-logo-en.svg.png 2x\" data-file-width=\"1000\" data-file-height=\"900\"></a></td>" + 
 "<td><a href=\"//en.wikiversity.org/wiki/Special:Search/Quantum_mechanics\" class=\"extiw\" title=\"v:Special:Search/Quantum mechanics\">Learning resources</a> from Wikiversity</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<ul>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.toutestquantique.fr/\">3D animations, applications and research for basic quantum effects</a> (animations also available in <a class=\"external text\" href=\"https://commons.wikimedia.org/wiki/Special:Contributions/Jubobroff\">commons.wikimedia.org</a> (Université paris Sud))</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://oyc.yale.edu/sites/default/files/notes_quantum_cookbook.pdf\">Quantum Cook Book</a> by R. Shankar, Open Yale PHYS 201 material (4pp)</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.lightandmatter.com/lm/\">The Modern Revolution in Physics</a> - an online textbook.</li>" + 
 "<li>J. O\'Connor and E. F. Robertson: <a rel=\"nofollow\" class=\"external text\" href=\"http://www-history.mcs.st-andrews.ac.uk/history/HistTopics/The_Quantum_age_begins.html\">A history of quantum mechanics.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.quantiki.org/wiki/index.php/Introduction_to_Quantum_Theory\">Introduction to Quantum Theory at Quantiki.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://bethe.cornell.edu/\">Quantum Physics Made Relatively Simple</a>: three video lectures by <a href=\"/wiki/Hans_Bethe\" title=\"Hans Bethe\">Hans Bethe</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.nonlocal.com/hbar/\">H is for h-bar.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.freebookcentre.net/Physics/Quantum-Mechanics-Books.html\">Quantum Mechanics Books Collection</a>: Collection of free books</li>" + 
 "</ul>" + 
 "<dl>" + 
 "<dt>Course material</dt>" + 
 "</dl>" + 
 "<ul>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://qpdb.eu\">Quantum Physics Database - Fundamentals and Historical Background of Quantum Theory.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://arxiv.org/abs/quant-ph/0605180\">Doron Cohen: Lecture notes in Quantum Mechanics (comprehensive, with advanced topics).</a></li>" + 
 "<li><a href=\"/wiki/MIT_OpenCourseWare\" title=\"MIT OpenCourseWare\">MIT OpenCourseWare</a>: <a rel=\"nofollow\" class=\"external text\" href=\"http://ocw.mit.edu/OcwWeb/Chemistry/index.htm\">Chemistry</a>.</li>" + 
 "<li>MIT OpenCourseWare: <a rel=\"nofollow\" class=\"external text\" href=\"http://ocw.mit.edu/OcwWeb/Physics/index.htm\">Physics</a>. See <a rel=\"nofollow\" class=\"external text\" href=\"http://ocw.mit.edu/OcwWeb/Physics/8-04Spring-2006/CourseHome/index.htm\">8.04</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"https://www.youtube.com/stanford#g/c/84C10A9CB1D13841\">Stanford Continuing Education PHY 25: Quantum Mechanics</a> by <a href=\"/wiki/Leonard_Susskind\" title=\"Leonard Susskind\">Leonard Susskind</a>, see <a rel=\"nofollow\" class=\"external text\" href=\"http://continuingstudies.stanford.edu/courses/course.php?cid=20072_PHY%2025\">course description</a> Fall 2007</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.physics.csbsju.edu/QM/\">5½ Examples in Quantum Mechanics</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.imperial.ac.uk/quantuminformation/qi/tutorials\">Imperial College Quantum Mechanics Course.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.sparknotes.com/testprep/books/sat2/physics/chapter19section3.rhtml\">Spark Notes - Quantum Physics.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.quantum-physics.polytechnique.fr/\">Quantum Physics Online&nbsp;: interactive introduction to quantum mechanics (RS applets).</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.didaktik.physik.uni-erlangen.de/quantumlab/english/index.html\">Experiments to the foundations of quantum physics with single photons.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.nanohub.org/topics/AQME\">AQME</a>&nbsp;: Advancing Quantum Mechanics for Engineers&nbsp;— by T.Barzso, D.Vasileska and G.Klimeck online learning resource with simulation tools on <a href=\"/wiki/Nanohub\" title=\"Nanohub\" class=\"mw-redirect\">nanohub</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.lsr.ph.ic.ac.uk/~plenio/lecture.pdf\">Quantum Mechanics</a> by Martin Plenio</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://farside.ph.utexas.edu/teaching/qm/389.pdf\">Quantum Mechanics</a> by Richard Fitzpatrick</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://nanohub.org/resources/2039\">Online course on <i>Quantum Transport</i></a></li>" + 
 "</ul>" + 
 "<dl>" + 
 "<dt>FAQs</dt>" + 
 "</dl>" + 
 "<ul>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.hedweb.com/manworld.htm\">Many-worlds or relative-state interpretation.</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.mtnmath.com/faq/meas-qm.html\">Measurement in Quantum mechanics.</a></li>" + 
 "</ul>" + 
 "<dl>" + 
 "<dt>Media</dt>" + 
 "</dl>" + 
 "<ul>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://oyc.yale.edu/physics/phys-201#sessions\">PHYS 201: Fundamentals of Physics II</a> by Ramamurti Shankar, Open Yale Course</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"https://www.youtube.com/view_play_list?p=84C10A9CB1D13841\">Lectures on Quantum Mechanics</a> by <a href=\"/wiki/Leonard_Susskind\" title=\"Leonard Susskind\">Leonard Susskind</a></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.newscientist.com/channel/fundamentals/quantum-world\">Everything you wanted to know about the quantum world</a>&nbsp;— archive of articles from <i><a href=\"/wiki/New_Scientist\" title=\"New Scientist\">New Scientist</a></i>.</li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.sciencedaily.com/news/matter_energy/quantum_physics/\">Quantum Physics Research</a> from <i><a href=\"/wiki/Science_Daily\" title=\"Science Daily\">Science Daily</a></i></li>" + 
 "<li><cite class=\"citation news\">Overbye, Dennis (December 27, 2005). <a rel=\"nofollow\" class=\"external text\" href=\"http://www.nytimes.com/2005/12/27/science/27eins.html?scp=1&amp;sq=quantum%20trickery&amp;st=cse\">\"Quantum Trickery: Testing Einstein\'s Strangest Theory\"</a>. <i>The New York Times</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">April 12,</span> 2010</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AQuantum+mechanics&amp;rft.atitle=Quantum+Trickery%3A+Testing+Einstein%27s+Strangest+Theory&amp;rft.aufirst=Dennis&amp;rft.aulast=Overbye&amp;rft.date=December+27%2C+2005&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.nytimes.com%2F2005%2F12%2F27%2Fscience%2F27eins.html%3Fscp%3D1%26sq%3Dquantum%2520trickery%26st%3Dcse&amp;rft.jtitle=The+New+York+Times&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&nbsp;</span></span></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://www.astronomycast.com/physics/ep-138-quantum-mechanics/\">Audio: Astronomy Cast</a> Quantum Mechanics&nbsp;— June 2009. <a href=\"/wiki/Fraser_Cain\" title=\"Fraser Cain\" class=\"mw-redirect\">Fraser Cain</a> interviews <a href=\"/wiki/Pamela_L._Gay\" title=\"Pamela L. Gay\">Pamela L. Gay</a>.</li>" + 
 "</ul>" + 
 "<dl>" + 
 "<dt>Philosophy</dt>" + 
 "</dl>" + 
 "<ul>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://plato.stanford.edu/entries/qm\">\"Quantum Mechanics\"</a> entry by Jenann Ismael in the <i><a href=\"/wiki/Stanford_Encyclopedia_of_Philosophy\" title=\"Stanford Encyclopedia of Philosophy\">Stanford Encyclopedia of Philosophy</a></i></li>" + 
 "<li><a rel=\"nofollow\" class=\"external text\" href=\"http://plato.stanford.edu/entries/qt-measurement\">\"Measurement in Quantum Theory\"</a> entry by Henry Krips in the <i><a href=\"/wiki/Stanford_Encyclopedia_of_Philosophy\" title=\"Stanford Encyclopedia of Philosophy\">Stanford Encyclopedia of Philosophy</a></i></li>" + 
 "</ul>" + 
 "<table class=\"navbox\" style=\"border-spacing:0\">" + 
 "<tbody><tr>" + 
 "<td style=\"padding:2px\">" + 
 "<table class=\"nowraplinks collapsible autocollapse navbox-inner\" style=\"border-spacing:0;background:transparent;color:inherit\" id=\"collapsibleTable0\">" + 
 "<tbody><tr>" + 
 "<th scope=\"col\" class=\"navbox-title\" colspan=\"3\"><span class=\"collapseButton\">[<a id=\"collapseButton0\" href=\"#\">show</a>]</span>" + 
 "<div class=\"plainlinks hlist navbar mini\">" + 
 "<ul>" + 
 "<li class=\"nv-view\"><a href=\"/wiki/Template:Quantum_mechanics_topics\" title=\"Template:Quantum mechanics topics\"><abbr title=\"View this template\" style=\";;background:none transparent;border:none;\">v</abbr></a></li>" + 
 "<li class=\"nv-talk\"><a href=\"/wiki/Template_talk:Quantum_mechanics_topics\" title=\"Template talk:Quantum mechanics topics\"><abbr title=\"Discuss this template\" style=\";;background:none transparent;border:none;\">t</abbr></a></li>" + 
 "<li class=\"nv-edit\"><a class=\"external text\" href=\"//en.wikipedia.org/w/index.php?title=Template:Quantum_mechanics_topics&amp;action=edit\"><abbr title=\"Edit this template\" style=\";;background:none transparent;border:none;\">e</abbr></a></li>" + 
 "</ul>" + 
 "</div>" + 
 "<div style=\"font-size:114%\"><strong class=\"selflink\">Quantum mechanics</strong></div>" + 
 "</th>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Background</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Introduction_to_quantum_mechanics\" title=\"Introduction to quantum mechanics\">Introduction</a></li>" + 
 "<li><a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">Classical mechanics</a></li>" + 
 "<li><a href=\"/wiki/Old_quantum_theory\" title=\"Old quantum theory\">Old quantum theory</a></li>" + 
 "<li><a href=\"/wiki/Glossary_of_elementary_quantum_mechanics\" title=\"Glossary of elementary quantum mechanics\">Glossary</a></li>" + 
 "<li><a href=\"/wiki/History_of_quantum_mechanics\" title=\"History of quantum mechanics\">History</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "<td class=\"navbox-image\" rowspan=\"13\" style=\"width:0%;padding:0px 0px 0px 2px\">" + 
 "<div><a href=\"/wiki/File:Qm_template_pic_4.svg\" class=\"image\"><img alt=\"Qm template pic 4.svg\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Qm_template_pic_4.svg/150px-Qm_template_pic_4.svg.png\" width=\"150\" height=\"88\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Qm_template_pic_4.svg/225px-Qm_template_pic_4.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Qm_template_pic_4.svg/300px-Qm_template_pic_4.svg.png 2x\" data-file-width=\"276\" data-file-height=\"162\"></a></div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Fundamentals</th>" + 
 "<td class=\"navbox-list navbox-even hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Bra%E2%80%93ket_notation\" title=\"Bra–ket notation\">Bra–ket notation</a></li>" + 
 "<li><a href=\"/wiki/Complementarity_(physics)\" title=\"Complementarity (physics)\">Complementarity</a></li>" + 
 "<li><a href=\"/wiki/Density_matrix\" title=\"Density matrix\">Density matrix</a></li>" + 
 "<li><a href=\"/wiki/Hamiltonian_(quantum_mechanics)\" title=\"Hamiltonian (quantum mechanics)\">Hamiltonian</a></li>" + 
 "<li><a href=\"/wiki/Interference_(wave_propagation)\" title=\"Interference (wave propagation)\">Interference</a></li>" + 
 "<li><a href=\"/wiki/Quantum_decoherence\" title=\"Quantum decoherence\">Decoherence</a></li>" + 
 "<li><a href=\"/wiki/Quantum_nonlocality\" title=\"Quantum nonlocality\">Nonlocality</a></li>" + 
 "<li><a href=\"/wiki/Quantum_state\" title=\"Quantum state\">Quantum state</a></li>" + 
 "<li><a href=\"/wiki/Quantum_superposition\" title=\"Quantum superposition\">Superposition</a></li>" + 
 "<li><a href=\"/wiki/Quantum_tunnelling\" title=\"Quantum tunnelling\">Tunnelling</a></li>" + 
 "<li><a href=\"/wiki/Scattering_theory\" title=\"Scattering theory\">Scattering theory</a></li>" + 
 "<li><a href=\"/wiki/Symmetry_in_quantum_mechanics\" title=\"Symmetry in quantum mechanics\">Symmetry in quantum mechanics</a></li>" + 
 "<li><a href=\"/wiki/Uncertainty_principle\" title=\"Uncertainty principle\">Uncertainty</a></li>" + 
 "<li><a href=\"/wiki/Wave_function\" title=\"Wave function\">Wave function</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Formulations</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Mathematical_formulation_of_quantum_mechanics\" title=\"Mathematical formulation of quantum mechanics\">Formulations</a></li>" + 
 "<li><a href=\"/wiki/Heisenberg_picture\" title=\"Heisenberg picture\">Heisenberg</a></li>" + 
 "<li><a href=\"/wiki/Interaction_picture\" title=\"Interaction picture\">Interaction</a></li>" + 
 "<li><a href=\"/wiki/Matrix_mechanics\" title=\"Matrix mechanics\">Matrix mechanics</a></li>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger_picture\" title=\"Schrödinger picture\">Schrödinger</a></li>" + 
 "<li><a href=\"/wiki/Path_integral_formulation\" title=\"Path integral formulation\">Sum over histories</a></li>" + 
 "<li><a href=\"/wiki/Phase_space_formulation\" title=\"Phase space formulation\">Phase space</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Equations</th>" + 
 "<td class=\"navbox-list navbox-even hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Dirac_equation\" title=\"Dirac equation\">Dirac</a></li>" + 
 "<li><a href=\"/wiki/Klein%E2%80%93Gordon_equation\" title=\"Klein–Gordon equation\">Klein–Gordon</a></li>" + 
 "<li><a href=\"/wiki/Pauli_equation\" title=\"Pauli equation\">Pauli</a></li>" + 
 "<li><a href=\"/wiki/Rydberg_formula\" title=\"Rydberg formula\">Rydberg</a></li>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger_equation\" title=\"Schrödinger equation\">Schrödinger</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Interpretations</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Interpretations_of_quantum_mechanics\" title=\"Interpretations of quantum mechanics\">Interpretations</a></li>" + 
 "<li><a href=\"/wiki/Quantum_Bayesianism\" title=\"Quantum Bayesianism\">Bayesian</a></li>" + 
 "<li><a href=\"/wiki/Consistent_histories\" title=\"Consistent histories\">Consistent histories</a></li>" + 
 "<li><a href=\"/wiki/Copenhagen_interpretation\" title=\"Copenhagen interpretation\">Copenhagen</a></li>" + 
 "<li><a href=\"/wiki/De_Broglie%E2%80%93Bohm_theory\" title=\"De Broglie–Bohm theory\">de Broglie–Bohm</a></li>" + 
 "<li><a href=\"/wiki/Ensemble_interpretation\" title=\"Ensemble interpretation\">Ensemble</a></li>" + 
 "<li><a href=\"/wiki/Hidden_variable_theory\" title=\"Hidden variable theory\">Hidden variables</a></li>" + 
 "<li><a href=\"/wiki/Many-worlds_interpretation\" title=\"Many-worlds interpretation\">Many-worlds</a></li>" + 
 "<li><a href=\"/wiki/Objective_collapse_theory\" title=\"Objective collapse theory\">Objective collapse</a></li>" + 
 "<li><a href=\"/wiki/Quantum_logic\" title=\"Quantum logic\">Quantum logic</a></li>" + 
 "<li><a href=\"/wiki/Relational_quantum_mechanics\" title=\"Relational quantum mechanics\">Relational</a></li>" + 
 "<li><a href=\"/wiki/Stochastic_interpretation\" title=\"Stochastic interpretation\">Stochastic</a></li>" + 
 "<li><a href=\"/wiki/Transactional_interpretation\" title=\"Transactional interpretation\">Transactional</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Experiments</th>" + 
 "<td class=\"navbox-list navbox-even hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Afshar_experiment\" title=\"Afshar experiment\">Afshar</a></li>" + 
 "<li><a href=\"/wiki/Bell_test_experiments\" title=\"Bell test experiments\">Bell\'s inequality</a></li>" + 
 "<li><a href=\"/wiki/Cold_Atom_Laboratory\" title=\"Cold Atom Laboratory\">Cold Atom Laboratory</a></li>" + 
 "<li><a href=\"/wiki/Davisson%E2%80%93Germer_experiment\" title=\"Davisson–Germer experiment\">Davisson–Germer</a></li>" + 
 "<li><a href=\"/wiki/Delayed_choice_quantum_eraser\" title=\"Delayed choice quantum eraser\">Delayed choice quantum eraser</a></li>" + 
 "<li><a href=\"/wiki/Double-slit_experiment\" title=\"Double-slit experiment\">Double-slit</a></li>" + 
 "<li><a href=\"/wiki/Franck%E2%80%93Hertz_experiment\" title=\"Franck–Hertz experiment\">Franck–Hertz experiment</a></li>" + 
 "<li><a href=\"/wiki/Mach%E2%80%93Zehnder_interferometer\" title=\"Mach–Zehnder interferometer\">Mach-Zehnder inter.</a></li>" + 
 "<li><a href=\"/wiki/Elitzur%E2%80%93Vaidman_bomb_tester\" title=\"Elitzur–Vaidman bomb tester\">Elitzur–Vaidman</a></li>" + 
 "<li><a href=\"/wiki/Popper%27s_experiment\" title=\"Popper\'s experiment\">Popper</a></li>" + 
 "<li><a href=\"/wiki/Quantum_eraser_experiment\" title=\"Quantum eraser experiment\">Quantum eraser</a></li>" + 
 "<li><a href=\"/wiki/Schr%C3%B6dinger%27s_cat\" title=\"Schrödinger\'s cat\">Schrödinger\'s cat</a></li>" + 
 "<li><a href=\"/wiki/Stern%E2%80%93Gerlach_experiment\" title=\"Stern–Gerlach experiment\">Stern–Gerlach</a></li>" + 
 "<li><a href=\"/wiki/Wheeler%27s_delayed_choice_experiment\" title=\"Wheeler\'s delayed choice experiment\">Wheeler\'s delayed choice</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Applications</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Quantum_biology\" title=\"Quantum biology\">Quantum biology</a></li>" + 
 "<li><a href=\"/wiki/Quantum_chemistry\" title=\"Quantum chemistry\">Quantum chemistry</a></li>" + 
 "<li><a href=\"/wiki/Quantum_chaos\" title=\"Quantum chaos\">Quantum chaos</a></li>" + 
 "<li><a href=\"/wiki/Quantum_cryptography\" title=\"Quantum cryptography\">Quantum cryptography</a></li>" + 
 "<li><a href=\"/wiki/Quantum_electronics\" title=\"Quantum electronics\" class=\"mw-redirect\">Quantum electronics</a></li>" + 
 "<li><a href=\"/wiki/Quantum_gravity\" title=\"Quantum gravity\">Quantum gravity</a></li>" + 
 "<li><a href=\"/wiki/Quantum_machine\" title=\"Quantum machine\">Quantum machine</a></li>" + 
 "<li><a href=\"/wiki/Quantum_mind\" title=\"Quantum mind\">Quantum mind</a></li>" + 
 "<li><a href=\"/wiki/Quantum_optics\" title=\"Quantum optics\">Quantum optics</a></li>" + 
 "<li><a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">Quantum field theory</a></li>" + 
 "<li><a href=\"/wiki/Quantum_statistical_mechanics\" title=\"Quantum statistical mechanics\">Quantum statistical mechanics</a></li>" + 
 "<li><a href=\"/wiki/Quantum_information_science\" title=\"Quantum information science\">Quantum information science</a></li>" + 
 "<li><a href=\"/wiki/Quantum_technology\" title=\"Quantum technology\">Quantum technology</a></li>" + 
 "<li><a href=\"/wiki/Fractional_quantum_mechanics\" title=\"Fractional quantum mechanics\">Fractional quantum mechanics</a></li>" + 
 "<li><a href=\"/wiki/Relativistic_quantum_mechanics\" title=\"Relativistic quantum mechanics\">Relativistic quantum mechanics</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<table class=\"navbox\" style=\"border-spacing:0\">" + 
 "<tbody><tr>" + 
 "<td style=\"padding:2px\">" + 
 "<table class=\"nowraplinks collapsible autocollapse navbox-inner\" style=\"border-spacing:0;background:transparent;color:inherit\" id=\"collapsibleTable1\">" + 
 "<tbody><tr>" + 
 "<th scope=\"col\" class=\"navbox-title\" colspan=\"2\"><span class=\"collapseButton\">[<a id=\"collapseButton1\" href=\"#\">show</a>]</span>" + 
 "<div class=\"plainlinks hlist navbar mini\">" + 
 "<ul>" + 
 "<li class=\"nv-view\"><a href=\"/wiki/Template:Branches_of_physics\" title=\"Template:Branches of physics\"><abbr title=\"View this template\" style=\";;background:none transparent;border:none;\">v</abbr></a></li>" + 
 "<li class=\"nv-talk\"><a href=\"/wiki/Template_talk:Branches_of_physics\" title=\"Template talk:Branches of physics\"><abbr title=\"Discuss this template\" style=\";;background:none transparent;border:none;\">t</abbr></a></li>" + 
 "<li class=\"nv-edit\"><a class=\"external text\" href=\"//en.wikipedia.org/w/index.php?title=Template:Branches_of_physics&amp;action=edit\"><abbr title=\"Edit this template\" style=\";;background:none transparent;border:none;\">e</abbr></a></li>" + 
 "</ul>" + 
 "</div>" + 
 "<div style=\"font-size:114%\">Branches of <a href=\"/wiki/Physics\" title=\"Physics\">physics</a></div>" + 
 "</th>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">Divisions</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Applied_physics\" title=\"Applied physics\">Applied</a></li>" + 
 "<li><a href=\"/wiki/Experimental_physics\" title=\"Experimental physics\">Experimental</a></li>" + 
 "<li><a href=\"/wiki/Theoretical_physics\" title=\"Theoretical physics\">Theoretical</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Energy\" title=\"Energy\">Energy</a></li>" + 
 "<li><a href=\"/wiki/Motion_(physics)\" title=\"Motion (physics)\">Motion</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</th>" + 
 "<td class=\"navbox-list navbox-even hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Thermodynamics\" title=\"Thermodynamics\">Thermodynamics</a></li>" + 
 "<li><a href=\"/wiki/Mechanics\" title=\"Mechanics\">Mechanics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Classical_mechanics\" title=\"Classical mechanics\">Classical</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Lagrangian_mechanics\" title=\"Lagrangian mechanics\">Lagrangian</a></li>" + 
 "<li><a href=\"/wiki/Hamiltonian_mechanics\" title=\"Hamiltonian mechanics\">Hamiltonian</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Continuum_mechanics\" title=\"Continuum mechanics\">Continuum</a></li>" + 
 "<li><a href=\"/wiki/Celestial_mechanics\" title=\"Celestial mechanics\">Celestial</a></li>" + 
 "<li><a href=\"/wiki/Statistical_mechanics\" title=\"Statistical mechanics\">Statistical</a></li>" + 
 "<li><a href=\"/wiki/Fluid_mechanics\" title=\"Fluid mechanics\">Fluid</a></li>" + 
 "<li><strong class=\"selflink\">Quantum</strong></li>" + 
 "</ul>" + 
 "</li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">" + 
 "<div class=\"hlist\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Wave\" title=\"Wave\">Waves</a></li>" + 
 "<li><a href=\"/wiki/Field_(physics)\" title=\"Field (physics)\">Fields</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Gravitation\" title=\"Gravitation\" class=\"mw-redirect\">Gravitation</a></li>" + 
 "<li><a href=\"/wiki/Electromagnetism\" title=\"Electromagnetism\">Electromagnetism</a></li>" + 
 "<li><a href=\"/wiki/Quantum_field_theory\" title=\"Quantum field theory\">Quantum field theory</a></li>" + 
 "<li><a href=\"/wiki/Theory_of_relativity\" title=\"Theory of relativity\">Relativity</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Special_relativity\" title=\"Special relativity\">Special</a></li>" + 
 "<li><a href=\"/wiki/General_relativity\" title=\"General relativity\">General</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">By speciality</th>" + 
 "<td class=\"navbox-list navbox-even hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Accelerator_physics\" title=\"Accelerator physics\">Accelerator</a></li>" + 
 "<li><a href=\"/wiki/Acoustics\" title=\"Acoustics\">Acoustics</a></li>" + 
 "<li><a href=\"/wiki/Astrophysics\" title=\"Astrophysics\">Astrophysics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Nuclear_astrophysics\" title=\"Nuclear astrophysics\">Nuclear</a></li>" + 
 "<li><a href=\"/wiki/Stellar_physics\" title=\"Stellar physics\">Stellar</a></li>" + 
 "<li><a href=\"/wiki/Heliophysics\" title=\"Heliophysics\">Heliophysics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Solar_physics\" title=\"Solar physics\">Solar</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Space_physics\" title=\"Space physics\">Space</a></li>" + 
 "<li><a href=\"/wiki/Astroparticle_physics\" title=\"Astroparticle physics\">Astroparticle</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Atomic,_molecular,_and_optical_physics\" title=\"Atomic, molecular, and optical physics\">Atomic–molecular–optical <span style=\"font-size:90%;\">(AMO)</span></a></li>" + 
 "<li><a href=\"/wiki/Communication_physics\" title=\"Communication physics\">Communication</a></li>" + 
 "<li><a href=\"/wiki/Computational_physics\" title=\"Computational physics\">Computational</a></li>" + 
 "<li><a href=\"/wiki/Condensed_matter_physics\" title=\"Condensed matter physics\">Condensed matter</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Solid-state_physics\" title=\"Solid-state physics\">Solid-state</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Digital_physics\" title=\"Digital physics\">Digital</a></li>" + 
 "<li><a href=\"/wiki/Engineering_physics\" title=\"Engineering physics\">Engineering</a></li>" + 
 "<li><a href=\"/wiki/Material_physics\" title=\"Material physics\" class=\"mw-redirect\">Material</a></li>" + 
 "<li><a href=\"/wiki/Mathematical_physics\" title=\"Mathematical physics\">Mathematical</a></li>" + 
 "<li><a href=\"/wiki/Nuclear_physics\" title=\"Nuclear physics\">Nuclear</a></li>" + 
 "<li><a href=\"/wiki/Optics\" title=\"Optics\">Optics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Geometrical_optics\" title=\"Geometrical optics\">Geometrical</a></li>" + 
 "<li><a href=\"/wiki/Physical_optics\" title=\"Physical optics\">Physical</a></li>" + 
 "<li><a href=\"/wiki/Nonlinear_optics\" title=\"Nonlinear optics\">Nonlinear</a></li>" + 
 "<li><a href=\"/wiki/Quantum_optics\" title=\"Quantum optics\">Quantum</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Particle_physics\" title=\"Particle physics\">Particle</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Phenomenology_(particle_physics)\" title=\"Phenomenology (particle physics)\">Phenomenology</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Plasma_physics\" title=\"Plasma physics\" class=\"mw-redirect\">Plasma</a></li>" + 
 "<li><a href=\"/wiki/Polymer_physics\" title=\"Polymer physics\">Polymer</a></li>" + 
 "<li><a href=\"/wiki/Statistical_physics\" title=\"Statistical physics\">Statistical</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "<tr style=\"height: 2px; display: none;\">" + 
 "<td colspan=\"2\"></td>" + 
 "</tr>" + 
 "<tr style=\"display: none;\">" + 
 "<th scope=\"row\" class=\"navbox-group\">" + 
 "<div style=\"padding:0.1em 0;line-height:1.2em;\">Physics with<br>" + 
 "other sciences</div>" + 
 "</th>" + 
 "<td class=\"navbox-list navbox-odd hlist\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Biophysics\" title=\"Biophysics\">Biophysics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Cardiophysics\" title=\"Cardiophysics\">Cardiophysics</a></li>" + 
 "<li><a href=\"/wiki/Biomechanics\" title=\"Biomechanics\">Biomechanics</a></li>" + 
 "<li><a href=\"/wiki/Medical_physics\" title=\"Medical physics\">Medical</a></li>" + 
 "<li><a href=\"/wiki/Neurophysics\" title=\"Neurophysics\">Neurophysics</a></li>" + 
 "<li><a href=\"/wiki/Virophysics\" title=\"Virophysics\">Virophysics</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Agrophysics\" title=\"Agrophysics\">Agrophysics</a>" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Soil_physics\" title=\"Soil physics\">Soil</a></li>" + 
 "</ul>" + 
 "</li>" + 
 "<li><a href=\"/wiki/Atmospheric_physics\" title=\"Atmospheric physics\">Atmospheric physics</a></li>" + 
 "<li><a href=\"/wiki/Chemical_physics\" title=\"Chemical physics\">Chemical</a></li>" + 
 "<li><a href=\"/wiki/Econophysics\" title=\"Econophysics\">Econophysics</a></li>" + 
 "<li><a href=\"/wiki/Geophysics\" title=\"Geophysics\">Geophysics</a></li>" + 
 "<li><a href=\"/wiki/Psychophysics\" title=\"Psychophysics\">Psychophysics</a></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "<table class=\"navbox\" style=\"border-spacing:0\">" + 
 "<tbody><tr>" + 
 "<td style=\"padding:2px\">" + 
 "<table class=\"nowraplinks hlist navbox-inner\" style=\"border-spacing:0;background:transparent;color:inherit\">" + 
 "<tbody><tr>" + 
 "<th scope=\"row\" class=\"navbox-group\"><a href=\"/wiki/Help:Authority_control\" title=\"Help:Authority control\">Authority control</a></th>" + 
 "<td class=\"navbox-list navbox-odd\" style=\"text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px\">" + 
 "<div style=\"padding:0em 0.25em\">" + 
 "<ul>" + 
 "<li><a href=\"/wiki/Integrated_Authority_File\" title=\"Integrated Authority File\">GND</a>: <span class=\"uid\"><a rel=\"nofollow\" class=\"external text\" href=\"http://d-nb.info/gnd/4047989-4\">4047989-4</a></span></li>" + 
 "<li><a href=\"/wiki/National_Diet_Library\" title=\"National Diet Library\">NDL</a>: <span class=\"uid\"><a rel=\"nofollow\" class=\"external text\" href=\"http://id.ndl.go.jp/auth/ndlna/00569870\">00569870</a></span></li>" + 
 "</ul>" + 
 "</div>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "</td>" + 
 "</tr>" + 
 "</tbody></table>" + 
 "" + 
 "" + 
 "<!-- " + 
 "NewPP limit report" + 
 "Parsed by mw1010" + 
 "Cached time: 20151124231153" + 
 "Cache expiry: 2592000" + 
 "Dynamic content: false" + 
 "CPU time usage: 1.537 seconds" + 
 "Real time usage: 1.778 seconds" + 
 "Preprocessor visited node count: 5487/1000000" + 
 "Preprocessor generated node count: 0/1500000" + 
 "Post‐expand include size: 189110/2097152 bytes" + 
 "Template argument size: 3286/2097152 bytes" + 
 "Highest expansion depth: 12/40" + 
 "Expensive parser function count: 8/500" + 
 "Lua time usage: 0.537/10.000 seconds" + 
 "Lua memory usage: 4.72 MB/50 MB" + 
 "Number of Wikibase entities loaded: 1-->" + 
 "" + 
 "<!-- " + 
 "Transclusion expansion time report (%,ms,calls,template)" + 
 "100.00% 1296.490      1 - -total" + 
 " 41.00%  531.618      1 - Template:Reflist" + 
 " 18.83%  244.134     29 - Template:Cite_book" + 
 "  9.61%  124.583     22 - Template:Cite_web" + 
 "  6.73%   87.306      2 - Template:Sidebar_with_collapsible_lists" + 
 "  5.74%   74.410      1 - Template:Pp-pc1" + 
 "  5.10%   66.161      8 - Template:Category_handler" + 
 "  4.40%   56.999      4 - Template:Fix" + 
 "  4.17%   54.084      1 - Template:Modern_physics" + 
 "  4.08%   52.931      2 - Template:Navbox" + 
 "-->" + 
 "" + 
 "<!-- Saved in parser cache with key enwiki:pcache:idhash:25202-0!*!0!!en!4!*!math=0 and timestamp 20151124231151 and revision id 692327244" + 
 " -->" + 
 "" + 
 "<!-- Saved in parser cache with key enwiki:stable-pcache:idhash:25202-0!*!0!!en!4!*!math=0 and timestamp 20151124231154 and revision id 692327244" + 
 " -->" + 
 "<noscript>&lt;img src=\"//en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1\" alt=\"\" title=\"\" width=\"1\" height=\"1\" style=\"border: none; position: absolute;\" /&gt;</noscript></div>",
        'createdAt' : new Date(),
        public: true,
        owner: '1',
        likes: 6,
        id : '3'
      },
  	  {
  	  	title: 'Math',
  	  	imageUrl: 'http://resultncutoff.in/wp-content/uploads/2015/03/maths-ftr.jpg',
  	  	message: 'Nothing To See Here... MOVE ALONG!',
        public: true,
        owner: '1',
        likes: 15,
        id : '4',
        'createdAt' : new Date(),
  	  }    

    ];
    for (var i = 0; i < posts.length; i++)
      Posts.insert(posts[i]);
  }
});
