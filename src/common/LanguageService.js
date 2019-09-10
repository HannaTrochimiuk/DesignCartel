
class LanguageService {
    LanguageService(language) {
        this.currentLanguage = language;
    }

    stringsEn = {
        menuAbout: 'about us',
        menuProjects: 'projects',
        menuServices: 'services',
        menuContact: 'contact',
        aboutText: 'Design Cartel is a group of people who love interiors and good design. We have been focusing on commercial interiors for several years. We work with investors, architects and/or designers and together we select and adjust elements, materials and solutions for the project. We are all truly open and, what is not very common, we appreciate and are simply fond of people. Work on the project has to be effective and efficient, but in a fair and positive atmosphere full of understanding and attention. And this is what we give from the beginning to each of our clients. A guarantee of honesty and professionalism with a smile on the face. You are more than welcome to reach out and work with us.',
        valueHuman:'Human in the center of our desig',
        valueTextHuman:'Each project has its origin in Human. We design for her/him and with her/him in mind. Office spaces are places of work, but also rest, meetings or conversations. There are places that require a lot of employee focus, there are also those whose role is to charge the batteries with positive energy. At the basis of each of our projects lies the question about the user of a given space. Who is s/he? How old is s/he? What is the nature of work? What is her/his role in the company? We collect this kind of information and provide it in the form of a project for walls, glazing and signage. We personalize the interior.',
        ValueDesign:'Design',
        valueTextDesign:'First of all: a good project is key! We are lucky, because our clients truly like and appreciate good design. As a result, graphic designers have a lot of work to do. And this is great! Thanks to it, we can create individual projects for walls designing, combining it with the signage of rooms and signboards. Everything is consistent and tailored to our clients. Thanks to you!',
        valueZeroWaste: 'Zero Waste',
        valueTextZeroWaste: 'Balance is very important to us. All of our production is "on demand". Each order is produced for the individual customer. We make exact measurements to avoid potential large stocks of the material. It saves client\'s money, but also we think about our planet, avoiding generating waste that become rubbish in a longer term. Furthermore, we care about the high quality of materials we use to make our products more durable, this is why we give a 5-year warranty on most of them. In addition, we do not print paper offers, forms or invoices in our own offices. We try limiting any printouts of business cards nor leaflets.',
        valueEcoFriendly: 'Eco Friendly',
        valueTextEcoFriendly:'Creating safe products and its usage is extremely important to us. In production, we always use water-borne, non-toxic paints, and during installation and montage we only use water-based adhesives. Their fragrance is delicate and completely harmless. For every material we have the certificate of its flame retardancy and PZH certificate. We guarantee safety to our customers.',
        servicesSpace:'Space Branding',
        servicesTextSpace: 'Brand identity among employees and customers is very important. The trick is to properly balance the size, quantity and scale for a given space. We have to do it a way which will allow brand, design and human live in symbiosis and the whole space becomes a coherent project. We know how to achieve it, and we\'ll be happy to help you. How? We will create a visual identity of the space tailored to your business needs. Why? Because the way you create and position your office is extremely important in the era of employer branding and the importance it has in space branding. The scope of implementation is discussed and decided individually. We can help you with even one room or the whole office floor. We have the team and power, so reach out and let’s do the amazing together!',
        servicesWayfinding: 'Wayfinding',
        servicesTextWayfinding:'In other words, it is a spatial orientation system. It is used in almost every commercial space. A hotel is a good example here. A guest should feel taken care of and be able to easily find the breakfast room, gym or SPA zone thanks to directional marking, individual room markings and messages along the space. It is extremely important that the materials used are adapted to the interior design, durable and practical in the selected space.',
        servicesPersonalization: 'Personalization',
        servicesTextPersonalization: 'This is a situation when the Investor wants a completely individual approach to her/his space. We will be honest with you, it is our dream situation. Each element of space branding and wayfinding is created from the beginning till the end by our creative department. We reject stocks and instead we harness our imagination, illustrator and brainstorm.',
        servicesIdentyfication: 'Complete Identification',
        servicesTextIdentyfication: 'This service combines space branding, wayfinding, personalization, as well as corporate / brand visual identification. It is a big challenge and requires full commitment and close cooperation between the two parties. By having all the elements in one bucket, we have more control over the project and a way more predictable effect. Human – the user is always in the center for us. That is why we focus on a wide examination and research of the office needs, including getting to know the company and people working there. This part is crucial for a successful project completion.'
    }


    stringsPl = {
        menuAbout: 'o nas',
        menuProjects: 'projekty',
        menuServices: 'usługi',
        menuContact: 'kontakt',
        aboutText: 'Design Cartel to grupa ludzi kochających wnętrza i dobry design. Od kilku lat skupiliśmy się na wnętrzach komercyjnych. Współpracujemy z inwestorem, architektem lub projektantem i wspólnie dobieramy do projektu elementy, materiały, znajdujemy rozwiązania. Wszyscy jesteśmy naprawdę otwarci i, co nie jest zbyt częste, po prostu lubimy ludzi. Praca nad projektem ma być efektywna, sprawna, ale w uczciwej, pozytywnej atmosferze pełnej zrozumienia i uwagi. I to, już na starcie dajemy od siebie każdemu naszemu Klientowi. Gwarancję uczciwości i profesjonalizmu z uśmiechem na ustach. Zapraszamy do wspólnego działania.',
        valueHuman:'Człowiek w przestrzeni',
        valueTextHuman:'Każdy projekt ma swój początek w Człowieku. Projektujemy dla niego i z myślą o nim. Przestrzenie biurowe to miejsce pracy, ale też odpoczynku, spotkań, rozmów. Są miejsca wymagające dużego skupienia Pracownika, są i takie, które mają naładować akumulatory pozytywną energią. U podstaw każdego projektu jest nasze pytanie o Użytkownika danej przestrzeni. Kto to jest? Ile ma lat? Jaki ma charakter pracy? Jaka jest jego rola w firmie? To wszystko zbieramy i dostarczamy w formie projektu dotyczącego ścian, przeszkleń, oznakowań. I personalizujemy wnętrze.',
        ValueDesign:'Design',
        valueTextDesign:'Dobry projekt przede wszystkim! Jesteśmy szczęściarzami, bo nasi Klienci lubią i doceniają dobry design. Graficy mają za to dużo pracy. I świetnie! Bo dzięki temu możemy stworzyć indywidualne projekty, którymi ubieramy ściany, łączymy z oznakowaniem pomieszczeń, szyldem. Wszystko jest spójne i skrojone na miarę naszych Klientów. Dziękujemy Wam!',
        valueZeroWaste: 'Zero Waste',
        valueTextZeroWaste: 'Bardzo ważna dla nas jest równowaga. Cała nasza produkcja jest “on demand”. Każde zamówienie jest produkowane pod konkretnego Klienta. Wykonujemy pomiary, żeby uniknąć dużych zapasów na materiale. To oszczędność pieniędzy Klienta, ale robiąc to myślimy o naszej planecie, nie generując odpadów stających się śmieciami. Dbamy też o wysoką jakość używanych materiałów, żeby nasze produkty były trwałe, dlatego na większość z nich dajemy 5 lat gwarancji. Ponadto, na własnym, biurowym podwórku nie drukujemy ofert w formie papierowej ani faktur. Ograniczamy też wydruk wizytówek, nie drukujemy ulotek.',
        valueEcoFriendly: 'Eco Friendly',
        valueTextEcoFriendly:'Bardzo ważne jest dla nas bezpieczeństwo użytkowania naszych produktów. Przy produkcji używamy wodorozcieńczalnych , nietoksycznych farb, a podczas montażu stosujemy tylko kleje na bazie wody. Ich zapach jest delikatny i zupełnie nieszkodliwy. Na każdy materiał mamy atest jego trudnopalności i atest PZH. Chcemy, żeby nasi Klienci mieli gwarancję bezpieczeństwa.',
        servicesSpace:'Space Branding',
        servicesTextSpace: 'Przywiązanie Pracownika i Klienta do marki jest bardzo ważne. Sztuką jest odpowiednie wyważenie wielkości, ilości, skali zastosowania do danej powierzchni. Tak, aby brand, design i człowiek żyli w symbiozie i cała przestrzeń stanowiła spójny projekt. Na tym się znamy, w tym z przyjemnością Ci pomożemy. Jak? Stworzymy identyfikację wizualną przestrzeni skrojoną na miarę Twojej firmy. Dlaczego? Bo wizerunek biura jest niezwykle ważny w dobie employer brandingu i miejsca, jakie zajmuje w nim space branding. Zakres realizacji jest ustalany indywidualnie. Zajmiemy się jednym pomieszczeniem lub całym piętrem. Zespół i moc jest z nami, więc czekamy na kontakt i działamy.',
        servicesWayfinding: 'Wayfinding',
        servicesTextWayfinding:'Innymi słowy jest to system orientacji przestrzennej. Stosuje się go właściwie w każdej przestrzeni komercyjnej. Hotel jest tu dobrym przykładem. Gość powinien czuć się zaopiekowany i móc bezproblemowo trafić do sali śniadaniowej, na siłownię czy do strefy SPA. Dzięki oznakowaniu kierunkowemu, indywidualnym oznaczeniom pomieszczeń czy komunikatom. Niezwykle ważne jest też, żeby użyte materiały były dopasowane do estetyki wnętrza, trwałe i praktyczne w danej przestrzeni.',
        servicesPersonalization: 'Personalizacja',
        servicesTextPersonalization: 'To sytuacja, kiedy Inwestorowi zależy na zupełnie indywidualnym podejściu do przestrzeni. Nie ukrywamy, że to nasza wymarzona sytuacja. Każdy element space brandingu i wayfindingu jest stworzony od początku do końca przez dział kreatywny. Odrzucamy stocki, zaprzęgamy wyobraźnię, illustratora i działamy.',
        servicesIdentyfication: 'Complete Identification',
        servicesTextIdentyfication: 'Usługa, która łączy w sobie space branding, wayfinding, personalizację, a także identyfikację wizualną firmy/marki. To duże wyzwanie i wymaga pełnego zaangażowania i bliskiej współpracy. Skupiając wszystkie elementy w jednym rękach mamy większą kontrolę nad projektem i przewidywalny efekt. Dla nas, na pierwszym miejscu zawsze jest Człowiek - Użytkownik. Dlatego stawiamy na szerokie zbadanie potrzeb, ale też poznanie firmy i pracujących w niej ludzi. Ta część jest kluczowa dla udanego projektu.'
    
    }


    getString = (key) => {
        switch (this.currentLanguage) {
            case 'pl':
                return this.stringsPl[key];
            case 'en':
                return this.stringsEn[key];
        }
    }
}

export default LanguageService;