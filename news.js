/**
 * In a real world scenario news would not be stored in a static file like this, but typically requested
 * from a web service using a "REST API". The service would have a big database with articles, and you
 * would only request a few at a time.
 */
var news = [
    {
        title: "Användarvänlighet på webben",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3523-735x865.jpg",
        contents: [
            "Cirka 20% av Sveriges befolkning, i åldrarna 16-64 år har någon typ av funktionsnedsättning. Vilket innebär att man använder sina enheter på annat vis, i jämförelse med normen, exempelvis enbart via tangentbordet eller med hjälp av specialdesignade hjälpmedel. För att alla ska ha samma möjligheter på webben behöver alla hjälpas åt och ha detta i åtanke när man designar eller utvecklar siter och applikationer. 👩‍💻 ",
            "Vi hade turen att få gå på en föreläsning inom användarvänlighet förra veckan. Föreläsningen var anordnad av Technigo/Tjejer kodar hos Google Digitalakademin (Googles nyöppnade utbildningscenter). Marcus Linder, senior utvecklare från Kundo, med spetskompetens inom ämnet gick igenom vad man ska ha i åtanke, främst ur en webbutvecklares perspektiv.",
            "Det finns flera olika anledningar till att man kan ha svårt att navigera och interagera på en site eller applikation. Exempelvis så kan man vara blind, färgblind, ha reumatism, dyslexi eller liknande. Detta ställer självklart krav på användarvänligheten på siten.",
            "Frågor man kan ställa sig själv när man utvecklar: Kan man navigera enbart med tangentbordet? Kan man förstår budskapet om man inte ser färger eller kontraster? Fungerar Screen readers på siten? Finns det alt-text på bilderna? Är texterna tydliga – i lagom storlek och i en lättläst font?",
            "Första steget är att ha detta i åtanke. Nästa steg är att testa och se om siten håller måtten. Det kan man göra på lite olika sätt. Man kan testa en hel del själv, exempelvis att navigera enbart med tangentbordet, eller läsa upp innehållet på sidan med en Screen reader. Utöver detta så finns det också hjälpmedel som kan ge hintar om vad som kan behöva förbättras. Här är några olika: Wave , W3C Validation  och en lista över andra verktyg: W3C verktygs lista. Du kan också använda Lighthouse i Chrome (via Chrome DevTools i inspektor-läget).",
            "Som nybörjare är det svårt att veta hur man kan göra sin site mer användarvänlig. Svenska företag måste vanligtvis följa riktlinjer som gäller utefter WCAD 2.1 Level, som du kan läsa mer om via länken. Utöver tipsen ovan kan man också läsa mer här: Webbriktlinjer, webbriktlinjer/webbdirektivet",
            "Under föreläsningen fick vi också se en video från Apple, som ger en gnutta förståelse till varför detta är så himla viktigt! Se videon här",
            "Nu är det knappt två veckor kvar(!!!!) 😐 Slutprojekten är i full gång och alla är taggade på att snart få visa sina nya skills på sina tidigare eller nya arbetsplats. 🤩",
        ],
        reference: "http://www.tjejerkodar.se/blogg/anvandarvanlighet-pa-webben/",
        publishDate: "17 maj, 2018",
        category: 'frontend',
        authors: ["Freja Busby"]
    }, {
        title: "CSS Grid – Framtidens sätt att layouta",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/31346893_10156254355370768_290399575154360320_n-735x670.jpg",
        contents: [
            "CSS Grid är relativt nytt i frontend-världen. Det började utvecklas för några år sedan och fick under förra året stor uppmärksamhet. Sedan dess har Grid tagit stora kliv mot att bli en standard inom CSS. Det som stoppar Grid från att användas på daglig basis är att det fortfarande saknar stöd i vissa webbläsare. Det går dock framåt i rask takt. Jag tror att vi inom något år kommer se ett flitigt användande av CSS Grid. 🙌",
            "Vi har denna vecka haft turen att kunna ägna en hel dag till att lära oss CSS Grid. En senior frontend utvecklare kom och besökte oss för en genomgång i hur det fungerar. Sedan fick vi göra en individuell uppgift där vi layoutade med hjälp av Grid. Kursen har ett stort fokus på det praktiska, vilket är perfekt för mig eftersom jag lär mig bäst genom att testa mig fram till olika lösningar.",
            "Innan jag visar resultatet av uppgiften kanske ni vill veta mer om vad CSS Grid faktiskt är 🤨 ",
            "Grid är som sagt ett nytt sätt att skapa layouts med CSS. Man kan med detta skapa en ”rutnäts”-baserad layout som byggs upp via kolumner och rader.  Det innebär att man nu kan styla både vertikalt och horisontellt, på ett betydligt enklare sätt. En annan viktig del är att man kan ändra ordningen på sina objekt helt oberoende av ordningen i dokumentobjektmodellen (DOM). Man kan också kombinera Grid med exempelvis Flexbox och float om man skulle vilja.  Sammanfattningsvis kan du, med hjälp av Grid, lättare bygga avancerade layouter.",
            "Exempel på layouts som du enkelt kan skapa med Grid:",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/grid-layout-1-3.jpg'/>",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/grid-layout-2.jpg'/>"
        ],
        reference: "http://www.tjejerkodar.se/blogg/css-grid-framtidens-satt-att-layouta/",
        publishDate: "27 april, 2018",
        category: 'frontend',
        authors: ["Freja Busby"]
    }, {
        title: "Vad är egentligen React?",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/freja-coding-react-735x865.jpg",
        contents: [
            "Ofta när man läser, pratar eller hör om Javascript nämns också frameworks och Javascript bibliotek. Det finns oändligt många och det är lite av en djungel. React som är skapat av Facebook är ett av dem. Det används idag bland annat av Instagram, Uber, Airbnb och självklart Facebook själva. React ökar i popularitet för varje dag som går och det känns som att alla pratar om det!",
            "Men vad är egentligen React? 🤔",
            "React är ett effektivt och flexibelt Javascript bibliotek som används för att bygga användargränsnitt. Enkelt förklarat är ett Javascript bibliotek ett typ av bibliotek som har färdiga funktioner man använder sig utav när man skriver Javascript. Ett bibliotek gör det alltså enklare att skriva komplex kod. Ett annat populärt bibliotek är Jquery och populära frameworks är Vue.js och Angular.",
            "Det är dock en delad åsikt om React är ett framework eller ett Javascript bibliotek. Många säger att det flyter någonstans mittemellan och har suddat ut gränsen mellan ett bibliotek och ett framework. Jag har utgått ifrån vad som står på reactjs.org, där de definierar React som ett bibliotek.  📚",
            "Så, som nybörjare borde jag lära mig React?",
            "En fundering som lätt uppstår om man är nybörjare är om man ska använda sig av ett framework, Javascript bibliotek eller lära sig vanilla Javascript (som det kallas när man enbart använder ren Javascript) först. Detta var en fråga jag funderade mycket på när jag på egen hand försökte lära mig Javascript. Efter att ha frågar runt och läst artiklar är min slutsats: lär dig gärna grunderna i Javascript först och implementera sedan ett framework eller bibliotek till din kunskapsbank. Anledningen är enkel, kan du grunderna i Javascript kommer du troligtvis ha lättare att förstå och använda olika frameworks och bibliotek, för du förstår grundkonceptet. Även på react.org förespråkas det att först lär sig grunderna i Javascript, innan man ger sig på att använda React. Vissa tycker dock att man kan köra direkt på ett framework, för då kan man troligtvis ge sig på komplex kod snabbare. 💥",
            "På Boot Campet ingår två sprintar med fullt fokus på React. Vi är nu halvvägs in i den andra sprinten av dessa två. Det är superkul och utmanande, på ett (oftast) roligt vis. 🤩 Hittills har vi bland annat gjort en klocka, som man kan pausa och starta igen, en momskalkylator och en radio som hämtar in kanaler från SR:s API."
        ],
        reference: "http://www.tjejerkodar.se/blogg/vad-ar-egentligen-react/",
        publishDate: "20 april, 2018",
        category: 'frontend',
        authors: ["Freja Busby"]
    }, {
        title: "En typisk arbetsdag för en utevcklare",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3533-735x865.jpg",
        contents: [
            "Hur ser egentligen en dag ut för en utvecklare? Det finns många stereotypa bilder av vem det är som jobbar med programmering. Vi vill tillsammans med Svenska Spel bryta den bilden och visa upp fler exempel!",
            "Här visar vi upp hur en vanlig dag för Martina – utvecklare på Svenska Spel – kan se ut. Häng med! 👇🏽",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3530-300x300.jpg'/>1. Börjar dagen med en god frukost för hela familjen 🥞",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3539-300x300.jpg'/>2. Jobbar bland annat med Stryktipset. Där är utmaningen att få alla delar att samarbeta. När man till exempel markerar ett val i kupongen.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3533-300x300.jpg'/>3. Kort paus för att njuta av utsikten under lunchjoggen.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/22D5B997-404D-4333-9BB7-307CE619C26F-300x200.jpg'/>4. Under en arbetsdag kan allt möjligt hända! Det kan vara buggar som behöver rättas eller nya idéer som ska utvecklas.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3532-225x300.jpg'/>5. Hämtar mina älsklingar på skolan ❤",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/05/IMG_3531-300x300.jpg'/>6. Njuter av solen och en bra bok som avslutning på dagen."
        ],
        reference: "http://www.tjejerkodar.se/blogg/en-typisk-arbetsdag-for-en-utevcklare/",
        publishDate: "9 maj, 2018",
        category: 'inspiration',
        authors: ["tjejerkodar"]
    }, {
        title: "Mini-intervju: Katarina Sjölund",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/03/moi-1-735x865.jpg",
        contents: [
            "Här kommer en intervju med 👑Katarina Sjölund👑, tidigare student på Technigo Boot Camp. Hon bytte sin tidigare roll som designer till Frontend utvecklare🎉",
            "BERÄTTA KORT OM DIG",
            "Mitt namn är Katarina Sjölund, jag har en bakgrund inom grafisk design och marknad men har precis fått en anställning som frontend utvecklare efter att ha gått Technigos boot-camp. På något sätt kändes det som att frontend utveckling liksom kom som en naturlig följd av mina tidigare erfarenheter inom design, layout och marknad, går lite hand i hand enligt mig, även om tekniken var helt ny och verkligen en stor utmaning Problemlösning är ju verkligen en central del av web/app-utveckling. Sedan är ju användargränssnittet och funktionaliteten en väldigt intressant bit för mig som designer.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/03/IMG-1877-225x300.jpg'/>",
            "VAD GILLAR DU MED PROGRAMMERING?",
            "Tror det är problemlösning i kombination med att sakta se en site/app växa fram med kod som jag skrivit. Är så belönande på något sätt samtidigt som det kan vara väldigt frustrerande när en inte får till det, kan verkligen pendla snabbt mellan känslan att vara en total idiot till att bli överlycklig över att få koden att fungera. Det har nog varit, och är, en av de tuffaste utmaningarna med att börja programmera. Men är väldigt kul, vilket väger upp och det är tur att det finns så många duktiga runt ikring att fråga och inspireras av!"
        ],
        reference: "http://www.tjejerkodar.se/blogg/mini-intervju-katarina-sjolund/",
        publishDate: "22 mars, 2018",
        category: 'inspiration',
        authors: ["Sandra Hindskog"]
    }, {
        title: "Mini-intervju: Annika Ekström",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/03/IMG_2951.jpg",
        contents: [
            "Idag lyfter vi en av våra tidigare studenter på Technigo Boot Camp⚡️ Annika Ekström👑 Efter vår 12-veckors utbildning kombinerar hon nu sitt tidigare yrke som säljare med programmering.",
            "BERÄTTA LITE KORT OM DIG",
            "Jag har jobbat med försäljning i många år och tycker om det sociala samtidigt som jag blev intresserad av att lära mig programmering. När jag hörde talas om Tjejer Kodar och Technigo sa jag därför upp mig och satsade 100% på att lära mig programmering, det är en helt ny värld och det finns så mycket att lära sig. Nu kan jag bygga hemsidor!",
            "DU HAR PRECIS BÖRJAT JOBBA MED PROGRAMMERING, HUR ÄR DET?",
            "Det är så roligt att jobba med programmering! I skolan fick vi lära oss enormt mycket och det känns roligt att nu få jobba med det. Det finns många olika delar i programmering och de delar jag inte jobbar med kan jag fortsätta att jobba med på fritiden. Det finns dessutom så många härliga kollegor att fråga om hjälp och det känns roligt att få fortsätta utvecklas."
        ],
        reference: "http://www.tjejerkodar.se/blogg/mini-intervju-annika-ekstrom/",
        publishDate: "16 mars, 2018",
        category: 'inspiration',
        authors: ["tjejerkodar"]
    }, {
        title: "Företagssamarbeten – en inblick i branschen 👀",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/tictail-torsdag-735x865.jpg",
        contents: [
            "Tolv veckor, sex sprintar och sex olika samarbeten med företag. Från dag ett, under hela kursen så delas vi in i team och gör projekt åt företag, ett nytt för varje sprint. 👉",
            "Vi har hittills jobbat med Google, Record Union och nu, Tictail. Tre olika branscher, olika företagskulturer och i varierande storlekar. Variationen mellan de olika företagen känns nyttig. Den matar oss med information om hur det är att jobba som utvecklare på dessa företag och hur olika det kan vara från företag till företag.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/ru-technigo-1024x709.png'/>Efter vår förra demo hos Record Union",
            "Under en sprint spenderar vi två arbetsdagar på det företag som vi samarbetar med. Vi får lära känna företaget, jobba på våra projekt, få hjälp av duktiga utvecklare, men också få en inblick i hur en arbetsdag ser ut hos dem.",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/tictail-torsdag-1024x1024.jpg'/>Vi blir bjudna på Lunch hos Tictail 🌯",
            "När vi har kommit i mål med vårt projekt är det dags för demo och code reviews. Båda dessa delar är ett väldigt viktigt inslag i Boot Campet, enligt mig. Genom detta reflekterar vi över projektet, vi lär oss att prata om vår kod och vårt resultat. Detta är en betydande egenskap i ett teach-team, man måste kunna diskutera sin kod och reflektera över vad som var bra och mindre bra. Att dessutom få feedback från riktigt duktiga utvecklare är väldigt givande och utvecklande. 💡",
            "<img src='http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/04/tictail-torsdag-showroom-1024x1024.jpg'/>Philip på Tictail hjälper mig att lösa ett problem i koden",
            "Under sprint 3 samarbetar vi med Tictail. I detta projekt kommer vi bygga en egen webshop genom deras API. Rent tekniskt är fokuset på att jobba med API genom React . Så spännande och roligt! Vi har tillbringat en arbetsdag hos Tictail hitills. Under den dagen lyckades vi komma en bra bit på projektet – allt tack vare deras duktiga utvecklare, som la ner otroligt med energi på att lära och hjälpa oss framåt. 🙏",
            "Att under hela kursen få samarbeta med små, som stora företag känns otroligt positivt! Det ger en tydlig inblick i branschen och hjälper oss att knyta kontaker. Vem vet, ni kanske hittar mig på Google, Tictail eller Record Union i framtiden. 😉",
            "Två företagsprojekt är klara, ett är under arbete. Vilket betyder att vi har tre to go. Så nyfiken på vilka de andra företagen kommer att vara! 🤩"
        ],
        reference: "http://www.tjejerkodar.se/blogg/foretagssamarbeten-en-inblick-i-branschen/",
        publishDate: "7 april, 2018",
        category: 'technigo',
        authors: ["Freja Busby"]
    }, {
        title: "Fantastiska och mirakulösa Javascript",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/03/29746665_10156181904590768_337675600_o-735x865.jpg",
        contents: [
            "Första veckan med Javascript har nått sitt slut. Funktioner, variabler, arrays, loopar och vad är egentligen ett objekt? Frågorna har varit många och stämningen har stundvis varit låg. Jag förstår, att om man aldrig har sett Javascript innan så är detta överväldigande. Under våra individuella uppgifter har det varit hög koncentration, stundvis bryts tystnaden av ett argt “Nej!” eller ett uppgivet “Va? Varför hände detta?”🤯 Lyckan är dock total när man får något att fungera, då hörs det glädjerop och lättnande suckar. Våra lärare påminner oss minst en gång om dagen om att Javascript har en brant inlärningskurva, men bitarna kommer falla på plats och ni kommer tycka att det är logiskt. Och plötsligt gör bitarna det, det lovar jag!",
            "När jag sökte till Technigo hade jag redan bra kunskap inom HTML och CSS, även en grundförståelse för Javascript. Jag har haft svårt att på egen hand lära mig tankesättet med Javascript dock, vilka delar ska ligga vart, vilka funktioner ska köras när. Men i slutet på denna vecka så fick jag en “aha-upplevelse”, jag börjar greppa detta. När man får någon typ av förståelse, varesig det handlar om vad en variabel är eller när man använder en array, så är det ren och skär lycka man känner! Det där som jag för några månader, veckor eller dagar sedan inte kunde greppa alls, börjar jag nu förstå. Och då känner man sig så himla grym!",
            "Men vad är egentligen Javascript? 🤔",
            "Javscript är ett objektorienterat skriptspråk som körs direkt i webbläsaren. Med Javascript kan man bygga mer eller mindre komplexa funktioner som modifierar hemsidan eller applikationer när en användare interagerar med den.",
            "En av de individuella uppgifterna denna vecka var att bygga en pizzabot. Den skulle enbart erbjuda tre olika sorters pizzor. Den skulle även räkna ut det sammanlagda priset (80kr styck) och hur lång tid pizzorna skulle ta att tillaga.  Se mitt resultat nedan. 🍕",
            "Sharing is caring! Något som är extremt viktigt när man lär sig något nytt tillsammans med andra är att dela med sig av sin kunskap. Detta är väldigt betydelsefullt inom webbutveckling. Utvecklingen går fort och det kommer hela tiden nya saker att lära sig. I klassen är vi väldigt duktiga på detta. Vi hjälper varandra att utvecklas och nå våra mål, tillsammans. Vi har ett öppet klimat där vi vågar fråga varandra och på det sättet utvecklas och lära oss snabbare."
        ],
        reference: "http://www.tjejerkodar.se/blogg/fantastiska-och-mirakulosa-javascript/",
        publishDate: "28 mars, 2018",
        category: 'technigo',
        authors: ["Freja Busby"]
    }, {
        title: "👋Google – vår första demo",
        image: "http://www.tjejerkodar.se/blogg/wp-content/uploads/2018/03/Image-uploaded-from-iOS-735x865.jpg",
        contents: [
            "Mitt hjärta bankar, jag är helt torr i munnen. Vi ska om några minuter, presentera vårt första teamprojekt för sex stycken utvecklare på Google. Vi är på Googles kontor i Stockholm, här erbjuds de anställda ett eget gym, restaurang med gratis frukost och lunch, häftiga miljöer och en frihet som många drömmer om. Vår klass har precis fått en rundtur på kontoret och ska nu kliva in i ett mötesrum för att presentera våra projekt och få feedback av erfarna utvecklare. Jag är riktigt nervös, att presentera vår demo på engelska är en stor utmaning för mig.",
            "Vi sätter oss vid det avlånga bordet som fyller nästa hela rummet. Utvecklarteamet presenterar sig, berättar om deras arbete och individuella erfarenheter. De är avslappnade, skämtar och bjuder på sig själva. Atmosfären i rummet är gemytlig och rogivande. Jag blir lugnare, det här kommer nog gå bra trots allt.",
            "Klassen har sedan två veckor tillbaka blivit uppdelade i fyra grupper. Projektet har gått ut på att göra en re-make på en av Googles siter. Fokus ska vara på koden, inte på designen. Utöver individuella uppgifter, lektioner och gästföreläsningar så är det detta vi har jobbat med under de två första veckorna på kursen. Alla grupper har kämpat på hårt och visar upp riktigt bra resultat. Google-teamet verkar tycka detsamma, de är imponerade över vad vi åstadkommit på så kort tid och så tidigt in i kursen.",
            "Nedan ser mitt och min grupps resultat, till vänster är Googles sida, till höger är vår. Självklart är den även responsiv och funkar på alla enheter."
        ],
        reference: "http://www.tjejerkodar.se/blogg/google-var-forsta-demo/",
        publishDate: "21 mars, 2018",
        category: 'technigo',
        authors: ["Freja Busby"]
    }
];