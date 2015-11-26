Meteor.startup(function () {
  Posts.remove({}); 
  if (Posts.find().count() === 0) {
    var posts = [
      {
        'title' :' Case 36-2015',
        'message': "<h2>" + 
"        Case 36-2015: A 27-Year-Old Woman with a Lesion of the Ear Canal" + 
"      </h2>            " + 
"      <h6>Konstantina M. Stankovic, M.D., Ph.D., Oon T. Tan, M.D., Ph.D., and Peter M. Sadow, M.D., Ph.D.</h6>" + 
"              <h3 class=\"cpc-section\">Presentation of Case</h3>" + 
"               <p>Dr. Konstantina M. Stankovic: A 27-year-old woman was seen in an outpatient otolaryn-gology clinic of the Massachusetts Eye and Ear Infirmary, which is affiliated with this hospital, because of a pruritic lesion of the left ear canal, with recurrent bleeding." + 
"     </p><p>One year before this presentation, a ballooning lesion had developed in the patient’s left ear canal that partially occluded the lumen and was associated with " + 
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
"the ear canal is atopic dermatitis (i.e., eczema). This diagnosis is supported by the presence of an intensely pruritic, erythematous lesion with scaly crusting and small, sometimes confluent vesicles. However, atopic dermatitis is typically associated with asthma, allergic rhinitis, or other atopic disorders; this patient did not have any of " + 
"these conditions. In addition, atopic dermatitis of the ear is typically a part of generalized involvement of the face and neck, which was not present in this patient.</p>" + 
"<p>Another relatively common inflammatory process that occurs in the ear canal is an insect bite. " + 
"Insect bites are characterized by discomfort, itching, and focal pain; this patient had these symptoms. However, the chronic nature of the patient’s symptoms and the absence of focal erythema, warmth, and edema make an insect bite unlikely.</p>" + 
"<p>Sarcoidosis, which is a chronic inflammatory disease associated with noncaseating granulomas, is a consideration in this case, because its dermatologic manifestations include maculopapular eruptions, subcutaneous nodules, and lupus pernio, a plaquelike violaceous lesion that occurs in the ear or on the nose, cheek, or skin. However, sarcoidosis is unlikely because it typically is systemic and has respiratory manifestations. In patients with sarcoidosis, skin involvement (seen in 25% of patients) is much less common than involvement of the lungs (seen in 90%) or lymphoid tissues (seen in 75%)<span class=\"q\">1<md-tooltip md-delay=\"0\" md-direction=\"right\">Newman LS, Rose CS, Maier LA. Sarcoidosis. N Engl J Med 1997;336:1224-34.</md-tooltip></span></p>" + 
"<h5>Idiopathic and Reactive Processes</h5>" + 
"<p>Granuloma faciale is an uncommon, benign" + 
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
        likes: 0,
        id : '1'
      },
      {
        'title' :' Case 36-2015',
        'message': '<p>A 16-Year-Old Boy with Coughing Spells</p>',
        'createdAt' : new Date(),
        public: true,
        owner: '1',
        likes: 0,
        id : '2'
      },
      {
        'title' : 'Case 13-2010',
        'message': '<p>An 18.5-Month-Old Girl with Watery Diarrhea and Poor Weight Gain</p>',
        'createdAt' : new Date(),
        public: true,
        owner: '1',
        likes: 0,
        id : '3'
      }
    ];
    for (var i = 0; i < posts.length; i++)
      Posts.insert(posts[i]);
  }
});
