 let AR = document.getElementById("AR");
 let ENG = document.getElementById("ENG");
 let title = document.getElementById('title');
 let text = document.getElementById('text');
  let info = document.getElementById('info');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let list3 = document.getElementById('list3');
let list4 = document.getElementById('list4');
let list5 = document.getElementById('list5');
let list6 = document.getElementById('list6');
let title2 = document.getElementById('title2');
let text2 = document.getElementById('text2');
let textX1 = document.getElementById('textX1');
let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');
let textX2 = document.getElementById('textX2');
let title3 = document.getElementById('title3');
let text3 = document.getElementById('text3');
let textX4 = document.getElementById('textX4');
let textX5 = document.getElementById('textX5');
let textX6 = document.getElementById('textX6');
let info4 = document.getElementById('info4');
let info5 = document.getElementById('info5');
let info6 = document.getElementById('info6');
let title4 = document.getElementById('title4');
let title5 = document.getElementById('title5');
let title6 = document.getElementById('title6');
let textx7 = document.getElementById('textx7');
let textx8 = document.getElementById('textx8');
let textx9 = document.getElementById('textx9');
let title7 = document.getElementById('title7');
let textx10 = document.getElementById('textx10');
let title8 = document.getElementById('title8');
let text11 = document.getElementById('text11');
let title9 = document.getElementById('title9');
let text12 = document.getElementById('text12');
let title10 = document.getElementById('title10');
let text13 = document.getElementById('text13');
let title11 = document.getElementById('title11');
let text14 = document.getElementById('text14');
let title12 = document.getElementById('title12');
let btn = document.getElementById('btn');
let title13 = document.getElementById('title13');
let text15 = document.getElementById('text15');




 AR.onclick = ()=>{
   setLanugage("AR");
   localStorage.setItem("Lang","AR");

 };
 ENG.onclick = ()=>{
   setLanugage("ENG");
   localStorage.setItem("Lang","ENG");


 };
 onload = ()=>{
   setLanugage(localStorage.getItem("Lang"));
 }

 function setLanugage(getLanuage) {
   if (getLanuage === "AR") {
     title.innerHTML = "مركز نزوى لعيادة للعيون بالليزر";
     text.innerHTML = "تقدم عيادة العيون هذه العديد من العلاجات المخصصة للمرضى باستخدام أحدث الأجهزة التكنولوجية مع أطباء يتمتعون بخبرات عالية المستوى في طب العيون";
     info.innerHTML = "تعلم اكثر";
     list1.innerHTML = "الرئسية";
     list2.innerHTML = "الاطباء";
     list3.innerHTML = "جراحة العيون بالليزر";
     list4.innerHTML = "تقنية الليزر للعيون";
     list5.innerHTML = "اتصل بنا";
     list6.innerHTML = "نحن";
     title2.innerHTML = "جراحة العيون بالليز";
     text2.innerHTML = "،تصحيح شكل القرنية باستخدام الليزر بحيث يتم استخدام أداة دقيقة تسمى المايكروكراتوم لإزالة طبقة رقيقة من سطح القرنية باستثناء جزء صغير منها يبقيها ملتصقة بالعين وتدفع للخلف ومن ثم يتم استخدام ليزر الإكسيمر لإزالة جزء من النسيج الداخلي للقرنية ثم إعادة الطبقة السطحية للقرنية إلى وضعها الطبيعي ، أنواع جراحات الليزر مثل";
     textX1.innerHTML = "هي جراحة تصحيحية يتم فيها رفع طبقة رقيقة من القرنية وتحريك جانبيها للسماح بالليزر بإعادة تشكيل القرنية. إنه إجراء مبتكر خالٍ من الشفرات يستخدم فقط قياسات الكمبيوتر عالية التقنية والليزر لإجراء تصحيح الرؤية للعديد من مشاكل العين لدى المرضى.";
     info1.innerHTML = "المزيد";
     info2.innerHTML = "المزيد";
     info3.innerHTML = "المزيد";
     textX3.innerHTML = "هي عدسات شفافة قابلة للزرع يتم وضعها جراحيًا إما بين القرنية والقزحية (الجزء الملون من عينك) أو خلف القزحية مباشرةً ، دون إزالة العدسة الطبيعية. تسمح العدسات اللاصقة للضوء بالتركيز بشكل صحيح على الشبكية للحصول على رؤية أوضح بدون نظارات تصحيحية";
     textX2.innerHTML = "SmartSurfACE ™ PRK هي تقنية متقدمة لجراحة العيون بالليزر تصحح الرؤية دون لمس العين. فهو يجمع بين مزايا المعالجة السطحية الخالية من اللمس والخالية من الشفرات وتقنية الليزر المبتكرة";
     title3.innerHTML = "تقنية الليزر للعيون";
     text3.innerHTML = "نحن نستخدم العديد من الأجهزة المختلفة ليزر العين في عيادتنا لأنظمة التشخيص وأدوات العلاج ومنتجات الخدمة والتقنيات لمرضى العيون"
     textX4.innerHTML = " ... يوفر عرضًا مقطعيًا ثنائي الأبعاد للعين بالإضافة إلى المدار ويستخدم على جزء الخارجي من الجفن المغلق لرؤية العين  :B scan  جهاز الموجات فوق الصوتية للاختبار التشخيصي في ممارسات طب العيون. يمكن لهذا الجهاز تحديد طول العين ويمكن أن يكون مفيدًا في تشخيص اضطرابات البصر الشائعة ";
     textX5.innerHTML = "..هي تقنيات أسطح القرنية الملساء. مع معدل نبض يصل إلى أربعة ميغا هرتز ، وخصائص نبض متطورة وخوارزميات تحديد المواقع المحسّنة ، يتميز ليزر الفيمتو ثانية بمعالجة قصيرة جدًا وأوقات شق";
     textX6.innerHTML = "اسم الجهاز المستخدم قبل جراحة الساد او الماء الابيض  للمساعدة في تحديد العدسة المناسبة لزراعتها, في جراحة الماء الابيض يتم ازالة العدسة الطبيعية المعتمة ويجب استبدالها بزرع عدسة جديدة, هذه العدسة لها وصفات مختلفة مثل النظارات تماماً او العدسات اللاصقة. ولتحديد وصفة طبية مناسبة للزرعة يقوم جهاز   بقياس طول العين وتحدب القرنية, وقد ازالت هذه التقنية الكثير من الاخطاء حيث كانت وصفة العدسة تحسب باليد وبالتالي عرضة للأخطاء الرياضية والنسخ";
     info4.innerHTML = "المزيد";
     info5.innerHTML = "المزيد";
     info6.innerHTML = "المزيد";
     title4.innerHTML = "من داخل العيادة";
     textx7.innerHTML = "نعرض بعض معرض الأنشطة في مركز نزوى للعيون بالليزر ، ما نقوم به وكيف يأخذ المرضى أدوات العلاج وأنظمة التشخيص";
     title5.innerHTML = "يقوم الطبيب بتشخيص فحص عيون المريض بجهاز هايدلبرج للتصوير المقطعي للشبكية";
     textx8.innerHTML = "يستخدم العلاج التعويضي بالهرمونات ليزرًا خاصًا لالتقاط صور ثلاثية الأبعاد للعصب البصري وشبكية العين المحيطة. هذا الليزر الذي لن يؤذي العين يركز على سطح العصب البصري ويلتقط الصورة";
     title6.innerHTML = "يختبر مرضى هذه الغرفة التشخيصية والعلاجية جراحة العيون";
     textx9.innerHTML = "هذه الغرفة مخصصة للتشخيص والعلاج للمرضى الذين يخضعون لجراحة العيون بمعدات مختلفة للاختبار وجراحة العيون بالليزر في مركز نزوى للعيون بالليزر";
     title7.innerHTML = "غرفة انتظار المرضى";
     textx10.innerHTML = "يأخذ العديد من المرضى موعدًا وينتظرون هناك ثم يتصل بهم الأطباء بالهوية والاسم";
     title8.innerHTML = "أطبائنا";
     text11.innerHTML = "لدينا أطباء لديهم خبرات ومهارات عالية في مركز نزوى للعيون بالليزر";
     title9.innerHTML = "دكتور هارون";
     text12.innerHTML = "إستشاري جراحة القرنية وتصحيح النظر";
     title10.innerHTML = "الدكتورة فاطمة الجابري";
     text13.innerHTML = "فاحصي النظر";
     title11.innerHTML = "دكتور فادي دنور";
     text14.innerHTML = "أخصائي الجلوكوما";
     title12.innerHTML = "راسلنا وأخبرنا كيف يمكننا مساعدتك؟";
     btn.innerHTML = "تواصل معنا";
     title13.innerHTML = "من نحن؟";
     text15.innerHTML = "نحن أطباء مركز علاج العيون بالليزر ، بنزوى ، نقدم تشخيصًا وعلاجًا لعيون المرضى ، مثل جراحة العيون بالليزر ، مع استخدام أجهزة مختلفة عالية التقنية مع أفضل الأطباء لدينا";





   }else if (getLanuage === "ENG") {
     title.innerHTML = "Nizwa Clinic Eye Laser Center";
     text.innerHTML = "This clinic specified for Eyes give many treatments for patients by using latest Technology devices with doctors have the high level experiences in medicine eyes";
     info.innerHTML = "Learn More";
     list1.innerHTML = "Home";
     list2.innerHTML = "Doctors";
     list3.innerHTML = "Laser Eye Surgery";
     list4.innerHTML = "Laser Eye Technology";
     list5.innerHTML = "Contact";
     list6.innerHTML = "About";
     title2.innerHTML = "Laser Eyes Surgery";
     text2.innerHTML = "A correction the shape of the cornea using a laser, so a precise tool called a microkeratome is used to remove a thin layer from the surface of the cornea except for a small part of it that keeps it attached to the eye and is pushed back, and then an excimer laser is used to remove part of the inner tissue of the cornea and then the surface layer of the cornea is returned to its normal position, Types of Laser Surgery such as:";
     textX1.innerHTML = "Z-LASIK is a corrective surgery in which a thin layer of the cornea is lifted and moved around to allow the laser to reshape the cornea. It is an innovative blade-free procedure that uses only high-tech computer measurements and lasers to perform vision correction for many patients' eye problems.";
     info1.innerHTML = "More InFo +";
     info2.innerHTML = "More InFo +";
     info3.innerHTML = "More InFo +";
     textX2.innerHTML = "SmartSurfACE is a new method of laser eye surgery that works without touching the eye. That is, it combines the advantages of the touch-free TransPRK surface treatment with the newly innovative SmartPulse technology. The result is clear vision, with no side effects or other problems. This touch-free laser vision correction is non-invasive and safe, gentle and stress-free, for a much better seeing.";
     textX3.innerHTML = "Are clear implantable lenses that are surgically placed either between the cornea and the iris (the colored portion of your eye) or just behind the iris, without removing your natural lens. Phakic lenses enable light to focus properly on the retina for clearer vision without corrective eyewear. They are an alternative to LASIK and PRK eye surgery for correcting moderate to severe myopia (nearsightedness), and in some cases produce better and more predictable vision outcomes than laser refractive surgery.";
     title3.innerHTML = "Laser Eyes Technology";
     text3.innerHTML = "We use many different devices our clinic eye lasers for treatment tools diagnostic systems, service products and technologies for eyes patients.";
     textX4.innerHTML = "    A-scan Ultrasound biometry, also referred to as just A-scan, utilizes an ultrasound device for diagnostic testing in Opthalmology practices. This device can determine the length of the eye and can be useful in diagnosing common sight disorders. B Scan, ​Ultrasonography, often called just B-scan or Brightness scan, offers a two-dimensional cross-sectional view of the eye as well as the orbit. A B-scan is used on the outside of the closed eyelid to view the eye";
     textX5.innerHTML = "The SCHWIND ATOS is a logical consequence of SCHWIND’s comprehensive expertise in technologies for smooth corneal surfaces. With a pulse rate of up to four megahertz, sophisticated pulse characteristics and refined positioning algorithms, this femtosecond laser features very short treatment and incision times";
     textX6.innerHTML = "This is the most sophisticated and accurate way to determine the power of the intraocular lens (IOL) implant for cataract surgery. The IOL Master allows fast, accurate measurements of eye length and surface curvature, necessary for cataract surgery. The IOL Master is efficient as it allows measurements to be taken with confidence in the accuracy of results. Furthermore, it is a non-contact (nothing touches the eye and no drops are needed) and non invasive.";
     info4.innerHTML = "Details";
     info5.innerHTML = "Details";
     info6.innerHTML = "Details";
     title4.innerHTML = "Inside Clinic";
     textx7.innerHTML = "We show some Activities gallery in Nizwa Clinic Eyes Laser Center what we are doing and how patients take treatment tools diagnostic systems";
     title5.innerHTML = "Doctor diagnosting test eyes patient by Heidelberg Retinal Tomography device";
     textx8.innerHTML ="The HRT uses a special laser to take 3-dimensional photographs of the optic nerve and surrounding retina. This laser, which will not harm the eye, is focused on the surface of the optic nerve and captures the image";
     title6.innerHTML = "This room diagnostic and treatment patients test eyes surgery";
     textx9.innerHTML = "This room is for diagnosis and treatment Patients undergoing eye surgery Show this picture with different equipment for testing and laser eye surgery at Nizwa Eye Laser Center";
     title7.innerHTML = "Patients Waiting Room";
     textx10.innerHTML = "Many patients take appointment and waiting there then doctors call them by id and name ";
     title8.innerHTML = "OUR Doctors";
     text11.innerHTML = "We have doctors Have high experiences and skills in our Nizwa Clinic Eyes Laser Center";
     title9.innerHTML ="Dr.Haroon";
     text12.innerHTML = "Corneal and Refractive Surgery Consultant";
     title10.innerHTML = "Dr.Fatma AL-Jabri";
     text13.innerHTML = "Optometrists";
     title11.innerHTML = "Dr.Fadi Danoor";
     text14.innerHTML = "Glaucoma Specialist";
     title12.innerHTML = "Message us and Tell us How we can help you?,Request a Call Back";
     btn.innerHTML = "Contact Us";
     title13.innerHTML = "Who are we?";
     text15.innerHTML = "We are doctors Eyes Laser Center, in Nizwa, we give treatment diagnosis and treatment for Patients Eyes, like surgery eyes by laser, with use different high tech devices with best doctors have";

   }


 }
