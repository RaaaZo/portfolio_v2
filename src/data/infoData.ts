import { IconType } from "react-icons/lib"
import uniqid from "uniqid"
// @ts-expect-error
import Beautiful from "../assets/images/beautiful.svg"
// @ts-expect-error
import Fast from "../assets/images/fast.svg"
// @ts-expect-error
import Responsive from "../assets/images/responsive.svg"
// @ts-expect-error
import Seo from "../assets/images/seo.svg"

import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaCss3,
  FaNodeJs,
  FaNpm,
  FaGitAlt,
  FaSass,
  FaPhp,
  FaWordpress,
} from "react-icons/fa"
import {
  SiGatsby,
  SiMongodb,
  SiRedux,
  SiJest,
  SiTypescript,
  SiMaterialUi,
  SiGraphql,
  SiNextDotJs,
} from "react-icons/si"

interface Data {
  id: string
  svg: IconType
  name: string
  description: string
}

export const headingData: Data[] = [
  {
    id: uniqid(),
    svg: Beautiful,
    name: "Dobrze zaprojektowane",
    description:
      "Strony które tworzę są zawsze projektowane przeze mnie od samego początku. Najczęściej wykorzystuję w tym celu Figmę. Często sprawdzam strony designerskie i blogi żeby być na bieżąco z trendami panującymi w tym szybko zmieniającym się środowisku.",
  },
  {
    id: uniqid(),
    svg: Fast,
    name: "Szybkie",
    description:
      "Stworzone przeze mnie strony są optymalizowane podczas developmentu przeze mnie jak i podczas tworzenia strony produkcyjnej za pomocą technologii zawartych w bibliotekach, które wykorzystuje. Ostatnimi czasy cenię sobie szczególnie Gatsby.js, który pozwala tworzyć niesamowicie szybkie strony internetowe.",
  },
  {
    id: uniqid(),
    svg: Seo,
    name: "SEO",
    description:
      "SEO często jest kojarzone z procesem optymalizacji witryny, jednak w praktyce daje dużo więcej możliwości. To zarówno poprawa technicznych aspektów witryny, rozbudowa jej treści, jak i zdobywanie linków pozycjonujących z innych domen w sieci.",
  },
  {
    id: uniqid(),
    svg: Responsive,
    name: "Responsywne",
    description:
      'Tworzę strony z podejściem "Mobile First". Oznacza to że rozpoczynam projektowanie od najmniejszych urządzeń i rozdzielczości, aby doświadczenie z użytkowania na nich było jak najlepsze. Następnie wraz ze wzrostem rozdzielczości stale dokładam nowe funkcjonalności oraz rozbudowuje aktualny układ strony.',
  },
]

export const upcomingSkillsData: Data[] = [
  {
    id: uniqid(),
    svg: SiNextDotJs,
    name: "Next.js",
    description:
      "Next.js jest frameworkiem WWW typu open-source do programowania front-end React, który umożliwia takie funkcje, jak renderowanie po stronie serwera i generowanie statycznych witryn internetowych dla aplikacji internetowych opartych na React.",
  },
  {
    id: uniqid(),
    svg: FaPhp,
    name: "PHP",
    description:
      "PHP – interpretowany, skryptowy język programowania zaprojektowany do generowania stron internetowych i budowania aplikacji webowych w czasie rzeczywistym.",
  },
  {
    id: uniqid(),
    svg: FaWordpress,
    name: "WordPress",
    description:
      "WordPress – napisany w języku PHP system zarządzania treścią zaprojektowany głównie do obsługi blogów. Wykorzystuje bazę danych MySQL. Rozpowszechniany jest na licencji GNU General Public License i jest dostępny bezpłatnie.",
  },
]

export const skillsData: Data[] = [
  {
    id: uniqid(),
    svg: FaHtml5,
    name: "HTML",
    description:
      "HTML pozwala opisać strukturę informacji zawartych wewnątrz strony internetowej, nadając odpowiednie znaczenie semantyczne poszczególnym fragmentom tekstu – formując hiperłącza, akapity, nagłówki, listy – oraz osadza w tekście dokumentu obiekty plikowe np. multimedia bądź elementy baz danych np. interaktywne formularze danych.",
  },
  {
    id: uniqid(),
    svg: FaCss3,
    name: "CSS",
    description:
      "Kaskadowe arkusze stylów – język służący do opisu formy prezentacji stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie.",
  },
  {
    id: uniqid(),
    svg: FaJsSquare,
    name: "JavaScript",
    description:
      "Najczęściej spotykanym zastosowaniem języka JavaScript są strony internetowe. Skrypty te służą najczęściej do zapewnienia interakcji poprzez reagowanie na zdarzenia, walidacji danych wprowadzanych w formularzach lub tworzenia złożonych efektów wizualnych. Skrypty JavaScriptu uruchamiane przez strony internetowe mają znacznie ograniczony dostęp do komputera użytkownika.",
  },
  {
    id: uniqid(),
    svg: SiTypescript,
    name: "TypeScript",
    description:
      "TypeScript – wolny i otwartoźródłowy język programowania stworzony przez firmę Microsoft jako nadzbiór języka JavaScript. Umożliwia on opcjonalne statyczne typowanie oraz programowanie zorientowane obiektowo oparte na klasach.",
  },
  {
    id: uniqid(),
    svg: FaReact,
    name: "React",
    description:
      "React.js – biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Została stworzona przez Jordana Walke, programistę Facebooka, a zainspirowana przez rozszerzenie języka PHP - XHP.",
  },
  {
    id: uniqid(),
    svg: SiGatsby,
    name: "Gatsby",
    description:
      "Gatsby to framework pozwalający na budowanie błyskawicznie działających stron i aplikacji internetowych opartych o React JS. Pozwala on w prosty sposób zoptymalizować kod strony www. Unikalność Gatsby polega na tym, że łączy on zalety wielu innych rozwiązań.",
  },
  {
    id: uniqid(),
    svg: FaNodeJs,
    name: "Node.js",
    description:
      "Node.js to wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript. Przyczynił się do stworzenia paradygmatu „JavaScript everywhere” umożliwiając programistom tworzenie aplikacji w obrębie jednego języka programowania zamiast polegania na odrębnych po stronie serwerowej.",
  },
  {
    id: uniqid(),
    svg: SiMongodb,
    name: "Mongodb",
    description:
      "MongoDB – otwarty, nierelacyjny system zarządzania bazą danych napisany w języku C++. Charakteryzuje się dużą skalowalnością, wydajnością oraz brakiem ściśle zdefiniowanej struktury obsługiwanych baz danych.",
  },
  {
    id: uniqid(),
    svg: SiGraphql,
    name: "GraphQL",
    description:
      "GraphQL to język zapytań i manipulacji danymi typu open source dla interfejsów API oraz środowisko wykonawcze do wypełniania zapytań z istniejącymi danymi. GraphQL został opracowany wewnętrznie przez Facebook w 2012 roku.",
  },
  {
    id: uniqid(),
    svg: SiMaterialUi,
    name: "Material UI",
    description:
      "Reactowe komponenty oparte na metodologii Material Design dla szybszego i łatwiejszego tworzenia stron internetowych.",
  },
  {
    id: uniqid(),
    svg: FaNpm,
    name: "NPM",
    description:
      "Npm – domyślny manager pakietów dla środowiska Node.js, może być także używany do zarządzania warstwą front-end aplikacji WWW.",
  },
  {
    id: uniqid(),
    svg: FaGitAlt,
    name: "Git",
    description:
      "Git – rozproszony system kontroli wersji. Stworzył go Linus Torvalds jako narzędzie wspomagające rozwój jądra Linux. Git stanowi wolne oprogramowanie i został opublikowany na licencji GNU GPL w wersji 2.",
  },
  {
    id: uniqid(),
    svg: FaSass,
    name: "SASS",
    description:
      "Sass jest językiem skryptowym preprocesora, który jest interpretowany lub kompilowany w kaskadowe arkusze stylów. SassScript jest samym językiem skryptowym. Sass składa się z dwóch składni. Oryginalna składnia, zwana „składnią wciętą”, używa składni podobnej do Haml.",
  },
  {
    id: uniqid(),
    svg: SiRedux,
    name: "Redux",
    description:
      "Redux to biblioteka JavaScript typu open source do zarządzania stanem aplikacji. Jest najczęściej używany w bibliotekach takich jak React lub Angular do budowania interfejsów użytkownika. Podobnie jak architektura Flux na Facebooku, została stworzona przez Dana Abramova i Andrew Clarka.",
  },
  {
    id: uniqid(),
    svg: SiJest,
    name: "Jest",
    description:
      "Jest to framework do testowania JavaScript obsługiwany przez Facebook, Inc. zaprojektowany i zbudowany przez Christopha Nakazawę z naciskiem na prostotę i obsługę dużych aplikacji internetowych. Działa z projektami używającymi Babel, TypeScript, Node.js, React, Angular, Vue.js i Svelte.",
  },
]
