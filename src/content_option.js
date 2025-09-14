const logotext = "KAMIL";

// Industry-specific content
const industryContent = {
    crypto: {
        meta: {
            title: "Kamil Bandzwołek - Web3 Developer",
            description: "Web3 Developer z pasją do technologii blockchain. Tworzę innowacyjne projekty w ekosystemie kryptowalut i DeFi.",
        },
        introdata: {
            title: "Kamil Bandzwołek",
            animated: {
                first: "Web3 Developer",
                second: "Blockchain Specialist",
                third: "Smart Contract Developer",
                fourth: "DeFi Expert",
                fifth: "Crypto Innovator",
            },
            description: "Witaj w świecie Web3! Jestem pasjonatem technologii blockchain i kryptowalut. Tworzę innowacyjne projekty w ekosystemie Web3, od gier po platformy DeFi.",
            your_img_url: "/assets/images/Wasi_noBackground.png",
        },
        dataabout: {
            title: "Web3 Developer",
            aboutme: "Jestem pasjonatem technologii Web3 i blockchain. Tworzę innowacyjne projekty w ekosystemie kryptowalut, od gier Web3 po platformy DeFi. Specjalizuję się w React, NodeJS, ethers.js i web3.js. Moje projekty obejmują gry, marketplace'y, aplikacje mobilne i rozwiązania NFT. Uwielbiam eksperymentować z nowymi technologiami i tworzyć rzeczy, które mają realny wpływ na społeczność Web3.",
        },
        worktimeline: [],
        skills: {
            title: "Professional Skillset",
            technologies: [
                { 
                    name: "C#", 
                    icon: "SiDotnet",
                    description: "Język programowania obiektowego Microsoft, używany do tworzenia aplikacji .NET, aplikacji desktopowych i webowych"
                },
                { 
                    name: "JavaScript", 
                    icon: "SiJavascript",
                    description: "Język programowania wysokiego poziomu, głównie używany do tworzenia interaktywnych stron internetowych i aplikacji webowych"
                },
                { 
                    name: "Node.js", 
                    icon: "SiNodedotjs",
                    description: "Środowisko uruchomieniowe JavaScript po stronie serwera, umożliwiające tworzenie skalowalnych aplikacji backend"
                },
                { 
                    name: "React", 
                    icon: "ReactIcon",
                    description: "Biblioteka JavaScript do budowania interfejsów użytkownika, szczególnie aplikacji jednostronicowych (SPA)"
                },
                { 
                    name: "Git", 
                    icon: "GitIcon",
                    description: "Rozproszony system kontroli wersji, używany do śledzenia zmian w kodzie i współpracy zespołowej"
                },
                { 
                    name: "Firebase", 
                    icon: "FirebaseIcon",
                    description: "Platforma Google do tworzenia aplikacji mobilnych i webowych z funkcjami backend-as-a-service"
                },
                { 
                    name: "SQL", 
                    icon: "SiMysql",
                    description: "Strukturalny język zapytań używany do zarządzania relacyjnymi bazami danych i manipulacji danymi"
                },
                { 
                    name: "BPMN", 
                    icon: "SiDiagramsdotnet",
                    description: "Notacja modelowania procesów biznesowych, używana do wizualizacji i optymalizacji procesów w organizacjach"
                },
                { 
                    name: "TypeScript", 
                    icon: "SiTypescript",
                    description: "Język programowania będący nadzbiorem JavaScript, dodający statyczne typowanie i zaawansowane funkcje"
                },
                { 
                    name: "Selenium", 
                    icon: "SiSelenium",
                    description: "Narzędzie do automatyzacji testów aplikacji webowych, umożliwiające testowanie funkcjonalności w różnych przeglądarkach"
                },
                { 
                    name: "Solidity", 
                    icon: "SiSolidity",
                    description: "Język programowania do tworzenia inteligentnych kontraktów na platformie Ethereum i innych blockchainach"
                },
            ]
        },
        tools: {
            title: "Tools & Environment",
            technologies: [
                { 
                    name: "macOS", 
                    icon: "MacOSIcon",
                    description: "System operacyjny Apple, używany do rozwoju aplikacji na platformie Mac z narzędziami deweloperskimi"
                },
                { 
                    name: "Cursor", 
                    icon: "CursorIcon",
                    description: "Nowoczesny edytor kodu z AI, używany do programowania z zaawansowanymi funkcjami automatyzacji"
                },
                { 
                    name: "VS Code", 
                    icon: "VSCodeIcon",
                    description: "Popularny edytor kodu Microsoft z rozszerzeniami i integracjami dla różnych języków programowania"
                },
            ]
        },
        education: [],
        services: [
            {
                title: "Blockchain Development",
                description: "Tworzenie bezpiecznych i wydajnych aplikacji blockchain z wykorzystaniem najnowszych technologii Web3.",
            },
            {
                title: "DeFi Solutions",
                description: "Projektowanie i implementacja protokołów DeFi, w tym DEX, lending platforms i yield farming.",
            },
            {
                title: "Web3 Games",
                description: "Tworzenie gier Web3 z integracją NFT i mechanikami blockchain.",
            },
        ],
        portfolio: [
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "KANel",
                shortDescription: "Katalog Wordpress",
                description: "Przygotowanie strony do katalogu Wordpress dla firmy KANEL z pełną integracją systemu zarządzania treścią.",
                link: "#",
            },
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "Moon Flapy Birds",
                shortDescription: "Gra Web3",
                description: "Gra oparta o klasyczny styl flappybird w tematyce web3 z integracją NFT i mechanikami blockchain.",
                link: "#",
            },
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "Wypożyczalnia Marzeń",
                shortDescription: "E-commerce",
                description: "Strona, logo, ulotki i pełny ecommerce firmy z systemem rezerwacji i płatności online.",
                link: "#",
            },
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "NFT Polska Collective",
                shortDescription: "Metaverse",
                description: "Wizja metaversu i kolektywu w nim umieszczonego. Wygrana praca konkursowa na 'zdefiniuj kolektyw' dla NFT Polska.",
                link: "#",
            },
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "Psiapka",
                shortDescription: "iOS App",
                description: "Aplikacja na iOS do zapoznawania ze sobą psiaków z systemem dopasowywania i geolokalizacji.",
                link: "#",
            },
            {
                img: "/assets/images/Wasi_noBackground.png",
                title: "Donly",
                shortDescription: "Marketplace",
                description: "Marketplace na zwiększenie transparentności darowizn z integracją blockchain i systemem weryfikacji.",
                link: "#",
            },
        ],
    },
    business: {
        meta: {
            title: "Kamil Bandzwołek - Senior Ferryt Developer",
            description: "Senior Ferryt Developer z wieloletnim doświadczeniem w sektorze bankowym. Specjalizuję się w tworzeniu rozwiązań na platformie Ferryt i zarządzaniu zespołami projektowymi.",
        },
        introdata: {
            title: "Kamil Bandzwołek",
            animated: {
                first: "Senior Ferryt Developer",
                second: "Banking Solutions Expert",
                third: "Team Manager",
                fourth: "System Analyst",
                fifth: "Project Leader",
            },
            description: "Witaj w świecie rozwiązań bankowych! Jestem Senior Ferryt Developerem z wieloletnim doświadczeniem w sektorze bankowym. Specjalizuję się w tworzeniu rozwiązań na platformie Ferryt oraz zarządzaniu zespołami projektowymi.",
            your_img_url: "/assets/images/profilowe.png",
        },
        dataabout: {
            title: "Senior Ferryt Developer",
            aboutme: "Jestem Senior Ferryt Developerem, zajmuję się tworzeniem rozwiązań na platformie Ferryt od 2018 roku, głównie w projektach dla sektora bankowego. Specjalizuję się w projektowaniu i budowie architektury rozwiązań na platformie Ferryt, a także w kompleksowym wytwarzaniu oprogramowania – od warsztatów analitycznych, przez development, aż po wdrożenie produkcyjne. Miałem okazję pełnić rolę analityka systemowego podczas powstawania Ferryt 2.0, co pozwoliło mi dogłębnie poznać tę platformę zarówno od strony biznesowej, jak i technologicznej.",
        },
        worktimeline: [
            {
                jobtitle: "Menedżer Zespołu Automatyzacji Procesów",
                where: "BGK",
                date: "Listopad 2025 – obecnie",
            },
            {
                jobtitle: "Ferryt Developer",
                where: "Bluesoft",
                date: "Kwiecień 2023 – obecnie",
            },
            {
                jobtitle: "Analityk systemowy",
                where: "Pretius",
                date: "Styczeń 2023 – Wrzesień 2025",
            },
            {
                jobtitle: "Ferryt Developer",
                where: "DomData",
                date: "Luty 2018 – Grudzień 2022",
            },
        ],
        skills: [
            { name: "Ferryt 3.3.0+, 4.3.2+, 2.0+", value: 95 },
            { name: "SQL", value: 90 },
            { name: "BPMN", value: 88 },
            { name: "Selenium (C#)", value: 85 },
            { name: "Playwright (JS)", value: 87 },
            { name: "React + NodeJS", value: 90 },
            { name: "ethers.js, web3.js", value: 88 },
            { name: "podstawy Solidity", value: 75 },
        ],
        education: [
            {
                degree: "Blockchain: biznes, prawo, technologia",
                school: "Szkoła Główna Handlowa w Warszawie",
                date: "2022 – obecnie",
                project: "Projekt: Charity shop z firmą Caruma"
            },
            {
                degree: "Informatyka, mgr inż.",
                school: "Uniwersytet im. Adama Mickiewicza w Poznaniu",
                date: "2012 – 2016",
                project: "Projekt: gra 3D w Unity Engine 3D"
            },
            {
                degree: "Informatyka, inż.",
                school: "Wyższa Szkoła Bankowa w Poznaniu",
                date: "2012 – 2016",
                project: "Projekt: gra 2D w GameMakerStudio"
            }
        ],
        services: [
            {
                title: "Rozwiązania Ferryt",
                description: "Tworzenie i wdrażanie rozwiązań na platformie Ferryt dla sektora bankowego z kompleksowym podejściem od analizy po wdrożenie.",
            },
            {
                title: "Zarządzanie Zespołami",
                description: "Zarządzanie zespołami Ferryt developerów z zapewnieniem wysokiej jakości dostarczanych rozwiązań.",
            },
            {
                title: "Analiza Systemowa",
                description: "Analiza systemowa rozwiązań BPMN Ferryt z zarządzaniem projektami IT i dokumentacją techniczną.",
            },
        ],
        portfolio: [
            {
                img: "/assets/images/profilowe.png",
                title: "Proces wydania karty",
                shortDescription: "Automatyzacja kart",
                description: "Automatyzacja procesu wydawania kart kredytowych i debetowych z integracją systemów bankowych i weryfikacją klientów.",
                link: "#",
            },
            {
                img: "/assets/images/profilowe.png",
                title: "Onboarding klienta korpo",
                shortDescription: "Proces korporacyjny",
                description: "Kompleksowy proces rejestracji i weryfikacji klientów korporacyjnych z pełną automatyzacją i integracją z systemami KYC.",
                link: "#",
            },
            {
                img: "/assets/images/profilowe.png",
                title: "Obsługa zadłużeń",
                shortDescription: "System windykacji",
                description: "System zarządzania i windykacji zadłużeń z integracją z systemami scoringowymi i automatyzacją procesów windykacyjnych.",
                link: "#",
            },
        ],
    },
};

const meta = industryContent.crypto.meta;

const introdata = {
    title: "Kamil Bandzwołek",
    animated: {
        first: "Ferrytuje",
        second: "Kocham technologie",
        third: "Tworze ciekawe rzeczy",
        fourth: "Rozwijam się codziennie",
        fifth: "Pomagam innym",
    },
    description: "Witaj na mojej stronie! Jestem pasjonatem technologii, który uwielbia tworzyć innowacyjne rozwiązania. Specjalizuję się w rozwoju aplikacji webowych i mobilnych, które nie tylko wyglądają świetnie, ale także działają perfekcyjnie.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};

const worktimeline = [
    {
        jobtitle: "Designer of week",
        where: "Edx",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Edx",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "Edx",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "Edx",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "Edx",
        date: "2019",
    },
];

const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "Javascript", value: 80 },
    { name: "React", value: 75 },
    { name: "Jquery", value: 85 },
    { name: "NodeJS", value: 85 },
    { name: "Express", value: 75 },
    { name: "MongoDB", value: 80 },
];

const services = [
    {
        title: "Frontend Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Backend Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "KANel - Przygotowanie strony do katalogu Wordpress dla firmy KANEL.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "Moon Flapy Birds - Gra oparta o klasyczny styl flappybird w tematyce web3.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "Wypożyczalnia Marzeń - Strona, logo, ulotki i pełny ecomerce firmy.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "NFT Polska Collective - Wizja metaversu i kolektywu w nim umieszczonego.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "Psiapka - aplikacja na iOS do zapoznawania ze sobą psiaków.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        description: "Donly - Marketplace na zwiększenie transparentności darowizn.",
        link: "#",
    },
];


const socialprofils = {
    github: "https://github.com/Grandpa1001",
    linkedin: "https://linkedin.com/in/mgrgracz",
    twitter: "https://twitter.com/MgrGracz",
    email: "mgrgracz@gmail.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    socialprofils,
    logotext,
    industryContent,
};